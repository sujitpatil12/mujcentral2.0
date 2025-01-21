"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HeaderSection } from "@/components/shared/header-section";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
         <HeaderSection
          label="Contributors"
          title="Thanks to the Manipal Community"
          subtitle="Discover the people behind the scenes who made this project possible"
        />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="py-2"
      />
    </div>
  );
}

const testimonials = [
        {
          "quote": "Contibuted 5+ papers to the project",
          "name": "Soham Waswatkar",
          "title": "First Year Physics Cycle"
        },
        {
          "quote": "Contributed 10+ papers to the project",
          "name": "Vikas Malhotra",
          "title": "First Year Chemistry Cycle"
        },
        {
          "quote": "Provided Valuable Insights",
          "name": "Vineet Muley",
          "title": "Third Year AI-ML"
        },
        {
          "quote": "Contributed 5+ papers to the project",
          "name": "Moksh Gupta",
          "title": "Second Year CSE-C"
        },
];
