import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';
import { parse, serialize } from 'cookie';
import redis from '@/lib/redis';
import prisma from '@/lib/prisma';


const confessionqueue = 'confessionqueue';
let isProcessingQueue = false;

setInterval(async () => {
  if (isProcessingQueue) return; // Prevent overlapping intervals
  isProcessingQueue = true;
  try {
    const confessions: any[] = [];
    let confession;

    while ((confession = await redis.lpop(confessionqueue))) {
      try {
        const parsedConfession = typeof confession === 'string' ? JSON.parse(confession) : confession;

        // Validate parsed confession
        if (parsedConfession && typeof parsedConfession === 'object' && parsedConfession.name && parsedConfession.confession) {
          confessions.push(parsedConfession);
        } else {
          console.warn('Invalid confession skipped:', confession);
        }
      } catch (error) {
        console.error('Error parsing confession from Redis:', confession, error);
      }
    }

    if (confessions.length > 0) {
      console.log("Writing batch to database:", confessions);
      await prisma.confession.createMany({ data: confessions });
    } else {
      console.log("No valid confessions to write to database.");
    }
  } catch (error) {
    console.error('Error processing confession queue:', error);
  } finally {
    isProcessingQueue = false;
  }
}, 30000);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || typeof body !== 'object') {
      throw new Error('Invalid request body. Expected a JSON object.');
    }
    const { name, confession } = body;

    if (!name?.trim() || !confession?.trim()) {
      return NextResponse.json({ error: 'Name and confession are required.' }, { status: 400 });
    }

    const cookies = parse(req.headers.get('cookie') || '');
    const cookiedata = cookies.user_data ? JSON.parse(cookies.user_data) : null;

    if (!cookiedata || !cookiedata.uuid) {
      return NextResponse.json(
        { success: false, message: 'You need to allow cookies to submit a confession.' },
        { status: 403 }
      );
    }

    const { uuid, confessionCount, lastReset } = cookiedata;
    const now = Date.now();
    const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;

    let updatedCount = confessionCount;
    let updatedLastReset = lastReset;

    if (lastReset < oneWeekAgo) {
      updatedCount = 0;
      updatedLastReset = now;
    }

    if (updatedCount >= 14) {
      return NextResponse.json(
        { success: false, message: 'You can only submit 14 confessions per week.' },
        { status: 403 }
      );
    }

    const username = uniqueNamesGenerator({
      dictionaries: [adjectives, animals, colors],
      separator: '_',
    });

    const newConfession = {
      name,
      confession,
      username,
      createdAt: new Date(),
    };

    updatedCount += 1;

    const cookie = serialize(
      'user_data',
      JSON.stringify({ uuid, confessionCount: updatedCount, lastReset: updatedLastReset }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'strict',
      }
    );

    // Add the confession to the Redis queue
    await redis.rpush(confessionqueue, JSON.stringify(newConfession));

    // Fetch updated confessions and update cache
    const freshConfessions = await prisma.confession.findMany({
      select: {
        username: true,
        confession: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
    });

    await redis.set('confessions', JSON.stringify(freshConfessions),{ex: 600}); // Update cache with TTL

    const response = NextResponse.json(newConfession, { status: 201 });
    response.headers.set('Set-Cookie', cookie);
    return response;
  } catch (error) {
    console.error('Error creating confession:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}