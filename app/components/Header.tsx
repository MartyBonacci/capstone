import { Link, NavLink } from "react-router";

export function Header() {
  return (
    <header className="border-b border-gray-100 dark:border-gray-800">
      <nav className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          Marty Bonacci
        </Link>
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? "text-gray-900 dark:text-gray-100 font-medium"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? "text-gray-900 dark:text-gray-100 font-medium"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              }`
            }
          >
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
