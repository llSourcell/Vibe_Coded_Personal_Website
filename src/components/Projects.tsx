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
      title: 'Veritas',
      description: 'An enterprise, “glass‑box” RAG system engineered for truth, privacy, and production. It ingests PDFs, retrieves with hybrid search + reranking, generates answers with strict citations, and enforces configurable PII redaction — all with observability hooks to prove what the model saw and why.',
      image: '/images/veritas.png',
      link: 'https://github.com/llSourcell/Veritas-AI-for-Compliance',
      ctaText: 'View on GitHub',
      stats: 'Open Source • MIT License',
    },
    {
      id: 2,
      title: 'YardVision',
      description: 'Privacy-first, edge-deployable computer vision application optimized for Python 3.11+, Poetry, and strict quality tooling. It features YOLOv8 detection, ByteTrack MOT, spatial analytics (heatmaps, zones, dwell-time, near-miss), and GDPR-compliant selective blurring.',
      image: '/images/yardvision.gif',
      link: 'https://github.com/llSourcell/YardVision',
      ctaText: 'View on GitHub',
      stats: 'Open Source • MIT License',
    },
    {
      id: 3,
      title: 'Doctor Dignity',
      description: "Doctor Dignity is an LLM that can pass the US Medical Licensing Exam. It works offline, it's cross-platform, & your health data stays private.",
      image: '/images/doctor_dignity.png',
      link: 'https://github.com/llSourcell/Doctor-Dignity',
      ctaText: 'View on GitHub',
      stats: 'Open Source • Apache-2.0',
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