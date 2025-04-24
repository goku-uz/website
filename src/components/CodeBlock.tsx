"use client";

import { useEffect, useState } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";

interface CodeBlockProps {
  code: string;
  language: string;
  theme?: string;
}

export default function CodeBlock({
  code = "", // Provide default empty string to avoid undefined
  language,
  theme = "github-dark",
}: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Skip processing if code is undefined or null
    if (code === undefined || code === null) {
      setIsLoading(false);
      return;
    }

    const highlightCode = async () => {
      try {
        // Import shiki dynamically to avoid SSR issues
        const shiki = await import("shiki");

        // Use createHighlighter instead of getHighlighter
        const highlighter = await shiki.createHighlighter({
          themes: [theme as BundledTheme],
          langs: [(language || "text") as BundledLanguage], // Fallback to text if language is undefined
        });

        // Make sure we have a string before highlighting
        const codeToHighlight = typeof code === "string" ? code : String(code);

        // Generate HTML with properly typed options
        const html = highlighter.codeToHtml(codeToHighlight, {
          lang: (language || "text") as BundledLanguage,
          theme: theme as BundledTheme,
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

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-700 shadow-lg my-4 bg-gray-950">
      {/* Top bar with language badge */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs font-mono text-gray-300 bg-gray-700 px-2 py-1 rounded-md">
          {language}
        </span>

        <button
          onClick={handleCopyCode}
          className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded-md transition-colors"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>

      {isLoading ? (
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto animate-pulse flex items-center justify-center h-48">
          <span>Loading code...</span>
        </div>
      ) : (
        <div
          className="shiki-container overflow-x-auto p-4 rounded-b-lg [&_pre]:!bg-transparent [&_code]:font-mono [&_code]:text-sm"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      )}
    </div>
  );
}
