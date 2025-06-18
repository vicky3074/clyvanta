import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Smart chatbots that handle customer service 24/7, automation that eliminates repetitive tasks, and intelligent analytics that predict what your customers want before they know it.',
      fullDescription: 'Our comprehensive AI solutions combine chatbots, process automation, and predictive analytics into one powerful offering. We build intelligent systems that understand context, handle complex queries, automate repetitive tasks, and provide insights that drive business decisions.',
      features: [
        '24/7 Customer Support Chatbots',
        'Process Automation & RPA',
        'Predictive Analytics & Forecasting',
        'Natural Language Processing',
        'Sentiment Analysis & Escalation',
        'Custom Training on Your Data',
        'Multi-platform Integration',
        'Real-time Analytics Dashboards'
      ],
      technologies: ['OpenAI GPT', 'Python', 'TensorFlow', 'Zapier', 'Node.js', 'React'],
      icon: '🧠',
      gradient: 'from-clyvanta-blue-light to-clyvanta-blue-dark',
      stats: '75% cost reduction',
      category: 'AI'
    },
    {
      title: 'Web Development',
      description: 'Professional websites that work perfectly on all devices, load lightning-fast, and turn visitors into customers with designs that actually convert.',
      fullDescription: 'We create high-performance websites and web applications that work flawlessly across all devices. From simple business websites to complex web platforms, our solutions are built for speed, security, and results.',
      features: [
        'Responsive Design for All Devices',
        'Lightning-Fast Load Times',
        'Search Engine Optimization (SEO)',
        'Content Management Systems',
        'E-commerce Integration',
        'Database & API Development',
        'Progressive Web App (PWA) Features',
        'Analytics & Conversion Tracking'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      icon: '🌐',
      gradient: 'from-clyvanta-orange-light to-clyvanta-orange-dark',
      stats: '50% faster load times',
      category: 'Development'
    },
    {
      title: 'Mobile App Development',
      description: 'Mobile apps for iPhone and Android that your customers will love to use and that drive real business results, not just impressive demos.',
      fullDescription: 'Build powerful mobile applications that engage users and drive business growth. We develop apps for both iPhone and Android with focus on user experience, performance, and App Store success.',
      features: [
        'iPhone & Android App Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications & Analytics',
        'Offline Functionality',
        'In-app Purchases & Subscriptions',
        'User-Friendly Interface Design',
        'Performance Optimization'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'MongoDB'],
      icon: '📱',
      gradient: 'from-clyvanta-blue-light to-clyvanta-orange-light',
      stats: '4.8+ app store rating',
      category: 'Development'
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Marketing strategies that actually work - search engine optimization that gets you found, and campaigns that bring in qualified leads who are ready to buy.',
      fullDescription: 'Boost your online presence with marketing that delivers results. We combine proven strategies with data-driven insights to maximize your ROI and bring in customers who are ready to buy.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) Advertising',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing Automation',
        'Analytics & Performance Tracking',
        'Lead Generation Campaigns',
        'Conversion Rate Optimization'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp'],
      icon: '📈',
      gradient: 'from-green-500 to-teal-600',
      stats: '300% ROI average',
      category: 'Marketing'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-clyvanta-text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business. 
              From AI innovation to custom development, we deliver results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-clyvanta-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Content */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-3xl mr-4`}>
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-clyvanta-text-primary mb-2">
                          {service.title}
                        </h2>
                        <div className="text-sm font-semibold text-clyvanta-blue-dark bg-clyvanta-blue-light/10 px-3 py-1 rounded-full inline-block">
                          {service.category}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-clyvanta-text-secondary mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>

                  </div>

                  {/* Right Column - Features & Tech */}
                  <div className="space-y-8">
                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-clyvanta-blue-dark mr-3 mt-1">✓</span>
                            <span className="text-clyvanta-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-clyvanta-blue-light/10 text-clyvanta-blue-dark px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our services can help you achieve your goals. 
            Get a free consultation and project estimate.
          </p>
          <a
            href="/contact"
            className="bg-white text-clyvanta-blue-dark px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}