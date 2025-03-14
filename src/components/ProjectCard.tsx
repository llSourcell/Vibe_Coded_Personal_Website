'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  link,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Hover effect
  useEffect(() => {
    if (!cardRef.current || !imageRef.current || !contentRef.current) return;

    const card = cardRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    // Create hover animation
    const enterAnimation = () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.4,
        ease: 'power2.out',
      });
      
      gsap.to(content, {
        y: -10,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const leaveAnimation = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
      
      gsap.to(content, {
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    // Add event listeners
    card.addEventListener('mouseenter', enterAnimation);
    card.addEventListener('mouseleave', leaveAnimation);
    card.addEventListener('focus', enterAnimation);
    card.addEventListener('blur', leaveAnimation);

    // Cleanup
    return () => {
      card.removeEventListener('mouseenter', enterAnimation);
      card.removeEventListener('mouseleave', leaveAnimation);
      card.removeEventListener('focus', enterAnimation);
      card.removeEventListener('blur', leaveAnimation);
    };
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block ${className}`}
    >
      <div
        ref={cardRef}
        className="neural-card h-full overflow-hidden transition-all duration-300 cursor-pointer"
        tabIndex={0}
      >
        {/* Image */}
        <div
          ref={imageRef}
          className="relative w-full h-48 overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="p-6 relative"
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/70 mb-4 text-sm">{description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard; 