"use client";

import { useState, FormEvent } from "react";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Info */}
          <div>
            <FadeIn>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                Contact
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-50 mb-6">
                Let&apos;s scale your
                <br />
                <span className="gradient-text">revenue together</span>
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-12">
                Ready to transform your marketing into a growth engine? Book a
                free growth audit and discover where you&apos;re leaving money
                on the table.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    Email
                  </h3>
                  <p className="text-neutral-50">hello@zyra.agency</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    Phone
                  </h3>
                  <p className="text-neutral-50">+61 (03) 9000 0000</p>
                </div>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    Location
                  </h3>
                  <p className="text-neutral-50">
                    Melbourne, Australia
                    <br />
                    <span className="text-neutral-400">
                      Working with brands globally
                    </span>
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-12 p-6 rounded-xl border border-neutral-800 bg-neutral-900/50">
                <p className="text-sm text-neutral-400 leading-relaxed">
                  <span className="text-neutral-50 font-medium">
                    What to expect:
                  </span>{" "}
                  We&apos;ll respond within 24 hours to schedule a 30-minute
                  discovery call. No sales pitch—just an honest conversation
                  about your growth goals.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right column - Form */}
          <div>
            <FadeIn delay={0.15}>
              <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50">
                {submitted ? (
                  <div className="flex items-center justify-center h-full py-12">
                    <div className="text-center">
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
                        Message received!
                      </h3>
                      <p className="text-neutral-400 mb-6">
                        We&apos;ll be in touch within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-sm text-accent hover:text-accent-light transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-neutral-300 mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-50 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-neutral-300 mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-50 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="Smith"
                        />
                      </div>
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
                        name="email"
                        required
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
                        name="company"
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
                        name="revenue"
                        className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      >
                        <option value="">Select range</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m+">$1M+</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-neutral-300 mb-2"
                      >
                        Primary Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="email">Email Marketing</option>
                        <option value="cro">Conversion Rate Optimization</option>
                        <option value="seo">SEO & Content</option>
                        <option value="paid">Paid Media</option>
                        <option value="full">Full-Stack Growth</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-300 mb-2"
                      >
                        Tell us about your goals
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-50 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder="What are your growth goals? What challenges are you facing?"
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" size="lg" className="w-full">
                        Book My Growth Audit
                      </Button>
                    </div>

                    <p className="text-xs text-neutral-500 text-center">
                      By submitting, you agree to our privacy policy. We&apos;ll
                      never spam you.
                    </p>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
