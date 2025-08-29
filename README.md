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

## Deploy Your Own (Vibe Coding)

Two easy paths:

- Base template (fastest): fork this repo and make it your own
- Prompt-from-scratch (pure vibe coding): rebuild via prompts in Cursor/Claude Code

### Option A — Use this repo as a base template
1) Fork this repo to your GitHub account
2) Clone locally and run

```bash
git clone https://github.com/<your-username>/Vibe_Coded_Personal_Website.git
cd Vibe_Coded_Personal_Website
nvm use 20 || nvm install 20 && nvm use 20
npm install
npm run dev
```

3) Customize
- Edit copy in `src/components/Hero.tsx` and `src/components/Footer.tsx`
- Replace project cards in `src/components/Projects.tsx`
- Swap logos in `public/logos/` and images in `public/images/`
- Tweak metadata in `src/app/layout.tsx`

4) Deploy
- Vercel: import the repo and deploy (zero-config for Next.js)
- Heroku: push to Heroku (Node + nginx buildpack already configured)

### Option B — Rebuild via prompts (pure vibe coding)
Open Cursor or Claude Code and use one of these prompts.

Example: Recreate Siraj’s site
```text
You are an expert full‑stack engineer. Rebuild Siraj Raval’s personal site (Next.js + Tailwind) closely matching https://github.com/llSourcell/Vibe_Coded_Personal_Website. 
Use Next.js App Router, TypeScript, Tailwind, and the following sections: hero with two CTAs, stats grid, full‑width “Previous Clients” logo bar, projects grid (Veritas, YardVision, Doctor Dignity), and a minimal footer with newsletter. 
Follow the conventions in SYSTEM_PROMPT.md (coding principles, accessibility, naming, no external CSS). Produce complete, runnable code with no placeholders.
```

Template: Make your own personal site
```text
Plan a clean personal website using Next.js App Router + TypeScript + Tailwind. Sections: 
- Hero: [your name], [headline], [sub‑headline], two CTAs (email me, watch tutorials)
- Stats: 4–5 credibility metrics relevant to my background
- Clients/Press: full‑width logo bar
- Projects: 3–4 projects with image, link, CTA, and short stats
- Footer: short bio + newsletter (email capture only)

Constraints: Follow best practices in SYSTEM_PROMPT.md (clarity, early returns, descriptive names). Include accessibility attributes on interactive elements. Provide complete code with no TODOs. Use local assets under public/ and ensure it runs with `npm run dev`.

Personalization variables to apply: 
- Name: <your name>
- Headline: <your headline>
- Sub‑headline: <one‑sentence value proposition>
- Metrics: <4–5 short bullets>
- Projects: <title, image link, description, target URL, CTA text>
```


### Tools (links)
- Cursor: https://www.cursor.com
- Claude Code: https://www.anthropic.com/claude
- Replit: https://replit.com/
- Vibe Tunnel: https://vibetunnel.sh (or your preferred tunneling tool)
- WhisperFlow (speech‑to‑text): https://github.com/openai/whisper (or alternatives)
