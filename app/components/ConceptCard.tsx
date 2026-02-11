import { Link } from "react-router";

type ConceptCardProps = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

export function ConceptCard({ title, description, href, icon }: ConceptCardProps) {
  return (
    <Link
      to={href}
      className="group block p-6 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
    >
      <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </Link>
  );
}
