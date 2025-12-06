import React from 'react';
import { Star, Trophy, Sparkles } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  {
    title: '4.9 Star Rating',
    subtitle: 'Consistently top-rated by patients',
    icon: Star,
  },
  {
    title: 'Ex-National Center',
    subtitle: 'Skin Center Singapore Alum',
    icon: Trophy,
  },
  {
    title: 'Latest Tech',
    subtitle: 'Painless Laser Technology',
    icon: Sparkles,
  },
];

const Stats: React.FC = () => {
  return (
    <div className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-xl hover:shadow-teal-100/50 transition-all duration-300 transform hover:-translate-y-2 border border-slate-50 group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-50 rounded-xl group-hover:bg-teal-500 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-800 mb-1">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-snug">
                    {stat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
