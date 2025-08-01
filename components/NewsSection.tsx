
import React from 'react';
import { Calendar, Eye, ArrowRight, ArrowLeft } from 'lucide-react';
import fa from '@/translations/fa.json';
import en from '@/translations/en.json';
import ar from '@/translations/ar.json';
import tr from '@/translations/tr.json';
import newsData from '@/data/news.json';

type Props = {
  lang: string; 
};
const translations = { fa, en, ar, tr };

const NewsSection = ({ lang }: Props) => {
  
  const currentLang = lang as keyof typeof translations;
  const newsT = translations[currentLang]?.news || translations.en.news;
  const newsItems = newsData[currentLang]?.news || newsData.en.news;

  return (
    <section id="news" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F4C75] dark:text-white mb-4">
            {newsT.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {newsT.sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {newsItems.map((article, index) => (
            <div
              key={article.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600"
            >
              {/* Article Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-[#0F4C75] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Date and Views */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>0</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0F4C75] dark:text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Button */}
                <a 
                  href={`/${lang}/news/${article.id}`}
                  className="flex items-center gap-2 text-[#0F4C75] dark:text-[#FFD700] hover:text-[#FFD700] font-semibold transition-colors duration-300 group"
                >
                  {newsT.readMore}
               
                    <ArrowLeft className="h-4 w-4 rtl:rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
                  
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white px-8 py-4 rounded-full font-semibold hover:from-[#FFD700] hover:to-[#0F4C75] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            {newsT.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;