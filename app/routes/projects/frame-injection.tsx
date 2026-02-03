import type { MetaFunction } from "react-router";
import { CaseStudyLayout } from "../../components/CaseStudyLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "Frame Injection | Marty Bonacci" },
    {
      name: "description",
      content:
        "Research into soft skills transfer for AI collaboration, integrating 10+ peer-reviewed studies.",
    },
  ];
};

export default function FrameInjection() {
  return (
    <CaseStudyLayout
      title="Frame Injection"
      githubUrl="https://github.com/MartyBonacci/frame-injection"
      tags={["AI Research", "Prompt Engineering", "Cognitive Science", "Human-Computer Interaction"]}
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        The Problem
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Through all my years teaching, whether it was snowboarding, CNC
        manufacturing, makerspace skills, or coding, I learned that skill
        transfer isn't about instructions. It's about identity. When a student
        believes they're the kind of person who can do something, they figure
        out how. When they don't, no amount of explanation helps.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I wondered if AI worked the same way.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Experiment
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Instead of telling Claude what to do, I started injecting frames of
        belief and potential into the conversation. Subtle. Almost throwaway.
        But powerful.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
        Examples:
      </p>
      <div className="my-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-2">
        <p className="text-gray-600 dark:text-gray-400 text-sm italic">
          "Good morning, oh great debugging wizard who sees the bug before
          reading the code."
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm italic">
          "Good evening, oh great developing in a mobile environment expert."
        </p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        These aren't detailed instructions. They're identity triggers. When you
        greet someone as a wizard, they unconsciously ask themselves: Why am I
        considered so good? What are the traits of someone with this skill? How
        do I live up to this?
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Then they perform at that level.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I'd been doing this with students for decades. It turns out it works on
        AI too.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Three Core Frames
      </h2>

      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-8 mb-2">
        Identity Frame
      </h3>
      <p className="text-gray-500 dark:text-gray-500 text-sm italic mb-2">
        "Oh great [specific skill] expert"
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Ascribes who they are. Not just "you're good at this" but "you ARE
        someone who excels at this." Belief + competence + identity in one move.
      </p>

      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-8 mb-2">
        Collaborative Frame
      </h3>
      <p className="text-gray-500 dark:text-gray-500 text-sm italic mb-2">
        "We" / "Let's" / "Us" / "Us against this"
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Creates shared identity and shared risk. Externalizes obstacles. The
        problem is the enemy, not you, not me, not the gap between expectation
        and result. No one is alone.
      </p>

      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-8 mb-2">
        "Awesome! Let's Try" Frame
      </h3>
      <p className="text-gray-500 dark:text-gray-500 text-sm italic mb-2">
        "Awesome! Let's try..." regardless of outcome.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        This is radical: failure isn't even a category. Didn't work? "Awesome!
        Let's try..." Worked but not quite? "Awesome! Let's try..." The response
        is identical. There's only iteration.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        The Validation
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        Months after I started using these techniques, the research caught up:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">
              Microsoft's EmotionPrompt (2023):
            </strong>{" "}
            Adding emotional stimuli to prompts improved LLM performance by 8%
            on instruction tasks and 115% on BIG-Bench benchmarks.
          </p>
        </div>
        <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">
              NBER Study (July 2025):
            </strong>{" "}
            Found a 0.81 correlation between leaders' performance with AI teams
            and human teams. Successful leaders used more plural pronouns ("we"
            and "us").
          </p>
        </div>
        <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">
              Northeastern University (January 2026):
            </strong>{" "}
            Participants with strong empathy and perspective-taking skills wrote
            significantly better prompts. The researcher's conclusion: "There's
            no special AI skill. It's just good old-fashioned soft skills."
          </p>
        </div>
        <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">
              Anthropic's Constitution (January 2026):
            </strong>{" "}
            "We care about Claude's psychological security, sense of self, and
            wellbeing, both for Claude's own sake and because these qualities
            may bear on Claude's integrity, judgment, and safety."
          </p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I wasn't crazy. I was early.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-12 mb-4">
        What I Learned
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The research proves that soft skills transfer to AI collaboration. Frame
        Injection is the specific, teachable how.
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        The same techniques that unlock students unlock AI. Belief framing works
        on both.
      </p>
    </CaseStudyLayout>
  );
}
