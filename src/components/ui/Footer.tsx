import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-neutral-50"
            >
              ZYRA
            </Link>
            <p className="mt-4 text-sm text-neutral-400 max-w-sm leading-relaxed">
              Transform scattered marketing into a high-performing system.
              We execute email, CRO, SEO, and paid media strategies that drive measurable growth.
            </p>
            <div className="mt-6 flex gap-4">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <span
                  key={social}
                  className="text-sm text-neutral-500 hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-50 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Email Marketing",
                "Conversion Optimization",
                "SEO & Content",
                "Paid Media",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-50 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Case Studies", href: "/work" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-neutral-50 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} ZYRA. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Built for growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
