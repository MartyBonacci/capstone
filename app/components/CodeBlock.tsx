type CodeBlockProps = {
  language: string;
  children: string;
  filename?: string;
};

export function CodeBlock({ language, children, filename }: CodeBlockProps) {
  return (
    <div className="mb-6 rounded-lg overflow-hidden">
      <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 text-xs text-gray-400">
        <span className="font-mono">{language}</span>
        {filename && (
          <>
            <span className="text-gray-600">|</span>
            <span className="text-gray-500">{filename}</span>
          </>
        )}
      </div>
      <pre className="bg-gray-900 p-4 overflow-x-auto !mt-0 !mb-0 !rounded-t-none">
        <code className="text-sm text-gray-300 !bg-transparent !p-0">{children}</code>
      </pre>
    </div>
  );
}
