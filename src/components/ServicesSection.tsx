import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Smart chatbots that handle customer service 24/7, automation that eliminates repetitive tasks, and intelligent analytics that predict what your customers want before they know it.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-clyvanta-blue-light to-clyvanta-blue-dark',
      href: '/services/ai-solutions',
      stats: '75% cost reduction',
      category: 'AI'
    },
    {
      title: 'Web Development',
      description: 'Professional websites that work perfectly on all devices, load lightning-fast, and turn visitors into customers with designs that actually convert.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      gradient: 'from-clyvanta-orange-light to-clyvanta-orange-dark',
      href: '/services/web-development',
      stats: '50% faster load times',
      category: 'Development'
    },
    {
      title: 'Mobile App Development',
      description: 'Mobile apps for iPhone and Android that your customers will love to use and that drive real business results, not just impressive demos.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-clyvanta-blue-light to-clyvanta-orange-light',
      href: '/services/mobile-development',
      stats: '4.8+ app store rating',
      category: 'Development'
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Marketing strategies that actually work - search engine optimization that gets you found, and campaigns that bring in qualified leads who are ready to buy.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-green-500 to-teal-600',
      href: '/services/digital-marketing',
      stats: '300% ROI average',
      category: 'Marketing'
    }
  ];

  return (
    <section id="services" className="py-24 bg-clyvanta-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
            From AI strategy to custom development, we provide end-to-end solutions 
            that drive measurable business results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-[1.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Gradient border on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-clyvanta-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>

              
              <Link 
                href="/services"
                className="inline-flex items-center text-clyvanta-blue-dark font-semibold hover:gap-3 transition-all duration-300"
              >
                Learn More 
                <span className="ml-2 transition-all duration-300 group-hover:translate-x-1">→</span>
              </Link>
              
              {/* Hover effect background */}
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br from-clyvanta-blue-light/10 to-clyvanta-blue-dark/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
