export default function Footer() {
  return (
    <footer className="bg-clyvanta-text-primary py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-3xl font-bold text-white mb-4">Clyvanta</div>
            <p className="text-gray-300">
              Strategic technology partner helping small businesses grow through web development, mobile apps, AI solutions, and digital marketing.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/solutions/web-development" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="/solutions/app-development" className="hover:text-white transition-colors">App Development</a></li>
              <li><a href="/solutions/ai-automation" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="/solutions/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/solutions-in-action" className="hover:text-white transition-colors">Our Solutions</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Get Started</a></li>
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
              <li>Toronto, Canada</li>
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
