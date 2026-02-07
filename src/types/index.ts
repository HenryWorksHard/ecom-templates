export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  results: {
    metric: string;
    value: string;
  }[];
  services: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  stat?: string;
  statLabel?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}
