import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggleButton = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        toggleTheme();
      });
    } else {
      toggleTheme();
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg border border-white/20 dark:border-slate-600/50 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 group ${className}`}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 ease-in-out ${
            theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-50'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-300 transition-all duration-500 ease-in-out ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggleButton;