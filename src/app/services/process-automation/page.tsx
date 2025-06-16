import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import GearIcon from '@/components/icons/GearIcon';

export default function ProcessAutomationPage() {
  const automationAreas = [
    {
      title: "Data Processing",
      description: "Automate data collection, cleaning, transformation, and analysis workflows.",
      icon: "📊",
      examples: ["ETL Pipelines", "Report Generation", "Data Validation", "File Processing"]
    },
    {
      title: "Business Workflows",
      description: "Streamline repetitive business processes and approvals.",
      icon: "🔄",
      examples: ["Invoice Processing", "Employee Onboarding", "Customer Support", "Inventory Management"]
    },
    {
      title: "Communication",
      description: "Automate emails, notifications, and customer communications.",
      icon: "📧",
      examples: ["Email Campaigns", "SMS Notifications", "Slack Integration", "Customer Alerts"]
    },
    {
      title: "Integration",
      description: "Connect different systems and automate data synchronization.",
      icon: "🔗",
      examples: ["CRM Integration", "API Connections", "Database Sync", "Cloud Migration"]
    }
  ];

  const benefits = [
    {
      metric: "80%",
      description: "Reduction in manual processing time",
      icon: "⏱️"
    },
    {
      metric: "95%",
      description: "Accuracy improvement in data processing",
      icon: "🎯"
    },
    {
      metric: "50%",
      description: "Cost savings on operational expenses",
      icon: "💰"
    },
    {
      metric: "24/7",
      description: "Continuous operation without breaks",
      icon: "🚀"
    }
  ];

  const tools = [
    {
      category: "Workflow Automation",
      tools: ["Zapier", "Microsoft Power Automate", "n8n", "Apache Airflow"],
      description: "Visual workflow builders and orchestration platforms"
    },
    {
      category: "RPA Tools",
      tools: ["UiPath", "Automation Anywhere", "Blue Prism", "Selenium"],
      description: "Robotic Process Automation for UI interactions"
    },
    {
      category: "AI/ML Automation",
      tools: ["Python", "TensorFlow", "Azure ML", "AWS SageMaker"],
      description: "Intelligent automation with machine learning"
    },
    {
      category: "Integration Platforms",
      tools: ["MuleSoft", "Boomi", "Azure Logic Apps", "Custom APIs"],
      description: "Enterprise integration and data synchronization"
    }
  ];

  const caseStudy = {
    company: "Manufacturing Company",
    challenge: "Manual invoice processing taking 2-3 days per invoice with 15% error rate",
    solution: "AI-powered invoice processing system with automated approval workflows",
    implementation: [
      "OCR document scanning and data extraction",
      "Machine learning for data validation",
      "Automated approval routing based on business rules",
      "Integration with existing ERP system"
    ],
    results: [
      "Processing time reduced from 3 days to 30 minutes",
      "Error rate decreased from 15% to less than 1%",
      "Cost savings of $150,000 annually",
      "Staff redeployed to higher-value activities"
    ]
  };

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
                  <li><span className="text-clyvanta-blue-dark font-medium">Process Automation</span></li>
                </ol>
              </nav>
              
              <h1 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
                Intelligent Process Automation
              </h1>
              <p className="text-xl text-clyvanta-text-secondary mb-8">
                Transform repetitive tasks into efficient automated workflows. 
                Reduce costs, eliminate errors, and free your team to focus on strategic initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-8 py-4 rounded-full font-semibold shadow-[0_4px_15px_rgba(0,212,255,0.3)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 text-center">
                  Automate Your Processes
                </Link>
                <button className="border-2 border-clyvanta-blue-dark text-clyvanta-blue-dark px-8 py-4 rounded-full font-semibold hover:bg-clyvanta-blue-dark hover:text-white transition-all duration-300">
                  See ROI Calculator
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-clyvanta-blue-light/20 to-clyvanta-orange-light/20 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-clyvanta-blue-light to-clyvanta-orange-light rounded-2xl flex items-center justify-center">
                  <GearIcon size={80} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Automation Opportunities
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              Identify and automate the processes that will have the biggest impact on your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-clyvanta-bg-light p-8 rounded-2xl hover:bg-white hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{area.icon}</div>
                  <h3 className="text-2xl font-bold text-clyvanta-text-primary">{area.title}</h3>
                </div>
                <p className="text-clyvanta-text-secondary mb-6">{area.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-clyvanta-text-primary">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.examples.map((example, idx) => (
                      <span key={idx} className="bg-white text-clyvanta-text-primary text-sm px-3 py-1 rounded-full border border-clyvanta-blue-light/20">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-clyvanta-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Measurable Results
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              Our automation solutions deliver tangible business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <div className="text-4xl font-bold text-clyvanta-blue-dark mb-4">{benefit.metric}</div>
                <p className="text-clyvanta-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Automation Technologies
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              We use the best tools and platforms to deliver robust automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-clyvanta-bg-light p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">{tool.category}</h3>
                <p className="text-clyvanta-text-secondary mb-6">{tool.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.tools.map((item, idx) => (
                    <span key={idx} className="bg-white text-clyvanta-blue-dark text-sm px-3 py-2 rounded-lg font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-clyvanta-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Case Study: Invoice Processing Automation
            </h2>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-4">Challenge</h3>
                  <p className="text-clyvanta-text-secondary text-lg">{caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-4">Solution</h3>
                  <p className="text-clyvanta-text-secondary text-lg mb-6">{caseStudy.solution}</p>
                  <ul className="space-y-3">
                    {caseStudy.implementation.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-clyvanta-blue-light rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-clyvanta-text-primary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-6">Results</h3>
                <div className="space-y-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bg-clyvanta-bg-light p-6 rounded-xl">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-clyvanta-orange-light rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <p className="text-clyvanta-text-primary font-medium">{result}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-clyvanta-blue-dark to-clyvanta-orange-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Schedule a consultation to identify automation opportunities and calculate your potential ROI.
          </p>
          <Link href="/#contact" className="bg-white text-clyvanta-blue-dark px-10 py-4 rounded-full font-semibold text-lg shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_10px_50px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 transition-all duration-300 inline-block">
            Get Automation Assessment
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}