import React from "react";
import { Users, Phone } from "lucide-react";
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";
import representativesData from "@/data/representatives.json";
import {
  RepresentativesData,
  RepresentativesTranslation
} from "@/types/representatives";
import Image from "next/image";

const translations = { fa, en, ar, tr } as {
  [key: string]: { representatives: RepresentativesTranslation };
};

type Props = {
  lang: string;
};

const WorldMapSection = ({ lang }: Props) => {
  const currentLang = lang as keyof typeof translations;
  const repT =
    translations[currentLang]?.representatives ||
    translations.en.representatives;
  const representatives =
    (representativesData as RepresentativesData)[currentLang]
      ?.representatives || representativesData.en.representatives;

  return (
    <section
      id="representatives"
      className="pt-20 transition-colors duration-300"
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
                {/* Flag instead of MapPin */}
                <div className="relative">
                  <div className="rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <Image
                      src={rep.flag}
                      alt={rep.country}
                      width={300}
                      height={300}
                      className="object-cover shadow-lg w-10 h-10 rounded-full ring-4 ring-yellow-200 "
                    />
                  </div>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 w-10 h-10 bg-yellow-500 rounded-full animate-ping opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
