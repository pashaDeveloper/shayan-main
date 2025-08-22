'use client';

import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
          خطا در ورود
        </h2>
        <p className="text-center text-gray-700">
          {error === "AccessDenied"
            ? "دسترسی غیرمجاز است. لطفاً دوباره تلاش کنید."
            : error === "Configuration"
            ? "خطایی در پیکربندی رخ داده است."
            : "یک خطای ناشناخته رخ داده است. لطفاً دوباره تلاش کنید."}
        </p>
        <a
          href="/"
          className="mt-4 block text-center text-blue-500 hover:underline"
        >
          بازگشت به صفحه اصلی
        </a>
      </div>
    </div>
  );
}