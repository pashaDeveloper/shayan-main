"use client";

import React from "react";
import Image from "next/image";
import Main from "@/layouts/Main";
type Lang = "fa" | "en" | "ar" | "tr";

export default function Certificates({ params }: { params: { lang: string } }) {
  const lang = (params.lang as Lang) || "fa";

  const certificates = [
    {
      id: 1,
      title: "گواهینامه انجمن تورگردانان",
      image: "/assets/certs/1.jpg"
    },
    {
      id: 2,
      title: "مجوز آژانس مسافرتی",
      image: "/assets/certs/2.jpg"
    },
    {
      id: 3,
      title: "گواهینامه ISO 9001",
      image: "/assets/certs/3.jpg",
      status: "فعال",
      issuer: "انجمن بین‌المللی حمل و نقل هوایی",
      certificateNumber: "IATA-2023-321",
      description:
        "عضویت در انجمن بین‌المللی حمل و نقل هوایی (IATA) که امکان فروش بلیط هواپیما را فراهم می‌کند."
    },
    {
      id: 4,
      title: "گواهینامه امنیت سایبری",
      image: "/assets/certs/4.jpg",
      status: "فعال",
      issuer: "مرکز ملی فضای مجازی",
      certificateNumber: "NCSC-2024-654",
      description:
        "گواهینامه امنیت سایبری برای حفاظت از اطلاعات مشتریان و تراکنش‌های آنلاین."
    },
    {
      id: 5,
      title: "مجوز خدمات الکترونیک",
      image: "/assets/certs/5.jpg",
      status: "فعال",
      issuer: "وزارت ارتباطات و فناوری اطلاعات",
      certificateNumber: "MICT-2024-987",
      description:
        "مجوز ارائه خدمات الکترونیک و تجارت الکترونیک در حوزه گردشگری."
    },
    {
      id: 6,
      title: "گواهینامه ویژه دیگر",
      image: "/assets/certs/6.jpg"
    }
  ];

  return (
    <Main params={{ lang }}>
      <div
        className="min-h-screen bg-gradient-to-br from-violet-200 via-white to-violet-300"
        dir="rtl"
      >
        {/* Hero Section */}
        <section className="w-screen relative m-0  py-40 bg-secondary ">
          <div className="absolute  inset-0 bg-black/20"></div>
          <div
            className="absolute  h-40 py-72 w-screen inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: `url(/assets/certs/main.jpg)` }}
          ></div>

          <div className="relative flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl bg-secondary rounded-sm py-4 px-2 w-fit md:text-6xl font-bold mb-6 animate-fade-in-up">
              گواهی نامه ها
            </h1>
                <div
              className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <p
              className="text-xl md:text-2xl mt-8 rounded-sm bg-blue-900 py-4 px-2 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              تمامی گواهی‌نامه‌ها و مجوزهای ما از مراجع معتبر داخلی و بین‌المللی
              صادر شده‌اند و نشان‌دهنده تعهد ما به ارائه خدمات گردشگری با کیفیت
              و امنیت بالا است.
            </p>

        
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      height={700}
                      width={300}
                      className="w-full h-fit object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
}
