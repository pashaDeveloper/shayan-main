"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import './globals.css'
export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur p-8 shadow-xl"
        >
          {/* Subtle background decoration */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-400/10 to-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-400/10 to-amber-400/10 blur-3xl" />

          <div className="flex flex-col items-center text-center gap-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center h-20 w-20 rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-inner"
            >
              {/* 404 Badge */}
              <span className="text-2xl font-black tracking-widest text-slate-700 dark:text-slate-200">
                404
              </span>
            </motion.div>

            <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
              صفحه مورد نظر پیدا نشد
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-prose">
              ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه جا‌به‌جا شده باشد. می‌توانید به
              منوی اصلی برگردید یا مسیر دیگری را امتحان کنید.
            </p>

            {/* Optional quick search (non-functional placeholder) */}
            <div className="mt-2 w-full">
              <label className="sr-only" htmlFor="quick-search">
                جست‌وجو
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 px-3 py-2">
                <Search className="h-4 w-4 opacity-70" />
                <input
                  id="quick-search"
                  placeholder="عبارتی برای جست‌وجو بنویسید…"
                  className="w-full bg-transparent outline-none placeholder:text-slate-400 text-sm"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 w-full sm:justify-center">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                بازگشت
              </button>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
              >
                <Home className="h-4 w-4" />
                بازگشت به منوی اصلی
              </Link>
            </div>

            <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
              اگر فکر می‌کنید این یک خطاست، لطفاً با پشتیبانی تماس بگیرید.
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
