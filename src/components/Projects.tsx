'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 'school-of-ai',
    title: 'School of AI',
    description: 'A global educational movement to teach AI to anyone, anywhere for free.',
    imageUrl: '/images/project1.jpg',
    tags: ['Education', 'AI', 'Community'],
    link: 'https://www.theschool.ai/',
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Course',
    description: 'A comprehensive course on quantum computing fundamentals and applications.',
    imageUrl: '/images/project2.jpg',
    tags: ['Quantum', 'Education', 'Programming'],
    link: 'https://github.com/llSourcell/Learn_Quantum_Computing',
  },
  {
    id: 'ai-research',
    title: 'AI Research Papers',
    description: 'Explanations and implementations of cutting-edge AI research papers.',
    imageUrl: '/images/project3.jpg',
    tags: ['Research', 'Deep Learning', 'Implementation'],
    link: 'https://github.com/llSourcell',
  },
  {
    id: 'blockchain',
    title: 'Blockchain Applications',
    description: 'Exploring the intersection of blockchain technology and artificial intelligence.',
    imageUrl: '/images/project4.jpg',
    tags: ['Blockchain', 'Cryptocurrency', 'Web3'],
    link: 'https://github.com/llSourcell/Simple_Blockchain_in_5_Minutes',
  },
  {
    id: 'ai-startups',
    title: 'AI Startup Playbook',
    description: 'A guide for entrepreneurs looking to build AI-powered startups.',
    imageUrl: '/images/project5.jpg',
    tags: ['Entrepreneurship', 'Business', 'Strategy'],
    link: 'https://github.com/llSourcell',
  },
  {
    id: 'neural-networks',
    title: 'Neural Network Visualizer',
    description: 'Interactive tool for visualizing and understanding neural networks.',
    imageUrl: '/images/project6.jpg',
    tags: ['Visualization', 'Education', 'Interactive'],
    link: 'https://github.com/llSourcell',
  },
];

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current || !projectsRef.current) return;

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        },
      }
    );

    // Animate projects
    gsap.fromTo(
      projectsRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top bottom-=50',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 ${className}`}
      id="projects"
    >
      <div className="container mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-secondary">Featured</span> Projects
        </h2>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 