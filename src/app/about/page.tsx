import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import TeamSection from "@/components/about/TeamSection";
import ApproachSection from "@/components/about/ApproachSection";
import ContactCTA from "@/components/home/ContactCTA";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the ZYRA team — performance marketers obsessed with growth, data, and results.",
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              About ZYRA
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-50 mb-8">
              Growth is a system,
              <br />
              <span className="gradient-text">not a series of hacks</span>
            </h1>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn delay={0.2}>
              <p className="text-lg text-neutral-400 leading-relaxed">
                ZYRA was founded with a simple belief: most brands don&apos;t
                have a marketing problem—they have a systems problem.
                Scattered efforts across channels, no unified strategy, and
                agencies that advise but never execute.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-neutral-400 leading-relaxed">
                We built ZYRA to change that. We&apos;re a performance
                marketing team that integrates email, CRO, SEO, and paid
                media into one cohesive growth engine. We don&apos;t just
                strategize—we execute, measure, and optimize every single day.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-neutral-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              The Team
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 mb-16">
              The people behind
              <br />
              your growth
            </h2>
          </FadeIn>
          <TeamSection />
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 lg:py-32 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ApproachSection />
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
