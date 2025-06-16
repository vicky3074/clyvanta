interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({ icon, title, description, href, delay = 0 }: ServiceCardProps) {
  return (
    <article 
      className="bg-white p-6 sm:p-8 rounded-clyvanta-lg shadow-clyvanta hover:shadow-clyvanta-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-gradient-clyvanta rounded-clyvanta mb-4 sm:mb-6 flex items-center justify-center" aria-hidden="true">
        {icon}
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-clyvanta-text-primary mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-clyvanta-text-secondary mb-4 sm:mb-6">
        {description}
      </p>
      <a 
        href={href} 
        className="text-clyvanta-blue-dark hover:text-clyvanta-blue-light font-semibold inline-flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-clyvanta-blue-light focus:ring-offset-2 rounded px-2 py-1"
        aria-label={`Learn more about ${title}`}
      >
        Learn More 
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </article>
  );
}
