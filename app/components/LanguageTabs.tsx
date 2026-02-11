import { useState } from "react";

const languages = ["C++", "C#", "Python", "TypeScript", "PHP"] as const;
type Language = (typeof languages)[number];

type LanguageTabsProps = {
  children: (activeLanguage: Language) => React.ReactNode;
};

export function LanguageTabs({ children }: LanguageTabsProps) {
  const [active, setActive] = useState<Language>("TypeScript");

  return (
    <div>
      <div className="flex gap-1 mb-4 border-b border-gray-200 dark:border-gray-700">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setActive(lang)}
            className={`px-4 py-2 text-sm font-medium transition-colors rounded-t-md ${
              active === lang
                ? "bg-gray-900 text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
      {children(active)}
    </div>
  );
}

export type { Language };
export { languages };
