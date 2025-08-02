
import React from 'react';
import { MapPin, Users, Phone } from 'lucide-react';
import fa from '@/translations/fa.json';
import en from '@/translations/en.json';
import ar from '@/translations/ar.json';
import tr from '@/translations/tr.json';
import representativesData from '@/data/representatives.json';
import { RepresentativesData, RepresentativesTranslation } from '@/types/representatives';
import Image from "next/image";

const translations = { fa, en, ar, tr } as {
  [key: string]: { representatives: RepresentativesTranslation };
};

type Props = {
  lang: string;
};

const WorldMapSection = ({ lang }: Props) => {
  const currentLang = lang as keyof typeof translations;
  const repT = translations[currentLang]?.representatives || translations.en.representatives;
  const representatives = (
    representativesData as RepresentativesData
  )[currentLang]?.representatives || representativesData.en.representatives;

  return (
    <section
      id="representatives"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F4C75] dark:text-white mb-4">
            {repT.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {repT.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* World Map Container */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          {/* World Map SVG */}
          <div
            className="relative h-[600px]"
            style={{
              backgroundImage: "url(/svg/bg.svg)",
              backgroundPosition: "20% 80%"
            }}
          >
            {/* Representative Markers */}
            {representatives.map((rep, index) => (
              <div
                key={rep.id}
                className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: rep.position.top, left: rep.position.left }}
              >
                {/* Marker Pin */}
                <div className="relative">
                  <div className="rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-green-500" />
                  </div>
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 w-8 h-8 bg-green-500 rounded-full animate-ping opacity-30"></div>
                </div>

                {/* Info Card */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 min-w-[250px] border border-gray-200 dark:border-gray-600">
                    {/* Country Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <Image
  src={rep.flag}
  alt={rep.country}
  width={32}
  height={24}
  className="object-cover rounded"
/>

                      <div>
                        <h4 className="font-bold text-[#0F4C75] dark:text-white">
                          {rep.country}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {rep.city}
                        </p>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                        {repT.servicesLabel}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {rep.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#0F4C75]/10 dark:bg-[#FFD700]/20 text-[#0F4C75] dark:text-[#FFD700] text-xs rounded-full"
                          >
                            {repT.services[service]}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 text-[#FFD700]" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {rep.clients} {repT.clientsLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3 text-[#0F4C75] dark:text-[#FFD700]" />
                        <span className="text-gray-600 dark:text-gray-300 text-xs">
                          {rep.contact}
                        </span>
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

        {/* Global Stats */}
        <div className="mt-16 bg-secondary rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">10+</div>
              <p className="text-blue-100">{repT.stats.countries}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">1500+</div>
              <p className="text-blue-100">{repT.stats.activeClients}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">24/7</div>
              <p className="text-blue-100">{repT.stats.support}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FFD700] mb-2">15+</div>
              <p className="text-blue-100">{repT.stats.experience}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;