import { NavItem, Service, CaseStudy, Testimonial, TeamMember } from "@/types";

export const navigation: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Email Marketing",
    description:
      "Turn your email list into a revenue engine. We build automated flows, craft high-converting campaigns, and optimize deliverability to maximize every send.",
    features: [
      "Automated Welcome & Nurture Flows",
      "Campaign Strategy & Execution",
      "List Segmentation & Personalization",
      "A/B Testing & Optimization",
      "Deliverability Audits",
    ],
    icon: "email",
    stat: "312%",
    statLabel: "Avg. Email Revenue Increase",
  },
  {
    id: "2",
    title: "Conversion Rate Optimization",
    description:
      "Stop leaving money on the table. We use data-driven testing and UX improvements to turn more visitors into customers without increasing ad spend.",
    features: [
      "Heatmap & Session Analysis",
      "A/B & Multivariate Testing",
      "Landing Page Optimization",
      "Checkout Flow Improvements",
      "Data-Driven Recommendations",
    ],
    icon: "cro",
    stat: "47%",
    statLabel: "Avg. Conversion Lift",
  },
  {
    id: "3",
    title: "SEO & Content",
    description:
      "Dominate organic search. We build SEO strategies that drive sustainable traffic growth through technical optimization and content that ranks.",
    features: [
      "Technical SEO Audits",
      "Keyword Strategy & Research",
      "On-Page Optimization",
      "Content Strategy & Creation",
      "Link Building & Authority",
    ],
    icon: "seo",
    stat: "8.2x",
    statLabel: "Avg. Organic Traffic Growth",
  },
  {
    id: "4",
    title: "Paid Media",
    description:
      "Scale profitably with precision targeting. We manage paid campaigns across Meta, Google, and TikTok with relentless focus on ROAS.",
    features: [
      "Meta & Instagram Ads",
      "Google Ads & Shopping",
      "TikTok Advertising",
      "Creative Strategy & Testing",
      "Attribution & Reporting",
    ],
    icon: "paid",
    stat: "4.8x",
    statLabel: "Avg. Return on Ad Spend",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    client: "ALIVIA Wellness",
    industry: "Health & Supplements",
    description:
      "A premium Australian supplement brand co-founded by AFL star Patrick Cripps. We transformed their digital presence and scaled revenue through integrated marketing.",
    image: "/images/placeholder.svg",
    results: [
      { metric: "Revenue Growth", value: "+284%" },
      { metric: "Email Revenue", value: "+412%" },
      { metric: "ROAS", value: "5.2x" },
    ],
    services: ["Email Marketing", "Paid Media", "CRO"],
  },
  {
    id: "2",
    client: "Glamswag",
    industry: "Luxury Lifestyle",
    description:
      "Australian luxury brand creating portable feather-filled throw beds. We built their entire digital acquisition engine from the ground up.",
    image: "/images/placeholder.svg",
    results: [
      { metric: "Monthly Revenue", value: "+156%" },
      { metric: "Customer LTV", value: "+89%" },
      { metric: "CAC Reduction", value: "-34%" },
    ],
    services: ["Paid Media", "Email Marketing", "SEO"],
  },
  {
    id: "3",
    client: "Blue Palms",
    industry: "Beverages",
    description:
      "A sparkling alcoholic coconut water cocktail brand. We drove brand awareness and retail distribution through performance marketing.",
    image: "/images/placeholder.svg",
    results: [
      { metric: "Brand Awareness", value: "+320%" },
      { metric: "Website Traffic", value: "+540%" },
      { metric: "Retail Leads", value: "180+" },
    ],
    services: ["Paid Media", "SEO", "CRO"],
  },
  {
    id: "4",
    client: "The Jewellers Co",
    industry: "Experience Retail",
    description:
      "Perth-based custom jewellery workshop. We filled their calendar with high-intent bookings through local SEO and targeted campaigns.",
    image: "/images/placeholder.svg",
    results: [
      { metric: "Booking Rate", value: "+215%" },
      { metric: "Cost Per Booking", value: "-52%" },
      { metric: "Repeat Customers", value: "+78%" },
    ],
    services: ["SEO", "Paid Media", "Email Marketing"],
  },
  {
    id: "5",
    client: "Noelzy's Sauce",
    industry: "Food & Beverage",
    description:
      "Artisanal sauce brand expanding from farmers markets to nationwide distribution. We built their DTC channel into a profit center.",
    image: "/images/placeholder.svg",
    results: [
      { metric: "DTC Revenue", value: "+380%" },
      { metric: "Email List", value: "12K+" },
      { metric: "Conversion Rate", value: "4.8%" },
    ],
    services: ["Email Marketing", "CRO", "Paid Media"],
  },
  {
    id: "6",
    client: "Superlove",
    industry: "Entertainment",
    description:
      "Queensland's newest club and bar. We launched their brand and drove opening night attendance through strategic digital campaigns.",
    image: "/images/placeholder.svg",
    results: [
      { metric: "Launch Attendance", value: "2,400+" },
      { metric: "Instagram Growth", value: "15K" },
      { metric: "Email Signups", value: "8K+" },
    ],
    services: ["Paid Media", "Email Marketing"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "ZYRA doesn't just advise—they execute. Our email revenue went from an afterthought to 35% of total revenue in 4 months. The ROI has been insane.",
    author: "Patrick Cripps",
    role: "Co-Founder",
    company: "ALIVIA Wellness",
    image: "/images/placeholder.svg",
  },
  {
    id: "2",
    quote:
      "We tried 3 agencies before ZYRA. The difference? They actually understand ecommerce and move fast. Our ROAS has never been better.",
    author: "Sarah Chen",
    role: "Founder",
    company: "Glamswag",
    image: "/images/placeholder.svg",
  },
  {
    id: "3",
    quote:
      "The team at ZYRA transformed how we think about growth. Every dollar we spend is tracked, tested, and optimized. True partners.",
    author: "Marcus Webb",
    role: "Marketing Director",
    company: "Blue Palms",
    image: "/images/placeholder.svg",
  },
  {
    id: "4",
    quote:
      "From scattered efforts to a cohesive system—that's exactly what ZYRA delivered. Our bookings are up 3x and we finally understand our numbers.",
    author: "Emma Richards",
    role: "Owner",
    company: "The Jewellers Co",
    image: "/images/placeholder.svg",
  },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former growth lead at a $100M DTC brand. Built ZYRA to bring enterprise-level performance marketing to ambitious brands.",
    image: "/images/placeholder.svg",
  },
  {
    id: "2",
    name: "Jordan Reyes",
    role: "Head of Paid Media",
    bio: "Managed $20M+ in ad spend across Meta, Google, and TikTok. Obsessed with creative testing and scaling winners.",
    image: "/images/placeholder.svg",
  },
  {
    id: "3",
    name: "Sam Okonkwo",
    role: "Email & Retention Lead",
    bio: "Klaviyo partner with 50+ brand implementations. Turns email lists into the most profitable channel for every client.",
    image: "/images/placeholder.svg",
  },
  {
    id: "4",
    name: "Maya Torres",
    role: "CRO & Analytics",
    bio: "Data scientist turned optimizer. Uses behavioral analytics to find the revenue hiding in plain sight.",
    image: "/images/placeholder.svg",
  },
];

export const stats = [
  { value: "$42M+", label: "Revenue Generated" },
  { value: "127%", label: "Avg. Growth Rate" },
  { value: "4.6x", label: "Avg. ROAS" },
  { value: "50+", label: "Brands Scaled" },
];
