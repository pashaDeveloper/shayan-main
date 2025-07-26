'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowLeft, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ServiceDetailPage({ params }: { params: { lang: string; serviceId: string } }) {
  const { t, isRTL } = useLanguage();

  const serviceDetails = {
    fa: {
      immigration: {
        title: 'خدمات مهاجرت',
        subtitle: 'راهی آسان به سوی آینده‌ای بهتر',
        description: 'گروه بین‌المللی شایسته و شایان با بیش از 10 سال تجربه در زمینه مهاجرت، آماده ارائه کامل‌ترین خدمات مهاجرتی به شماست. ما با داشتن تیمی متخصص و مجرب، شما را در تمامی مراحل مهاجرت همراهی می‌کنیم.',
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200',
        features: [
          'مشاوره رایگان و تخصصی',
          'بررسی شرایط مهاجرت',
          'تهیه و تکمیل مدارک',
          'ترجمه رسمی اسناد',
          'پیگیری پرونده تا دریافت ویزا',
          'خدمات پس از مهاجرت',
          'راهنمایی برای اسکان',
          'کمک در یافتن شغل'
        ],
        countries: [
          { name: 'ترکیه', flag: '🇹🇷', description: 'اقامت کاری، تحصیلی و سرمایه‌گذاری' },
          { name: 'آلمان', flag: '🇩🇪', description: 'ویزای کاری و تحصیلی' },
          { name: 'کانادا', flag: '🇨🇦', description: 'مهاجرت تخصصی و خانوادگی' },
          { name: 'استرالیا', flag: '🇦🇺', description: 'ویزای مهارتی و تحصیلی' },
          { name: 'سوئد', flag: '🇸🇪', description: 'اقامت کاری و خانوادگی' }
        ],
        process: [
          { step: 1, title: 'مشاوره اولیه', description: 'بررسی شرایط و انتخاب بهترین مسیر مهاجرت' },
          { step: 2, title: 'تهیه مدارک', description: 'جمع‌آوری و تکمیل تمامی مدارک مورد نیاز' },
          { step: 3, title: 'ارسال درخواست', description: 'ثبت و ارسال درخواست به مراجع ذی‌صلاح' },
          { step: 4, title: 'پیگیری پرونده', description: 'پیگیری مستمر تا دریافت نتیجه نهایی' },
          { step: 5, title: 'دریافت ویزا', description: 'دریافت ویزا و آماده‌سازی برای سفر' }
        ],
        testimonials: [
          {
            name: 'علی محمدی',
            country: 'آلمان',
            text: 'با کمک تیم شایسته و شایان توانستم ویزای کاری آلمان را دریافت کنم. خدمات بسیار حرفه‌ای و دقیق.',
            rating: 5
          },
          {
            name: 'فاطمه احمدی',
            country: 'کانادا',
            text: 'فرآیند مهاجرت به کانادا با راهنمایی‌های دقیق این گروه بسیار آسان شد.',
            rating: 5
          }
        ]
      },
      investment: {
        title: 'سرمایه‌گذاری و اشتغال',
        subtitle: 'فرصت‌های طلایی برای آینده‌ای مطمئن',
        description: 'با خدمات سرمایه‌گذاری گروه شایسته و شایان، بهترین فرصت‌های سرمایه‌گذاری در کشورهای مختلف را کشف کنید و آینده‌ای مطمئن برای خود و خانواده‌تان بسازید.',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
        features: [
          'مشاوره سرمایه‌گذاری تخصصی',
          'تحلیل بازار و ریسک',
          'ثبت شرکت در خارج',
          'اخذ مجوزهای کسب‌وکار',
          'مشاوره مالی و حسابداری',
          'پیگیری امور بانکی',
          'راهنمایی قانونی',
          'پشتیبانی پس از سرمایه‌گذاری'
        ],
        countries: [
          { name: 'ترکیه', flag: '🇹🇷', description: 'سرمایه‌گذاری املاک و کسب‌وکار' },
          { name: 'آلمان', flag: '🇩🇪', description: 'استارت‌آپ و فناوری' },
          { name: 'امارات', flag: '🇦🇪', description: 'تجارت و خدمات' },
          { name: 'قبرس', flag: '🇨🇾', description: 'سرمایه‌گذاری املاک' },
          { name: 'فرانسه', flag: '🇫🇷', description: 'کسب‌وکار و صنعت' }
        ]
      },
      realestate: {
        title: 'خرید و فروش املاک',
        subtitle: 'بهترین املاک در بهترین مناطق',
        description: 'تیم املاک گروه شایسته و شایان با تجربه‌ای غنی در بازار املاک بین‌المللی، بهترین گزینه‌های خرید، فروش و اجاره املاک را در اختیار شما قرار می‌دهد.',
        image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200',
        features: [
          'مشاوره تخصصی املاک',
          'بازدید مجازی و حضوری',
          'ارزیابی دقیق قیمت',
          'مذاکره و قرارداد',
          'انجام امور حقوقی',
          'تسهیلات وام',
          'مدیریت املاک',
          'خدمات پس از فروش'
        ],
        countries: [
          { name: 'ترکیه', flag: '🇹🇷', description: 'آپارتمان، ویلا و زمین' },
          { name: 'آلمان', flag: '🇩🇪', description: 'املاک مسکونی و تجاری' },
          { name: 'قبرس', flag: '🇨🇾', description: 'ویلاهای لوکس' },
          { name: 'امارات', flag: '🇦🇪', description: 'برج‌های مدرن' }
        ]
      }
    },
    en: {
      immigration: {
        title: 'Immigration Services',
        subtitle: 'An Easy Path to a Better Future',
        description: 'Shaisteh va Shayan International Group with over 10 years of experience in immigration, is ready to provide you with the most comprehensive immigration services. With our expert and experienced team, we accompany you through all stages of immigration.',
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1200',
        features: [
          'Free professional consultation',
          'Immigration conditions assessment',
          'Document preparation and completion',
          'Official document translation',
          'Case follow-up until visa receipt',
          'Post-immigration services',
          'Accommodation guidance',
          'Job search assistance'
        ],
        countries: [
          { name: 'Turkey', flag: '🇹🇷', description: 'Work, study and investment residence' },
          { name: 'Germany', flag: '🇩🇪', description: 'Work and study visa' },
          { name: 'Canada', flag: '🇨🇦', description: 'Skilled and family immigration' },
          { name: 'Australia', flag: '🇦🇺', description: 'Skilled and study visa' },
          { name: 'Sweden', flag: '🇸🇪', description: 'Work and family residence' }
        ]
      }
    }
  };

  const currentLang = params.lang as keyof typeof serviceDetails;
  const serviceId = params.serviceId as keyof typeof serviceDetails[typeof currentLang];
  const service = serviceDetails[currentLang]?.[serviceId] || serviceDetails.fa.immigration;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a] overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(${service.image})` }}
          ></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {service.subtitle}
            </p>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full animate-fade-in-up" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#0F4C75] dark:text-white mb-6">
                  {params.lang === 'fa' ? 'درباره این خدمت' : 'About This Service'}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-sm">{params.lang === 'fa' ? 'مشتری موفق' : 'Successful Clients'}</div>
                  </div>
                  <div className="bg-gradient-to-r from-[#FFD700] to-[#0F4C75] text-white p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-sm">{params.lang === 'fa' ? 'نرخ موفقیت' : 'Success Rate'}</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C75]/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F4C75] dark:text-white text-center mb-12">
              {params.lang === 'fa' ? 'ویژگی‌های خدمات ما' : 'Our Service Features'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#0F4C75] dark:text-white text-center mb-12">
              {params.lang === 'fa' ? 'کشورهای تحت پوشش' : 'Covered Countries'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.countries.map((country, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="text-6xl mb-4">{country.flag}</div>
                  <h3 className="text-xl font-bold text-[#0F4C75] dark:text-white mb-2">
                    {country.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {country.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              {params.lang === 'fa' ? 'آماده شروع هستید؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {params.lang === 'fa' ? 
                'همین حالا با ما تماس بگیرید و مشاوره رایگان دریافت کنید' :
                'Contact us now and get free consultation'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`/${params.lang}#contact`}
                className="bg-[#FFD700] text-[#0F4C75] px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                {params.lang === 'fa' ? 'تماس با ما' : 'Contact Us'}
              </a>
              
              <a
                href="mailto:info@2shigroup.com"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                {params.lang === 'fa' ? 'ارسال ایمیل' : 'Send Email'}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}