import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Hook to access and toggle dark mode from any component
 * @returns Object with isDarkMode state and toggleDarkMode function
 */
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set initial state based on document class on mount
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(document.documentElement.classList.contains("dark"));
    
    // Listen for changes to HTML class to keep state in sync
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.attributeName === "class" &&
          mutation.target === document.documentElement
        ) {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Toggle dark mode function that any component can call
  const toggleDarkMode = () => {
    // @ts-expect-error - Using global function from ThemeProvider
    if (typeof window !== 'undefined' && window.toggleTheme) {
      // @ts-expect-error - just an error, never mind
      window.toggleTheme();
      setIsDarkMode(!isDarkMode);
    }
  };

  return { isDarkMode, toggleDarkMode, mounted };
}
