import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

import { faMetadata } from "@/metadata/fa";
import { enMetadata } from "@/metadata/en";
import { trMetadata } from "@/metadata/tr";
import { arMetadata } from "@/metadata/ar";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import AdminPersist from "@/components/persistent/AdminPersist";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

const metadataMap: Record<string, Metadata> = {
  fa: faMetadata,
  en: enMetadata,
  tr: trMetadata,
  ar: arMetadata
};

export async function generateMetadata({
  params
}: {
  params: { lang: string };
}) {
  const lang = params.lang || "fa";
  return metadataMap[lang] || faMetadata;
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang || "fa";
  const dir = lang === "fa" || lang === "ar" ? "rtl" : "ltr";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "گروه شایسته و شایان",
    alternateName: ["شرکت شایسته و شایان", "شایسته و شایان", "2SHIGROUP"],
    url: "https://2shigroup.com",
    logo: "https://2shigroup.com/img/shayan-large.jpg"
  };

  return (
    <html lang={lang} dir={dir}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={inter.className}
        style={{ fontFamily: "Vazirmatn, system-ui, sans-serif" }}
      >
        <ThemeProvider>
          <LanguageProvider>
            <Providers>
              <AdminPersist>
                <Toaster />
                <AuthProvider>{children}</AuthProvider>
              </AdminPersist>
            </Providers>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
