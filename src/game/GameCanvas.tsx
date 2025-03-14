'use client';

import React from 'react';

interface GameCanvasProps {
  className?: string;
}

const GameCanvas = ({ className = '' }: GameCanvasProps) => {
  const canvasRef = React.useRef<HTMLDivElement>(null);

  // Initialize canvas with particles
  React.useEffect(() => {
    if (!canvasRef.current) return;

    try {
      // Create a canvas element
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'fixed'; // Changed from 'absolute' to 'fixed' for better Safari compatibility
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '-1'; // Ensure it stays behind content
      
      // Safari-specific styles
      canvas.style.transform = 'translateZ(0)'; // Force hardware acceleration
      canvas.style.backfaceVisibility = 'hidden'; // Prevent flickering in Safari
      
      // Append canvas to the container
      canvasRef.current.appendChild(canvas);
      
      // Get 2D context
      const ctx = canvas.getContext('2d', { alpha: true }); // Explicitly set alpha to true
      if (!ctx) return;
      
      // Set background color explicitly for Safari
      ctx.fillStyle = '#050510'; // Match the --background variable
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create particles
      type Particle = {
        x: number;
        y: number;
        radius: number;
        vx: number;
        vy: number;
        color: string;
        alpha: number;
      };
      
      const particles: Particle[] = [];
      const particleCount = 100;
      
      // Speed reduction factor (80% of original speed)
      const speedFactor = 0.8;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 2 + Math.random() * 3,
          vx: (-1 + Math.random() * 2) * speedFactor, // Reduced speed by 20%
          vy: (-1 + Math.random() * 2) * speedFactor, // Reduced speed by 20%
          color: getRandomColor(),
          alpha: 0.5 + Math.random() * 0.5
        });
      }
      
      // Create connections
      type Connection = {
        from: number;
        to: number;
      };
      
      const connections: Connection[] = [];
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (Math.random() > 0.7) continue; // Only connect some particles
          
          connections.push({
            from: i,
            to: j
          });
        }
      }
      
      // Animation function
      const animate = () => {
        // Clear canvas and redraw background
        ctx.fillStyle = '#050510'; // Match the --background variable
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw connections
        for (const connection of connections) {
          const fromParticle = particles[connection.from];
          const toParticle = particles[connection.to];
          
          // Calculate distance
          const dx = fromParticle.x - toParticle.x;
          const dy = fromParticle.y - toParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only draw connections if particles are close enough
          if (distance < 200) {
            const alpha = 1 - distance / 200;
            
            ctx.beginPath();
            ctx.moveTo(fromParticle.x, fromParticle.y);
            ctx.lineTo(toParticle.x, toParticle.y);
            ctx.strokeStyle = `rgba(${fromParticle.color}, ${alpha * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        
        // Update and draw particles
        for (const particle of particles) {
          // Move particle
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) {
            particle.vx *= -1;
          }
          
          if (particle.y < 0 || particle.y > canvas.height) {
            particle.vy *= -1;
          }
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha})`;
          ctx.fill();
        }
        
        // Continue animation
        requestAnimationFrame(animate);
      };
      
      // Start animation
      animate();
      
      // Handle window resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Redraw background after resize
        ctx.fillStyle = '#050510';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (canvasRef.current && canvasRef.current.contains(canvas)) {
          canvasRef.current.removeChild(canvas);
        }
      };
    } catch (error) {
      console.error("Error initializing canvas:", error);
    }
  }, []);
  
  // Helper function to get random color
  const getRandomColor = (): string => {
    const colors = [
      '74, 158, 255', // Neural blue
      '156, 86, 255',  // Neural purple
      '255, 86, 169',  // Neural pink
      '86, 255, 169'   // Neural green
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full z-0 bg-background"
        aria-hidden="true"
      />
    </div>
  );
};

export default GameCanvas; 