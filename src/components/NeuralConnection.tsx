'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface NeuralConnectionProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  thickness?: number;
  color?: string;
  pulseSpeed?: number;
  delay?: number;
  className?: string;
}

const NeuralConnection: React.FC<NeuralConnectionProps> = ({
  startX,
  startY,
  endX,
  endY,
  thickness = 2,
  color = 'var(--neural-purple)',
  pulseSpeed = 3,
  delay = 0,
  className = '',
}) => {
  const connectionRef = useRef<HTMLDivElement>(null);

  // Calculate length and angle
  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

  useEffect(() => {
    if (!connectionRef.current) return;

    // Create animation timeline
    const timeline = gsap.timeline({
      repeat: -1,
      delay,
    });

    // Pulse animation
    timeline.to(connectionRef.current, {
      opacity: 0.3,
      duration: pulseSpeed / 2,
      ease: 'power2.inOut',
    });
    
    timeline.to(connectionRef.current, {
      opacity: 1,
      duration: pulseSpeed / 2,
      ease: 'power2.inOut',
    });

    // Data flow animation
    const dataFlow = document.createElement('div');
    dataFlow.className = 'absolute h-full w-2 bg-white rounded-full';
    dataFlow.style.opacity = '0.7';
    connectionRef.current.appendChild(dataFlow);

    gsap.to(dataFlow, {
      left: '100%',
      duration: pulseSpeed * 1.5,
      repeat: -1,
      ease: 'none',
      delay: delay + Math.random(),
    });

    return () => {
      timeline.kill();
      if (connectionRef.current && connectionRef.current.contains(dataFlow)) {
        connectionRef.current.removeChild(dataFlow);
      }
    };
  }, [color, delay, pulseSpeed]);

  return (
    <div
      ref={connectionRef}
      className={`absolute overflow-hidden ${className}`}
      style={{
        left: `${startX}px`,
        top: `${startY}px`,
        width: `${length}px`,
        height: `${thickness}px`,
        backgroundColor: color,
        transformOrigin: '0 50%',
        transform: `rotate(${angle}deg)`,
      }}
      aria-hidden="true"
    />
  );
};

export default NeuralConnection; 