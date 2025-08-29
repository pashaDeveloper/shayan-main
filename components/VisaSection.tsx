"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight, Eye, Heart, Star, ArrowRight } from 'lucide-react'
import { visas } from '../data/visas'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useLanguage } from "@/contexts/LanguageContext";



const VisaSection = () => {
  const { t, isRTL, language } = useLanguage();
  const swiperRef = useRef<any>(null)

  const visaTypeTranslations: { [key: string]: string } = {
    tourist: 'توریستی',
    business: 'تجاری',
    student: 'تحصیلی',
    work: 'کاری',
    transit: 'ترانزیت'
  }

  return (
    <section className="py-20 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`flex items-center justify-between mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              انواع ویزا
            </h2>
            <p className="text-xl text-gray-600">
              بهترین خدمات ویزا برای سفرهای شما
            </p>
          </div>
          
          <Link
            href="/visa/all"
            className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''} bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300`}
          >
            <span>مشاهده همه</span>
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'transform rotate-180' : ''}`} />
          </Link>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.visa-swiper-button-prev',
              nextEl: '.visa-swiper-button-next',
            }}
            pagination={{
              clickable: true,
              el: '.visa-swiper-pagination'
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="visa-swiper"
          >
            {visas.slice(0, 10).map((visa) => (
              <SwiperSlide key={visa.id}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={visa.image}
                      alt={visa.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {visaTypeTranslations[visa.type]}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''} text-white text-sm`}>
                      <div className={`flex items-center space-x-1 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <Eye className="w-4 h-4" />
                        <span>{visa.views}</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <Heart className="w-4 h-4" />
                        <span>{visa.likes}</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${isRTL ? 'space-x-reverse' : ''}`}>
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span>{visa.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {visa.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {visa.shortDescription}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        <span>مدت پردازش: {visa.processingTime}</span>
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        {visa.price} {visa.currency}
                      </div>
                    </div>

                    <Link
                      href={`/visa/${visa.id}/${visa.slug}`}
                      className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}
                    >
                      <span>مشاهده جزئیات</span>
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'transform rotate-180' : ''}`} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className={`visa-swiper-button-prev absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10`}>
            {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>
          <button className={`visa-swiper-button-next absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10`}>
            {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          {/* Pagination */}
          <div className="visa-swiper-pagination mt-8 text-center"></div>
        </div>
      </div>

      <style jsx global>{`
        .visa-swiper .swiper-pagination-bullet {
          background: #3b82f6;
          opacity: 0.3;
        }
        .visa-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default VisaSection