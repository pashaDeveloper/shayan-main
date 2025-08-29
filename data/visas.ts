import { Visa } from '../types/visa';

export const visas: Visa[] = [
  {
    id: '1',
    title: 'ویزای توریستی ترکیه',
    slug: 'tourist-visa-turkey',
    description: 'ویزای توریستی ترکیه برای سفرهای تفریحی و گردشگری به مدت حداکثر 90 روز در هر 180 روز صادر می‌شود.',
    shortDescription: 'ویزای توریستی ترکیه - 90 روز اقامت',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
    country: 'ترکیه',
    type: 'tourist',
    processingTime: '3-5 روز کاری',
    validity: '180 روز',
    price: 60,
    currency: 'USD',
    requirements: [
      'گذرنامه معتبر با حداقل 6 ماه اعتبار',
      'عکس پاسپورتی رنگی',
      'رزرو هتل یا اقامتگاه',
      'بلیط رفت و برگشت',
      'گواهی بیمه مسافرتی'
    ],
    documents: [
      {
        id: '1',
        title: 'گذرنامه',
        description: 'گذرنامه معتبر با حداقل 6 ماه اعتبار',
        required: true,
        format: 'اصل + کپی'
      },
      {
        id: '2',
        title: 'عکس پاسپورتی',
        description: 'عکس رنگی با پس‌زمینه سفید',
        required: true,
        format: '3.5x4.5 سانتی‌متر'
      }
    ],
    roadmap: [
      {
        id: '1',
        title: 'تکمیل فرم درخواست',
        description: 'پر کردن فرم درخواست ویزا به صورت آنلاین',
        duration: '30 دقیقه',
        order: 1
      },
      {
        id: '2',
        title: 'ارسال مدارک',
        description: 'ارسال مدارک مورد نیاز',
        duration: '1 روز',
        order: 2
      },
      {
        id: '3',
        title: 'بررسی درخواست',
        description: 'بررسی درخواست توسط کنسولگری',
        duration: '3-5 روز',
        order: 3
      },
      {
        id: '4',
        title: 'دریافت ویزا',
        description: 'دریافت ویزا از طریق ایمیل',
        duration: '1 روز',
        order: 4
      }
    ],
    faqs: [
      {
        id: '1',
        question: 'آیا ویزای ترکیه آنلاین صادر می‌شود؟',
        answer: 'بله، ویزای توریستی ترکیه به صورت الکترونیکی (e-Visa) صادر می‌شود.',
        order: 1
      },
      {
        id: '2',
        question: 'مدت اعتبار ویزای ترکیه چقدر است؟',
        answer: 'ویزای توریستی ترکیه برای مدت 180 روز معتبر است و می‌توانید حداکثر 90 روز در کشور بمانید.',
        order: 2
      }
    ],
    views: 1250,
    likes: 89,
    rating: 4.5,
    totalRatings: 156,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: '2',
    title: 'ویزای کاری آلمان',
    slug: 'work-visa-germany',
    description: 'ویزای کاری آلمان برای افرادی که قصد کار در آلمان را دارند و پیشنهاد کار از یک شرکت آلمانی دریافت کرده‌اند.',
    shortDescription: 'ویزای کاری آلمان - اقامت طولانی مدت',
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
    country: 'آلمان',
    type: 'work',
    processingTime: '4-8 هفته',
    validity: '1 سال',
    price: 75,
    currency: 'EUR',
    requirements: [
      'پیشنهاد کار از شرکت آلمانی',
      'مدرک تحصیلی معادل‌سازی شده',
      'گواهی عدم سوء پیشینه',
      'بیمه درمانی',
      'مدرک زبان آلمانی یا انگلیسی'
    ],
    documents: [
      {
        id: '1',
        title: 'قرارداد کار',
        description: 'قرارداد کار امضا شده با شرکت آلمانی',
        required: true
      },
      {
        id: '2',
        title: 'مدرک تحصیلی',
        description: 'مدرک تحصیلی معادل‌سازی شده',
        required: true
      }
    ],
    roadmap: [
      {
        id: '1',
        title: 'دریافت پیشنهاد کار',
        description: 'دریافت پیشنهاد کار از شرکت آلمانی',
        duration: 'متغیر',
        order: 1
      },
      {
        id: '2',
        title: 'تهیه مدارک',
        description: 'تهیه و ترجمه مدارک مورد نیاز',
        duration: '2-3 هفته',
        order: 2
      },
      {
        id: '3',
        title: 'درخواست ویزا',
        description: 'ارسال درخواست به کنسولگری آلمان',
        duration: '1 روز',
        order: 3
      },
      {
        id: '4',
        title: 'مصاحبه',
        description: 'حضور در مصاحبه کنسولگری',
        duration: '1 روز',
        order: 4
      },
      {
        id: '5',
        title: 'دریافت ویزا',
        description: 'دریافت ویزا پس از تایید',
        duration: '4-8 هفته',
        order: 5
      }
    ],
    faqs: [
      {
        id: '1',
        question: 'آیا برای ویزای کاری آلمان نیاز به زبان آلمانی است؟',
        answer: 'بسته به نوع شغل، ممکن است نیاز به مدرک زبان آلمانی یا انگلیسی باشد.',
        order: 1
      }
    ],
    views: 890,
    likes: 67,
    rating: 4.3,
    totalRatings: 98,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18'
  },
  {
    id: '3',
    title: 'ویزای تحصیلی کانادا',
    slug: 'student-visa-canada',
    description: 'ویزای تحصیلی کانادا برای دانشجویانی که قصد تحصیل در دانشگاه‌های کانادا را دارند.',
    shortDescription: 'ویزای تحصیلی کانادا - Study Permit',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
    country: 'کانادا',
    type: 'student',
    processingTime: '4-12 هفته',
    validity: 'مدت تحصیل + 90 روز',
    price: 150,
    currency: 'CAD',
    requirements: [
      'پذیرش از دانشگاه کانادایی',
      'اثبات توان مالی',
      'گواهی عدم سوء پیشینه',
      'معاینات پزشکی',
      'مدرک زبان انگلیسی یا فرانسوی'
    ],
    documents: [
      {
        id: '1',
        title: 'نامه پذیرش',
        description: 'نامه پذیرش از دانشگاه کانادایی',
        required: true
      }
    ],
    roadmap: [
      {
        id: '1',
        title: 'دریافت پذیرش',
        description: 'دریافت پذیرش از دانشگاه کانادایی',
        duration: 'متغیر',
        order: 1
      }
    ],
    faqs: [
      {
        id: '1',
        question: 'آیا می‌توانم در کانادا کار کنم؟',
        answer: 'بله، دانشجویان می‌توانند تا 20 ساعت در هفته کار کنند.',
        order: 1
      }
    ],
    views: 1100,
    likes: 95,
    rating: 4.7,
    totalRatings: 134,
    createdAt: '2024-01-12',
    updatedAt: '2024-01-19'
  },
  {
    id: '4',
    title: 'ویزای توریستی دبی',
    slug: 'tourist-visa-dubai',
    description: 'ویزای توریستی دبی برای سفرهای تفریحی به امارات متحده عربی.',
    shortDescription: 'ویزای توریستی دبی - 30 روز',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
    country: 'امارات',
    type: 'tourist',
    processingTime: '2-3 روز کاری',
    validity: '60 روز',
    price: 100,
    currency: 'USD',
    requirements: [
      'گذرنامه معتبر',
      'عکس پاسپورتی',
      'رزرو هتل',
      'بلیط هواپیما'
    ],
    documents: [],
    roadmap: [],
    faqs: [],
    views: 950,
    likes: 78,
    rating: 4.4,
    totalRatings: 112,
    createdAt: '2024-01-14',
    updatedAt: '2024-01-21'
  },
  {
    id: '5',
    title: 'ویزای کاری استرالیا',
    slug: 'work-visa-australia',
    description: 'ویزای کاری استرالیا برای متخصصان مختلف.',
    shortDescription: 'ویزای کاری استرالیا - Skilled Worker',
    image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800',
    country: 'استرالیا',
    type: 'work',
    processingTime: '6-12 ماه',
    validity: '4 سال',
    price: 4000,
    currency: 'AUD',
    requirements: [
      'ارزیابی مهارت',
      'مدرک زبان انگلیسی',
      'تجربه کاری مرتبط'
    ],
    documents: [],
    roadmap: [],
    faqs: [],
    views: 750,
    likes: 56,
    rating: 4.2,
    totalRatings: 89,
    createdAt: '2024-01-13',
    updatedAt: '2024-01-20'
  }
];

export const getVisaById = (id: string): Visa | undefined => {
  return visas.find(visa => visa.id === id);
};

export const getVisaBySlug = (slug: string): Visa | undefined => {
  return visas.find(visa => visa.slug === slug);
};

export const getPopularVisas = (limit: number = 5): Visa[] => {
  return visas
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
};

export const filterVisas = (filters: any): Visa[] => {
  let filteredVisas = [...visas];

  if (filters.search) {
    filteredVisas = filteredVisas.filter(visa =>
      visa.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      visa.country.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  if (filters.country) {
    filteredVisas = filteredVisas.filter(visa => visa.country === filters.country);
  }

  if (filters.type) {
    filteredVisas = filteredVisas.filter(visa => visa.type === filters.type);
  }

  // Sort
  switch (filters.sortBy) {
    case 'newest':
      filteredVisas.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    case 'mostViewed':
      filteredVisas.sort((a, b) => b.views - a.views);
      break;
    case 'leastViewed':
      filteredVisas.sort((a, b) => a.views - b.views);
      break;
    case 'mostLiked':
      filteredVisas.sort((a, b) => b.likes - a.likes);
      break;
    case 'leastLiked':
      filteredVisas.sort((a, b) => a.likes - b.likes);
      break;
    default:
      break;
  }

  return filteredVisas;
};