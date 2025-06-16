export default function TrustSection() {
  const companies = ['TechCorp', 'InnovateLab', 'DataFlow', 'NextGen'];

  return (
    <section id="about" className="py-16 px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-clyvanta-text-primary mb-12">
          Trusted by Forward-Thinking Companies
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-16">
          {companies.map((company) => (
            <div
              key={company}
              className="px-12 py-6 bg-clyvanta-bg-light rounded-2xl font-semibold text-clyvanta-text-secondary hover:bg-gradient-to-r hover:from-clyvanta-blue-light hover:to-clyvanta-blue-dark hover:text-white hover:scale-105 transition-all duration-300"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
