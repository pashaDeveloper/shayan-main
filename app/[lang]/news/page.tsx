'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Eye, ArrowRight, ArrowLeft, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewsPage({ params }: { params: { lang: string } }) {
  const { t, isRTL } = useLanguage();

  const newsData = {
    fa: [
      {
        id: 1,
        title: 'تغییرات جدید در قوانین مهاجرت به ترکیه در سال 2025',
        excerpt: 'دولت ترکیه تغییرات مهمی در قوانین مهاجرت اعمال کرده که بر متقاضیان اقامت تأثیر می‌گذارد. این تغییرات شامل کاهش مدت زمان صدور اقامت و تسهیل فرآیند برای سرمایه‌گذاران است.',
        content: 'دولت ترکیه در راستای جذب سرمایه‌گذاران خارجی و تسهیل فرآیند مهاجرت، تغییرات مهمی در قوانین اقامت اعمال کرده است. این تغییرات که از ابتدای سال 2025 اجرایی شده، شامل کاهش زمان بررسی پرونده‌های اقامت از 60 روز به 30 روز، افزایش مدت اعتبار اقامت کاری از یک سال به دو سال، و تسهیل شرایط دریافت اقامت برای خانواده‌های متقاضیان است.',
        date: '15 دی 1403',
        views: 1250,
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'مهاجرت',
        author: 'تیم مشاوره شایسته و شایان'
      },
      {
        id: 2,
        title: 'فرصت‌های سرمایه‌گذاری جدید در بازار املاک آلمان',
        excerpt: 'بازار املاک آلمان با رشد 8 درصدی در سال گذشته، فرصت‌های مناسبی برای سرمایه‌گذاران ایرانی فراهم کرده است. شهرهای برلین، مونیخ و هامبورگ در صدر این فرصت‌ها قرار دارند.',
        content: 'بازار املاک آلمان در سال 2024 رشد قابل توجهی داشته و پیش‌بینی می‌شود این روند در سال 2025 نیز ادامه یابد. عوامل مختلفی از جمله کاهش نرخ بهره، افزایش تقاضا برای مسکن، و سیاست‌های حمایتی دولت آلمان از این رشد حمایت می‌کند. سرمایه‌گذاران ایرانی می‌توانند از طریق خرید املاک مسکونی یا تجاری، علاوه بر کسب درآمد، امکان دریافت اقامت آلمان را نیز داشته باشند.',
        date: '12 دی 1403',
        views: 890,
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'سرمایه‌گذاری',
        author: 'کارشناسان املاک شایسته و شایان'
      },
      {
        id: 3,
        title: 'راهنمای کامل تحصیل در دانشگاه‌های کانادا برای دانشجویان ایرانی',
        excerpt: 'کانادا با سیستم آموزشی پیشرفته و فرصت‌های شغلی مناسب، یکی از محبوب‌ترین مقاصد تحصیلی برای دانشجویان ایرانی محسوب می‌شود. در این مقاله راهنمای کاملی از مراحل پذیرش ارائه می‌دهیم.',
        content: 'تحصیل در کانادا مزایای فراوانی دارد که شامل کیفیت بالای آموزش، امکان کار حین تحصیل، فرصت اقامت دائم پس از فارغ‌التحصیلی، و محیط چندفرهنگی است. فرآیند پذیرش شامل انتخاب رشته و دانشگاه، تهیه مدارک، اخذ پذیرش، درخواست ویزای تحصیلی، و نهایتاً سفر به کانادا است. هزینه‌های تحصیل بسته به رشته و دانشگاه متفاوت است اما به طور متوسط بین 15 تا 35 هزار دلار کانادا در سال می‌باشد.',
        date: '10 دی 1403',
        views: 2100,
        image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'تحصیل',
        author: 'مشاوران تحصیلی شایسته و شایان'
      }
    ],
    en: [
      {
        id: 1,
        title: 'New Changes in Turkey Immigration Laws for 2025',
        excerpt: 'The Turkish government has implemented important changes in immigration laws that affect residence permit applicants. These changes include reduced processing time and facilitated procedures for investors.',
        content: 'The Turkish government has implemented significant changes in residence laws to attract foreign investors and facilitate the immigration process. These changes, effective from early 2025, include reducing residence application processing time from 60 to 30 days, extending work residence validity from one to two years, and easing conditions for applicants\' families.',
        date: 'January 5, 2025',
        views: 1250,
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Immigration',
        author: 'Shaisteh va Shayan Advisory Team'
      },
      {
        id: 2,
        title: 'New Investment Opportunities in German Real Estate Market',
        excerpt: 'The German real estate market, with 8% growth last year, has created suitable opportunities for Iranian investors. Berlin, Munich, and Hamburg are at the forefront of these opportunities.',
        content: 'The German real estate market had significant growth in 2024 and this trend is expected to continue in 2025. Various factors including reduced interest rates, increased housing demand, and German government supportive policies support this growth. Iranian investors can obtain German residence permits through residential or commercial property purchases while earning income.',
        date: 'January 2, 2025',
        views: 890,
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Investment',
        author: 'Shaisteh va Shayan Real Estate Experts'
      },
      {
        id: 3,
        title: 'Complete Guide to Studying at Canadian Universities for Iranian Students',
        excerpt: 'Canada, with its advanced educational system and suitable job opportunities, is one of the most popular study destinations for Iranian students. This article provides a complete guide to admission processes.',
        content: 'Studying in Canada has many advantages including high-quality education, work opportunities during studies, permanent residence opportunities after graduation, and a multicultural environment. The admission process includes selecting programs and universities, preparing documents, obtaining acceptance, applying for study visas, and finally traveling to Canada. Tuition costs vary by program and university but average between CAD 15,000 to 35,000 per year.',
        date: 'December 30, 2024',
        views: 2100,
        image: 'https://images.pexels.com/photos/159844/pexels-photo-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Education',
        author: 'Shaisteh va Shayan Educational Consultants'
      }
    ],
    tr: [
      {
        id: 1,
        title: '2025 Yılı Türkiye Göç Yasalarındaki Yeni Değişiklikler',
        excerpt: 'Türk hükümeti, ikamet izni başvuru sahiplerini etkileyen göç yasalarında önemli değişiklikler uyguladı. Bu değişiklikler işlem süresinin azaltılması ve yatırımcılar için kolaylaştırılmış prosedürleri içeriyor.',
        content: 'Türk hükümeti, yabancı yatırımcıları çekmek ve göç sürecini kolaylaştırmak amacıyla ikamet yasalarında önemli değişiklikler uyguladı. 2025 başından itibaren yürürlüğe giren bu değişiklikler, ikamet başvuru işlem süresinin 60 günden 30 güne düşürülmesi, çalışma ikametinin geçerlilik süresinin bir yıldan iki yıla uzatılması ve başvuru sahiplerinin aileleri için şartların kolaylaştırılmasını içeriyor.',
        date: '5 Ocak 2025',
        views: 1250,
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Göç',
        author: 'Şayeste ve Şayan Danışmanlık Ekibi'
      },
      {
        id: 2,
        title: 'Almanya Emlak Piyasasında Yeni Yatırım Fırsatları',
        excerpt: 'Almanya emlak piyasası, geçen yıl %8 büyüme ile İranlı yatırımcılar için uygun fırsatlar yarattı. Berlin, Münih ve Hamburg bu fırsatların başında geliyor.',
        content: 'Almanya emlak piyasası 2024\'te önemli bir büyüme gösterdi ve bu eğilimin 2025\'te de devam etmesi bekleniyor. Faiz oranlarının düşmesi, konut talebinin artması ve Alman hükümetinin destekleyici politikaları gibi çeşitli faktörler bu büyümeyi destekliyor. İranlı yatırımcılar konut veya ticari mülk satın alarak gelir elde etmenin yanı sıra Almanya ikamet izni alma imkanına da sahip olabilirler.',
        date: '2 Ocak 2025',
        views: 890,
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Yatırım',
        author: 'Şayeste ve Şayan Emlak Uzmanları'
      }
    ],
    ar: [
      {
        id: 1,
        title: 'التغييرات الجديدة في قوانين الهجرة التركية لعام 2025',
        excerpt: 'نفذت الحكومة التركية تغييرات مهمة في قوانين الهجرة تؤثر على طالبي تصاريح الإقامة. تشمل هذه التغييرات تقليل وقت المعالجة وتسهيل الإجراءات للمستثمرين.',
        content: 'نفذت الحكومة التركية تغييرات مهمة في قوانين الإقامة لجذب المستثمرين الأجانب وتسهيل عملية الهجرة. هذه التغييرات، السارية من بداية عام 2025، تشمل تقليل وقت معالجة طلبات الإقامة من 60 إلى 30 يوماً، وتمديد صلاحية إقامة العمل من سنة إلى سنتين، وتسهيل الشروط لعائلات المتقدمين.',
        date: '5 يناير 2025',
        views: 1250,
        image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'الهجرة',
        author: 'فريق الاستشارة في شايستي وشايان'
      },
      {
        id: 2,
        title: 'فرص استثمارية جديدة في سوق العقارات الألماني',
        excerpt: 'سوق العقارات الألماني، بنمو 8% العام الماضي، خلق فرصاً مناسبة للمستثمرين الإيرانيين. برلين وميونيخ وهامبورغ في مقدمة هذه الفرص.',
        content: 'شهد سوق العقارات الألماني نمواً كبيراً في عام 2024 ومن المتوقع أن يستمر هذا الاتجاه في عام 2025. عوامل مختلفة بما في ذلك انخفاض أسعار الفائدة وزيادة الطلب على الإسكان والسياسات الداعمة للحكومة الألمانية تدعم هذا النمو. يمكن للمستثمرين الإيرانيين الحصول على تصاريح الإقامة الألمانية من خلال شراء العقارات السكنية أو التجارية مع كسب الدخل.',
        date: '2 يناير 2025',
        views: 890,
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'الاستثمار',
        author: 'خبراء العقارات في شايستي وشايان'
      }
    ]
  };

  const currentNews = newsData[params.lang as keyof typeof newsData] || newsData.fa;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {params.lang === 'fa' ? 'آخرین اخبار و مقالات' : 
               params.lang === 'en' ? 'Latest News & Articles' :
               params.lang === 'tr' ? 'Son Haberler ve Makaleler' :
               'آخر الأخبار والمقالات'}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {params.lang === 'fa' ? 'به‌روزترین اطلاعات در زمینه مهاجرت، سرمایه‌گذاری و خدمات بین‌المللی' :
               params.lang === 'en' ? 'Latest information on immigration, investment and international services' :
               params.lang === 'tr' ? 'Göç, yatırım ve uluslararası hizmetler konusunda en güncel bilgiler' :
               'أحدث المعلومات حول الهجرة والاستثمار والخدمات الدولية'}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={params.lang === 'fa' ? 'جستجو در اخبار...' :
                           params.lang === 'en' ? 'Search news...' :
                           params.lang === 'tr' ? 'Haberlerde ara...' :
                           'البحث في الأخبار...'}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentNews.map((article) => (
                <article
                  key={article.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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
                        <span>{article.views}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-[#0F4C75] dark:text-white mb-3 line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Author */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      {params.lang === 'fa' ? 'نویسنده: ' :
                       params.lang === 'en' ? 'Author: ' :
                       params.lang === 'tr' ? 'Yazar: ' :
                       'الكاتب: '}{article.author}
                    </p>

                    {/* Read More Button */}
                    <button className="flex items-center gap-2 text-[#0F4C75] dark:text-[#FFD700] hover:text-[#FFD700] dark:hover:text-[#0F4C75] font-semibold transition-colors duration-300 group">
                      {params.lang === 'fa' ? 'ادامه مطلب' :
                       params.lang === 'en' ? 'Read More' :
                       params.lang === 'tr' ? 'Devamını Oku' :
                       'اقرأ المزيد'}
                      {isRTL ? (
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                      ) : (
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}