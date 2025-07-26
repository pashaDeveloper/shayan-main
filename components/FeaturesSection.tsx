'use client';

import React from 'react';
import { Globe, Users, Cpu, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: t('feature1Title'),
      description: t('feature1Description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: t('feature2Title'),
      description: t('feature2Description'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: t('feature3Title'),
      description: t('feature3Description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: t('feature4Title'),
      description: t('feature4Description'),
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F4C75] mb-4">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {t('featuresSubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0F4C75] dark:text-white mb-4 group-hover:text-[#FFD700] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`w-full h-1 bg-gradient-to-r ${feature.color} mt-6 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;