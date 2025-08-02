"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Instagram, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import fa from '@/translations/fa.json';
import en from '@/translations/en.json';
import ar from '@/translations/ar.json';
import tr from '@/translations/tr.json';
import instagramData from '@/data/instagram.json';
import { InstagramData, InstagramTranslation } from '@/types/instagram';
import 'swiper/css';
import 'swiper/css/pagination';

const translations = { fa, en, ar, tr } as {
  [key: string]: { instagram: InstagramTranslation };
};

type Props = {
  lang: string;
};

const InstagramSection = ({ lang }: Props) => {
  const currentLang = lang as keyof typeof translations;
  const t = translations[currentLang]?.instagram || translations.en.instagram;
  const posts = (instagramData as InstagramData)[currentLang]?.posts || instagramData.en.posts;
  const isLoading = posts === undefined;

  return (
    <section className="py-5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-pink-500" />
            <h2 className="text-4xl font-bold text-[#0F4C75] dark:text-white">
              {t.sectionTitle}
            </h2>
          </div>
          {/* <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {t.sectionSubtitle}
          </p>
          <div className="text-lg font-semibold text-pink-600 mb-2">
            {t.accountName}
          </div>
          <div className="text-pink-500 mb-4">
            {t.accountHandle}
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {t.accountDescription}
          </p> */}
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.1}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!my-5 !pb-16 !mb-8 md:!py-10 !h-fit"
        >
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="animate-pulse bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md">
                  <div className="h-64 bg-gray-300 dark:bg-gray-700 w-full"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            posts.map((post) => (
              <SwiperSlide key={post.id}>
                <a
                  href="https://instagram.com/2shigroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={`Instagram post ${post.id}`}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.caption}
                    </p>
                    <div className="mb-4">
                      <p className="text-blue-600 text-xs">{post.hashtags}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">♥</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium text-sm transition-colors duration-300">
                        {t.viewOnInstagram}
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))
          )}
        </Swiper>

        {/* Follow Button */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/2shigroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Instagram className="h-6 w-6" />
            {t.followOnInstagram}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
