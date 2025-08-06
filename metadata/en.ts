import type { Metadata } from 'next';

export const enMetadata: Metadata = {
  title: 'Shaisteh & Shayan International Group | Immigration & Investment Services | 2SHIGROUP',
  description:
    'Shaisteh & Shayan International Group offers immigration, investment, travel, real estate, education, and other specialized services in 10+ countries worldwide. Free consultation and 24/7 support.',
  keywords:
    'immigration, investment, travel, real estate, study abroad, visa, residency, Turkey, Germany, Canada, Australia, Shaisteh & Shayan, 2shigroup',
  authors: [{ name: 'Shaisteh & Shayan International Group' }],
  creator: 'Shaisteh & Shayan International Group',
  publisher: '2SHIGROUP',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://2shigroup.com/en',
    siteName: 'Shaisteh & Shayan International Group',
    title: 'Shaisteh & Shayan International Group | Immigration & Investment Services',
    description:
      'Providing immigration, investment, travel, real estate, and education services worldwide',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shaisteh & Shayan International Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaisteh & Shayan International Group | Immigration & Investment Services',
    description:
      'Providing immigration, investment, travel, real estate, and education services worldwide',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://2shigroup.com/en',
  },
};
