'use client';

import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t, isRTL, language } = useLanguage();

  const services = [
    {
      id: 'ta1',
      title: t('immigration'),
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'ta2',
      title: t('investment'),
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-green-500 to-green-700'
    },
    {
      id: 'ta3',
      title: t('travel'),
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'ta4',
      title: t('commerce'),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 'ta5',
      title: t('realEstate'),
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 'ta6',
      title: t('vehicles'),
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      id: 'ta7',
      title: t('generalServices'),
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-teal-500 to-teal-700'
    },
    {
      id: 'ta8',
      title: t('surveying'),
      image: 'https://images.pexels.com/photos/8867257/pexels-photo-8867257.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      id: 'ta9',
      title: t('construction'),
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      id: 'ta13',
      title: t('representatives'),
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-pink-500 to-pink-700'
    },
    {
      id: 'ta11',
      title: t('advertising'),
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-lime-500 to-lime-700'
    },
    {
      id: 'ta12',
      title: t('education'),
      image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-emerald-500 to-emerald-700'
    }
  ];

  return (
    <section id="services" className=" bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F4C75] mb-4">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <a 
                  href={`/${language}/services/${service.id}`}
                  className="absolute inset-0 bg-gradient-to-t from-[#0F4C75]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                >
                  <span className="bg-white dark:bg-gray-800 text-[#0F4C75] dark:text-[#FFD700] px-6 py-2 rounded-full font-semibold hover:bg-[#FFD700] hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {t('moreInfo')}
                  </span>
                </a>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0F4C75] dark:text-white mb-4 group-hover:text-[#FFD700] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <button className="flex items-center gap-2 text-[#0F4C75] dark:text-[#FFD700] hover:text-[#FFD700] font-semibold transition-colors duration-300 group">
                  {t('moreInfo')}
                  {isRTL ? (
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  ) : (
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C75]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <button className="bg-white dark:bg-gray-800 text-[#0F4C75] dark:text-[#FFD700] px-6 py-2 rounded-full font-semibold hover:bg-[#FFD700] hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {t('moreInfo')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;