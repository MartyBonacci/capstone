import type { MetaFunction } from "react-router";
import { Layout } from "../../components/Layout";
import { ConceptCard } from "../../components/ConceptCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Concepts | Marty Bonacci" },
    {
      name: "description",
      content:
        "OOP concepts demonstrated across multiple languages - classes, inheritance, GUI programming, file and database persistence, and web research.",
    },
  ];
};

const concepts = [
  {
    title: "Classes",
    description: "Defining, instantiating, and using classes across 5 languages",
    href: "/concepts/classes",
    icon: (
      <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Inheritance & Polymorphism",
    description: "Type hierarchies, method overriding, and SOLID principles in TypeScript",
    href: "/concepts/inheritance",
    icon: (
      <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "GUI Programming",
    description: "Building interfaces with React - components, state, events, and modals",
    href: "/concepts/gui",
    icon: (
      <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
  },
  {
    title: "File Persistence",
    description: "Reading, writing, and processing files with real-world image pipelines",
    href: "/concepts/file-persistence",
    icon: (
      <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Database Persistence",
    description: "Connections, CRUD, migrations, and SQL injection prevention",
    href: "/concepts/database",
    icon: (
      <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Web Research",
    description: "Three real problems that required deep research to solve",
    href: "/concepts/web-research",
    icon: (
      <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export default function ConceptsIndex() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          OOP Concepts
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          Object-oriented programming demonstrated across real projects and
          multiple languages. Not textbook examples — real code solving real
          problems.
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500">
          Each concept is shown with code from actual production applications:
          CustomCult (a snowboard design platform) and Tweeter (a social media
          app built with React Router v7).
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
          Topics
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept) => (
            <ConceptCard key={concept.href} {...concept} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
