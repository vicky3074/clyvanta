import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-clyvanta-bg-light to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-[24rem] h-[24rem] bg-clyvanta-blue-light/5 rounded-full blur-[48px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-clyvanta-orange-light/5 rounded-full blur-[48px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
            Join hundreds of companies that have accelerated their growth with Clyvanta&apos;s 
            AI-powered solutions. Let&apos;s discuss your project today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary">Email Us</h4>
                    <p className="text-clyvanta-text-secondary">hello@clyvanta.com</p>
                    <p className="text-sm text-clyvanta-text-secondary">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-clyvanta-orange-light to-clyvanta-orange-dark rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary">Phone</h4>
                    <p className="text-clyvanta-text-secondary">+1 647 936 5467</p>
                    <p className="text-sm text-clyvanta-text-secondary">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary">Business Hours</h4>
                    <p className="text-clyvanta-text-secondary">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-sm text-clyvanta-text-secondary">Emergency support available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-orange-light rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary">Location</h4>
                    <p className="text-clyvanta-text-secondary">Toronto, ON</p>
                    <p className="text-sm text-clyvanta-text-secondary">Serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <h4 className="font-bold text-clyvanta-text-primary mb-4">What to Expect Next</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-clyvanta-blue-light rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                  <span className="text-sm text-clyvanta-text-secondary">We&apos;ll review your project details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-clyvanta-blue-light rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                  <span className="text-sm text-clyvanta-text-secondary">Schedule a discovery call within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-clyvanta-blue-light rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                  <span className="text-sm text-clyvanta-text-secondary">Receive a custom proposal and timeline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}