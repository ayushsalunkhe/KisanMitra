import React from 'react';
import { Button } from './ui/button';
import { Globe, Github, Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = ({ currentLanguage, setLanguage, languages, t }) => {
  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset all demo data? This action cannot be undone.')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-700/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Kisan Mitra</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Smart Farm Assistant</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Empowering farmers with cutting-edge technology. Offline-first, multilingual, 
              and accessible farm management tools designed for the modern agricultural landscape.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                onClick={() => alert('GitHub repository would open here')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                onClick={() => alert('Email contact would open here')}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#modules" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span>Core Modules</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#roles" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span>User Roles</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span>About Platform</span>
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <button 
                  onClick={handleResetData}
                  className="text-slate-400 hover:text-red-400 transition-colors duration-200 text-left"
                >
                  Reset Demo Data
                </button>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Platform Features</h4>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-400">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-3" />
                <span>Works Completely Offline</span>
              </li>
              <li className="flex items-center text-slate-400">
                <div className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
                <span>8 Indian Languages</span>
              </li>
              <li className="flex items-center text-slate-400">
                <div className="w-2 h-2 rounded-full bg-purple-400 mr-3" />
                <span>Role-Based Interface</span>
              </li>
              <li className="flex items-center text-slate-400">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3" />
                <span>Progressive Web App</span>
              </li>
              <li className="flex items-center text-slate-400">
                <div className="w-2 h-2 rounded-full bg-red-400 mr-3" />
                <span>Privacy First Design</span>
              </li>
            </ul>
          </div>

          {/* Contact & Language */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Language & Support</h4>
            <div className="space-y-6">
              {/* Language Selector */}
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-3">
                  Select Language
                </label>
                <div className="relative">
                  <select
                    value={currentLanguage}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full appearance-none bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code} className="bg-slate-800">
                        {lang.name}
                      </option>
                    ))}
                  </select>
                  <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-slate-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">support@kisanmitra.com</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">+91-XXXX-XXXX</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span className="text-sm">Made in India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>© 2024 Kisan Mitra</span>
              <span>•</span>
              <span>Version 1.0.0</span>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>for farmers</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-sm text-slate-400">Powered by:</span>
              <div className="flex items-center space-x-3">
                <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full">
                  PWA
                </span>
                <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full">
                  FastAPI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;