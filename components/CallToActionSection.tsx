"use client";

import React from "react";
import { Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CallToActionSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">{t("service.ready")}</h2>
        <p className="text-xl mb-8 opacity-90">{t("service.contactNow")}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`/${language}#contact`}
            className="bg-[#FFD700] text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            {t("service.contactUs")}
          </a>

          <a
            href="mailto:info@2shigroup.com"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <Mail className="h-5 w-5" />
            {t("service.sendEmail")}
          </a>
        </div>
      </div>
    </section>
  );
}
