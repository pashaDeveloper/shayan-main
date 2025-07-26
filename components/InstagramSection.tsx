'use client';

import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramSection = () => {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: '🇹🇷ترکیه🇹🇷 وقتی صحبت از اقامت ترکیه میشه، باید تصمیم درست بگیری!',
      likes: 245,
      hashtags: '#اقامت_ترکیه #مهاجرت_به_ترکیه'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: '🇩🇪آلمان منتظر شماست!🇩🇪 اقامت کاری راحت، سریع و قانونی',
      likes: 189,
      hashtags: '#اقامت_آلمان #ویزای_کاری_آلمان'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'تحصیل در ترکیه با کمترین هزینه و بهترین شرایط',
      likes: 156,
      hashtags: '#تحصیل_در_ترکیه #اقامت_تحصیلی'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: '🇪🇺اروپا زیر پای شماست🇪🇺 اقامت کاری سه ساله کشور کرواسی',
      likes: 298,
      hashtags: '#مهاجرت #اروپا #ویزا'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: 'برای شروع یک زندگی جدید در ترکیه، همراه با شایسته و شایان باشید!',
      likes: 167,
      hashtags: '#ترکیه #ایران #زندگی #اقامت'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      caption: '⭐️ویزای شنگن⭐️ آیا آماده‌اید تا به اروپا سفر کنید؟',
      likes: 312,
      hashtags: '#ویزای_شنگن #سفر_به_اروپا #ویزا'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-pink-500" />
            <h2 className="text-4xl font-bold text-[#0F4C75] dark:text-white">
              اینستاگرام ما
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            اینستاگرام ما با مطالب مفید
          </p>
          <div className="text-lg font-semibold text-pink-600 mb-2">
            2SH IGROUP
          </div>
          <div className="text-pink-500 mb-4">
            @2shigroup
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            اینستاگرام گروه بین المللی شایسته و شایان
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Instagram Icon Overlay */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.caption}
                </p>
                
                {/* Hashtags */}
                <div className="mb-4">
                  <p className="text-blue-600 text-xs">
                    {post.hashtags}
                  </p>
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">♥</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{post.likes}</span>
                  </div>
                  
                  <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium text-sm transition-colors duration-300">
                    مشاهده در اینستاگرام
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/2shigroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Instagram className="h-6 w-6" />
            دنبال کردن در اینستاگرام
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;