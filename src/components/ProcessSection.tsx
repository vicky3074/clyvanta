export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current processes, identify inefficiencies, and understand your business goals to create a tailored AI strategy.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'Our experts design a comprehensive implementation roadmap with clear milestones, timelines, and success metrics.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Development & Integration',
      description: 'We build and deploy custom AI solutions that seamlessly integrate with your existing systems and workflows.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Training & Optimization',
      description: 'We provide comprehensive training for your team and continuously optimize the AI systems for maximum performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-br from-clyvanta-blue-light/10 to-transparent rounded-full blur-[64px]"></div>
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-gradient-to-tr from-clyvanta-orange-light/10 to-transparent rounded-full blur-[48px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
            From initial consultation to successful deployment, we follow a systematic approach 
            that ensures measurable results and long-term success for your AI initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-light/20 transform -translate-x-4"></div>
              )}
              
              <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <div className="text-4xl font-bold text-clyvanta-blue-light mb-4">{step.number}</div>
                
                <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">
                  {step.title}
                </h3>
                
                <p className="text-clyvanta-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_8px_30px_rgba(0,212,255,0.3)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.4)] transform hover:-translate-y-1 transition-all duration-300">
            Start Your AI Transformation
          </button>
        </div>
      </div>
    </section>
  );
}