import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
// Using inline SVG icons instead of heroicons for compatibility

export default function SolutionsInActionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What We Can <span className="text-blue-600">Build</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Every business has unique challenges. Here's how our technology solutions 
            can transform your operations and drive real growth.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* What We Build */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Solutions We Specialize In
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From web applications to AI automation, we build technology that solves real business problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Web Applications</h3>
                <p className="text-gray-600 mb-6">
                  Custom web solutions built with modern technologies that scale with your business.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What We Build</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• E-commerce platforms and marketplaces</li>
                  <li>• Customer portals and dashboards</li>
                  <li>• Content management systems</li>
                  <li>• Business automation tools</li>
                  <li>• API integrations and databases</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript"].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <div className="bg-green-100 rounded-lg p-3 inline-block mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Applications</h3>
                <p className="text-gray-600 mb-6">
                  Native and cross-platform mobile apps that provide seamless user experiences.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What We Build</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Service booking and scheduling apps</li>
                  <li>• Field service management tools</li>
                  <li>• Customer loyalty programs</li>
                  <li>• Inventory and tracking systems</li>
                  <li>• Communication and workflow apps</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "iOS", "Android", "API Design", "Real-time Updates"].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Automation */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <div className="bg-purple-100 rounded-lg p-3 inline-block mb-4">
                  <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Automation</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent automation solutions that streamline operations and improve decision-making.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What We Build</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Intelligent data processing systems</li>
                  <li>• Automated customer service tools</li>
                  <li>• Predictive analytics dashboards</li>
                  <li>• Document processing automation</li>
                  <li>• Smart workflow optimization</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "OpenAI", "Machine Learning", "Data Analytics", "API Integration"].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real Client Success Stories Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                We're currently working with several Toronto-area businesses to deliver transformational 
                technology solutions. Check back soon to see real results from real clients.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Be Our Next Success Story
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Every solution starts with understanding your unique challenges. 
            Let's talk about what technology can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Start a Conversation
            </a>
            <a
              href="tel:+16479365467"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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