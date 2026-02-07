"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your form backend
    setSubmitted(true);
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(139,92,246,0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Get Your Growth Audit
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-50">
              Ready to scale your revenue?
            </h2>
            <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
              Book a free growth audit and discover exactly where you&apos;re
              leaving money on the table. We&apos;ll analyze your current marketing
              and show you the path to predictable growth.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald/20 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-emerald"
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
                <span className="text-neutral-300">
                  Free 30-minute strategy call
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald/20 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-emerald"
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
                <span className="text-neutral-300">
                  Custom growth roadmap for your brand
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald/20 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-emerald"
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
                <span className="text-neutral-300">
                  No obligation, no pressure
                </span>
              </div>
            </div>
          </FadeIn>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-emerald"
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
                  <h3 className="text-2xl font-bold text-neutral-50 mb-2">
                    You&apos;re all set!
                  </h3>
                  <p className="text-neutral-400">
                    We&apos;ll be in touch within 24 hours to schedule your
                    growth audit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-50 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-300 mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-50 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-neutral-300 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-50 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="revenue"
                      className="block text-sm font-medium text-neutral-300 mb-2"
                    >
                      Monthly Revenue
                    </label>
                    <select
                      id="revenue"
                      required
                      value={formState.revenue}
                      onChange={(e) =>
                        setFormState({ ...formState, revenue: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    >
                      <option value="" disabled>
                        Select range
                      </option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m+">$1M+</option>
                    </select>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Book My Growth Audit
                  </Button>

                  <p className="text-xs text-neutral-500 text-center">
                    By submitting, you agree to our privacy policy. We&apos;ll
                    never spam you.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
