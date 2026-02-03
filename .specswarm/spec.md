# Feature Specification: Portfolio Website

## Overview

A portfolio website for Marty Bonacci's CNM capstone class showcasing 40+ years of coding experience across two pillars: building products and building AI collaboration frameworks.

**Narrative:** "The Teacher Who Solves Problems" — solving real problems, then teaching others how to do the same.

## Pages

### Home (/)
- Hero section with name, tagline, brief intro
- Grid of 4 project cards linking to case study pages
- Clean, minimal design with lots of whitespace

### About (/about)
- Personal narrative: 40 years coding, teaching since 2018
- Practitioner-researcher journey
- Contact links

### Project Case Studies (4 total)
Each follows conversational, blog-post style format:
1. Opening hook — compelling first line
2. The story — what sparked it, interesting aspects, how it works
3. Visuals — placeholder images woven into narrative
4. Footer — GitHub link, live site (if applicable), tech stack tags

#### 1. CustomCult (/projects/customcult)
- Algorithm-driven custom snowboard design platform
- Tech: Laravel + React + Three.js 3D visualization
- Story: React 19 modernization journey (2018 → 2025)
- Live: customcult.com
- GitHub: https://github.com/MartyBonacci/customcult

#### 2. SpecSwarm (/projects/specswarm)
- Claude Code plugin for spec-driven development (35 stars)
- Evolution from spec-kit-extensions (51 stars)
- Natural language interface for dev workflows
- GitHub: https://github.com/MartyBonacci/specswarm
- Related: https://github.com/MartyBonacci/spec-kit-extensions

#### 3. Frame Injection (/projects/frame-injection)
- AI collaboration research: soft skills transfer to AI
- Discovered techniques April 2025, validated by research later
- Integrates 10+ peer-reviewed studies
- GitHub: https://github.com/MartyBonacci/expressibility-gap

#### 4. Four Minds Pattern (/projects/four-minds)
- Novel agentic orchestration using cognitive roles
- Four minds at different directory hierarchy levels
- Genuine research gap identified
- GitHub: https://github.com/MartyBonacci/four-minds-pattern

## Design Requirements

- Clean & minimal — lots of whitespace, content-focused
- Conversational case studies — story-driven, not formal
- Responsive — works on mobile/tablet/desktop
- Tailwind CSS for styling
- Inter font family (already configured)

## File Structure

```
app/
├── routes/
│   ├── home.tsx              # Home page (/)
│   ├── about.tsx             # About page
│   └── projects/
│       ├── customcult.tsx
│       ├── specswarm.tsx
│       ├── frame-injection.tsx
│       └── four-minds.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
├── routes.ts                  # Route configuration
├── root.tsx
└── app.css
```

## Technical Approach

- Use React Router v7 file-based routing
- Loaders for any data (static content for now)
- Progressive enhancement — works without JS
- Tailwind CSS v4 for styling
- TypeScript strict mode

## Acceptance Criteria

1. All 6 routes render correctly
2. Responsive design works on mobile/tablet/desktop
3. Navigation between pages works
4. GitHub links point to correct repos
5. Clean, minimal aesthetic achieved
6. Dev server runs without errors
