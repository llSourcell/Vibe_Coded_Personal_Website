# Siraj Raval's Personal Website


## Overview

This is the code for Siraj Raval's personal website. It's live at www.sirajraval.com . It's an AI‑themed personal site built with Next.js + TypeScript + Tailwind, featuring animations (GSAP), Pixi.js visuals, a projects grid, and a full‑width client logo bar. Steal it. Remix it into your own. Or just use the prompts i used to make mine into your own. It's 2025, and it's time to vibe code anything you can imagine. Let's start with your pesonal website. Share it in the comments section of the youtube video! 

### Dependencies
- Cursor: https://www.cursor.com
- Claude Code: https://www.anthropic.com/claude
- Replit: https://replit.com/
- Vibe Tunnel: https://vibetunnel.sh (or your preferred tunneling tool)
- WhisperFlow (speech‑to‑text): https://github.com/openai/whisper (or alternatives)
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

## Instructions

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

## MIT LICENSE

