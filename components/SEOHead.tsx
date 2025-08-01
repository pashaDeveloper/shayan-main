
import Head from 'next/head';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ 
  title = 'گروه بین‌المللی شایسته و شایان | خدمات مهاجرت و سرمایه‌گذاری',
  description = 'ارائه‌دهنده خدمات مهاجرت، سرمایه‌گذاری، مسافرت، املاک و آموزش در سراسر جهان',
  keywords = 'مهاجرت، سرمایه‌گذاری، مسافرت، املاک، تحصیل خارج، ویزا، اقامت',
  image = '/og-image.jpg',
  url = 'https://2shigroup.com'
}: SEOHeadProps) => {
  const { language } = useLanguage();

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shaisteh va Shayan International Group" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={language} />
      <meta name="revisit-after" content="7 days" />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="گروه بین‌المللی شایسته و شایان" />
      <meta property="og:locale" content={`${language}_${language.toUpperCase()}`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="fa" href={`${url}/fa`} />
      <link rel="alternate" hrefLang="en" href={`${url}/en`} />
      <link rel="alternate" hrefLang="tr" href={`${url}/tr`} />
      <link rel="alternate" hrefLang="ar" href={`${url}/ar`} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "گروه بین‌المللی شایسته و شایان",
            "alternateName": "2SHIGROUP",
            "url": "https://2shigroup.com",
            "logo": "https://2shigroup.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-501-1308483",
              "contactType": "customer service",
              "availableLanguage": ["Persian", "English", "Turkish", "Arabic"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "E5 Highway, Guzel Yurt Metrobus Station, Administrative Building, 3rd Floor",
              "addressLocality": "Istanbul",
              "addressCountry": "Turkey"
            },
            "sameAs": [
              "https://instagram.com/2shigroup",
              "https://facebook.com/2shigroup",
              "https://twitter.com/2shigroup"
            ],
            "serviceArea": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Immigration and Investment Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Immigration Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Investment Services"
                  }
                }
              ]
            }
          })
        }}
      />
    </Head>
  );
};

export default SEOHead;