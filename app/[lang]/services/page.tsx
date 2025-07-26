'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowLeft, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const { t, isRTL } = useLanguage();

  const servicesData = {
    fa: [
      {
        id: 'immigration',
        title: 'خدمات مهاجرت',
        description: 'مشاوره کامل مهاجرت به کشورهای مختلف با بهترین شرایط',
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'مشاوره رایگان اولیه',
          'بررسی شرایط مهاجرت',
          'تهیه مدارک مورد نیاز',
          'پیگیری تا دریافت ویزا',
          'خدمات پس از مهاجرت'
        ],
        countries: ['ترکیه', 'آلمان', 'کانادا', 'استرالیا', 'سوئد'],
        price: 'از 500 یورو',
        rating: 4.9,
        clients: 1200
      },
      {
        id: 'investment',
        title: 'سرمایه‌گذاری و اشتغال',
        description: 'فرصت‌های سرمایه‌گذاری مطمئن در کشورهای مختلف',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'تحلیل بازار سرمایه‌گذاری',
          'مشاوره حقوقی و مالی',
          'ثبت شرکت در خارج',
          'اخذ مجوزهای کسب‌وکار',
          'پشتیبانی مالی و حسابداری'
        ],
        countries: ['ترکیه', 'آلمان', 'امارات', 'قبرس', 'فرانسه'],
        price: 'از 1000 یورو',
        rating: 4.8,
        clients: 800
      },
      {
        id: 'realestate',
        title: 'خرید و فروش املاک',
        description: 'خدمات کامل املاک در بهترین مناطق کشورهای مختلف',
        image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'بازدید مجازی و حضوری',
          'مشاوره قیمت و منطقه',
          'انجام کلیه امور حقوقی',
          'تسهیلات وام و پرداخت',
          'مدیریت املاک'
        ],
        countries: ['ترکیه', 'آلمان', 'قبرس', 'امارات'],
        price: 'کمیسیون 2%',
        rating: 4.7,
        clients: 950
      },
      {
        id: 'education',
        title: 'خدمات آموزشی',
        description: 'راهنمایی کامل برای تحصیل در بهترین دانشگاه‌های جهان',
        image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'انتخاب رشته و دانشگاه',
          'تهیه مدارک تحصیلی',
          'آمادگی آزمون‌های زبان',
          'درخواست بورسیه',
          'اخذ ویزای تحصیلی'
        ],
        countries: ['کانادا', 'آلمان', 'استرالیا', 'ترکیه', 'فرانسه'],
        price: 'از 300 یورو',
        rating: 4.9,
        clients: 1500
      }
    ],
    en: [
      {
        id: 'immigration',
        title: 'Immigration Services',
        description: 'Complete immigration consultation to different countries with the best conditions',
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'Free initial consultation',
          'Immigration conditions assessment',
          'Required documents preparation',
          'Follow-up until visa receipt',
          'Post-immigration services'
        ],
        countries: ['Turkey', 'Germany', 'Canada', 'Australia', 'Sweden'],
        price: 'From €500',
        rating: 4.9,
        clients: 1200
      },
      {
        id: 'investment',
        title: 'Investment & Employment',
        description: 'Secure investment opportunities in different countries',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'Investment market analysis',
          'Legal and financial consultation',
          'Company registration abroad',
          'Business license acquisition',
          'Financial and accounting support'
        ],
        countries: ['Turkey', 'Germany', 'UAE', 'Cyprus', 'France'],
        price: 'From €1000',
        rating: 4.8,
        clients: 800
      },
      {
        id: 'realestate',
        title: 'Real Estate Buy & Sell',
        description: 'Complete real estate services in the best areas of different countries',
        image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'Virtual and in-person viewing',
          'Price and area consultation',
          'All legal procedures',
          'Loan and payment facilities',
          'Property management'
        ],
        countries: ['Turkey', 'Germany', 'Cyprus', 'UAE'],
        price: '2% Commission',
        rating: 4.7,
        clients: 950
      },
      {
        id: 'education',
        title: 'Educational Services',
        description: 'Complete guidance for studying at the world\'s best universities',
        image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'Program and university selection',
          'Academic documents preparation',
          'Language test preparation',
          'Scholarship applications',
          'Student visa acquisition'
        ],
        countries: ['Canada', 'Germany', 'Australia', 'Turkey', 'France'],
        price: 'From €300',
        rating: 4.9,
        clients: 1500
      }
    ],
    tr: [
      {
        id: 'immigration',
        title: 'Göç Hizmetleri',
        description: 'Farklı ülkelere en iyi şartlarla tam göç danışmanlığı',
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'Ücretsiz ilk danışmanlık',
          'Göç şartları değerlendirmesi',
          'Gerekli belgelerin hazırlanması',
          'Vize alınana kadar takip',
          'Göç sonrası hizmetler'
        ],
        countries: ['Türkiye', 'Almanya', 'Kanada', 'Avustralya', 'İsveç'],
        price: '500€\'dan başlayan',
        rating: 4.9,
        clients: 1200
      },
      {
        id: 'investment',
        title: 'Yatırım ve İstihdam',
        description: 'Farklı ülkelerde güvenli yatırım fırsatları',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'Yatırım piyasası analizi',
          'Hukuki ve mali danışmanlık',
          'Yurtdışında şirket kuruluşu',
          'İş lisansı alımı',
          'Mali ve muhasebe desteği'
        ],
        countries: ['Türkiye', 'Almanya', 'BAE', 'Kıbrıs', 'Fransa'],
        price: '1000€\'dan başlayan',
        rating: 4.8,
        clients: 800
      }
    ],
    ar: [
      {
        id: 'immigration',
        title: 'خدمات الهجرة',
        description: 'استشارة هجرة كاملة إلى دول مختلفة بأفضل الشروط',
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'استشارة أولية مجانية',
          'تقييم شروط الهجرة',
          'إعداد الوثائق المطلوبة',
          'المتابعة حتى الحصول على التأشيرة',
          'خدمات ما بعد الهجرة'
        ],
        countries: ['تركيا', 'ألمانيا', 'كندا', 'أستراليا', 'السويد'],
        price: 'من 500 يورو',
        rating: 4.9,
        clients: 1200
      },
      {
        id: 'investment',
        title: 'الاستثمار والتوظيف',
        description: 'فرص استثمارية آمنة في دول مختلفة',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        features: [
          'تحليل سوق الاستثمار',
          'استشارة قانونية ومالية',
          'تسجيل الشركات في الخارج',
          'الحصول على تراخيص الأعمال',
          'الدعم المالي والمحاسبي'
        ],
        countries: ['تركيا', 'ألمانيا', 'الإمارات', 'قبرص', 'فرنسا'],
        price: 'من 1000 يورو',
        rating: 4.8,
        clients: 800
      }
    ]
  };

  const currentServices = servicesData[params.lang as keyof typeof servicesData] || servicesData.fa;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {params.lang === 'fa' ? 'خدمات ما' : 
               params.lang === 'en' ? 'Our Services' :
               params.lang === 'tr' ? 'Hizmetlerimiz' :
               'خدماتنا'}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {params.lang === 'fa' ? 'ارائه خدمات تخصصی و حرفه‌ای در زمینه‌های مختلف' :
               params.lang === 'en' ? 'Providing specialized and professional services in various fields' :
               params.lang === 'tr' ? 'Çeşitli alanlarda uzman ve profesyonel hizmetler sunuyoruz' :
               'تقديم خدمات متخصصة ومهنية في مجالات مختلفة'}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {currentServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
                      <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{service.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{service.clients} {params.lang === 'fa' ? 'مشتری' : params.lang === 'en' ? 'clients' : params.lang === 'tr' ? 'müşteri' : 'عميل'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-[#0F4C75] dark:text-white mb-4">
                        {params.lang === 'fa' ? 'ویژگی‌ها:' :
                         params.lang === 'en' ? 'Features:' :
                         params.lang === 'tr' ? 'Özellikler:' :
                         'المميزات:'}
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Countries */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-[#0F4C75] dark:text-white mb-4">
                        {params.lang === 'fa' ? 'کشورهای تحت پوشش:' :
                         params.lang === 'en' ? 'Covered Countries:' :
                         params.lang === 'tr' ? 'Kapsanan Ülkeler:' :
                         'البلدان المشمولة:'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.countries.map((country, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#0F4C75]/10 dark:bg-[#FFD700]/20 text-[#0F4C75] dark:text-[#FFD700] rounded-full text-sm"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-[#0F4C75] dark:text-[#FFD700]">
                          {service.price}
                        </span>
                      </div>
                      <button className="bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#FFD700] hover:to-[#0F4C75] transition-all duration-300 flex items-center gap-2">
                        {params.lang === 'fa' ? 'درخواست مشاوره' :
                         params.lang === 'en' ? 'Request Consultation' :
                         params.lang === 'tr' ? 'Danışmanlık Talep Et' :
                         'طلب استشارة'}
                        {isRTL ? (
                          <ArrowLeft className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}