'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  ctaText: string;
  stats: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Generate a color based on the project id
  const getProjectColor = (id: number) => {
    const colors = [
      'from-blue-600 to-blue-800',
      'from-purple-600 to-purple-800',
      'from-green-600 to-green-800',
      'from-red-600 to-red-800',
    ];
    return colors[(id - 1) % colors.length];
  };

  // Generate a pattern for the background
  const getPattern = (id: number) => {
    const patterns = [
      'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 20%)',
      'radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 20%)',
      'linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 75%, transparent 75%, transparent)',
      'linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.05) 75%, transparent 75%, transparent)',
    ];
    return patterns[(id - 1) % patterns.length];
  };

  return (
    <div
      ref={cardRef}
      className="project-card bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform perspective-1000 h-full flex flex-col"
    >
      <div 
        className={`relative h-48 overflow-hidden ${imageError ? `bg-gradient-to-br ${getProjectColor(project.id)}` : ''}`}
        style={imageError ? { 
          backgroundImage: getPattern(project.id),
          backgroundSize: project.id % 2 === 0 ? '10px 10px' : '100% 100%'
        } : {}}
      >
        {!imageError && (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}
        
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center p-4">
              <div className="mb-2 text-white/70 text-sm uppercase tracking-wider font-medium">AI-Powered</div>
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <div className="mt-2 w-16 h-1 bg-white/50 mx-auto rounded-full"></div>
            </div>
          </div>
        )}
        
        {imageError && (
          <>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm -z-10"></div>
          </>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        <div className="text-sm text-muted-foreground mb-4">{project.stats}</div>
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-md text-center transition-colors duration-300"
        >
          {project.ctaText}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard; 