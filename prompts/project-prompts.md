/specswarm:build


Build a portfolio website for my CNM capstone class using React Router v7 (Remix).

## What This Is
A portfolio showcasing my work as a web development instructor with 40+ years of coding experience. Narrative:
"The Teacher Who Solves Problems."

## Site Structure
- **Home (/)** — Hero with name/tagline, grid of 4 project cards
- **About (/about)** — My story: 40 years coding, teaching since 2018
- **4 Project Pages** — Conversational case studies (story-driven, not formal)

## The Four Projects

1. **CustomCult** (/projects/customcult)
    - Algorithm-driven custom snowboard design platform
    - Tech: Laravel + React + Three.js 3D visualization
    - Include React 19 modernization story (2018→2025)
    - Live at customcult.com

2. **SpecSwarm** (/projects/specswarm)
    - Claude Code plugin for spec-driven development (35 stars)
    - Evolution from spec-kit-extensions (51 stars)
    - Natural language interface for dev workflows

3. **Frame Injection** (/projects/frame-injection)
    - AI collaboration research: soft skills transfer to AI
    - Discovered techniques April 2025, validated by research later
    - Integrates 10+ peer-reviewed studies

4. **Four Minds Pattern** (/projects/four-minds)
    - Novel agentic orchestration using cognitive roles
    - Four minds at different directory hierarchy levels
    - Genuine research gap identified

## Design Requirements
- **Clean & minimal** — lots of whitespace, content-focused
- **Conversational case studies** — opening hook, story, visuals woven in, tech tags at end
- **Responsive** — works on mobile/tablet/desktop
- **Tailwind CSS** for styling

## Case Study Format
Each project page should feel like a well-written blog post:
1. Compelling opening hook (e.g., "I've been building snowboards for 6 years, but I've never touched one.")
2. The story — what sparked it, what made it interesting, how it works
3. Visuals woven into narrative (placeholder images for now)
4. Footer with GitHub link and tech stack tags

## File Structure
app/                                                                                                           
├── routes/                                                                                                    
│   ├── _index.tsx                                                                                             
│   ├── about.tsx                                                                                              
│   └── projects/                                                                                              
│       ├── customcult.tsx                                                                                     
│       ├── specswarm.tsx                                                                                      
│       ├── frame-injection.tsx                                                                                
│       └── four-minds.tsx                                                                                     
├── components/                                                                                                
│   ├── ProjectCard.tsx                                                                                        
│   ├── Header.tsx                                                                                             
│   ├── Footer.tsx                                                                                             
│   └── Layout.tsx                                                                                             
└── root.tsx

                                                                                                                
---                                                                                                            
Overview

A portfolio website for Marty Bonacci's CNM capstone class. The site showcases 40+ years of coding experience  
across two pillars: building products and building AI collaboration frameworks.

Narrative: "The Teacher Who Solves Problems" — you solve real problems, then teach others how to do the same.
                                                                                                                
---                                                                                                            
Site Architecture

Tech Stack

- React Router v7 (Remix) — demonstrates current expertise as a web dev instructor
- Clean, minimal design — whitespace-heavy, content-focused

Pages

Home (/)
- Hero: Name, tagline, brief intro
- Grid of 4 project cards linking to case study pages
- Simple footer with contact/links

Project Pages (4 total)
1. /projects/customcult — CustomCult
2. /projects/specswarm — SpecSwarm
3. /projects/frame-injection — Frame Injection
4. /projects/four-minds — Four Minds Pattern

About (/about)
- Your story: 40 years coding, teaching since 2018, practitioner-researcher journey

 ---                                                                                                            
The Four Projects

1. CustomCult

Algorithm-Driven Snowboard Design

Story arc:
- Building custom snowboards where the board designs itself from rider measurements
- Full-stack: Laravel + React + Three.js 3D visualization
- Include the React 19 modernization journey (2018 → 2025)
- Hosted at customcult.com

Key visuals: Screenshots of the 3D board viewer, before/after of tech stack evolution

2. SpecSwarm

Developer Workflow Automation

Story arc:
- Frustration with ad-hoc development → structured spec-driven approach
- Evolution from spec-kit-extensions (multi-agent, 51 stars) to SpecSwarm (Claude Code native, 35 stars)
- Natural language interface for development workflows

Key visuals: Command examples, workflow diagrams

3. Frame Injection

The Science of AI Collaboration

Story arc:
- Discovered techniques through practice (April 2025)
- Research validated them months later (Anthropic's Jan 2026 constitution statement)
- The "practitioner-researcher" identity in action
- Integrates 10+ peer-reviewed studies

Key visuals: The three core frames diagram, research timeline

4. Four Minds Pattern

Cognitive Architecture for AI

Story arc:
- Novel agentic orchestration using cognitive roles instead of tasks
- Four minds (Developer, Peer, Mentor, Highest Self) at different directory levels
- Identified genuine research gap — not in existing literature

Key visuals: Four minds hierarchy diagram, workflow examples
                                                                                                                
---                                                                                                            
Case Study Format

Each project page is conversational, blog-post style:

1. Opening hook — A compelling first line that draws you in
2. The story — What sparked it, what made it interesting, how it works, what it became
3. Visuals — Screenshots, diagrams woven into the narrative
4. Footer — GitHub link, live site (if applicable), tech stack as tags

 ---                                                                                                            
Project Structure

capstone-mentor/                                                                                               
├── app/                                                                                                       
│   ├── routes/                                                                                                
│   │   ├── _index.tsx          # Home page                                                                    
│   │   ├── about.tsx           # About page                                                                   
│   │   └── projects/                                                                                          
│   │       ├── customcult.tsx                                                                                 
│   │       ├── specswarm.tsx                                                                                  
│   │       ├── frame-injection.tsx                                                                            
│   │       └── four-minds.tsx                                                                                 
│   ├── components/                                                                                            
│   │   ├── ProjectCard.tsx     # Card for home grid                                                           
│   │   ├── Header.tsx                                                                                         
│   │   ├── Footer.tsx                                                                                         
│   │   └── Layout.tsx                                                                                         
│   ├── styles/                                                                                                
│   │   └── app.css                                                                                            
│   └── root.tsx                                                                                               
├── public/                                                                                                    
│   └── images/                 # Project screenshots, diagrams                                                
├── package.json                                                                                               
└── vite.config.ts
                                                                                                                
---                                                                                                            
Implementation Steps

Phase 1: Project Setup

1. Initialize React Router v7 project in capstone-mentor/
2. Set up basic routing structure
3. Configure Tailwind CSS for clean minimal styling

Phase 2: Layout & Components

1. Create Layout component with Header/Footer
2. Build ProjectCard component for home grid
3. Implement responsive design

Phase 3: Home Page

1. Hero section with intro
2. 4-project grid with cards
3. Link cards to case study routes

Phase 4: Case Study Pages

1. CustomCult page with story and visuals
2. SpecSwarm page with story and visuals
3. Frame Injection page with story and visuals
4. Four Minds page with story and visuals

Phase 5: About Page

1. Personal narrative
2. Teaching background
3. Contact/links

Phase 6: Polish

1. Add project images/diagrams
2. Refine typography and spacing
3. Test responsive behavior
4. Deploy

 ---                                                                                                            
Verification

1. npm run dev — Dev server runs without errors
2. All routes render correctly (/, /about, /projects/*)
3. Responsive design works on mobile/tablet/desktop
4. Links to GitHub repos work
5. Lighthouse score: aim for 90+ on Performance and Accessibility                                              
   The important repos are:                                                                                        
   https://github.com/MartyBonacci/specswarm                                                                       
   https://github.com/MartyBonacci/specswarm                                                                       
   https://github.com/MartyBonacci/expressibility-gap                                                              
   https://github.com/MartyBonacci/four-minds-pattern                                                              
   https://github.com/MartyBonacci/spec-kit-extensions                                                             
   https://github.com/MartyBonacci/customcult 


"Please give me a list of the images that are needed to complete this site along with size requirements/flexability"