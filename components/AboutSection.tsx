'use client';

import React from 'react';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      number: '6600',
      suffix: 'هزار',
      label: t('servicesCount'),
      icon: CheckCircle,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '1000',
      suffix: '+',
      label: t('customersCount'),
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      number: '20',
      suffix: '+',
      label: t('countriesCount'),
      icon: Globe,
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '10',
      suffix: '+ سال',
      label: t('experienceYears'),
      icon: Award,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    'داشتن تمامی مجوزها و گواهینامه های معتبر تایید شده',
    'ارائه مشاوره حضوری و غیر حضوری',
    'ارائه کلیه خدمات نقل و انتقال پول',
    'دارا بودن تیم متخصص در تمامی خدمات',
    'پایبندی به تکنولوژی و فناوری های روز',
    'داشتن گواهینامه ها و استانداردهای لازم',
    'ارائه خدمات دقیق، سریع، مطمئن و با کیفیت',
    'پشتیبانی و پاسخگویی دقیق و حرفه ای',
    'رضایت سنجی مبتنی بر استاندارد های بین المللی'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F4C75] mb-4">
            {t('aboutTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {t('aboutSubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-[#0F4C75] mb-2">
                  {stat.number}
                  <span className="text-[#FFD700]">{stat.suffix}</span>
                </div>
                
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div>
            <h3 className="text-2xl font-bold text-[#0F4C75] mb-8">
              چرا شایسته و شایان؟
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0F4C75] to-[#FFD700] flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
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
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F4C75] mb-2">9.6</div>
                <div className="text-yellow-500 flex justify-center mb-2">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-600 text-sm">رضایت از ما</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;