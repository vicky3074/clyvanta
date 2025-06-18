// Using inline SVG icons instead of heroicons for compatibility
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GeoText from '@/components/GeoText';

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="h-10 w-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digital Marketing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic digital marketing solutions that drive real growth for <GeoText torontoText="Toronto" defaultText="small" /> businesses. 
            From SEO to social media, we help you reach your ideal customers online.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Digital Marketing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing strategies that generate leads, build brand awareness, and drive sustainable growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Search Engine Optimization */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <div className="bg-green-100 rounded-lg p-3 inline-block mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Search Engine Optimization (SEO)</h3>
                <p className="text-gray-600 mb-6">
                  Get found by customers searching for your services. Our SEO strategies improve your search rankings and drive organic traffic.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">What's Included:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Keyword research and strategy</li>
                  <li>• On-page optimization</li>
                  <li>• Technical SEO improvements</li>
                  <li>• Local SEO for <GeoText torontoText="Toronto businesses" defaultText="local businesses" /></li>
                  <li>• Content optimization</li>
                  <li>• Performance tracking and reporting</li>
                </ul>
              </div>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Build your brand presence and engage with customers on the platforms they use most. Strategic social media that drives results.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">What's Included:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Social media strategy development</li>
                  <li>• Content creation and scheduling</li>
                  <li>• Community management</li>
                  <li>• Paid advertising campaigns</li>
                  <li>• Performance analytics</li>
                  <li>• Brand voice development</li>
                </ul>
              </div>
            </div>

            {/* Google Ads & PPC */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <div className="bg-orange-100 rounded-lg p-3 inline-block mb-4">
                  <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Google Ads & PPC</h3>
                <p className="text-gray-600 mb-6">
                  Get immediate visibility with targeted advertising campaigns. We maximize your ad spend for the best return on investment.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">What's Included:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Google Ads campaign setup</li>
                  <li>• Keyword research and bidding strategy</li>
                  <li>• Ad copy creation and optimization</li>
                  <li>• Landing page optimization</li>
                  <li>• Conversion tracking setup</li>
                  <li>• Regular performance optimization</li>
                </ul>
              </div>
            </div>

            {/* Content Marketing */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <div className="bg-indigo-100 rounded-lg p-3 inline-block mb-4">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Content Marketing</h3>
                <p className="text-gray-600 mb-6">
                  Engage your audience with valuable content that builds trust, demonstrates expertise, and drives customer action.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">What's Included:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Content strategy development</li>
                  <li>• Blog writing and optimization</li>
                  <li>• Email marketing campaigns</li>
                  <li>• Video content planning</li>
                  <li>• Lead magnet creation</li>
                  <li>• Content performance tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Marketing Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Choose Our Digital Marketing Services?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Results</h3>
              <p className="text-gray-600 text-sm">
                Every campaign is tracked, measured, and optimized based on real performance data to maximize your ROI.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Business Focus</h3>
              <p className="text-gray-600 text-sm">
                We understand small business challenges and create marketing strategies that work within your budget and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrated Approach</h3>
              <p className="text-gray-600 text-sm">
                Our marketing works seamlessly with your website and apps for a unified customer experience across all touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create a digital marketing strategy that drives real results for your <GeoText torontoText="Toronto" defaultText="" /> business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Your Marketing Strategy
            </a>
            <a
              href="tel:+16479365467"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call +1 (647) 936-5467
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}