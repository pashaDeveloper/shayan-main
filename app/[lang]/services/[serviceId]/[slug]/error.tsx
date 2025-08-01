"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";
import Link from "next/link";

const translations = { fa, en, ar, tr };

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("خطا:", error);
  }, [error]);

  const pathname = usePathname();
  const lang = pathname.split("/")[1] as "fa" | "en" | "ar" | "tr";
  const t = translations[lang] || fa;

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-center bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-200 p-8">
        <h1 className="text-3xl font-bold mb-4">
          {t.service?.notFound || "Service not found"}
        </h1>
        <Link
          href={`/${lang}`}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          بازگشت
        </Link>
      </div>
    </>
  );
}
