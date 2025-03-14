'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

// Dynamically import the GameCanvas component to avoid SSR issues with Pixi.js
const GameCanvas = dynamic(() => import('@/game/GameCanvas'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-background z-0" />
});

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 glow-text">
            <span className="text-secondary">SIRAJ</span> RAVAL
          </h1>
          <div className="relative w-64 h-2 bg-primary/20 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-primary rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Interactive Game Canvas Background */}
      <GameCanvas />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* Projects Section */}
          <Projects />
          
          {/* About Section */}
          <section className="py-20 container mx-auto px-4">
            <div className="neural-card p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-secondary">About</span> Me
              </h2>
              
              <div className="space-y-6 text-lg">
                <p>
                  I'm Siraj Raval, an entrepreneur, educator, and AI researcher passionate about democratizing AI education and building innovative technologies.
                </p>
                
                <p>
                  As the founder of the School of AI, I've taught millions of people worldwide about artificial intelligence, machine learning, and emerging technologies through my YouTube channel and online courses.
                </p>
                
                <p>
                  My mission is to inspire and empower the next generation of technologists to solve the world's most pressing problems using AI and other cutting-edge technologies.
                </p>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-20 container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 glow-text">
              Let's <span className="text-secondary">Connect</span>
            </h2>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Interested in collaborating on a project or booking me for a speaking engagement? Get in touch!
            </p>
            
            <button className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50">
              Contact Me
            </button>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
