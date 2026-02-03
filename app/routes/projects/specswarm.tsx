import type { MetaFunction } from "react-router";
import { CaseStudyLayout } from "../../components/CaseStudyLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "SpecSwarm | Marty Bonacci" },
    {
      name: "description",
      content:
        "Claude Code plugin for spec-driven development with natural language interface.",
    },
  ];
};

export default function SpecSwarm() {
  return (
    <CaseStudyLayout
      title="SpecSwarm"
      githubUrl="https://github.com/MartyBonacci/specswarm"
      liveUrl="https://specswarm.com"
      tags={["Claude Code Plugin", "Skills", "Slash Commands", "Subagents"]}
    >
      <div className="mb-12 rounded-lg overflow-hidden bg-white p-6 border border-gray-200 dark:border-gray-700">
        <img
          src="/images/specswarm-orchestration.svg"
          alt="SpecSwarm orchestration workflow"
          className="w-full h-auto"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        The Problem
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        AI kept going off spec, off stack, off plan.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I'd start a feature with a clear idea of what I wanted. Three files in,
        the AI would introduce a library I didn't ask for. Five files in, it
        would skip a step I needed. By the end, I had code that technically
        worked but didn't match the architecture I had in my head.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The problem isn't that AI writes bad code. The problem is that AI writes
        code without a plan. And without a plan, even good code ends up in the
        wrong place.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Solution
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        SpecSwarm enforces a simple discipline: specification first, then
        planning, then implementation.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        You describe what you want in plain language. The system generates a
        detailed spec. You clarify ambiguities. Then, and only then, does
        implementation begin. Each step follows the plan. Each file fits the
        architecture.
      </p>

      <div className="my-8 bg-gray-900 rounded-lg p-6 font-mono text-sm">
        <div className="text-green-400">/specswarm:build "Add user authentication with email/password"</div>
        <div className="text-gray-400 mt-4">? Use OAuth or custom auth? → Custom</div>
        <div className="text-gray-400">? Session or JWT tokens? → JWT</div>
        <div className="text-blue-400 mt-4">→ Generating spec...</div>
        <div className="text-blue-400">→ Creating implementation plan...</div>
        <div className="text-blue-400">→ Implementing tasks 1/5...</div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The AI still writes the code. But now it writes the right code, in the
        right order, following the right stack.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Evolution
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        SpecSwarm is actually the second generation.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The first version was spec-kit-extensions, a set of AI-agnostic commands
        that orchestrated multiple AI agents. It worked, but it was complex.
        Different agents for different tasks. Coordination overhead. Context
        switching between tools.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        When Claude Code announced plugin support, I saw the opportunity.
        Instead of orchestrating external agents, I could build directly into
        the Claude Code environment. Same workflow, but native. The codebase
        shrank dramatically. The complexity vanished.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Commands
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        SpecSwarm provides a vocabulary for development workflows:
      </p>

      <ul className="space-y-3 mb-6">
        <li className="text-gray-600 dark:text-gray-400">
          <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            /specswarm:init
          </code>{" "}
          - Scan project and establish tech stack and coding standards
        </li>
        <li className="text-gray-600 dark:text-gray-400">
          <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            /specswarm:build
          </code>{" "}
          - Feature from description to implementation
        </li>
        <li className="text-gray-600 dark:text-gray-400">
          <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            /specswarm:fix
          </code>{" "}
          - Bug fix with automatic regression tests
        </li>
        <li className="text-gray-600 dark:text-gray-400">
          <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            /specswarm:ship
          </code>{" "}
          - Quality validation and merge
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        What I Learned
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The tools we use shape how we think. AI makes it trivially easy to
        generate code, but generating code isn't the hard part. Generating the
        right code, at the right time, in the right place is the hard part.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        SpecSwarm encodes a discipline I had to learn the hard way: think before
        you code. Specify before you implement. Verify before you ship.
      </p>
    </CaseStudyLayout>
  );
}
