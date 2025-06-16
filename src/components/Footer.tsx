export default function Footer() {
  return (
    <footer className="bg-clyvanta-text-primary py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-3xl font-bold text-white mb-4">Clyvanta</div>
            <p className="text-gray-300">
              Transforming businesses through intelligent AI solutions and custom software development.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">AI Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Process Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:hello@clyvanta.com" className="hover:text-white transition-colors">
                  hello@clyvanta.com
                </a>
              </li>
              <li>
                <a href="tel:+16479365467" className="hover:text-white transition-colors">
                  +1 647 936 5467
                </a>
              </li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Clyvanta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
