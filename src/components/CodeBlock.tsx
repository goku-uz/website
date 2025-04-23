"use client";

import { useEffect, useState } from "react";
import type { BundledLanguage, BundledTheme } from 'shiki';

interface CodeBlockProps {
  code: string;
  language: string;
  theme?: string;
}

export default function CodeBlock({
  code,
  language,
  theme = "github-dark",
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const highlightCode = async () => {
      try {
        // Import shiki dynamically to avoid SSR issues
        const shiki = await import('shiki');
        
        // Use createHighlighter instead of getHighlighter
        const highlighter = await shiki.createHighlighter({
          themes: [theme as BundledTheme],
          langs: [language as BundledLanguage],
        });

        // Generate HTML with properly typed options
        const html = highlighter.codeToHtml(code, { 
          lang: language as BundledLanguage,
          theme: theme as BundledTheme
        });
        
        setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
      } finally {
        setIsLoading(false);
      }
    };

    highlightCode();
  }, [code, language, theme]);

  return (
    <div className="relative rounded-lg overflow-hidden">
      {isLoading ? (
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto animate-pulse flex items-center justify-center h-48">
          <span>Loading code...</span>
        </div>
      ) : (
        <div
          className="shiki-container overflow-x-auto p-6 rounded-lg"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      )}
      <div className="absolute top-3 right-3 bg-gray-800 bg-opacity-70 text-xs text-white px-2 py-1 rounded">
        {language}
      </div>
    </div>
  );
}
