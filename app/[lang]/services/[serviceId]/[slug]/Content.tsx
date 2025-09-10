import React from "react";
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Feedback from "./Feedback";

type Params = {
  lang: string;
  serviceId: string;
};

type Service = {
  _id: any;
  serviceId: number;
  title: string;
  subtitle: string;
  description: string;
  whyUs?: string;
  image: string;
  features: string[];
};

const translations = { fa, en, ar, tr };

async function fetchServiceById(lang: string, serviceId: string): Promise<Service | null> {
  try {
    const baseUrl = process.env.API_URL;
    const response = await fetch(`${baseUrl}/service/get/${serviceId}?lang=${lang}`, {
  cache: "force-cache",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch service");
    }

    const data = await response.json();
    return data.service || null;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const currentLang = params.lang as keyof typeof translations;
  const t = translations[currentLang] || translations.en;
  
  const service = await fetchServiceById(params.lang, params.serviceId);
  if (!service) {
    return notFound();
  }
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className=" absolute h-fit pb-20 inset-0  m-0 py-32 bg-secondary ">
                <div className="absolute inset-0 bg-black/20"></div>

        <div
          className="absolute h-full mb-4 pb-16 w-screen inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>

        <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {service.subtitle}
          </p>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* About Service */}
      <section className="pt-96">
        <div className=" mx-auto px-4  sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-500 dark:text-white mb-6">
                {t.service.about}
              </h2>
              <div
                className="text-gray-600 dark:text-gray-300 text-lg mb-8"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              {service.whyUs && (
                <div
                  className="text-gray-600 dark:text-gray-300 text-lg mb-8"
                  dangerouslySetInnerHTML={{ __html: service.whyUs }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-14 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-500 dark:text-white text-center mb-12">
            {t.service.features}
          </h2>

          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </span>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Feedback */}
      <Feedback lang={params.lang} targetModel={"Service"} targetId={service._id} />
    </div>
  );
}
