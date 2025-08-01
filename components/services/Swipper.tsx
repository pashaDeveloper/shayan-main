"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  image: string;
  color?: string;
}

interface SwipperProps {
  services: Service[] | undefined;
}

const Swipper: React.FC<SwipperProps> = ({ services }) => {
  const { language } = useLanguage();

  const slugify = (text: string) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w\u0600-\u06FF\-]+/g, "")
      .replace(/\-\-+/g, "-");

const isLoading = services === undefined;

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1.5}
      autoplay={{ delay: 3500 }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="!my-5 !pb-16 !mb-8 md:!py-10 !h-fit"
    >
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="animate-pulse bg-white dark:bg-gray-800 rounded overflow-hidden shadow-md">
                <div className="h-48 bg-gray-300 dark:bg-gray-700 w-full"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
                </div>
              </div>
            </SwiperSlide>
          ))
        : services.map((service) => (
            <SwiperSlide key={service.id}>
              <Link
                href={`/${language}/services/${service.id}/${slugify(service.title)}`}
                className="group relative block bg-white dark:bg-gray-800 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-[#0F4C75] dark:text-white group-hover:text-[#FFD700] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default Swipper;
