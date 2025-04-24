import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

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
  const { theme, setTheme } = useTheme();

  // Check if dark mode is active once component is mounted
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(theme === 'dark');
  }, [theme]);

  // Toggle dark mode function that any component can call
  const toggleDarkMode = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return { isDarkMode, toggleDarkMode, mounted };
}
