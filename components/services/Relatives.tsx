import React from "react";
import Link from "next/link";
import Image from "next/image";
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";

type Props = {
  lang: string;
};

const getTranslations = (lang: string) => {
  const translations = { fa, en, ar, tr };
  return translations[lang as keyof typeof translations] || en;
};

function Relatives({ lang }: Props) {
  const t = getTranslations(lang);

  const services = [
    {
      id: "1",
      title: t.service.immigration,
      image: "/assets/service/1.webp",
      color: "from-blue-500 to-blue-700"
    },
    {
      id: "2",
      title: t.service.investment,
      image: "/assets/service/2.webp",
      color: "from-green-500 to-green-700"
    },
    {
      id: "3",
      title: t.service.travel,
      image: "/assets/service/3.webp",
      color: "from-purple-500 to-purple-700"
    },
    {
      id: "4",
      title: t.service.commerce,
      image: "/assets/service/4.webp",
      color: "from-orange-500 to-orange-700"
    },
    {
      id: "5",
      title: t.service.realEstate,
      image: "/assets/service/5.webp",
      color: "from-red-500 to-red-700"
    },
    {
      id: "6",
      title: t.service.vehicles,
      image: "/assets/service/6.webp",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      id: "7",
      title: t.service.generalServices,
      image: "/assets/service/7.webp",
      color: "from-teal-500 to-teal-700"
    },
    {
      id: "8",
      title: t.service.surveying,
      image: "/assets/service/8.webp",
      color: "from-cyan-500 to-cyan-700"
    },
    {
      id: "9",
      title: t.service.construction,
      image: "/assets/service/9.webp",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      id: "10",
      title: t.service.representatives,
      image: "/assets/service/10.webp",
      color: "from-pink-500 to-pink-700"
    },
    {
      id: "11",
      title: t.service.advertising,
      image: "/assets/service/11.webp",
      color: "from-lime-500 to-lime-700"
    },
    {
      id: "12",
      title: t.service.education,
      image: "/assets/service/12.webp",
      color: "from-emerald-500 to-emerald-700"
    }
  ];

  return (
    <div className="sticky top-48 space-y-4 md:py-[430px] pb-20 px-4">
      <div className="text-center ">
        <h3 className="text-xl font-bold text-[#0F4C75] mb-4">
          {t.service.servicesTitle}
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
      </div>
      <ul className="space-y-3">
        {services.map((service) => (
          <li key={service.id}>
            <Link
              href={`/${lang}/services/${service.id}/${service.title
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^\w\u0600-\u06FF\-]+/g, "")
                .replace(/\-\-+/g, "-")}`}
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={50}
                height={50}
                className="w-24 h-24 object-cover rounded-md"
              />
              <span className="text-gray-700 dark:text-gray-300">
                {service.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Relatives;
