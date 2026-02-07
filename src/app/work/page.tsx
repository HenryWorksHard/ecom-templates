import type { Metadata } from "next";
import ProjectGrid from "@/components/work/ProjectGrid";
import FadeIn from "@/components/animations/FadeIn";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results for real brands. Explore our portfolio of growth marketing case studies across email, paid media, CRO, and SEO.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Case Studies
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-50 mb-6">
              Real results for
              <br />
              <span className="gradient-text">real brands</span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
              We don&apos;t just talk strategy—we execute. Here are the brands
              we&apos;ve helped scale with integrated performance marketing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
