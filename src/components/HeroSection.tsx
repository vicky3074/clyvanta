'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { trackBusinessEvents } from '@/lib/analytics';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Animated particles
    const particles: Array<{x: number, y: number, size: number, speedX: number, speedY: number}> = [];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, 0.1)';
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-white">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Gradient orbs - Using specific opacity values for v4 */}
      <div className="absolute top-0 right-0 w-[24rem] h-[24rem] bg-gradient-to-br from-clyvanta-blue-light/20 to-clyvanta-blue-dark/20 rounded-full blur-[48px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-gradient-to-tr from-clyvanta-orange-light/20 to-clyvanta-orange-dark/20 rounded-full blur-[48px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Great Ideas Deserve{' '}
            <span className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark bg-clip-text text-transparent">
              Great Technology
            </span>
          </h1>
          <p className="text-xl text-clyvanta-text-secondary leading-relaxed">
            We're the technology partner that small businesses trust to turn great ideas into great results. 
            From custom software to AI automation, we make technology work for you, not against you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              onClick={() => trackBusinessEvents.ctaClick('consultation', 'hero')}
              className="bg-gradient-to-r from-clyvanta-blue-light to-clyvanta-blue-dark text-white px-6 py-4 rounded-full font-semibold text-base sm:text-lg shadow-[0_10px_40px_rgba(0,212,255,0.3)] hover:shadow-[0_10px_50px_rgba(0,212,255,0.4)] transform hover:-translate-y-1 transition-all duration-300 inline-block text-center"
            >
              <span className="sm:hidden">Get Free Consultation</span>
              <span className="hidden sm:inline">Get Free AI Consultation</span>
            </Link>
          </div>
          
          <div className="flex gap-12 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-clyvanta-blue-dark to-clyvanta-blue-light bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-clyvanta-text-secondary mt-1">Committed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-clyvanta-blue-dark to-clyvanta-blue-light bg-clip-text text-transparent">Direct</div>
              <div className="text-sm text-clyvanta-text-secondary mt-1">Access</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-clyvanta-blue-dark to-clyvanta-blue-light bg-clip-text text-transparent">Personal</div>
              <div className="text-sm text-clyvanta-text-secondary mt-1">Touch</div>
            </div>
          </div>
        </div>
        
        {/* Floating cards - Fixed for v4 */}
        <div className="relative h-[600px] hidden lg:block">
          <div className="absolute top-20 left-10 bg-white/90 backdrop-blur-[12px] rounded-[1.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/50 animate-float">
            <div className="w-16 h-16 bg-gradient-to-br from-clyvanta-blue-light to-clyvanta-blue-dark rounded-[1rem] flex items-center justify-center text-white text-2xl mb-4">
              🤖
            </div>
            <h4 className="font-bold text-lg mb-1">AI Chatbots</h4>
            <p className="text-sm text-clyvanta-text-secondary">24/7 Smart Support</p>
          </div>
          
          <div className="absolute top-52 right-20 bg-white/90 backdrop-blur-[12px] rounded-[1.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/50 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-clyvanta-orange-light to-clyvanta-orange-dark rounded-[1rem] flex items-center justify-center text-white text-2xl mb-4">
              🧠
            </div>
            <h4 className="font-bold text-lg mb-1">Machine Learning</h4>
            <p className="text-sm text-clyvanta-text-secondary">Predictive Analytics</p>
          </div>
          
          <div className="absolute bottom-32 left-32 bg-white/90 backdrop-blur-[12px] rounded-[1.5rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/50 animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-clyvanta-blue-light to-clyvanta-orange-light rounded-[1rem] flex items-center justify-center text-white text-2xl mb-4">
              ⚡
            </div>
            <h4 className="font-bold text-lg mb-1">Process Automation</h4>
            <p className="text-sm text-clyvanta-text-secondary">AI-Powered RPA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
