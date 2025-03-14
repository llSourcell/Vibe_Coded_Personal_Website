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
  loading: () => <div className="fixed inset-0 bg-background z-0" style={{ backgroundColor: '#050510' }} />
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
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50" style={{ backgroundColor: '#050510' }}>
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
    <main className="min-h-screen bg-background" style={{ backgroundColor: '#050510' }}>
      <GameCanvas />
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
