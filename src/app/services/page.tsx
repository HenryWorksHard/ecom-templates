import type { Metadata } from "next";
import { services } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack performance marketing services: Email Marketing, CRO, SEO, and Paid Media. All working together to scale your revenue.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Services
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-50 mb-6">
              Full-stack performance
              <br />
              <span className="gradient-text">marketing</span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
              We don&apos;t do silos. Every channel works together as one
              integrated system, optimized for maximum ROI and sustainable
              growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Details */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerChildren className="space-y-16">
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <div className="p-8 lg:p-12 rounded-2xl border border-neutral-800 bg-neutral-900/50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm text-accent font-medium">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px flex-1 bg-neutral-800" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-50 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-neutral-400 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {service.stat && (
                        <div className="inline-flex items-baseline gap-2 px-4 py-2 rounded-lg bg-neutral-800">
                          <span className="text-2xl font-bold gradient-text">
                            {service.stat}
                          </span>
                          <span className="text-sm text-neutral-400">
                            {service.statLabel}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xs font-medium uppercase tracking-wider text-accent mb-6">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-neutral-300"
                          >
                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-3 h-3 text-accent"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Process
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-50 mb-16">
              How we work together
            </h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit",
                description:
                  "We analyze your current marketing, identify gaps, and find the revenue you're leaving on the table.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We build a custom growth roadmap with clear KPIs, timelines, and expected outcomes.",
              },
              {
                step: "03",
                title: "Execute",
                description:
                  "Our team implements everything—from email flows to ad campaigns to CRO tests.",
              },
              {
                step: "04",
                title: "Optimize",
                description:
                  "We continuously test, measure, and improve. Growth never stops, and neither do we.",
              },
            ].map((process) => (
              <StaggerItem key={process.step}>
                <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-950 h-full">
                  <span className="text-3xl font-bold text-neutral-700 block mb-4">
                    {process.step}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-50 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
