import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }, { lang: "tr" }, { lang: "ar" }];
}

export async function generateMetadata({
  params
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = params;

  const titles = {
    fa: "گروه بین‌المللی شایسته و شایان | مهاجرت، سرمایه‌گذاری و خدمات بین‌المللی | 2SHIGROUP",
    en: "Shayesteh va Shayan International Group | Immigration & Investment Services | 2SHIGROUP",
    tr: "Şayeste ve Şayan Uluslararası Grup | Göç ve Yatırım Hizmetleri | 2SHIGROUP",
    ar: "مجموعة شايستي وشايان الدولية | خدمات الهجرة والاستثمار | 2SHIGROUP"
  };

  const descriptions = {
    fa: "گروه بین‌المللی شایسته و شایان ارائه‌دهنده خدمات مهاجرت، سرمایه‌گذاری، مسافرت، املاک، آموزش و سایر خدمات تخصصی در 10+ کشور جهان. مشاوره رایگان و پشتیبانی 24/7",
    en: "Shaisteh va Shayan International Group provides immigration, investment, travel, real estate, education and other specialized services in 10+ countries worldwide. Free consultation and 24/7 support",
    tr: "Şayeste ve Şayan Uluslararası Grup, dünya çapında 10+ ülkede göç, yatırım, seyahat, emlak, eğitim ve diğer uzman hizmetler sunmaktadır. Ücretsiz danışmanlık ve 7/24 destek",
    ar: "تقدم مجموعة شايستي وشايان الدولية خدمات الهجرة والاستثمار والسفر والعقارات والتعليم وغيرها من الخدمات المتخصصة في أكثر من 10 دول حول العالم. استشارة مجانية ودعم على مدار الساعة"
  };

  return {
    metadataBase: new URL("https://2shigroup.com"),
    title: titles[lang as keyof typeof titles] || titles.fa,
    description:
      descriptions[lang as keyof typeof descriptions] || descriptions.fa,
    alternates: {
      canonical: `https://2shigroup.com/${lang}`,
      languages: {
        fa: "https://2shigroup.com/fa",
        en: "https://2shigroup.com/en",
        tr: "https://2shigroup.com/tr",
        ar: "https://2shigroup.com/ar"
      }
    },
    keywords: [
  "گروه شایسته و شایان",
  "شرکت شایسته و شایان",
  "شایسته و شایان",
  "مهاجرت شایسته و شایان",
  "سرمایه‌گذاری شایسته و شایان",
  "2SHIGROUP"
],
  openGraph: {
  locale:
    lang === "fa"
      ? "fa_IR"
      : lang === "en"
      ? "en_US"
      : lang === "tr"
      ? "tr_TR"
      : "ar_SA",
  url: `https://2shigroup.com/${lang}`,
  images: [
    {
      url: "/img/shayan-large.jpg",
      width: 2400,
      height: 1260,
      alt: "2SHIGROUP Large Preview"
    },
    {
      url: "/img/shayan-small.jpg",
      width: 1200,
      height: 630,
      alt: "2SHIGROUP Small Preview"
    }
  ]
}

  };
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  const isRTL = lang === "fa" || lang === "ar";

  return (
    <html lang={lang} dir={isRTL ? "rtl" : "ltr"}>
      <body
        className={inter.className}
        style={{ fontFamily: "Vazirmatn, system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <LanguageProvider initialLanguage={lang as any}>
            <AuthProvider>{children}</AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
