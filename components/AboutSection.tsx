
import React from 'react';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';
import fa from '@/translations/fa.json';
import en from '@/translations/en.json';
import ar from '@/translations/ar.json';
import tr from '@/translations/tr.json';
import aboutData from '@/data/about.json';
import { AboutData, AboutTranslation } from '@/types/about';

const translations = { fa, en, ar, tr } as {
  [key: string]: { about: AboutTranslation };
};

const iconMap = {
  CheckCircle,
  Users,
  Globe,
  Award
};

type Props = {
  lang: string;
};

const AboutSection = ({ lang }: Props) => {
  const currentLang = lang as keyof typeof translations;
  const t = translations[currentLang]?.about || translations.en.about;
  const { stats, features, ratingCard } = (aboutData as AboutData)[currentLang] || aboutData.en;

  return (
    <section id="about" className="py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F4C75] dark:text-white mb-4">
            {t.aboutTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {t.aboutSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-[#0F4C75] dark:text-white mb-2">
                  {stat.number}
                  <span className="text-[#FFD700]">{stat.suffix}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {t[stat.labelKey]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div>
            <h3 className="text-2xl font-bold text-[#0F4C75] dark:text-white mb-8">
              {t.featuresTitle}
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-100 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About Us"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C75]/50 to-transparent"></div>
            </div>
            
            {/* Floating Rating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F4C75] dark:text-white mb-2">{ratingCard.rating}</div>
                <div className="text-yellow-500 flex justify-center mb-2">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{ratingCard.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
