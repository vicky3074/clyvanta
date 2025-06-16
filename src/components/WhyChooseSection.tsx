export default function WhyChooseSection() {
  const advantages = [
    {
      title: 'Proven Track Record',
      description: 'Over 200 successful AI implementations with measurable ROI for clients across diverse industries.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      stats: '200+ Projects'
    },
    {
      title: 'Expert Team',
      description: 'PhD-level data scientists, ML engineers, and industry specialists with deep domain knowledge.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      stats: '50+ Experts'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Latest AI frameworks, cloud infrastructure, and proprietary tools for maximum performance and scalability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: '99.9% Uptime'
    },
    {
      title: 'Rapid Deployment',
      description: 'Agile methodologies and pre-built components enable faster time-to-market and quicker ROI realization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: '60% Faster'
    },
    {
      title: 'Ongoing Support',
      description: '24/7 monitoring, continuous optimization, and dedicated support to ensure long-term success.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      stats: '24/7 Support'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security, compliance with industry standards, and complete data privacy protection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: 'SOC 2 Compliant'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-clyvanta-bg-light to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[48rem] h-[48rem] bg-clyvanta-blue-light/5 rounded-full blur-[96px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[36rem] h-[36rem] bg-clyvanta-orange-light/5 rounded-full blur-[72px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
            Why Choose Clyvanta?
          </h2>
          <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
            We combine deep technical expertise with business acumen to deliver AI solutions 
            that not only work but drive real competitive advantage for your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {advantage.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="text-clyvanta-text-secondary mb-6 leading-relaxed">
                {advantage.description}
              </p>

              {/* Stats */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-clyvanta-blue-light/10 to-clyvanta-orange-light/10 rounded-full">
                <span className="text-sm font-semibold text-clyvanta-blue-dark">{advantage.stats}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark p-6">
            <h3 className="text-2xl font-bold text-white text-center">
              Clyvanta vs Traditional Consulting
            </h3>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-clyvanta-text-secondary mb-4">Traditional Consulting</h4>
                <ul className="space-y-3 text-clyvanta-text-secondary">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Months to see results
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Generic solutions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Limited ongoing support
                  </li>
                </ul>
              </div>

              <div className="text-center border-l border-r border-gray-200 px-8">
                <div className="w-16 h-16 bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  VS
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-lg font-semibold text-clyvanta-blue-dark mb-4">Clyvanta</h4>
                <ul className="space-y-3 text-clyvanta-text-secondary">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Results in weeks
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom AI solutions
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 support & optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}