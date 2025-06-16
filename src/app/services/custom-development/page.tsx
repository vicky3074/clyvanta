import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import CodeIcon from '@/components/icons/CodeIcon';

export default function CustomDevelopmentPage() {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      icon: "💻"
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
      icon: "⚙️"
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "iOS", "Android", "PWA"],
      icon: "📱"
    },
    {
      category: "Cloud",
      items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Serverless"],
      icon: "☁️"
    }
  ];

  const services = [
    {
      title: "Web Applications",
      description: "Full-stack web applications built with modern frameworks and best practices.",
      features: ["Responsive Design", "API Integration", "Real-time Features", "SEO Optimization"],
      gradient: "from-clyvanta-blue-light to-clyvanta-blue-dark"
    },
    {
      title: "Mobile Applications", 
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: ["Cross-platform", "Native Performance", "Push Notifications", "Offline Support"],
      gradient: "from-clyvanta-orange-light to-clyvanta-orange-dark"
    },
    {
      title: "Enterprise Software",
      description: "Scalable enterprise solutions with advanced security and integration capabilities.",
      features: ["Microservices", "API Design", "Database Design", "Security Compliance"],
      gradient: "from-clyvanta-blue-light to-clyvanta-orange-light"
    }
  ];

  const process = [
    {
      phase: "Discovery",
      duration: "1-2 weeks",
      description: "Requirements gathering, technical analysis, and project planning",
      deliverables: ["Technical Specification", "Project Timeline", "Cost Estimate"]
    },
    {
      phase: "Design",
      duration: "2-3 weeks", 
      description: "UI/UX design, system architecture, and database design",
      deliverables: ["Wireframes", "UI Mockups", "System Architecture", "Database Schema"]
    },
    {
      phase: "Development",
      duration: "6-12 weeks",
      description: "Agile development with regular sprint reviews and demos",
      deliverables: ["Working Software", "Code Documentation", "Test Coverage", "Deployment Scripts"]
    },
    {
      phase: "Launch",
      duration: "1-2 weeks",
      description: "Production deployment, testing, and go-live support",
      deliverables: ["Production Deployment", "User Training", "Monitoring Setup", "Support Documentation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-clyvanta-bg-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <nav className="flex mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm">
                  <li><Link href="/" className="text-clyvanta-text-secondary hover:text-clyvanta-blue-dark">Home</Link></li>
                  <li><span className="text-clyvanta-text-secondary">/</span></li>
                  <li><Link href="/#services" className="text-clyvanta-text-secondary hover:text-clyvanta-blue-dark">Services</Link></li>
                  <li><span className="text-clyvanta-text-secondary">/</span></li>
                  <li><span className="text-clyvanta-blue-dark font-medium">Custom Development</span></li>
                </ol>
              </nav>
              
              <h1 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
                Custom Software Development
              </h1>
              <p className="text-xl text-clyvanta-text-secondary mb-8">
                Build scalable, high-performance applications tailored to your business needs. 
                From web platforms to mobile apps, we deliver solutions that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-gradient-to-r from-clyvanta-orange-light to-clyvanta-orange-dark text-white px-8 py-4 rounded-full font-semibold shadow-[0_4px_15px_rgba(255,107,53,0.3)] hover:shadow-[0_6px_25px_rgba(255,107,53,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 text-center">
                  Start Your Project
                </Link>
                <button className="border-2 border-clyvanta-orange-dark text-clyvanta-orange-dark px-8 py-4 rounded-full font-semibold hover:bg-clyvanta-orange-dark hover:text-white transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-clyvanta-orange-light/20 to-clyvanta-orange-dark/20 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-clyvanta-orange-light to-clyvanta-orange-dark rounded-2xl flex items-center justify-center">
                  <CodeIcon size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Development Services
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              We specialize in building modern, scalable applications using cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-clyvanta-bg-light p-8 rounded-2xl hover:bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>
                <p className="text-clyvanta-text-secondary mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-clyvanta-blue-light rounded-full flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3"/>
                        </svg>
                      </div>
                      <span className="text-clyvanta-text-primary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-clyvanta-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              We stay current with the latest technologies to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <span key={idx} className="inline-block bg-clyvanta-bg-light text-clyvanta-text-primary text-sm px-3 py-1 rounded-full mr-2 mb-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              A proven methodology that ensures quality, transparency, and on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-clyvanta-bg-light p-6 rounded-2xl h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-clyvanta-orange-light rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-clyvanta-text-primary">{phase.phase}</h3>
                      <p className="text-sm text-clyvanta-text-secondary">{phase.duration}</p>
                    </div>
                  </div>
                  <p className="text-clyvanta-text-secondary mb-4">{phase.description}</p>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary mb-2">Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-clyvanta-text-secondary">• {deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-clyvanta-orange-light"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-clyvanta-orange-light to-clyvanta-orange-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let&apos;s discuss your project requirements and create a custom solution that exceeds your expectations.
          </p>
          <Link href="/#contact" className="bg-white text-clyvanta-orange-dark px-10 py-4 rounded-full font-semibold text-lg shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_10px_50px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 transition-all duration-300 inline-block">
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}