"use client";

import React from "react";
import Image from "next/image";
import Main from "@/layouts/Main";
import GallerySection from "@/components/gallery-section";
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";
type Lang = "fa" | "en" | "ar" | "tr";
import {  GalleryTranslation } from "@/types/gallery";

const translations = { fa, en, ar, tr } as {
  [key: string]: { gallery: GalleryTranslation };
};
export default function Gallery({ params }: { params: { lang: string } }) {
  const lang = (params.lang as Lang) || "fa";
  const currentLang = lang as keyof typeof translations;
  const t = translations[currentLang]?.gallery || translations.en.gallery;

  return (
    <Main params={{ lang }}>
      <div
        className="min-h-screen  dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black bg-gradient-to-br from-violet-200 via-white to-violet-300"
        dir="rtl"
      >
        {/* Hero Section */}
        <section className="w-screen relative m-0  py-40 bg-secondary ">
          <div className="absolute  inset-0 bg-black/20"></div>
          <div
            className="absolute  h-40 py-72 w-screen inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(/assets/certs/main.jpg)` }}
          ></div>

          <div className="relative flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl bg-secondary rounded-sm py-4 px-2 w-fit md:text-6xl font-bold mb-6 animate-fade-in-up">
            {t.sectionTitle}
            </h1>
            <div
              className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <p
              className="text-xl md:text-2xl mt-8 rounded-sm bg-blue-900 py-4 px-2 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
                   {t.sectionSubtitle}

            </p>
          </div>
        </section>
          <GallerySection lang={lang} />
      </div>
    </Main>
  );
}
