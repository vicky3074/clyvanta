export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      position: 'CTO',
      company: 'TechFlow Solutions',
      image: '/api/placeholder/64/64',
      content: 'Clyvanta transformed our customer service with AI chatbots that reduced response time by 75% and increased customer satisfaction to 94%. Their expertise in machine learning is unmatched.',
      rating: 5,
      results: '75% faster response time'
    },
    {
      name: 'Michael Rodriguez',
      position: 'VP of Operations',
      company: 'Manufacturing Pro',
      image: '/api/placeholder/64/64',
      content: 'The predictive maintenance AI system Clyvanta implemented saved us $2.3M in equipment downtime last year. Their ROI projections were actually conservative.',
      rating: 5,
      results: '$2.3M cost savings'
    },
    {
      name: 'Emily Johnson',
      position: 'Head of Marketing',
      company: 'RetailNext',
      image: '/api/placeholder/64/64',
      content: 'Their recommendation engine increased our conversion rate by 40% and average order value by 25%. The team understood our business needs perfectly.',
      rating: 5,
      results: '40% higher conversions'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-clyvanta-bg-light to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-clyvanta-blue-light/5 rounded-full blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-clyvanta-orange-light/5 rounded-full blur-[64px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-clyvanta-text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-clyvanta-text-secondary max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See how we&apos;ve helped companies across industries 
            achieve remarkable results with AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2">
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-clyvanta-text-secondary mb-6 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Results highlight */}
              <div className="bg-gradient-to-r from-clyvanta-blue-light/10 to-clyvanta-orange-light/10 p-4 rounded-lg mb-6">
                <div className="text-sm font-semibold text-clyvanta-blue-dark mb-1">Key Result:</div>
                <div className="text-lg font-bold text-clyvanta-text-primary">{testimonial.results}</div>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-clyvanta-text-primary">{testimonial.name}</div>
                  <div className="text-sm text-clyvanta-text-secondary">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-clyvanta-blue-dark mb-2">200+</div>
            <div className="text-clyvanta-text-secondary">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-clyvanta-blue-dark mb-2">98%</div>
            <div className="text-clyvanta-text-secondary">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-clyvanta-blue-dark mb-2">$50M+</div>
            <div className="text-clyvanta-text-secondary">Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-clyvanta-blue-dark mb-2">24/7</div>
            <div className="text-clyvanta-text-secondary">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}