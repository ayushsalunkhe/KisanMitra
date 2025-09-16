import React from 'react';
import { Button } from './ui/button';
import { Globe, Download, Menu } from 'lucide-react';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar = ({ 
  currentLanguage, 
  setLanguage, 
  languages,
  showInstallPWA,
  installPWA 
}) => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-700/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">Kisan Mitra</h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">Smart Farm Assistant</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#modules" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 hover:scale-105">
              Modules
            </a>
            <a href="#roles" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 hover:scale-105">
              Roles
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 hover:scale-105">
              About
            </a>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={currentLanguage}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-white/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 pr-10 text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-white dark:bg-slate-800">
                    {lang.name}
                  </option>
                ))}
              </select>
              <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500 dark:text-slate-400 pointer-events-none" />
            </div>

            {/* Theme Toggle */}
            <ThemeToggleButton />

            {/* Install PWA Button */}
            {showInstallPWA && (
              <Button
                variant="outline"
                size="sm"
                onClick={installPWA}
                className="hidden sm:flex items-center space-x-2 border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-500/10 hover:border-green-500/50"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Install</span>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden w-10 h-10 p-0 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;