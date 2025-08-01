import React from "react";
import { CheckCircle} from "lucide-react";
import serviceDetails from "@/data/services.json";
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";
import { notFound } from "next/navigation";

type Params = {
  lang: string;
  serviceId: string;
};
const translations = { fa, en, ar, tr };

export default function ServiceDetailPage({ params }: { params: Params }) {
  const currentLang = params.lang as keyof typeof serviceDetails;
  const t = translations[currentLang] || translations.en;
  const services = serviceDetails[currentLang]?.services || [];
  const serviceIdNumber = Number(params.serviceId);
  const service = services.find((s) => s.serviceId === serviceIdNumber);
  if (!service) {
    return notFound();
  }

  return (
    <>
      <section className="w-screen relative m-0  py-32 bg-secondary ">
        <div className="absolute  inset-0 bg-black/20"></div>
        <div
          className="absolute  h-[400px] w-screen inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            {service.title}
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {service.subtitle}
          </p>
          <div
            className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 l gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-500 dark:text-white mb-6">
                {t.service.about}
              </h2>
              <div
                className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              <div
                className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8"
                dangerouslySetInnerHTML={{ __html: service.whyUs ?? "" }}
              />
            
          </div>
          </div>
        </div>
      </section>

      <section className="pb-14 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-500 dark:text-white text-center mb-12">
            {t.service.features}
          </h2>

          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8  rounded-full flex items-center justify-center">
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

    </>
  );
}
