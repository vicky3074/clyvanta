import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import BrainIcon from '@/components/icons/BrainIcon';

export default function AIConsultingPage() {
  const features = [
    {
      title: "AI Strategy Development",
      description: "Comprehensive roadmaps tailored to your business objectives and technical capabilities.",
      icon: "🎯"
    },
    {
      title: "Feasibility Assessment", 
      description: "Technical and economic analysis to determine the best AI solutions for your use case.",
      icon: "📊"
    },
    {
      title: "Technology Selection",
      description: "Expert guidance on choosing the right AI tools, frameworks, and platforms.",
      icon: "⚙️"
    },
    {
      title: "Implementation Planning",
      description: "Detailed project timelines, resource allocation, and milestone definitions.",
      icon: "📋"
    }
  ];

  const benefits = [
    "Reduce operational costs by 30-50%",
    "Accelerate decision-making processes",
    "Improve customer experience and satisfaction",
    "Gain competitive advantage through automation",
    "Scale operations without proportional cost increases"
  ];

  const caseStudies = [
    {
      industry: "E-commerce",
      challenge: "Manual inventory management leading to stockouts and overstock",
      solution: "AI-powered demand forecasting and inventory optimization",
      result: "40% reduction in inventory costs, 25% increase in sales"
    },
    {
      industry: "Healthcare",
      challenge: "Time-consuming patient data analysis and diagnosis support",
      solution: "Machine learning models for diagnostic assistance",
      result: "60% faster diagnosis, 95% accuracy improvement"
    },
    {
      industry: "Financial Services",
      challenge: "Fraud detection relying on rule-based systems",
      solution: "Real-time AI fraud detection and risk assessment",
      result: "85% reduction in false positives, $2M+ fraud prevention"
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
                  <li><span className="text-clyvanta-blue-dark font-medium">AI Consulting</span></li>
                </ol>
              </nav>
              
              <h1 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
                AI Consulting & Strategy
              </h1>
              <p className="text-xl text-clyvanta-text-secondary mb-8">
                Transform your business with strategic AI implementation. Our expert consultants help you identify opportunities, 
                assess feasibility, and create actionable roadmaps for AI adoption.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-8 py-4 rounded-full font-semibold shadow-[0_4px_15px_rgba(0,212,255,0.3)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 text-center">
                  Start Your AI Journey
                </Link>
                <button className="border-2 border-clyvanta-blue-dark text-clyvanta-blue-dark px-8 py-4 rounded-full font-semibold hover:bg-clyvanta-blue-dark hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-clyvanta-blue-light/20 to-clyvanta-blue-dark/20 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-clyvanta-blue-light to-clyvanta-blue-dark rounded-2xl flex items-center justify-center">
                  <BrainIcon size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Our AI Consulting Services
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              From strategy development to implementation planning, we provide end-to-end AI consulting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-clyvanta-bg-light p-8 rounded-2xl hover:bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">{feature.title}</h3>
                <p className="text-clyvanta-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-clyvanta-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-8">
                Why Choose AI Consulting?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-clyvanta-blue-light rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-clyvanta-text-primary font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
              <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-6">Consultation Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-clyvanta-blue-light rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary">Discovery & Assessment</h4>
                    <p className="text-sm text-clyvanta-text-secondary">Understand your business goals and current capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-clyvanta-blue-light rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary">Strategy Development</h4>
                    <p className="text-sm text-clyvanta-text-secondary">Create customized AI roadmap with clear milestones</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-clyvanta-blue-light rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary">Implementation Support</h4>
                    <p className="text-sm text-clyvanta-text-secondary">Ongoing guidance throughout the implementation phase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              See how our AI consulting has transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-clyvanta-bg-light p-8 rounded-2xl">
                <div className="text-sm font-semibold text-clyvanta-blue-dark mb-4">{study.industry}</div>
                <h3 className="text-lg font-bold text-clyvanta-text-primary mb-4">Challenge</h3>
                <p className="text-clyvanta-text-secondary mb-6">{study.challenge}</p>
                <h3 className="text-lg font-bold text-clyvanta-text-primary mb-4">Solution</h3>
                <p className="text-clyvanta-text-secondary mb-6">{study.solution}</p>
                <h3 className="text-lg font-bold text-clyvanta-text-primary mb-4">Result</h3>
                <p className="text-clyvanta-blue-dark font-semibold">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-clyvanta-blue-dark to-clyvanta-blue-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your AI Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Schedule a free consultation to discuss your AI opportunities and create a custom strategy for your business.
          </p>
          <Link href="/#contact" className="bg-white text-clyvanta-blue-dark px-10 py-4 rounded-full font-semibold text-lg shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_10px_50px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 transition-all duration-300 inline-block">
            Get Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}