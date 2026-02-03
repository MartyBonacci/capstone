import type { MetaFunction } from "react-router";
import { CaseStudyLayout } from "../../components/CaseStudyLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "CustomCult | Marty Bonacci" },
    {
      name: "description",
      content:
        "Algorithm-driven snowboard design platform where the board designs itself from rider measurements.",
    },
  ];
};

export default function CustomCult() {
  return (
    <CaseStudyLayout
      title="CustomCult"
      githubUrl="https://github.com/MartyBonacci/customcult"
      liveUrl="https://customcult.com"
      tags={["Laravel", "React", "Three.js", "MySQL", "REST API"]}
    >
      <div className="mb-12 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
        <img
          src="/images/customcult-hero.png"
          alt="CustomCult board configurator interface"
          className="w-full h-auto"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        The Problem
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I wanted a snowboard that fit me perfectly. Not "close enough." Not
        "this is what we have in stock." Perfect.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The problem is that custom snowboards require expertise most people
        don't have. How does rider weight affect flex? How does boot size
        determine waist width? How does riding style change sidecut geometry?
        These relationships are nonlinear and interdependent. You either spend
        years learning it, or you trust someone who has.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        After years of building boards by hand, I knew these relationships cold.
        But that knowledge was trapped in my head, useless to anyone who wasn't
        standing in my shop.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Solution
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I built a platform where your board is designed by an algorithm that
        encodes everything I know about board geometry. Every relationship,
        every tradeoff, every intuition, combined with data from every rider
        configuration that came before yours.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        You enter five inputs: height, weight, boot size, stance width, and
        riding style. The algorithm outputs a complete specification: length,
        width, sidecut radius, flex pattern, insert positions.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Then you see it. A Three.js viewer renders your board in real time.
        Rotate it. Zoom in. Watch it change as you adjust your inputs.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Full Stack (And I Mean Full)
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Here's what makes CustomCult different from other "custom" products: I
        didn't just build the software. I built the entire system.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The algorithm that designs the board? I wrote it.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The 3D visualizer that shows it to you? I built it.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The toolpath generator that translates specs into CNC instructions? I
        created it.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The drag knife tooling for cutting base material? I invented it when
        nothing on the market worked.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The molding and pressing system? Built that too.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The color correction system for sublimation printing? Same story.
        Problem, no solution, so I built one.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        From the moment you enter your measurements to the moment a finished
        board ships, every piece of technology in that chain is something I
        made.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Tech
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        <strong className="text-gray-900 dark:text-gray-100">Backend:</strong>{" "}
        Laravel handles the parametric calculations and order management.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        <strong className="text-gray-900 dark:text-gray-100">Frontend:</strong>{" "}
        React with Three.js for real-time 3D visualization. Originally built in
        2018 with class components and Redux. Modernized in 2025 to React 19
        with hooks, significantly cleaner and lighter.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        <strong className="text-gray-900 dark:text-gray-100">
          Manufacturing:
        </strong>{" "}
        Custom toolpaths, custom cutting tools, custom molding system, custom
        color workflow. The software doesn't stop at the screen. It runs the
        shop.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        What I Learned
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Capturing expertise in software is harder than writing code. The
        algorithm works because I spent years building boards first, not because
        I'm a good programmer. You can't encode intuition you don't have.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        That insight shapes everything I build now: solve your own problem
        first. Deeply. Then the software writes itself.
      </p>
    </CaseStudyLayout>
  );
}
