import Image from "next/image";
import Link from "next/link";

export default function Nothingyet() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">NOTHING YET</h1>
      <Image
        src="/_static/illustrations/rocket-crashed.svg"
        alt="404"
        width={400}
        height={400}
        className="pointer-events-none mb-5 mt-6 dark:invert"
      />
      <p className="text-balance px-4 text-center font-heading text-xl">
        Waiting for Papers from the Community. Return to {" "}
        <Link
          href="/#papers"
          className="text-muted-foreground underline underline-offset-4 hover:text-purple-500"
        >
          Homepage
        </Link>
        .
      </p>
    </div>
  );
}
