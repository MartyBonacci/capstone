export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 mt-auto">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/MartyBonacci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/martybonacci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
