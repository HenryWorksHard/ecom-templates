"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-950">
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
          {services.map((service, index) => (
            <StaggerItem key={service.id}>
              <div 
                className="group relative p-8 rounded-2xl bg-neutral-900/50 transition-all duration-300"
                style={{
                  border: '1px solid transparent',
                  backgroundImage: `linear-gradient(#0a0a0f, #0a0a0f), linear-gradient(135deg, rgba(6,182,212,0.4) 0%, transparent 50%, transparent 50%, rgba(6,182,212,0.4) 100%)`,
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                }}
              >
                {/* Glow effect on corners */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="relative">
                  {/* Number label */}
                  <span className="text-accent text-sm font-medium tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Title */}
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold text-neutral-50 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="mt-4 text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Stat box */}
                  {service.stat && (
                    <div className="mt-6 p-5 rounded-xl bg-neutral-950 border border-neutral-800">
                      <p className="text-4xl font-bold text-accent">
                        {service.stat}
                      </p>
                      <p className="text-sm text-neutral-400 mt-1">
                        {service.statLabel}
                      </p>
                    </div>
                  )}

                  {/* Features list */}
                  <ul className="mt-6 space-y-3">
                    {service.features.slice(0, 3).map((feature) => (
                      <li 
                        key={feature} 
                        className="flex items-center gap-3 text-neutral-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
