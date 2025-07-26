'use client';

import React from 'react';
import { MapPin, Users, Building2, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WorldMapSection = () => {
  const { t } = useLanguage();

  const representatives = [
    {
      country: 'USA',
      flag: 'https://flagcdn.com/w40/us.png',
      city: 'New York',
      position: { top: '35%', left: '20%' },
      services: ['Immigration', 'Investment'],
      contact: '+1-555-0123',
      clients: 150
    },
    {
      country: 'Germany',
      flag: 'https://flagcdn.com/w40/de.png',
      city: 'Berlin',
      position: { top: '25%', left: '52%' },
      services: ['Work Visa', 'Education'],
      contact: '+49-30-12345',
      clients: 200
    },
    {
      country: 'Turkey',
      flag: 'https://flagcdn.com/w40/tr.png',
      city: 'Istanbul',
      position: { top: '35%', left: '58%' },
      services: ['Residence', 'Real Estate'],
      contact: '+90-501-1308483',
      clients: 500
    },
    {
      country: 'Iran',
      flag: 'https://flagcdn.com/w40/ir.png',
      city: 'Tehran',
      position: { top: '32%', left: '65%' },
      services: ['Consultation', 'Documentation'],
      contact: '+98-933-5813533',
      clients: 300
    },
    {
      country: 'UAE',
      flag: 'https://flagcdn.com/w40/ae.png',
      city: 'Dubai',
      position: { top: '40%', left: '68%' },
      services: ['Business', 'Investment'],
      contact: '+971-4-1234567',
      clients: 180
    },
    {
      country: 'France',
      flag: 'https://flagcdn.com/w40/fr.png',
      city: 'Paris',
      position: { top: '28%', left: '48%' },
      services: ['Education', 'Tourism'],
      contact: '+33-1-12345678',
      clients: 120
    },
    {
      country: 'Sweden',
      flag: 'https://flagcdn.com/w40/se.png',
      city: 'Stockholm',
      position: { top: '15%', left: '55%' },
      services: ['Work Permit', 'Family Reunion'],
      contact: '+46-8-1234567',
      clients: 90
    },
    {
      country: 'Australia',
      flag: 'https://flagcdn.com/w40/au.png',
      city: 'Sydney',
      position: { top: '75%', left: '85%' },
      services: ['Skilled Migration', 'Student Visa'],
      contact: '+61-2-12345678',
      clients: 160
    },
    {
      country: 'China',
      flag: 'https://flagcdn.com/w40/cn.png',
      city: 'Beijing',
      position: { top: '30%', left: '78%' },
      services: ['Business Visa', 'Trade'],
      contact: '+86-10-12345678',
      clients: 110
    },
    {
      country: 'Cyprus',
      flag: 'https://flagcdn.com/w40/cy.png',
      city: 'Nicosia',
      position: { top: '38%', left: '60%' },
      services: ['Citizenship', 'Investment'],
      contact: '+357-22-123456',
      clients: 80
    }
  ];

  return (
    <section id="representatives" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F4C75] dark:text-white mb-4">
            نمایندگی‌های جهانی ما
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            حضور گسترده در سراسر جهان برای خدمات بهتر
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* World Map Container */}
        <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12">
          {/* World Map SVG */}
          <div className="relative h-[600px] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
            {/* Simplified World Map Background */}
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10"
              fill="currentColor"
            >
              {/* Continents simplified shapes */}
              <path d="M150 200 Q200 180 250 200 Q300 220 350 200 Q400 180 450 200 L450 300 Q400 320 350 300 Q300 280 250 300 Q200 320 150 300 Z" className="text-[#0F4C75]" />
              <path d="M500 150 Q550 130 600 150 Q650 170 700 150 Q750 130 800 150 L800 250 Q750 270 700 250 Q650 230 600 250 Q550 270 500 250 Z" className="text-[#0F4C75]" />
              <path d="M200 350 Q250 330 300 350 Q350 370 400 350 L400 450 Q350 470 300 450 Q250 430 200 450 Z" className="text-[#0F4C75]" />
              <path d="M750 350 Q800 330 850 350 Q900 370 950 350 L950 450 Q900 470 850 450 Q800 430 750 450 Z" className="text-[#0F4C75]" />
            </svg>

            {/* Representative Markers */}
            {representatives.map((rep, index) => (
              <div
                key={index}
                className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: rep.position.top, left: rep.position.left }}
              >
                {/* Marker Pin */}
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 animate-pulse">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 w-8 h-8 bg-[#FFD700] rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Info Card */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 min-w-[250px] border border-gray-200 dark:border-gray-600">
                    {/* Country Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <img src={rep.flag} alt={rep.country} className="w-8 h-6 object-cover rounded" />
                      <div>
                        <h4 className="font-bold text-[#0F4C75] dark:text-white">{rep.country}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{rep.city}</p>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">خدمات:</p>
                      <div className="flex flex-wrap gap-1">
                        {rep.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#0F4C75]/10 dark:bg-[#FFD700]/20 text-[#0F4C75] dark:text-[#FFD700] text-xs rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-[#FFD700]" />
                        <span className="text-gray-600 dark:text-gray-300">{rep.clients} مشتری</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3 text-[#0F4C75] dark:text-[#FFD700]" />
                        <span className="text-gray-600 dark:text-gray-300 text-xs">{rep.contact}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Representatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {representatives.map((rep, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Country Info */}
              <div className="text-center mb-4">
                <div className="flex justify-center mb-2">
                  <img src={rep.flag} alt={rep.country} className="w-12 h-8 object-cover rounded" />
                </div>
                <h3 className="font-bold text-[#0F4C75] dark:text-white text-lg">{rep.country}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{rep.city}</p>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#FFD700]" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">مشتریان</span>
                  </div>
                  <span className="font-bold text-[#0F4C75] dark:text-white">{rep.clients}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#FFD700]" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">خدمات</span>
                  </div>
                  <span className="font-bold text-[#0F4C75] dark:text-white">{rep.services.length}</span>
                </div>
              </div>

              {/* Contact Button */}
              <button className="w-full mt-4 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white py-2 rounded-lg font-semibold hover:from-[#FFD700] hover:to-[#0F4C75] transition-all duration-300 text-sm">
                تماس با نماینده
              </button>
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="mt-16 bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a] rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">10+</div>
              <p className="text-blue-100">کشور</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">1500+</div>
              <p className="text-blue-100">مشتری فعال</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">24/7</div>
              <p className="text-blue-100">پشتیبانی</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">15+</div>
              <p className="text-blue-100">سال تجربه</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;