import type { Metadata } from 'next';

export const arMetadata: Metadata = {
      metadataBase: new URL("https://2shigroup.com"),
  title: 'مجموعة شايسته وشايان الدولية | خدمات الهجرة والاستثمار | 2SHIGROUP',
  description:
    'مجموعة شايسته وشايان الدولية تقدم خدمات الهجرة، الاستثمار، السفر، العقارات، التعليم، وخدمات متخصصة أخرى في أكثر من 10 دول حول العالم. استشارة مجانية ودعم 24/7.',
  keywords:
    'الهجرة، الاستثمار، السفر، العقارات، الدراسة بالخارج، التأشيرة، الإقامة، تركيا، ألمانيا، كندا، أستراليا، شايسته وشايان، 2shigroup',
  authors: [{ name: 'Shaisteh & Shayan International Group' }],
  creator: 'Shaisteh & Shayan International Group',
  publisher: '2SHIGROUP',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://2shigroup.com/ar',
    siteName: 'مجموعة شايسته وشايان الدولية',
    title: 'مجموعة شايسته وشايان الدولية | خدمات الهجرة والاستثمار',
    description:
      'نقدم خدمات الهجرة، الاستثمار، السفر، العقارات والتعليم حول العالم',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'مجموعة شايسته وشايان الدولية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مجموعة شايسته وشايان الدولية | خدمات الهجرة والاستثمار',
    description:
      'نقدم خدمات الهجرة، الاستثمار، السفر، العقارات والتعليم حول العالم',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://2shigroup.com/ar',
  },
};
