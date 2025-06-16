// Component prop types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Navigation types
export interface NavLink {
  href: string;
  label: string;
}

// Service types
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

// Stats types
export interface Stat {
  value: string;
  label: string;
}

// Company types
export interface Company {
  name: string;
  logo?: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  serviceInterest?: string;
  budgetRange?: string;
  timeline?: string;
}

// Lead types (for admin dashboard)
export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  message: string;
  service_interest: string | null;
  budget_range: string | null;
  timeline: string | null;
  status: string;
  source: string;
  created_at: string;
  updated_at: string;
}

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
