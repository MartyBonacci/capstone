import type { MetaFunction } from "react-router";
import { CaseStudyLayout } from "../../components/CaseStudyLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "Four Minds Pattern | Marty Bonacci" },
    {
      name: "description",
      content:
        "Novel agentic orchestration using cognitive roles instead of tasks at different hierarchy levels.",
    },
  ];
};

export default function FourMinds() {
  return (
    <CaseStudyLayout
      title="Four Minds Pattern"
      githubUrl="https://github.com/MartyBonacci/four-minds-pattern"
      tags={["AI Agents", "Cognitive Architecture", "Orchestration", "Research"]}
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        The Problem
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I needed a guide. I got recursive inception.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I wanted help using Claude Code more effectively. So I asked Claude Code
        for guidance. That worked, but then I needed help implementing what it
        suggested. So I opened another instance to do the implementation while
        the first one kept guiding me.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Then I needed a space to brainstorm without polluting my project. So I
        opened a third instance in a separate directory.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Then I noticed patterns across all my projects and wanted meta-level
        advice. So I opened a fourth instance from my home directory.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Four instances of Claude Code, each in a different directory, each with
        a different cognitive role. I didn't design this. It emerged from trying
        to think better.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Pattern
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Most AI agent systems organize around tasks: a coding agent, a testing
        agent, a documentation agent. Each optimizes for its task, but no one
        optimizes for the whole.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Four Minds organizes around cognitive roles mapped to directory
        hierarchy:
      </p>

      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border-l-4 border-amber-500">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            Highest Self (Home directory)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sees all projects. Provides meta-level guidance on workflows,
            cross-project patterns, and how you work. This is where SpecSwarm
            and the Four Minds Pattern itself came from.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border-l-4 border-purple-500">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            Mentor (Project-mentor directory)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Sees both the project and the ideation space. Crafts strategic
            prompts for Developer. Coordinates between thinking and doing.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border-l-4 border-green-500">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            Peer (Sibling directory to project)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Safe space for brainstorming. No git history, no implementation
            pressure. Just exploration. Creates planning documents, not code.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border-l-4 border-blue-500">
          <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
            Developer (Project directory)
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pure execution. Full project context. Implements what Mentor
            directs, informed by what Peer explored.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Directory Structure
      </h2>

      <div className="my-8 bg-gray-900 rounded-lg p-6 font-mono text-sm">
        <div className="text-amber-400">
          ~/{"                              "}# Highest Self sees everything
        </div>
        <div className="text-gray-500">└── code-projects/</div>
        <div className="text-purple-400 ml-4">
          └── my-app-mentor/{"          "}# Mentor sees project + peer
        </div>
        <div className="text-blue-400 ml-8">
          ├── my-app/{"             "}# Developer sees project only
        </div>
        <div className="text-green-400 ml-8">
          └── my-app-peer/{"        "}# Peer sees ideation only
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Each directory level gives that Mind different context. Developer can't
        see Peer's messy brainstorms. Mentor can see both. Highest Self sees
        patterns across all your projects.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        Why This Works
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        This isn't about coding faster. It's about thinking better.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        When you use a single AI instance, you constantly context-switch between
        strategic thinking and execution. You interrupt implementation to
        reconsider architecture. You pollute brainstorming with implementation
        constraints.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Four Minds separates these cognitive modes physically. Each Mind stays
        in its lane. The separation creates clarity.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The most powerful workflow: ask Mentor to craft a prompt for Developer.
        Mentor sees the full picture, thinks strategically, and writes clear
        instructions. Developer executes without strategic confusion.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        What I Learned
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I didn't set out to create a cognitive architecture. I just kept opening
        new terminals because I needed different kinds of thinking.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The pattern emerged from practice. The theory came later.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        That seems to be how I work: solve the problem first, understand why it
        worked second.
      </p>
    </CaseStudyLayout>
  );
}
