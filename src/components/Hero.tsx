'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import AnimatedTerminal from './AnimatedTerminal';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Animate hero elements
  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current || !terminalRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        terminalRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className={`relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden ${className}`}
    >
      {/* Hero content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text"
            >
              <span className="text-secondary">AI</span> Educator & Entrepreneur
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Exploring the frontiers of artificial intelligence and sharing knowledge with the world.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50">
                Explore My Work
              </button>
              <button className="px-8 py-3 bg-transparent border border-secondary text-secondary hover:bg-secondary/10 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary/50">
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Terminal */}
          <div ref={terminalRef} className="w-full max-w-md">
            <AnimatedTerminal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 