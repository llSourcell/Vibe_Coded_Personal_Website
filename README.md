# Siraj Raval's Personal Website

AI‑themed personal site built with Next.js + TypeScript + Tailwind, featuring animations (GSAP), Pixi.js visuals, a projects grid, and a full‑width client logo bar.

## Getting Started

### Prerequisites

- Node.js 18+ (or 20.x recommended) and npm

### Installation

```bash
git clone https://github.com/llSourcell/Vibe_Coded_Personal_Website.git
cd Vibe_Coded_Personal_Website
nvm use 20 || nvm install 20 && nvm use 20
npm install
npm run dev
# open http://localhost:3000
```

## Customize
- Hero/CTAs: `src/components/Hero.tsx`
- Projects: `src/components/Projects.tsx`
- Footer/newsletter: `src/components/Footer.tsx`
- Logos & images: `public/logos/`, `public/images/`
- Metadata: `src/app/layout.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

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
1) Fork → clone → run the Quickstart above
2) Customize files listed in “Customize”
3) Deploy: Vercel (recommended) or Heroku (Node + nginx buildpack)

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

### Video (Context)
“Vibe Coding” in 15 minutes: the 3 P’s (Plan → Prompt → Polish), the Vibe Loop™ (Prompt → Run → Break → Fix → Repeat), GPT‑5 vs Claude vs Gemini head‑to‑head, and going from blank screen to live site fast. Drop your vibe‑coded site link in the comments!

### Tools (links)
- Cursor: https://www.cursor.com
- Claude Code: https://www.anthropic.com/claude
- Replit: https://replit.com/
- Vibe Tunnel: https://vibetunnel.sh (or your preferred tunneling tool)
- WhisperFlow (speech‑to‑text): https://github.com/openai/whisper (or alternatives)
