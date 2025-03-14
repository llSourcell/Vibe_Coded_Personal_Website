'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/sirajraval',
    icon: 'M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/sirajraval',
    icon: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sirajraval',
    icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sirajraval',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current || !socialRef.current) return;

    gsap.fromTo(
      socialRef.current.children,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom-=100',
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative py-12 mt-20 border-t border-primary/20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4 glow-text">SIRAJ RAVAL</h3>
            <p className="text-foreground/70 mb-6">
              Exploring the frontiers of artificial intelligence and sharing knowledge with the world.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-foreground/70 hover:text-secondary transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-foreground/70 hover:text-secondary transition-colors">
                Projects
              </Link>
              <Link href="/talks" className="text-foreground/70 hover:text-secondary transition-colors">
                Talks
              </Link>
              <Link href="/contact" className="text-foreground/70 hover:text-secondary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div ref={socialRef} className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={link.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current text-foreground"
                  >
                    <path d={link.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-foreground/50">
          <p>© {new Date().getFullYear()} Siraj Raval. All rights reserved.</p>
        </div>
      </div>

      {/* Background neural nodes */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/4 w-2 h-2 rounded-full bg-neural-blue"></div>
        <div className="absolute bottom-10 left-1/3 w-3 h-3 rounded-full bg-neural-purple"></div>
        <div className="absolute bottom-20 left-1/2 w-2 h-2 rounded-full bg-neural-pink"></div>
        <div className="absolute bottom-5 left-2/3 w-4 h-4 rounded-full bg-neural-green"></div>
        <div className="absolute bottom-15 left-3/4 w-2 h-2 rounded-full bg-neural-blue"></div>
      </div>
    </footer>
  );
};

export default Footer; 