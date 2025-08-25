"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";
import testimonialsData from "@/data/testimonials.json";
import { TestimonialsData, TestimonialsTranslation } from "@/types/testimonials";
import "swiper/css";
import "swiper/css/pagination";

const translations = { fa, en, ar, tr } as {
  [key: string]: { testimonials: TestimonialsTranslation };
};

type Props = { lang: string };

const TestimonialsSection = ({ lang }: Props) => {
  const currentLang = lang as keyof typeof translations;
  const t = translations[currentLang]?.testimonials || translations.en.testimonials;
  const testimonials =
    (testimonialsData as TestimonialsData)[currentLang]?.testimonials || testimonialsData.en.testimonials;

  return (
    <section className="py-5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F4C75] dark:text-white mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {t.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-6 rtl:left-6 ltr:right-6 text-[#FFD700] opacity-20">
                  <Quote className="h-12 w-12" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full w-16 h-16 object-cover ring-4 ring-[#FFD700]/20"
                  />
                  <div>
                    <h4 className="font-bold text-[#0F4C75] dark:text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {t.services[testimonial.service]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(testimonial.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[#0F4C75] dark:text-[#FFD700] font-bold text-lg">
                    {testimonial.rating}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700]"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white px-8 py-4 rounded-full font-semibold hover:from-[#FFD700] hover:to-[#0F4C75] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {t.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
