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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text pt-16 md:pt-0"
            >
              Senior <span className="text-secondary">AI/ML</span> <span className="md:inline block">Engineer</span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Building reliable, scalable, and trustworthy AI systems for the enterprise. Specializing in MLOps, Generative AI, and Computer Vision.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="mailto:hello@sirajraval.com" 
                className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 text-center"
              >
                Work With Me
              </a>
              <a 
                href="https://youtube.com/sirajraval" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border border-secondary text-secondary hover:bg-secondary/10 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-center"
              >
                Watch My AI Tutorials
              </a>
            </div>
            
            <div ref={statsRef} className="grid grid-cols-2 gap-4 text-center lg:text-left">
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-300">AI/ML Projects Delivered</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary">100K+</div>
                <div className="text-sm text-gray-300">Daily API Calls Supported</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-gray-300">Uptime Across Deployed ML Systems</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-lg border border-primary/20">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-300">Years Engineering Experience</div>
              </div>
              {/* moved clients bar below to allow full-width */}
            </div>
          </div>
          
          {/* Terminal */}
          <div ref={terminalRef} className="w-full max-w-md">
            <AnimatedTerminal />
          </div>
        </div>
      </div>

      {/* Full-width previous clients bar touching screen edges */}
      <div className="w-full -mx-4 mt-4">
        <div className="text-gray-300 text-sm uppercase tracking-widest mb-2 px-4">Previous Clients</div>
        <div className="bg-black/20 backdrop-blur-sm border-y border-primary/20 py-4">
          <div className="px-4">
            <div className="flex items-center justify-between gap-6 md:gap-12">
              <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <img src="/logos/openai.svg" alt="OpenAI" className="h-7 md:h-9 object-contain invert brightness-0 opacity-95 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
              </a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <img src="/logos/google.svg" alt="Google" className="h-6 md:h-8 object-contain opacity-95 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
              </a>
              <a href="https://www.udacity.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <img src="/logos/udacity.svg" alt="Udacity" className="h-6 md:h-8 object-contain invert brightness-0 opacity-95 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
              </a>
              <a href="https://www.twilio.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <img src="/logos/twilio.svg" alt="Twilio" className="h-6 md:h-8 object-contain opacity-95 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
              </a>
              <a href="https://www.mountsinai.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <img src="/logos/mount_sinai.png" alt="Mount Sinai" className="h-7 md:h-9 object-contain opacity-95 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 