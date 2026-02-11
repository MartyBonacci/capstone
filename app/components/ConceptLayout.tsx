import { Link } from "react-router";
import { Layout } from "./Layout";

type ConceptLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function ConceptLayout({ title, children }: ConceptLayoutProps) {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/concepts"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to concepts
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {title}
        </h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          {children}
        </div>
      </article>
    </Layout>
  );
}
