# Siraj Raval's Personal Website

An interactive, AI-themed personal website for Siraj Raval, featuring stunning animations and game-like elements.

## Features

- Interactive neural network visualization
- Game-like elements with Pixi.js
- Beautiful animations with GSAP
- Responsive design for all devices
- AI-themed visual aesthetics

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type-safe code
- **Pixi.js**: For 2D WebGL rendering and interactive elements
- **GSAP**: For advanced animations
- **TailwindCSS**: For utility-first styling

## Interactive Elements

The website features several interactive elements:

1. **Neural Network Background**: An interactive neural network visualization that responds to user interaction.
2. **Neural Nodes**: Clickable nodes that create ripple effects and increase your neural connection score.
3. **Animated Connections**: Dynamic connections between neural nodes that pulse and animate.
4. **Hover Effects**: Interactive hover effects on project cards and navigation elements.

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/siraj-raval-website.git
cd siraj-raval-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── public/             # Static assets
│   └── images/         # Image assets
├── src/                # Source code
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── game/           # Game-related components and logic
│   │   ├── scenes/     # Game scenes
│   │   ├── entities/   # Game entities
│   │   └── systems/    # Game systems
│   ├── hooks/          # Custom React hooks
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Performance Optimizations

- Dynamic imports for heavy components
- Optimized animations with GSAP
- Efficient rendering with Pixi.js
- Responsive design for all devices
- Lazy loading of images and components

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Siraj Raval for the inspiration
- The Next.js, Pixi.js, and GSAP communities for their excellent documentation and examples

## System Prompt

This project ships with my system prompt used while building and iterating in Cursor. You can find it here:

- `SYSTEM_PROMPT.md`

## About the Video (Vibe Coding)

This website was built during a video where I demonstrate “vibe coding” — Plan, Prompt, and Polish — to go from zero to a live site rapidly using modern AI coding tools. The README reflects that workflow, and the system prompt above captures the rules and conventions I used while iterating with AI assistants.
