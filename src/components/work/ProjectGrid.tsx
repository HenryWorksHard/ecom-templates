"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import FadeIn from "@/components/animations/FadeIn";

const serviceFilters = [
  "All",
  "Email Marketing",
  "Paid Media",
  "CRO",
  "SEO",
];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.services.includes(activeFilter));

  return (
    <div>
      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-12">
          {serviceFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm rounded-md transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-accent text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </FadeIn>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((study) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href="/contact" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-800 mb-4">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2">
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
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-neutral-50 group-hover:text-accent transition-colors duration-200">
                      {study.client}
                    </h3>
                    <span className="text-sm text-neutral-500">
                      {study.industry}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {study.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
                    {study.results.map((result) => (
                      <div key={result.metric}>
                        <p className="text-lg font-bold text-neutral-50">
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
