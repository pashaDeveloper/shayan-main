'use client';
import { useParams } from 'next/navigation';
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";

const translations = { fa, en, ar, tr };

export default function NotFound() {
  const params = useParams();
  type Lang = 'fa' | 'en' | 'ar' | 'tr';
  const currentLang = params.lang as Lang;
  const t = translations[currentLang];

  return (
    <>
      <section  className="relative inset-0  top-0 h-96 w-screen  bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="mt-28 justify-center text-white flex text-7xl text-center w-full">
          {t.service?.notFound || "Service not found"}
        </h1>
      </section>
    </>
  );
}
