"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Purple Mode" : "Switch to Dark Mode"}
      className="relative p-2 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 dark:text-purple-300 backdrop-blur-md hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center justify-center cursor-pointer group"
    >
      {isDark ? (
        <Sun size={15} className="text-yellow-300 group-hover:rotate-45 transition-transform" />
      ) : (
        <Moon size={15} className="text-purple-700 group-hover:-rotate-12 transition-transform" />
      )}
    </button>
  );
}
