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
          <section id="about" className="py-20 container mx-auto px-4">
            <div className="neural-card p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-secondary">About</span> Me
              </h2>
              
              <div className="space-y-6 text-lg">
                <p>
                  I'm Siraj Raval, an entrepreneur, educator, and AI researcher with over 10 years of experience in artificial intelligence. I'm a Columbia University dropout, Investor at Singularity Capital, proud Dad, and Husband.
                </p>
                
                <p>
                  As the founder of the School of AI and Chief Data Scientist, I've taught millions of people worldwide about artificial intelligence, machine learning, and emerging technologies through my YouTube channel and online courses. I'm the #5 most followed developer on GitHub out of 100 million registered accounts and a best-selling author of "Decentralized Applications" (O'Reilly).
                </p>
                
                <p>
                  My mission is to inspire and empower the next generation of technologists to solve the world's most pressing problems using AI and other cutting-edge technologies.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Collaborations</h3>
                  <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
                    <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                      <span className="text-primary font-bold">NVIDIA</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                      <span className="text-primary font-bold">OpenAI</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                      <span className="text-primary font-bold">White House</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                      <span className="text-primary font-bold">Google</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                      <span className="text-primary font-bold">Amazon</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-primary/20 flex flex-col items-center">
                      <span className="text-primary font-bold">Intel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="contact" className="py-20 container mx-auto px-4 text-center">
            <div className="neural-card p-8 md:p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 glow-text">
                Let's <span className="text-secondary">Connect</span>
              </h2>
              
              <p className="text-xl mb-8">
                Interested in collaborating on a project or booking me for a speaking engagement? Email me at <a href="mailto:hello@sirajraval.com" className="text-primary hover:underline">hello@sirajraval.com</a> or Get in touch!
              </p>
              
              <form 
                action="mailto:hello@sirajraval.com" 
                method="post" 
                encType="text/plain"
                className="space-y-4"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-left mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="px-4 py-2 bg-black/50 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-left mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="px-4 py-2 bg-black/50 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-left mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="px-4 py-2 bg-black/50 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-white resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-primary hover:bg-primary/80 text-white rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-auto"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
