import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { 
  MapPin, 
  Cloud, 
  Calendar, 
  Wheat, 
  Users, 
  BookOpen, 
  Trash2, 
  FileText, 
  MessageCircle, 
  TrendingUp,
  ExternalLink,
  Database,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  MapPin, Cloud, Calendar, Wheat, Users, BookOpen, Trash2, FileText, MessageCircle, TrendingUp
};

const ModuleCard = ({ module, isHighlighted }) => {
  const [isOpen, setIsOpen] = useState(false);
  const IconComponent = iconMap[module.icon] || MapPin;

  const handleAction = (action) => {
    console.log(`Executing action: ${action} for module: ${module.title}`);
    alert(`${action} executed successfully for ${module.title}!`);
  };

  const getBadgeColor = (badge) => {
    const colors = {
      'Offline': 'bg-green-500/10 text-green-400 border-green-500/30',
      'AI': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      'Compliance': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      'Learning': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
      'Real-time': 'bg-red-500/10 text-red-400 border-red-500/30',
      'Forms': 'bg-slate-500/10 text-slate-400 border-slate-500/30',
      'Health': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
      'Security': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      'Scheduling': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      'Inventory': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      'Nutrition': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      'Environment': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      'Government': 'bg-violet-500/10 text-violet-400 border-violet-500/30',
      'Legal': 'bg-rose-500/10 text-rose-400 border-rose-500/30',
      'Multilingual': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      'Prevention': 'bg-lime-500/10 text-lime-400 border-lime-500/30',
      'Alerts': 'bg-red-500/10 text-red-400 border-red-500/30'
    };
    return colors[badge] || 'bg-slate-500/10 text-slate-400 border-slate-500/30';
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Card className={`group cursor-pointer transition-all duration-300 hover:scale-[1.02] border backdrop-blur-sm ${
        isHighlighted 
          ? 'border-green-500/50 bg-green-500/5 shadow-xl shadow-green-500/20 ring-1 ring-green-500/20' 
          : 'border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-xl'
      }`}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
              isHighlighted 
                ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg' 
                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
            }`}>
              <IconComponent className="w-7 h-7" />
            </div>
            <div className="flex flex-wrap gap-2">
              {module.badges.slice(0, 2).map((badge) => (
                <Badge 
                  key={badge} 
                  variant="outline" 
                  className={`text-xs border ${getBadgeColor(badge)}`}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
          <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mt-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {module.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            {module.description}
          </p>
          
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-200 group/btn"
            >
              View Details
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>

      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
        <DialogHeader>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-xl">
              <IconComponent className="w-10 h-10" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {module.title}
              </DialogTitle>
              <div className="flex flex-wrap gap-2">
                {module.badges.map((badge) => (
                  <Badge 
                    key={badge} 
                    variant="outline" 
                    className={`text-xs border ${getBadgeColor(badge)}`}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
              What it solves
            </h3>
            <ul className="space-y-3">
              {module.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3 text-slate-700 dark:text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Actions */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
              Key Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {module.actions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleAction(action)}
                  className="justify-start h-auto py-4 px-6 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white group"
                >
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0 group-hover:text-green-600 dark:group-hover:text-green-400" />
                  <span className="text-sm font-medium">{action}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Data Model Preview */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Database className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
              Data Model Preview
            </h3>
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <pre className="text-sm text-slate-700 dark:text-slate-300 overflow-x-auto">
                <code>{JSON.stringify(module.dataModel, null, 2)}</code>
              </pre>
            </div>
          </div>

          {/* Local Storage Notice */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-700 dark:text-green-400 font-semibold">
                Data persisted locally - works completely offline
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ModuleGrid = ({ modules, selectedRole, t }) => {
  const highlightedModules = selectedRole === 'farmer' ? [1, 2, 3] : 
                           selectedRole === 'veterinarian' ? [3, 4, 5] :
                           selectedRole === 'compliance' ? [5, 7, 8] : [];

  return (
    <section id="modules" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 px-4 py-2 text-sm font-medium mb-6">
            Core Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive Farm Management
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Advanced tools for livestock management, health monitoring, compliance tracking, 
            and operational efficiency. Everything you need to run a modern farm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isHighlighted={highlightedModules.includes(module.id)}
            />
          ))}
        </div>

        {/* Role-based Info */}
        {selectedRole && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 px-8 py-4 rounded-full backdrop-blur-sm">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-700 dark:text-blue-400 font-semibold">
                Modules optimized for your selected role are highlighted
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModuleGrid;