import type { MetaFunction } from "react-router";
import { Layout } from "../components/Layout";
import { ProjectCard } from "../components/ProjectCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Marty Bonacci | Solving Problems. Sharing Solutions." },
    {
      name: "description",
      content:
        "Portfolio of Marty Bonacci - 40+ years of coding experience, web development instructor, and AI collaboration researcher.",
    },
  ];
};

const projects = [
  {
    title: "CustomCult",
    hook: "No one made the perfect-fitting snowboard...",
    href: "/projects/customcult",
    tags: ["Laravel", "React", "Three.js"],
    image: "/images/customcult-screenshot.png",
  },
  {
    title: "SpecSwarm",
    hook: "AI kept going off spec, off stack, off plan...",
    href: "/projects/specswarm",
    tags: ["Claude Code", "TypeScript", "AI"],
    image: "/images/specswarm-logo.svg",
    imageBgLight: true,
  },
  {
    title: "Frame Injection",
    hook: "What if AI responded to belief the same way people do...",
    href: "/projects/frame-injection",
    tags: ["AI Research", "Prompt Engineering"],
    image: "/images/frame-injection.png",
  },
  {
    title: "Four Minds Pattern",
    hook: "I needed a guide. I got recursive inception...",
    href: "/projects/four-minds",
    tags: ["AI Agents", "Cognitive Architecture"],
    image: "/images/four-minds-pattern.png",
    imageBgLight: true,
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Solving Problems. Sharing Solutions.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          These projects started the same way. I had a problem and no solution.
          So I built one. Then it turned out other people had the same problems.
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 mb-4">
          CustomCult began because no one made the perfect fitting snowboard.
          SpecSwarm because I needed better AI development workflows. Frame
          Injection because I wasn't getting the results I wanted from AI.
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500">
          Right now I'm focused on human-AI collaboration. Building tools and
          frameworks that make developers more effective with AI, and
          documenting what actually works.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
          Selected Work
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
