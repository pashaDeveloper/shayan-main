
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
      className="pt-20  transition-colors duration-300"
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
            className="relative w-screen h-112 md:h-160"
           style={{
    backgroundImage: "url(/img/word.png)",
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" 
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
                  <div className="absolute inset-0 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-30"></div>
                </div>

                {/* <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 min-w-[250px] border border-gray-200 dark:border-gray-600">
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

                   

                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default WorldMapSection;