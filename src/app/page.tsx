"use client";
import { useState, useEffect } from "react";

// Import the landing page components
import Hero from "./_components/landing/Hero";
import Features from "./_components/landing/Features";
import Handbook from "./_components/landing/Handbook";
import Community from "./_components/landing/Community";
import Newsletter from "./_components/landing/Newsletter";
import Link from "next/link";

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

function TelegramLink() {
  return (
    <Link
      href="https://t.me/golang_uzbek_community"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 group"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="white"
        className="group-hover:scale-110 transition-transform"
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.5 12.5l7.5-3.5-7.5-3.5v2.5l4 1-4 1v2.5z" />
      </svg>
      <span className="font-medium">Join our Telegram</span>
      <div className="absolute -left-2 -top-2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold transform -rotate-12 animate-pulse">
        !
      </div>
    </Link>
  );
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
        <TelegramLink />
      </div>
    </ThemeProvider>
  );
}
