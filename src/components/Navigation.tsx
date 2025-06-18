'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from './Logo';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen]);

  // Handle navigation
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // For page navigation, use Next.js Link behavior
      window.location.href = href;
    }
  };

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { href: '/solutions-in-action', label: 'Solutions in Action' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceLinks = [
    { href: '/solutions/web-development', label: 'Web Development' },
    { href: '/solutions/app-development', label: 'App Development' },
    { href: '/solutions/ai-automation', label: 'AI Solutions' },
    { href: '/solutions/digital-marketing', label: 'Digital Marketing' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-[12px] shadow-[0_2px_20px_rgba(0,0,0,0.05)]' 
          : 'bg-white/80 backdrop-blur-[8px]'
      } ${className}`}
      ref={menuRef}
    >
      {/* Skip to content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-clyvanta-blue-dark text-white px-4 py-2 rounded-[0.5rem]">
        Skip to content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo variant="horizontal" size="md" className="h-8 sm:h-10" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="relative text-clyvanta-text-secondary font-medium hover:text-clyvanta-blue-dark transition-colors group flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clyvanta-blue-light transition-all group-hover:w-full"></span>
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-clyvanta-text-secondary font-medium hover:text-clyvanta-blue-dark transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clyvanta-blue-light transition-all group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-clyvanta-text-secondary font-medium hover:text-clyvanta-blue-dark transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clyvanta-blue-light transition-all group-hover:w-full"></span>
                </Link>
              )
            ))}
            <a
              href="/contact"
              className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-8 py-3 rounded-full font-semibold shadow-[0_4px_15px_rgba(0,212,255,0.3)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 inline-block"
            >
              Get a Project Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-clyvanta-text-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-clyvanta-text-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'my-1'}`} />
            <span className={`block w-6 h-0.5 bg-clyvanta-text-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-6">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-clyvanta-text-secondary hover:text-clyvanta-blue-dark transition-all duration-300 py-4 border-b border-gray-100 last:border-0 text-lg font-medium hover:bg-clyvanta-bg-light hover:px-4 hover:rounded-lg w-full text-left"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-clyvanta-text-secondary hover:text-clyvanta-blue-dark transition-all duration-300 py-4 border-b border-gray-100 last:border-0 text-lg font-medium hover:bg-clyvanta-bg-light hover:px-4 hover:rounded-lg w-full text-left"
              >
                {link.label}
              </Link>
            )
          ))}
          <a
            href="/contact"
            className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-8 py-3 rounded-full font-semibold mt-4 w-full inline-block text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Project Quote
          </a>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
