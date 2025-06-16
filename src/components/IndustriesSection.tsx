export default function IndustriesSection() {
  const industries = [
    {
      name: 'Financial Services',
      description: 'Fraud detection, algorithmic trading, risk assessment, and customer insights for banks and fintech companies.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: '85% fraud reduction',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Healthcare',
      description: 'Medical imaging analysis, drug discovery, patient monitoring, and predictive diagnostics for better outcomes.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      stats: '40% faster diagnosis',
      color: 'from-red-500 to-pink-600'
    },
    {
      name: 'E-commerce & Retail',
      description: 'Personalized recommendations, inventory optimization, dynamic pricing, and customer behavior analysis.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      stats: '35% revenue increase',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, supply chain optimization, and automated production monitoring.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      stats: '60% less downtime',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Technology',
      description: 'Software optimization, cybersecurity enhancement, data analytics, and intelligent automation solutions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      stats: '70% process automation',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Transportation',
      description: 'Route optimization, autonomous systems, fleet management, and traffic prediction for logistics companies.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
      stats: '45% cost reduction',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230099CC' fill-opacity='0.1'%3E%3Cpath d='m0 40v-40h40z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
            Industries We Transform
          </h2>
          <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
            Our AI expertise spans across multiple industries, delivering tailored solutions 
            that address specific challenges and drive measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {industry.icon}
              </div>

              {/* Industry name */}
              <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">
                {industry.name}
              </h3>

              {/* Description */}
              <p className="text-clyvanta-text-secondary mb-6 leading-relaxed">
                {industry.description}
              </p>

              {/* Stats */}
              <div className="bg-gradient-to-r from-clyvanta-bg-light to-white p-4 rounded-lg border border-clyvanta-blue-light/10">
                <div className="text-sm font-semibold text-clyvanta-blue-dark mb-1">Typical Results:</div>
                <div className="text-lg font-bold text-clyvanta-text-primary">{industry.stats}</div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-clyvanta-blue-light/5 to-clyvanta-orange-light/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-clyvanta-blue-light/10 to-clyvanta-orange-light/10 p-8 rounded-2xl border border-clyvanta-blue-light/20">
            <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-4">
              Don&apos;t See Your Industry?
            </h3>
            <p className="text-clyvanta-text-secondary mb-6 max-w-2xl mx-auto">
              We work with companies across all sectors. Our adaptable AI solutions can be customized 
              to meet the unique needs of any industry or business model.
            </p>
            <button className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_8px_30px_rgba(0,212,255,0.3)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.4)] transform hover:-translate-y-1 transition-all duration-300">
              Discuss Your Use Case
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}