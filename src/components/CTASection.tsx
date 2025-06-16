export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-clyvanta-blue-dark to-clyvanta-blue-light relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-[24rem] h-[24rem] bg-white/10 rounded-full blur-[48px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-white/10 rounded-full blur-[48px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join hundreds of companies that have accelerated their growth with Clyvanta&apos;s 
          AI-powered solutions. Let&apos;s discuss your project today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-clyvanta-blue-dark px-10 py-4 rounded-full font-semibold text-lg shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_10px_50px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 transition-all duration-300">
            Schedule a Consultation
          </button>
          <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-clyvanta-blue-dark transition-all duration-300">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
