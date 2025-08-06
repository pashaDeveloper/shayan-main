import type { Metadata } from 'next';

export const trMetadata: Metadata = {
  title: 'Shaisteh & Shayan Uluslararası Grup | Göç ve Yatırım Hizmetleri | 2SHIGROUP',
  description:
    'Shaisteh & Shayan Uluslararası Grup, 10+ ülkede göç, yatırım, seyahat, emlak, eğitim ve diğer uzmanlık hizmetleri sunar. Ücretsiz danışmanlık ve 7/24 destek.',
  keywords:
    'göç, yatırım, seyahat, emlak, yurtdışında eğitim, vize, oturma izni, Türkiye, Almanya, Kanada, Avustralya, Shaisteh & Shayan, 2shigroup',
  authors: [{ name: 'Shaisteh & Shayan International Group' }],
  creator: 'Shaisteh & Shayan International Group',
  publisher: '2SHIGROUP',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://2shigroup.com/tr',
    siteName: 'Shaisteh & Shayan Uluslararası Grup',
    title: 'Shaisteh & Shayan Uluslararası Grup | Göç ve Yatırım Hizmetleri',
    description:
      'Dünya genelinde göç, yatırım, seyahat, emlak ve eğitim hizmetleri sunuyoruz',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shaisteh & Shayan Uluslararası Grup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaisteh & Shayan Uluslararası Grup | Göç ve Yatırım Hizmetleri',
    description:
      'Dünya genelinde göç, yatırım, seyahat, emlak ve eğitim hizmetleri sunuyoruz',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://2shigroup.com/tr',
  },
};
