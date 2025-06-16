export interface UseCase {
  id: string;
  slug: string;
  title: string;
  industry: string;
  companyDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcomes: string[];
  timeline: string;
  investment: string;
  roi: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const useCases: UseCase[] = [
  {
    id: "1",
    slug: "online-retailer-automation",
    title: "E-Commerce Revolution for Local Retailer",
    industry: "Retail",
    companyDescription: "A Toronto-based fashion retailer with 3 physical stores looking to expand online and streamline operations.",
    problem: "Manual inventory management across multiple locations led to overselling, stockouts, and frustrated customers. No unified view of sales data or customer behavior.",
    solution: "Built a custom e-commerce platform with real-time inventory sync, automated reorder points, and AI-powered demand forecasting. Integrated POS systems and created customer analytics dashboard.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "Inventory Management AI", "Google Analytics"],
    outcomes: [
      "40% reduction in inventory holding costs",
      "65% increase in online sales within 6 months",
      "Eliminated stockouts and overselling completely",
      "Automated reordering saved 15 hours/week of manual work",
      "Customer satisfaction increased from 3.2 to 4.8 stars"
    ],
    timeline: "8 weeks",
    investment: "$25,000",
    roi: "280% in first year",
    testimonial: {
      quote: "Clyvanta transformed our chaotic inventory into a well-oiled machine. We're finally competing with the big players online.",
      author: "Sarah Chen",
      position: "Owner, Toronto Fashion Collective"
    }
  },
  {
    id: "2",
    slug: "service-business-automation",
    title: "Digital Transformation for Home Services",
    industry: "Home Services",
    companyDescription: "A growing plumbing and HVAC company serving the GTA with 12 technicians and plans for rapid expansion.",
    problem: "Scheduling was done via phone calls and spreadsheets, leading to double-bookings, missed appointments, and poor customer communication. No way to track technician performance or customer satisfaction.",
    solution: "Developed a comprehensive service management platform with automated scheduling, customer portal, technician mobile app, and real-time GPS tracking. Added automated follow-ups and review requests.",
    technologies: ["React Native", "Express.js", "MongoDB", "Twilio SMS", "Google Maps API", "Automated Workflows"],
    outcomes: [
      "90% reduction in scheduling conflicts",
      "45% increase in customer satisfaction scores",
      "30% improvement in technician efficiency",
      "Doubled customer retention rate",
      "Automated follow-ups generated 200+ new reviews"
    ],
    timeline: "10 weeks",
    investment: "$35,000",
    roi: "320% in 18 months",
    testimonial: {
      quote: "Our customers love the real-time updates and easy booking. We've gone from reactive to proactive, and it shows in our growth.",
      author: "Mike Rodriguez",
      position: "Founder, GTA Home Solutions"
    }
  },
  {
    id: "3",
    slug: "startup-mvp-launch",
    title: "AI-Powered Startup MVP to Market",
    industry: "FinTech",
    companyDescription: "Early-stage startup aiming to democratize financial planning for young professionals through AI-driven recommendations.",
    problem: "Founders had a great idea but no technical team. Needed to build and launch an MVP quickly to secure Series A funding while keeping development costs low.",
    solution: "Built a complete AI-powered financial planning app with user onboarding, bank integrations, machine learning recommendations, and investor dashboard. Included compliance features for financial regulations.",
    technologies: ["React", "Python/FastAPI", "PostgreSQL", "Plaid API", "OpenAI GPT", "AWS Lambda", "Compliance Tools"],
    outcomes: [
      "MVP launched in 6 weeks",
      "Secured $2M Series A funding",
      "10,000+ registered users in first quarter",
      "Featured in TechCrunch and BetaKit",
      "95% user satisfaction rating"
    ],
    timeline: "6 weeks",
    investment: "$45,000",
    roi: "4,400% (based on valuation increase)",
    testimonial: {
      quote: "Clyvanta didn't just build our app—they built our future. Their speed and expertise were crucial to our fundraising success.",
      author: "Alex Kim",
      position: "Co-founder & CEO, WealthPath AI"
    }
  }
];

export const getAllUseCases = (): UseCase[] => useCases;

export const getUseCaseBySlug = (slug: string): UseCase | undefined => 
  useCases.find(useCase => useCase.slug === slug);

export const getUseCaseById = (id: string): UseCase | undefined => 
  useCases.find(useCase => useCase.id === id);

export const getUseCasesByIndustry = (industry: string): UseCase[] => 
  useCases.filter(useCase => useCase.industry.toLowerCase() === industry.toLowerCase());