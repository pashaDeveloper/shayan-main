'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'احسان کامیاب',
      service: 'ویزا کاری',
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'از اولین تماس با تیم آن‌ها، متوجه شدم که با یک گروه حرفه‌ای و دلسوز سروکار دارم. تمامی مراحل دریافت ویزای من با دقت و شفافیت انجام شد و هیچ مشکلی پیش نیامد. من از خدمات سریع و دقیقشان کاملاً راضی هستم و به همه توصیه می‌کنم که از این گروه استفاده کنند.'
    },
    {
      id: 2,
      name: 'مریم ترابی',
      service: 'املاک',
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'من برای انتقال سرمایه و خرید ملک در ترکیه از خدمات این گروه استفاده کردم و واقعاً تحت تأثیر قرار گرفتم. تیم آن‌ها بسیار حرفه‌ای، دقیق و خوش‌برخورد است. همه کارها، از انتقال پول گرفته تا مذاکرات برای خرید ملک، به بهترین شکل ممکن انجام شد. از خدماتشان کاملاً راضی هستم.'
    },
    {
      id: 3,
      name: 'حمید درخشانفر',
      service: 'ثبت شرکت',
      rating: 4.3,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'به کمک این گروه، توانستم شرکت خود را در ترکیه ثبت کنم و به‌سرعت کسب‌وکارم را گسترش دهم. تیم تخصصی و باتجربه‌شان تمام جزئیات قانونی و مالی را برای من مدیریت کردند و من فقط بر روی کسب‌وکارم تمرکز کردم. همکاری با این گروه یکی از بهترین تصمیمات زندگی من بود.'
    },
    {
      id: 4,
      name: 'مینا تهرانی',
      service: 'ویزا تحصیلی',
      rating: 5.0,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'من برای اخذ ویزای تحصیلی به این گروه مراجعه کردم و از همان ابتدا تا پایان فرآیند، همراهی کامل تیم را احساس کردم. علاوه بر این، آن‌ها نه تنها در تهیه مدارک بلکه در انتخاب بهترین گزینه‌ها برای آینده‌ام به من مشاوره دادند. واقعاً از انتخاب این گروه خوشحالم و آن‌ها را به همه دوستانم توصیه کرده‌ام.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F4C75] dark:text-white mb-4">
            نظرات در مورد گروه شایسته و شایان
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            مشتریان ما چه می‌گویند؟
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#FFD700] opacity-20">
                <Quote className="h-12 w-12" />
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-[#FFD700]/20"
                />
                <div>
                  <h4 className="font-bold text-[#0F4C75] dark:text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {testimonial.service}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(testimonial.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[#0F4C75] dark:text-[#FFD700] font-bold text-lg">
                  {testimonial.rating}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700]"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white px-8 py-4 rounded-full font-semibold hover:from-[#FFD700] hover:to-[#0F4C75] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            مشاهده تمامی نظرات مشتریان
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;