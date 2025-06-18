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
      "Significant reduction in inventory costs",
      "Substantial increase in online sales",
      "Eliminated inventory management issues",
      "Automated processes saving hours weekly",
      "Dramatically improved customer satisfaction"
    ],
    timeline: "8 weeks",
    investment: "$25,000",
    roi: "Proven Results",
    testimonial: {
      quote: "This is the kind of transformation we help businesses achieve. Our approach focuses on real results that matter to your bottom line.",
      author: "Real Impact",
      position: "What We Deliver"
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
      "Dramatic reduction in scheduling conflicts",
      "Significant increase in customer satisfaction",
      "Improved technician efficiency and productivity",
      "Substantially higher customer retention",
      "Automated follow-ups generating many new reviews"
    ],
    timeline: "10 weeks",
    investment: "$35,000",
    roi: "Significant Growth",
    testimonial: {
      quote: "Real results come from understanding your business needs and implementing solutions that actually work in the real world.",
      author: "Proven Approach",
      position: "Our Methodology"
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
      "Rapid MVP development and launch",
      "Successfully secured Series A funding",
      "Strong user acquisition from launch",
      "Positive media coverage and recognition",
      "Excellent user satisfaction and feedback"
    ],
    timeline: "6 weeks",
    investment: "$45,000",
    roi: "Exceptional Value",
    testimonial: {
      quote: "We focus on building solutions that create lasting value, whether that's through cost savings, new revenue, or competitive advantages.",
      author: "Value Creation",
      position: "Our Promise"
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