# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Portfolio website for Marty Bonacci's CNM capstone class. Showcases 40+ years of coding experience across two pillars: building products and building AI collaboration frameworks.

**Narrative:** "The Teacher Who Solves Problems"

## Technology Stack

- **Framework:** React Router v7 (Framework Mode)
- **Language:** TypeScript (strict)
- **Build:** Vite
- **Styling:** Tailwind CSS v4
- **Font:** Inter (Google Fonts)

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run start        # Run production server
npm run typecheck    # TypeScript type checking
```

## Site Structure

```
app/
├── routes/
│   ├── home.tsx                    # Home page (/)
│   ├── about.tsx                   # About page (/about)
│   └── projects/
│       ├── customcult.tsx          # /projects/customcult
│       ├── specswarm.tsx           # /projects/specswarm
│       ├── frame-injection.tsx     # /projects/frame-injection
│       └── four-minds.tsx          # /projects/four-minds
├── components/
│   ├── Header.tsx                  # Site navigation
│   ├── Footer.tsx                  # Site footer
│   ├── Layout.tsx                  # Page wrapper
│   ├── ProjectCard.tsx             # Home page project cards
│   └── CaseStudyLayout.tsx         # Case study page wrapper
├── routes.ts                       # Route configuration
├── root.tsx                        # Root layout
└── app.css                         # Global styles
```

## Key Files

- `app/routes.ts` - All route definitions
- `app/components/CaseStudyLayout.tsx` - Shared layout for all project pages
- `app/app.css` - Tailwind config and prose styles

## GitHub Repos Referenced

- CustomCult: https://github.com/MartyBonacci/customcult
- SpecSwarm: https://github.com/MartyBonacci/specswarm
- Frame Injection: https://github.com/MartyBonacci/expressibility-gap
- Four Minds: https://github.com/MartyBonacci/four-minds-pattern
- spec-kit-extensions: https://github.com/MartyBonacci/spec-kit-extensions

## SpecSwarm Configuration

Project governance files in `.specswarm/`:
- `constitution.md` - Core principles
- `tech-stack.md` - Approved technologies
- `quality-standards.md` - Quality gates
