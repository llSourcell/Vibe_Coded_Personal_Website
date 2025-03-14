// React and Next.js types
declare module 'react' {
  interface CSSProperties {
    [key: string]: any;
  }
}

// Pixi.js extensions
declare namespace PIXI {
  interface Graphics {
    vx?: number;
    vy?: number;
  }
  
  interface Sprite {
    vx?: number;
    vy?: number;
  }
}

// GSAP ScrollTrigger
declare namespace gsap {
  interface TweenVars {
    scrollTrigger?: {
      trigger: Element;
      start?: string;
      end?: string;
      scrub?: boolean | number;
      markers?: boolean;
      toggleActions?: string;
      pin?: boolean | Element;
      pinSpacing?: boolean;
      anticipatePin?: number;
      once?: boolean;
    };
  }
} 