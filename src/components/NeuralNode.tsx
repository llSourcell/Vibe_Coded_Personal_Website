'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface NeuralNodeProps {
  x: number;
  y: number;
  size?: number;
  color?: string;
  pulseSpeed?: number;
  delay?: number;
  onClick?: () => void;
  className?: string;
}

const NeuralNode: React.FC<NeuralNodeProps> = ({
  x,
  y,
  size = 20,
  color = 'var(--neural-blue)',
  pulseSpeed = 2,
  delay = 0,
  onClick,
  className = '',
}) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;

    // Create animation timeline
    const timeline = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay,
    });

    // Pulse animation
    timeline.to(nodeRef.current, {
      boxShadow: `0 0 ${size}px ${color}`,
      scale: 1.2,
      duration: pulseSpeed,
      ease: 'power2.inOut',
    });

    return () => {
      timeline.kill();
    };
  }, [color, delay, pulseSpeed, size]);

  return (
    <div
      ref={nodeRef}
      className={`absolute rounded-full cursor-pointer transition-transform hover:scale-150 ${className}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        transform: 'translate(-50%, -50%)',
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Neural node"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    />
  );
};

export default NeuralNode; 