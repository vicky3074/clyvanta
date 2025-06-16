import { getAllUseCases } from '@/lib/useCasesData';
// Using inline SVG icons instead of heroicons for compatibility

export default function SolutionsInActionPage() {
  const useCases = getAllUseCases();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            See What's <span className="text-blue-600">Possible</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real transformations from real businesses. These case studies show how strategic technology 
            partnerships can drive measurable growth and efficiency.
          </p>
          <div className="text-sm text-gray-500">
            *Representative examples based on typical client outcomes
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:gap-12">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                } lg:flex lg:items-center`}
              >
                {/* Content Side */}
                <div className="p-8 lg:p-12 lg:flex-1">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {useCase.industry}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {useCase.timeline} • {useCase.investment}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      {useCase.title}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      {useCase.companyDescription}
                    </p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-red-600 mb-2">The Challenge</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {useCase.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-600 mb-2">Our Solution</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {useCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {useCase.testimonial && (
                    <div className="bg-gray-50 rounded-xl p-6 mb-8">
                      <blockquote className="text-gray-700 italic mb-4">
                        "{useCase.testimonial.quote}"
                      </blockquote>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">
                          {useCase.testimonial.author}
                        </div>
                        <div className="text-gray-600">
                          {useCase.testimonial.position}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Metrics Side */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-12 lg:w-96">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Results Achieved</h3>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center">
                      <svg className="h-8 w-8 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="font-bold text-2xl text-gray-900">{useCase.timeline}</div>
                      <div className="text-sm text-gray-600">Timeline</div>
                    </div>
                    <div className="text-center">
                      <svg className="h-8 w-8 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <div className="font-bold text-2xl text-gray-900">{useCase.roi}</div>
                      <div className="text-sm text-gray-600">ROI</div>
                    </div>
                  </div>

                  {/* Outcomes List */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Key Outcomes</h4>
                    <ul className="space-y-3">
                      {useCase.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start gap-3">
                          <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Every great transformation starts with a conversation. Let's discuss how we can help your business achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Your Free Strategy Session
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
    </div>
  );
}