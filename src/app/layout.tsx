import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZYRA | Performance Marketing Agency",
    template: "%s | ZYRA",
  },
  description:
    "ZYRA transforms scattered marketing into high-performing systems. We execute email marketing, CRO, SEO, and paid media strategies that drive measurable growth.",
  keywords: [
    "performance marketing",
    "email marketing",
    "CRO",
    "conversion rate optimization",
    "SEO",
    "paid media",
    "growth marketing",
    "digital marketing agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-neutral-950 text-neutral-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
