import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GeoText from '@/components/GeoText';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start Your Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <GeoText 
              gtaText="Ready to transform your business? We're here in Toronto and excited to discuss your project. Let's turn your great ideas into great results."
              defaultText="Ready to transform your business? We're excited to discuss your project and help turn your great ideas into great results."
              className=""
            />
          </p>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Email Us</h3>
                      <p className="text-gray-600">hello@clyvanta.com</p>
                      <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Call Us</h3>
                      <p className="text-gray-600">+1 (647) 936-5467</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 9AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Location</h3>
                      <p className="text-gray-600">
                        <GeoText 
                          gtaText="Toronto, Ontario, Canada"
                          defaultText="Canada"
                          className=""
                        />
                      </p>
                      <p className="text-sm text-gray-500">
                        <GeoText 
                          gtaText="Serving the Greater Toronto Area and beyond"
                          defaultText="Serving clients across Canada and internationally"
                          className=""
                        />
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Schedule a Meeting</h3>
                      <p className="text-gray-600">Book a free 30-minute consultation</p>
                      <a 
                        href="https://calendly.com/clyvanta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Schedule via Calendly →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-gray-900 text-lg mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Quick Response</h4>
                      <p className="text-sm text-gray-600">We'll review your project details and respond within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Discovery Call</h4>
                      <p className="text-sm text-gray-600">We'll schedule a call to understand your needs and goals in detail.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Proposal</h4>
                      <p className="text-sm text-gray-600">You'll receive a detailed proposal with timeline and transparent pricing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Project Kickoff</h4>
                      <p className="text-sm text-gray-600">Once approved, we'll start transforming your ideas into reality.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Quick Questions?</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900">How much do projects typically cost?</h4>
                    <p className="text-gray-600">Projects range from $5K to $100K+ depending on complexity. We provide transparent, fixed-price quotes.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">How long do projects take?</h4>
                    <p className="text-gray-600">Most projects are completed in 6-12 weeks. We'll provide an exact timeline in your proposal.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      <GeoText 
                        gtaText="Do you meet clients in person in Toronto?"
                        defaultText="Do you work with remote clients?"
                        className=""
                      />
                    </h4>
                    <p className="text-gray-600">
                      <GeoText 
                        gtaText="Absolutely! We love meeting local Toronto clients for coffee to discuss projects face-to-face."
                        defaultText="Yes, we work with clients across Canada and internationally via video calls and online collaboration."
                        className=""
                      />
                    </p>
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
      
      <Footer />
    </div>
  );
}