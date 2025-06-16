import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that handles customer service, sales inquiries, and internal support 24/7 with human-like responses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      gradient: 'from-clyvanta-blue-light to-clyvanta-blue-dark',
      href: '/services/ai-chatbots',
      stats: '75% cost reduction',
      category: 'AI'
    },
    {
      title: 'Custom Web Development',
      description: 'Enterprise-grade web applications built with modern frameworks, responsive design, and optimized for performance and scalability.',
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
      description: 'Native iOS and Android applications with seamless user experiences, advanced features, and cross-platform compatibility.',
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
      title: 'Predictive Analytics & ML',
      description: 'Advanced machine learning models that forecast trends, predict customer behavior, and optimize business operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-indigo-600',
      href: '/services/predictive-analytics',
      stats: '90% accuracy rates',
      category: 'AI'
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Data-driven marketing strategies, search engine optimization, and AI-powered campaigns that drive qualified leads and conversions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-green-500 to-teal-600',
      href: '/services/digital-marketing',
      stats: '300% ROI average',
      category: 'Marketing'
    },
    {
      title: 'Process Automation (RPA)',
      description: 'Intelligent automation of repetitive tasks, data entry, and workflow optimization using AI-powered bots.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-600',
      href: '/services/rpa',
      stats: '80% time savings',
      category: 'AI'
    },
    {
      title: 'Cloud Solutions & DevOps',
      description: 'Scalable cloud infrastructure, containerization, CI/CD pipelines, and secure deployment strategies for enterprise applications.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-600',
      href: '/services/cloud-solutions',
      stats: '99.9% uptime',
      category: 'Development'
    },
    {
      title: 'Computer Vision & OCR',
      description: 'AI-powered image recognition, document processing, and visual inspection systems for automated quality control.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      gradient: 'from-amber-500 to-orange-600',
      href: '/services/computer-vision',
      stats: '99% detection accuracy',
      category: 'AI'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing, inventory management, AI recommendations, and conversion optimization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-600',
      href: '/services/ecommerce',
      stats: '65% sales increase',
      category: 'Development'
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              {/* Stats */}
              <div className="bg-gradient-to-r from-clyvanta-bg-light to-white p-3 rounded-lg mb-6 border border-clyvanta-blue-light/10">
                <div className="text-sm font-semibold text-clyvanta-blue-dark mb-1">Typical Results:</div>
                <div className="text-lg font-bold text-clyvanta-text-primary">{service.stats}</div>
              </div>
              
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
