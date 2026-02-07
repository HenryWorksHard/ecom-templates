"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-50">
              Trusted by leading brands
            </h2>
            <p className="mt-4 text-lg text-neutral-400 leading-relaxed">
              Don&apos;t take our word for it—hear what our clients have to say
              about working with ZYRA.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-950"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-neutral-800">
                &ldquo;
              </div>

              <div className="relative">
                <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-800">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-50">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-neutral-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
