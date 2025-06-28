
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-between relative pt-20 px-4 lg:px-8"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333333' fill-opacity='0.05'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0zm0 6C16.745 6 6 16.745 6 30s10.745 24 24 24 24-10.745 24-24S43.255 6 30 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Decorative Floral Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20c10-10 30-10 40 0s10 30 0 40-30 10-40 0-10-30 0-40z' fill='none' stroke='%23555' stroke-width='0.5'/%3E%3Cpath d='M30 15c8-5 22-5 30 0s8 15 0 20-22 5-30 0-8-15 0-20z' fill='none' stroke='%23555' stroke-width='0.3'/%3E%3Cpath d='M25 25c5-8 15-8 20 0s5 15 0 20-15 8-20 0-5-15 0-20z' fill='none' stroke='%23555' stroke-width='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>

      <div className="flex items-center justify-between w-full max-w-7xl mx-auto z-10">
        {/* Left side - Text content */}
        <div className="flex-1 opacity-0 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Hamza
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            I humanize data
          </p>
        </div>

        {/* Right side - Silhouette with particles */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            {/* Human silhouette made with particles/dots */}
            <div className="w-80 h-96 relative">
              {/* Head */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-2 border-yellow-400 opacity-70"></div>
              
              {/* Body outline with dots */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                {/* Shoulder line */}
                <div className="flex space-x-1 mb-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>
                  ))}
                </div>
                
                {/* Body dots pattern */}
                {Array.from({ length: 25 }).map((_, row) => (
                  <div key={row} className="flex justify-center space-x-1 mb-1">
                    {Array.from({ length: Math.max(3, 8 - Math.abs(row - 12)) }).map((_, i) => (
                      <div 
                        key={i} 
                        className="w-1 h-1 bg-yellow-400 rounded-full opacity-60"
                        style={{
                          animationDelay: `${(row * 0.1 + i * 0.05)}s`,
                          animation: 'pulse 3s infinite'
                        }}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
