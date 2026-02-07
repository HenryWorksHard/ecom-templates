"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-50">
              Full-stack performance marketing
            </h2>
            <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
              We don&apos;t do silos. Every channel works together as one system,
              optimized for maximum impact.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group p-8 rounded-2xl border border-neutral-800 bg-neutral-950 hover:border-neutral-700 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-50 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {service.stat && (
                  <div className="pt-6 border-t border-neutral-800">
                    <p className="text-3xl font-bold gradient-text">
                      {service.stat}
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">
                      {service.statLabel}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-neutral-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors duration-200"
          >
            View all services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
