import { Link } from "react-router";

type ProjectCardProps = {
  title: string;
  hook: string;
  href: string;
  tags: string[];
  image?: string;
  imageBgLight?: boolean;
};

export function ProjectCard({ title, hook, href, tags, image, imageBgLight }: ProjectCardProps) {
  return (
    <Link
      to={href}
      className="group block p-6 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
    >
      <div className={`aspect-video rounded-md mb-4 overflow-hidden ${imageBgLight ? "bg-white p-4" : "bg-gray-50 dark:bg-gray-900"}`}>
        {image ? (
          <img
            src={image}
            alt={title}
            className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${imageBgLight ? "object-contain" : "object-cover"}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">
        {hook}
      </p>
      <p className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors mb-4">
        <span className="text-gray-400 dark:text-gray-500 mr-2">→</span>
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
