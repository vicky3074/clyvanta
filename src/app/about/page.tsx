import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import GeoText from '@/components/GeoText';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-clyvanta-bg-light to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
              About Clyvanta
            </h1>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              <GeoText 
                gtaText="Toronto's trusted technology partner, helping small businesses across the GTA turn great ideas into great results."
                defaultText="Canada's trusted technology partner, helping small businesses turn great ideas into great results."
                className=""
              />
            </p>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-24 bg-gradient-to-br from-clyvanta-blue-dark to-clyvanta-blue-light text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why We Started Clyvanta</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We believe every small business owner has great ideas. The challenge is turning those ideas into reality without getting lost in technical complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🤔</div>
              <h3 className="text-xl font-bold mb-3">The Problem We Saw</h3>
              <p className="opacity-90">
                Small business owners were either stuck with cookie-cutter solutions that didn't fit their needs, or custom solutions that cost more than their annual revenue.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Our Solution</h3>
              <p className="opacity-90">
                We created a new approach: technology solutions that are custom-built for your specific needs but priced for small business budgets.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Our Focus</h3>
              <p className="opacity-90">
                We specialize in working with businesses that have 1-50 employees, where every technology decision has a direct impact on growth and success.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">💡 Our Mission</h3>
            <p className="text-2xl italic opacity-90">
              &quot;To make great technology accessible to every small business, so great ideas can become great results.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Our Promise to You
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              We've built our entire business around three simple principles that make working with us different.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-4">True Partnership</h3>
              <p className="text-clyvanta-text-secondary">
                We're not just vendors—we're your technology partners. Your success directly drives our decisions, and we're invested in your long-term growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-4">Complete Transparency</h3>
              <p className="text-clyvanta-text-secondary">
                Fixed pricing, clear timelines, and regular updates. You'll always know exactly what you're getting and when you'll get it.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-4">Practical Solutions</h3>
              <p className="text-clyvanta-text-secondary">
                We focus on solutions that actually work in the real world, not just impressive demos. Every solution is built for daily use.
              </p>
            </div>
          </div>

          {/* Local Focus with Geo-targeting */}
          <div className="bg-gradient-to-r from-clyvanta-bg-light to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-clyvanta-text-primary mb-4">
              <GeoText 
                gtaText="Proudly Canadian, Based in Toronto"
                defaultText="Proudly Canadian, Serving Businesses Nationwide"
                className=""
              />
            </h3>
            <p className="text-clyvanta-text-secondary max-w-2xl mx-auto">
              <GeoText 
                gtaText="As a Toronto-based company, we understand the unique challenges facing GTA businesses. We love meeting local business owners for coffee to discuss how technology can drive their growth."
                defaultText="As a Canadian company, we understand the unique challenges facing Canadian businesses. We believe in building lasting relationships with our clients across the country."
                className=""
              />
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-clyvanta-text-primary mb-6">
                How We Work With You
              </h2>
              <p className="text-lg text-clyvanta-text-secondary mb-6">
                We believe technology should solve real business problems, not create new ones. Our approach is straightforward and focused on your success.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary mb-1">Listen & Understand</h4>
                    <p className="text-clyvanta-text-secondary">We start by understanding your business, your challenges, and your goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary mb-1">Design Solutions</h4>
                    <p className="text-clyvanta-text-secondary">We create custom solutions tailored to your specific needs and budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-clyvanta-text-primary mb-1">Build & Support</h4>
                    <p className="text-clyvanta-text-secondary">We implement your solution and provide ongoing support to ensure long-term success.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-8 py-4 rounded-full font-semibold shadow-[0_4px_15px_rgba(0,212,255,0.3)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 inline-block">
                <GeoText 
                  gtaText="Connect with Our Toronto Team"
                  defaultText="Start Your Project Today"
                  className=""
                />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
                <div className="text-center mb-6">
                  <Logo variant="horizontal" size="lg" className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-clyvanta-text-primary">
                    <GeoText 
                      gtaText="Serving the Greater Toronto Area"
                      defaultText="Serving Businesses Across Canada"
                      className=""
                    />
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-clyvanta-text-secondary">Custom solutions built for your business</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-clyvanta-text-secondary">Fixed pricing with no hidden costs</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-clyvanta-text-secondary">Ongoing support and partnership</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-clyvanta-text-secondary">Technology that actually works</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-clyvanta-bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-clyvanta-text-primary mb-6">
              Our Values & Mission
            </h2>
            <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
              These core values guide everything we do and drive our commitment to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <div className="w-16 h-16 bg-gradient-to-br from-clyvanta-blue-light to-clyvanta-blue-dark rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🎯
              </div>
              <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">Transparency</h3>
              <p className="text-clyvanta-text-secondary">
                Clear communication, honest pricing, and transparent processes. No surprises, just results you can count on.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <div className="w-16 h-16 bg-gradient-to-br from-clyvanta-orange-light to-clyvanta-orange-dark rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🚀
              </div>
              <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">Innovation</h3>
              <p className="text-clyvanta-text-secondary">
                Staying ahead of technology trends to provide cutting-edge solutions that give your business a competitive advantage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
              <div className="w-16 h-16 bg-gradient-to-br from-clyvanta-blue-light to-clyvanta-orange-light rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                🤝
              </div>
              <h3 className="text-xl font-bold text-clyvanta-text-primary mb-4">Partnership</h3>
              <p className="text-clyvanta-text-secondary">
                We&apos;re not just vendors – we&apos;re strategic partners invested in your long-term success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-clyvanta-blue-dark to-clyvanta-orange-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Clyvanta Advantage?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            <GeoText 
              gtaText="Join the growing number of Toronto businesses that have transformed their operations with our technology solutions."
              defaultText="Join the growing number of Canadian businesses that have transformed their operations with our technology solutions."
              className=""
            />
          </p>
          <Link href="/#contact" className="bg-white text-clyvanta-blue-dark px-10 py-4 rounded-full font-semibold text-lg shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_10px_50px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 transition-all duration-300 inline-block">
            Start Your Transformation Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}