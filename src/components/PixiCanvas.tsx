'use client';

import { useEffect, useRef, useState } from 'react';
import * as PIXI from 'pixi.js';

interface PixiCanvasProps {
  width?: number;
  height?: number;
  className?: string;
}

const PixiCanvas: React.FC<PixiCanvasProps> = ({ 
  width = window.innerWidth, 
  height = window.innerHeight,
  className = '' 
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize Pixi Application
  useEffect(() => {
    if (!canvasRef.current || appRef.current) return;

    // Create Pixi Application
    const app = new PIXI.Application({
      width,
      height,
      antialias: true,
      backgroundAlpha: 0,
      resolution: Math.min(window.devicePixelRatio, 2),
      autoDensity: true,
    });

    // Add the canvas to the DOM
    canvasRef.current.appendChild(app.view as unknown as Node);
    appRef.current = app;

    // Handle resize
    const handleResize = () => {
      if (!appRef.current) return;
      
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      appRef.current.renderer.resize(newWidth, newHeight);
      
      // Update any game elements that need to be repositioned
      // This will be implemented in the game logic
    };

    window.addEventListener('resize', handleResize);
    setIsInitialized(true);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (appRef.current) {
        appRef.current.destroy(true, {
          children: true,
          texture: true,
          baseTexture: true,
        });
        appRef.current = null;
      }
    };
  }, [width, height]);

  // This effect will run after the Pixi app is initialized
  // and can be used to add game elements
  useEffect(() => {
    if (!isInitialized || !appRef.current) return;

    // Access the Pixi app and add game elements
    const app = appRef.current;

    // Example: Add a simple particle system
    const particleContainer = new PIXI.ParticleContainer(1000, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true,
    });
    
    app.stage.addChild(particleContainer);

    // Create particles
    const particles: PIXI.Sprite[] = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = PIXI.Sprite.from(PIXI.Texture.WHITE);
      particle.tint = 0x4a9eff; // Neural blue color
      particle.width = particle.height = 2;
      particle.x = Math.random() * app.screen.width;
      particle.y = Math.random() * app.screen.height;
      particle.alpha = 0.5 + Math.random() * 0.5;
      
      // Add velocity properties
      (particle as any).vx = -0.5 + Math.random();
      (particle as any).vy = -0.5 + Math.random();
      
      particleContainer.addChild(particle);
      particles.push(particle);
    }

    // Animation loop
    app.ticker.add(() => {
      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        // Move particle
        particle.x += (particle as any).vx;
        particle.y += (particle as any).vy;
        
        // Wrap around screen
        if (particle.x < 0) particle.x = app.screen.width;
        if (particle.x > app.screen.width) particle.x = 0;
        if (particle.y < 0) particle.y = app.screen.height;
        if (particle.y > app.screen.height) particle.y = 0;
      }
    });

    return () => {
      // Cleanup specific game elements
      app.ticker.remove();
      particleContainer.destroy({ children: true });
    };
  }, [isInitialized]);

  return (
    <div 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full z-0 ${className}`}
      aria-hidden="true"
    />
  );
};

export default PixiCanvas; 