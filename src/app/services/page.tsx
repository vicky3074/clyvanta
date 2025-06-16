import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that handles customer service, sales inquiries, and internal support 24/7 with human-like responses.',
      fullDescription: 'Our AI chatbots go beyond simple responses. We build sophisticated virtual assistants that understand context, handle complex queries, and integrate seamlessly with your existing systems. Features include natural language processing, sentiment analysis, multi-language support, and continuous learning capabilities.',
      features: [
        '24/7 Customer Support Automation',
        'Lead Qualification & Sales Assistance',
        'Multi-platform Integration (Web, WhatsApp, Facebook)',
        'Natural Language Processing',
        'Sentiment Analysis & Escalation',
        'Custom Training on Your Data'
      ],
      technologies: ['OpenAI GPT', 'Dialogflow', 'Rasa', 'Python', 'Node.js', 'React'],
      icon: '🤖',
      gradient: 'from-clyvanta-blue-light to-clyvanta-blue-dark',
      stats: '75% cost reduction',
      category: 'AI'
    },
    {
      title: 'Custom Web Development',
      description: 'Enterprise-grade web applications built with modern frameworks, responsive design, and optimized for performance and scalability.',
      fullDescription: 'We create high-performance web applications using cutting-edge technologies. From simple business websites to complex enterprise platforms, our solutions are built for speed, security, and scalability.',
      features: [
        'Responsive Design for All Devices',
        'Progressive Web App (PWA) Capabilities',
        'Advanced SEO Optimization',
        'Database Integration & API Development',
        'Content Management Systems',
        'E-commerce Functionality'
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      icon: '🌐',
      gradient: 'from-clyvanta-orange-light to-clyvanta-orange-dark',
      stats: '50% faster load times',
      category: 'Development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native iOS and Android applications with seamless user experiences, advanced features, and cross-platform compatibility.',
      fullDescription: 'Build powerful mobile applications that engage users and drive business growth. We develop both native and cross-platform solutions with focus on performance, user experience, and App Store optimization.',
      features: [
        'Native iOS & Android Development',
        'Cross-platform Solutions (React Native, Flutter)',
        'App Store Optimization (ASO)',
        'Push Notifications & Analytics',
        'Offline Functionality',
        'In-app Purchases & Subscriptions'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'MongoDB'],
      icon: '📱',
      gradient: 'from-clyvanta-blue-light to-clyvanta-orange-light',
      stats: '4.8+ app store rating',
      category: 'Development'
    },
    {
      title: 'Predictive Analytics & ML',
      description: 'Advanced machine learning models that forecast trends, predict customer behavior, and optimize business operations.',
      fullDescription: 'Transform your data into actionable insights with our machine learning solutions. We build predictive models that help you make data-driven decisions, forecast trends, and optimize operations.',
      features: [
        'Customer Behavior Prediction',
        'Sales Forecasting Models',
        'Demand Planning & Inventory Optimization',
        'Risk Assessment & Fraud Detection',
        'Recommendation Systems',
        'Real-time Analytics Dashboards'
      ],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Apache Spark', 'Tableau'],
      icon: '📊',
      gradient: 'from-purple-500 to-indigo-600',
      stats: '90% accuracy rates',
      category: 'AI'
    },
    {
      title: 'Digital Marketing & SEO',
      description: 'Data-driven marketing strategies, search engine optimization, and AI-powered campaigns that drive qualified leads and conversions.',
      fullDescription: 'Boost your online presence with our comprehensive digital marketing services. We combine traditional marketing expertise with AI-powered tools to maximize your ROI and drive qualified traffic.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) Advertising',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing Automation',
        'Analytics & Performance Tracking'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp'],
      icon: '📈',
      gradient: 'from-green-500 to-teal-600',
      stats: '300% ROI average',
      category: 'Marketing'
    },
    {
      title: 'Process Automation (RPA)',
      description: 'Intelligent automation of repetitive tasks, data entry, and workflow optimization using AI-powered bots.',
      fullDescription: 'Eliminate manual, repetitive tasks with our robotic process automation solutions. We identify automation opportunities and implement bots that work alongside your team to increase efficiency.',
      features: [
        'Data Entry & Processing Automation',
        'Document Processing & OCR',
        'Workflow Optimization',
        'Integration with Existing Systems',
        'Exception Handling & Reporting',
        'Compliance & Audit Trails'
      ],
      technologies: ['UiPath', 'Automation Anywhere', 'Python', 'Zapier', 'Microsoft Power Automate', 'APIs'],
      icon: '⚙️',
      gradient: 'from-pink-500 to-rose-600',
      stats: '80% time savings',
      category: 'AI'
    },
    {
      title: 'Cloud Solutions & DevOps',
      description: 'Scalable cloud infrastructure, containerization, CI/CD pipelines, and secure deployment strategies for enterprise applications.',
      fullDescription: 'Modernize your infrastructure with cloud-native solutions. We help you migrate to the cloud, implement DevOps practices, and build scalable, secure applications.',
      features: [
        'Cloud Migration & Architecture',
        'Container Orchestration (Docker, Kubernetes)',
        'CI/CD Pipeline Implementation',
        'Infrastructure as Code (IaC)',
        'Monitoring & Logging Solutions',
        'Security & Compliance Management'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      icon: '☁️',
      gradient: 'from-cyan-500 to-blue-600',
      stats: '99.9% uptime',
      category: 'Development'
    },
    {
      title: 'Computer Vision & OCR',
      description: 'AI-powered image recognition, document processing, and visual inspection systems for automated quality control.',
      fullDescription: 'Harness the power of computer vision to automate visual tasks. From document processing to quality control, our solutions can see, understand, and act on visual information.',
      features: [
        'Document Digitization & OCR',
        'Object Detection & Recognition',
        'Quality Control & Inspection',
        'Facial Recognition Systems',
        'Medical Image Analysis',
        'Real-time Video Processing'
      ],
      technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'Tesseract', 'YOLO', 'AWS Rekognition'],
      icon: '👁️',
      gradient: 'from-amber-500 to-orange-600',
      stats: '99% detection accuracy',
      category: 'AI'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing, inventory management, AI recommendations, and conversion optimization.',
      fullDescription: 'Build powerful e-commerce platforms that drive sales and provide exceptional customer experiences. From small boutiques to enterprise marketplaces, we create solutions that scale.',
      features: [
        'Custom E-commerce Development',
        'Payment Gateway Integration',
        'Inventory Management Systems',
        'AI-powered Product Recommendations',
        'Multi-vendor Marketplace Support',
        'Analytics & Conversion Optimization'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'React', 'Node.js'],
      icon: '🛒',
      gradient: 'from-emerald-500 to-teal-600',
      stats: '65% sales increase',
      category: 'Development'
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

                    {/* Stats */}
                    <div className="bg-gradient-to-r from-clyvanta-bg-light to-white p-4 rounded-xl border border-clyvanta-blue-light/10 mb-6">
                      <div className="text-sm font-semibold text-clyvanta-blue-dark mb-1">Typical Results:</div>
                      <div className="text-2xl font-bold text-clyvanta-text-primary">{service.stats}</div>
                    </div>
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
          <button className="bg-white text-clyvanta-blue-dark px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Get Free Consultation
          </button>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}