"use client";
import { useState, useEffect } from "react";

// Import the landing page components
import Hero from "./_components/landing/Hero";
import Features from "./_components/landing/Features";
import Handbook from "./_components/landing/Handbook";
import Community from "./_components/landing/Community";
import Newsletter from "./_components/landing/Newsletter";

// Create a theme provider component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Only run once on the client
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // Check system preference if no saved preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    setMounted(true);
  }, []);

  // Function to toggle theme that any component can access
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Make toggleTheme available globally through window object
  useEffect(() => {
    if (mounted) {
      // @ts-ignore - Adding custom property to window
      window.toggleTheme = toggleTheme;
    }
  }, [mounted]);

  // Prevent flash of unstyled content
  if (!mounted) return null;

  return children;
}

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800/95 dark:to-blue-950 overflow-hidden pt-[40px] transition-colors duration-500">
        <Hero />
        <Features />
        <Handbook />
        <Community />
        <Newsletter />
      </div>
    </ThemeProvider>
  );
}
