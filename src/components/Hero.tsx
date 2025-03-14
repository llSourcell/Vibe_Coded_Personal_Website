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
  const statsRef = useRef<HTMLDivElement>(null);

  // Animate hero elements
  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current || !terminalRef.current || !statsRef.current) return;

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
      )
      .fromTo(
        statsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
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
              Empowering you with AI tools to win bets, beat markets, and build startups. Join thousands using my AI applications to gain an unfair advantage.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 text-center"
              >
                Explore My Work
              </a>
              <a 
                href="https://youtube.com/sirajraval" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border border-secondary text-secondary hover:bg-secondary/10 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-center"
              >
                Watch My Videos
              </a>
            </div>
            
            <div ref={statsRef} className="grid grid-cols-2 gap-4 text-center lg:text-left">
              <a 
                href="https://www.youtube.com/sirajraval" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:bg-black/30 cursor-pointer"
              >
                <div className="text-3xl font-bold text-primary">700K+</div>
                <div className="text-sm text-gray-300">YouTube Subscribers</div>
              </a>
              <a 
                href="https://www.wagergpt.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:bg-black/30 cursor-pointer"
              >
                <div className="text-3xl font-bold text-primary">82%</div>
                <div className="text-sm text-gray-300">WagerGPT Win Rate</div>
              </a>
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary">40M+</div>
                <div className="text-sm text-gray-300">Video Views</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary">1,000+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
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