import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Wifi, 
  Shield, 
  Smartphone, 
  Globe, 
  Zap, 
  Heart,
  Award,
  Users,
  Clock
} from 'lucide-react';

const About = ({ t }) => {
  const features = [
    {
      icon: Wifi,
      title: 'Offline First',
      description: 'Works seamlessly without internet connection. Perfect for remote farming locations with limited connectivity.',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20'
    },
    {
      icon: Shield,
      title: 'Privacy Focused',
      description: 'Your data stays on your device. No tracking, no data collection, complete privacy and security.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: '8 Indian languages supported with easy switching. Built for diverse farming communities.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with minimal resource usage. Works smoothly on any device.',
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Customized interface for farmers, veterinarians, compliance officers, and administrators.',
      color: 'text-pink-400',
      bg: 'bg-pink-500/10',
      border: 'border-pink-500/20'
    },
    {
      icon: Heart,
      title: 'Farmer Centric',
      description: 'Designed with real farmer needs in mind. Tested and validated by farming communities.',
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/20'
    }
  ];

  const stats = [
    {
      icon: Award,
      number: '100%',
      label: 'Offline Capable',
      color: 'text-green-400'
    },
    {
      icon: Globe,
      number: '8',
      label: 'Languages',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      number: '10+',
      label: 'Core Modules',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Availability',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 px-4 py-2 text-sm font-medium mb-6">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Built for Modern Farming
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Designed specifically for the challenges of rural farming - from unreliable internet 
            to diverse language needs. Everything you need in one powerful platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:scale-[1.02] transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} border ${feature.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-slate-100/50 to-slate-200/50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-3xl p-12 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Proven Impact
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Trusted by farming communities across India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-600/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Built with Modern Technology
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React 19', 'PWA', 'Tailwind CSS', 'IndexedDB', 
              'Service Workers', 'Responsive Design', 'TypeScript', 'FastAPI'
            ].map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="px-6 py-3 text-sm border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 transition-all duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Credits */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-400">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 dark:text-red-400" />
            <span>for the farming community</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
            Version 1.0.0 • Open Source • Community Driven
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;