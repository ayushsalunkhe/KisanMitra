import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight, Wifi, Globe, Users, Sparkles } from 'lucide-react';

const Hero = ({ t }) => {
  const scrollToModules = () => {
    document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRoles = () => {
    document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMzIzMjMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 via-transparent to-gray-100/50 dark:from-slate-900/50 dark:via-transparent dark:to-slate-900/50" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Next-Gen Farm Management
            </Badge>
          </div>

          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Smart Farm
              <br />
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Management
              </span>
              <br />
              <span className="text-slate-700 dark:text-slate-300">Made Simple</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools for farmers, veterinarians, and compliance teams. 
              <br className="hidden md:block" />
              Offline-first, multilingual, and built for the modern farm.
            </p>
          </div>

          {/* Feature Chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-full px-6 py-3">
              <Wifi className="w-5 h-5 text-green-500 dark:text-green-400" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Offline PWA</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-blue-500 dark:text-blue-400" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">8 Languages</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-purple-500 dark:text-purple-400" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">Role-Based</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToModules}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transform hover:scale-105 transition-all duration-300"
            >
              Explore Modules
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToRoles}
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm bg-white/20 dark:bg-slate-800/20 transition-all duration-300"
            >
              Choose Your Role
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 dark:text-green-400 mb-2">10+</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Core Modules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2">8</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 dark:text-purple-400 mb-2">100%</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Offline Ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000" />
    </section>
  );
};

export default Hero;