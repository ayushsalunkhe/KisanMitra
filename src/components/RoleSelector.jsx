import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Check, User, UserCheck, Shield, Settings, Crown } from 'lucide-react';
import { roles } from '../data/mockData';

const roleIcons = {
  visitor: User,
  farmer: UserCheck,
  veterinarian: Shield,
  compliance: Settings,
  admin: Crown
};

const RoleSelector = ({ selectedRole, onRoleSelect, t }) => {
  return (
    <section id="roles" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 px-4 py-2 text-sm font-medium mb-6">
            Role-Based Access
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Choose Your Role
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Select your role to access personalized modules and features designed for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {roles.map((role) => {
            const IconComponent = roleIcons[role.id] || User;
            const isSelected = selectedRole === role.id;
            
            return (
              <Card
                key={role.id}
                className={`relative p-6 cursor-pointer transition-all duration-300 hover:scale-105 border-2 group ${
                  isSelected
                    ? 'border-green-500 bg-green-500/5 shadow-2xl shadow-green-500/20 ring-2 ring-green-500/20'
                    : 'border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white dark:hover:bg-slate-800/80 backdrop-blur-sm'
                }`}
                onClick={() => onRoleSelect(role.id)}
              >
                {/* Selection Indicator */}
                {isSelected && (
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}

                <div className="text-center space-y-4">
                  {/* Role Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
                  }`}>
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Role Name */}
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {role.name}
                  </h3>

                  {/* Role Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {role.description}
                  </p>

                  {/* Module Count Badge */}
                  <Badge 
                    variant="secondary" 
                    className={`${
                      isSelected
                        ? 'bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/30'
                        : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600/50'
                    }`}
                  >
                    {role.moduleOrder.length} modules
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Selected Role Info */}
        {selectedRole && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-full backdrop-blur-sm">
              <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
              <span className="text-green-700 dark:text-green-400 font-semibold">
                Selected: {roles.find(r => r.id === selectedRole)?.name}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm">
              Modules below are optimized and filtered for your role
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoleSelector;