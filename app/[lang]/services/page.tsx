"use client"
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import servicesData from "@/data/services.json";
import Main from "@/layouts/Main";
import Link from "next/link";

type Lang = "fa" | "en" | "ar" | "tr";

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const lang = (params.lang as Lang) || "fa";
  const allServices = servicesData[lang]?.services || [];

  const [searchTerm, setSearchTerm] = useState("");

  // فیلتر سرویس‌ها بر اساس عنوان و ویژگی‌ها
  const filteredServices = allServices.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.features.some((feature: string) =>
        feature.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const slugify = (text: string) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\u0600-\u06FF\-]+/g, "")
      .replace(/\-\-+/g, "-");

  return (
    <Main params={{ lang }}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <main className="pt-20 flex flex-col gap-y-10">
          {/* Hero Section */}
    <section
  className="relative bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a] py-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/assets/service/1.webp')"
  }}
>
  {/* Overlay با شفافیت */}
  <div className="absolute inset-0 bg-[#5D1A75] "></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
      {lang === "fa" ? "خدمات ما" : "Our Services"}
    </h1>
    <p className="text-xl text-blue-100 mb-8">
      {lang === "fa"
        ? "ارائه خدمات تخصصی و حرفه‌ای در زمینه‌های مختلف"
        : "Providing specialized and professional services in various fields"}
    </p>
  </div>
</section>
<section className="flex justify-center items-center" >
 <input
                type="text"
                placeholder={
                  lang === "fa"
                    ? "جستجوی سرویس..."
                    : lang === "en"
                    ? "Search services..."
                    : lang === "tr"
                    ? "Hizmetlerde ara..."
                    : "ابحث عن الخدمات..."
                }
                className="w-full max-w-md mx-auto px-4 py-2 rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
</section>
          {/* Services Grid */}
          <section className="py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {filteredServices.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {lang === "fa"
                    ? "هیچ سرویسی پیدا نشد."
                    : lang === "en"
                    ? "No services found."
                    : lang === "tr"
                    ? "Hiç hizmet bulunamadı."
                    : "لم يتم العثور على خدمات."}
                </p>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                  {filteredServices.map((service) => (
                  <Link
  key={service.serviceId}
  href={`/${lang}/services/${service.serviceId}/${slugify(service.title)}`}
  className="group relative block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
>
                      {/* Service Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h2 className="text-2xl font-bold text-white mb-2">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="p-6">
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
                          {service.subtitle}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2">
                          {service.features
                            .slice(0, 4)
                            .map((feature: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 text-gray-700 dark:text-gray-200"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}

                          {service.features.length > 4 && (
                            <li className="flex items-start gap-2 text-gray-500 dark:text-gray-400">
                              <span className="ml-6">...</span>
                            </li>
                          )}
                        </ul>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </Main>
  );
}
