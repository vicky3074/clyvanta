'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GeoText from '@/components/GeoText';
import { getAllUseCases } from '@/lib/useCasesData';
// Using inline SVG icons instead of heroicons for compatibility
import ErrorBoundary, { ServiceErrorFallback, ContactFormErrorFallback } from '@/components/ui/ErrorBoundary';

export default function Home() {
  const useCases = getAllUseCases();
  const featuredUseCase = useCases[0]; // Online Retailer case

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>
        
        {/* Trust Bar with Geo-Targeting */}
        <ErrorBoundary>
          <section className="py-8 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center px-4">
              <GeoText 
                gtaText="Proudly serving small businesses across the Greater Toronto Area with technology that just works."
                defaultText="Trusted by growing businesses across Canada to make technology simple and effective."
                className="text-lg text-gray-600"
              />
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary fallback={ServiceErrorFallback}>
          <ServicesSection />
        </ErrorBoundary>

        {/* Our Promise Section */}
        <ErrorBoundary>
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Promise to You
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We believe great technology should feel effortless. Here's how we make that happen.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">True Partnership</h3>
                  <p className="text-gray-600">
                    We&apos;re not just vendors—we&apos;re your technology partners. Your success directly drives our decisions.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Transparency</h3>
                  <p className="text-gray-600">
                    Fixed pricing, clear timelines, and regular updates. No surprises, no hidden costs.
                  </p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Solutions</h3>
                  <p className="text-gray-600">
                    We focus on solutions that actually work in the real world, not just impressive demos.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        {/* Featured Use Case Section */}
        <ErrorBoundary>
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  See What's Possible
                </h2>
                <p className="text-xl text-gray-600">
                  Real transformation from a real business partnership
                </p>
              </div>
              
              {featuredUseCase && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:flex lg:items-center">
                  {/* Content */}
                  <div className="p-8 lg:p-12 lg:flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {featuredUseCase.industry}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {featuredUseCase.timeline} • {featuredUseCase.roi} ROI
                      </span>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredUseCase.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredUseCase.problem}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {featuredUseCase.outcomes.slice(0, 4).map((outcome, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href="/solutions-in-action"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                    >
                      See all success stories
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  
                  {/* Metrics */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:w-80">
                    <div className="text-center mb-6">
                      <svg className="h-12 w-12 text-blue-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <div className="text-3xl font-bold text-gray-900">{featuredUseCase.roi}</div>
                      <div className="text-gray-600">Return on Investment</div>
                    </div>
                    
                    {featuredUseCase.testimonial && (
                      <blockquote className="text-gray-700 italic text-center">
                        "{featuredUseCase.testimonial.quote}"
                        <footer className="mt-3 text-sm">
                          <strong>{featuredUseCase.testimonial.author}</strong>
                          <br />
                          {featuredUseCase.testimonial.position}
                        </footer>
                      </blockquote>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary>
          <WhyChooseSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <TrustSection />
        </ErrorBoundary>

        {/* Final CTA Section */}
        <ErrorBoundary>
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get My Free Quote
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                <GeoText 
                  gtaText="Let's discuss your project over coffee. We're based in Toronto and love meeting local business owners."
                  defaultText="Ready to transform your business? Let's start with a no-pressure conversation about your needs."
                  className=""
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Your Project
                </a>
                <a
                  href="tel:+16479365467"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <GeoText 
                    gtaText="Call (647) 936-5467"
                    defaultText="Schedule a Call"
                    className=""
                  />
                </a>
              </div>
            </div>
          </section>
        </ErrorBoundary>

        <ErrorBoundary fallback={ContactFormErrorFallback}>
          <ContactSection />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
