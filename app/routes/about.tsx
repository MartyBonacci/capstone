import type { MetaFunction } from "react-router";
import { Layout } from "../components/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Marty Bonacci" },
    {
      name: "description",
      content:
        "40+ years of coding experience, web development instructor since 2018, and AI collaboration researcher.",
    },
  ];
};

export default function About() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          About
        </h1>

        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
            How I Work
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">
              Solve the problem in front of you.
            </strong>{" "}
            The best solutions come from lived experience, not abstract
            requirements. Every project on this site started because a real
            problem needed solving and no existing solution fit.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">
              Value first, access second.
            </strong>{" "}
            Show up and contribute before asking for anything. Assemble the
            Shopbot before asking to use it. Put in the extra hours because
            that's where the real learning happens. The opportunity reveals
            itself after you've already created value.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">
              Document what works.
            </strong>{" "}
            Solutions trapped in your head help no one. If a pattern works,
            write it down. If a tool helps, share it. The documentation is part
            of the work, not an afterthought.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">
              Practice first, theory second.
            </strong>{" "}
            Do the work, then step back to understand why it worked. I was using
            collaborative AI framing for nine months before research validated
            the approach. The insight came from doing, not reading.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">
              Leadership by vacuum.
            </strong>{" "}
            When structure is missing, become the structure. Don't wait for the
            job description to exist. Don't wait for permission. See what's
            needed and step into it.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
            Where This Comes From
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            These aren't principles I decided to follow. They're patterns I
            noticed after the fact.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            When Albuquerque's makerspace sat unopened in crates, I assembled
            the Shopbot before anyone asked. When the bootcamp needed curriculum
            for AI-assisted development, I was already teaching it. When Claude
            Code announced plugins, I shipped one of the first.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            CustomCult, SpecSwarm, Frame Injection, Four Minds Pattern. Each one
            started the same way: a problem needed solving, I built a solution,
            I shared what I learned.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
            What I'm Looking For
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I want to help developers work better with AI.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I've been doing this at the bootcamp level, one cohort at a time.
            Through open source, one plugin at a time. Through documentation,
            one pattern at a time.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm looking for a platform to do it at scale.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The gap between what AI tools can do and what developers actually do
            with them is enormous. I've spent the last year on both sides of
            that gap: building the tools AND teaching people to use them.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            If you're working on developer experience, developer education, or
            developer relations for AI tools, let's talk.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Get in Touch
          </h3>
          <div className="flex gap-6">
            <a
              href="https://github.com/MartyBonacci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/martybonacci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </article>
    </Layout>
  );
}
