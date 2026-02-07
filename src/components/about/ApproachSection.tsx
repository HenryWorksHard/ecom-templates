"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const values = [
  {
    title: "Data-Driven",
    description:
      "Every decision is backed by data. We test, measure, and optimize relentlessly to maximize your ROI.",
  },
  {
    title: "Execution Focused",
    description:
      "We don't just strategize—we execute. Our team handles implementation so you can focus on running your business.",
  },
  {
    title: "Full-Stack Approach",
    description:
      "Marketing channels don't exist in silos. We integrate email, paid, SEO, and CRO into one cohesive system.",
  },
  {
    title: "Results Obsessed",
    description:
      "Vanity metrics don't pay the bills. We focus on revenue, profit, and sustainable growth.",
  },
];

export default function ApproachSection() {
  return (
    <div>
      <FadeIn>
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
          How We Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 mb-4">
          Our Approach
        </h2>
        <p className="text-neutral-400 max-w-2xl mb-16 leading-relaxed">
          We believe sustainable growth comes from systems, not hacks. Every
          strategy we build is designed for long-term scalability.
        </p>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        {values.map((value, index) => (
          <StaggerItem key={value.title}>
            <div className="border-t border-neutral-700 pt-6">
              <span className="text-xs text-accent mb-3 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-neutral-50 mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
