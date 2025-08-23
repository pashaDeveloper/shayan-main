"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="تغییر تم"
      className="w-10 h-10 bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm 
                 rounded-full flex items-center justify-center 
                 text-gray-700 dark:text-gray-300 
                 hover:text-[#0F4C75] dark:hover:text-[#FFD700] 
                 hover:border-gray-200 dark:hover:bg-gray-700/50 
                 transition-all duration-300 
                 border border-gray-200/20 dark:border-gray-700/20"
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
