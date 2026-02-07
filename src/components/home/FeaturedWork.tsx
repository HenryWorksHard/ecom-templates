"use client";

import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function FeaturedWork() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Case Studies
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-50">
                Real results for real brands
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-50 transition-colors duration-200"
            >
              View all case studies
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((study) => (
            <StaggerItem key={study.id}>
              <Link href="/work" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-800 mb-6">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.services.map((service) => (
                        <span
                          key={service}
                          className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-neutral-50 group-hover:text-accent transition-colors duration-200">
                      {study.client}
                    </h3>
                    <span className="text-sm text-neutral-500">
                      {study.industry}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
                    {study.results.map((result) => (
                      <div key={result.metric}>
                        <p className="text-xl font-bold text-neutral-50">
                          {result.value}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {result.metric}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="mt-10 text-center md:hidden">
          <Link
            href="/work"
            className="text-neutral-400 hover:text-neutral-50 transition-colors"
          >
            View all case studies &rarr;
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
