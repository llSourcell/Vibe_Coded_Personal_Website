'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!projectsRef.current || !titleRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 80%',
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    ).fromTo(
      '.project-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
      '-=0.4'
    );

    return () => {
      tl.kill();
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'WagerGPT',
      description: 'AI-powered sports betting assistant with 82% proven win rate. WagerGPT analyzes thousands of data points to predict outcomes and explains its reasoning, helping you make smarter bets.',
      image: '/images/wager.png',
      link: 'https://www.wagergpt.xyz',
      ctaText: 'Start Winning with AI',
      stats: '1,000+ active users • $2.1M+ total winnings',
    },
    {
      id: 2,
      title: 'TraderGPT',
      description: 'No-code AI trading bot that outperforms the market. Create sophisticated algorithmic trading strategies without writing a single line of code. Multi-asset support with real-time AI insights.',
      image: '/images/trader.png',
      link: 'https://www.tradergpt.co',
      ctaText: 'Boost Your Trading',
      stats: '200+ active traders • Limited spots available',
    },
    {
      id: 3,
      title: 'The Arena',
      description: 'Solo-founder AI startup accelerator launching March 2025. Turn your ideas into reality with personalized mentorship, resources, and a community of visionary founders building the future of AI.',
      image: '/images/arena.png',
      link: 'https://www.thearena.tech',
      ctaText: 'Join The Waitlist',
      stats: 'Exclusive cohort • Applications opening soon',
    },
    {
      id: 4,
      title: 'YouTube Channel',
      description: 'Join 700,000+ subscribers learning about AI, machine learning, and the future of technology. Tutorials, interviews with industry leaders, and insights into cutting-edge AI developments.',
      image: '/images/youtube.png',
      link: 'https://youtube.com/sirajraval',
      ctaText: 'Subscribe Now',
      stats: '700K+ subscribers • 40M+ views',
    },
  ];

  return (
    <section ref={projectsRef} className="py-20 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-12 text-center">
          AI-Powered <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 