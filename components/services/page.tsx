// components/ServicesSection.jsx
import dynamic from "next/dynamic";
import fa from "@/translations/fa.json";
import en from "@/translations/en.json";
import ar from "@/translations/ar.json";
import tr from "@/translations/tr.json";
const Swipper = dynamic(() => import("./Swipper"), { ssr: false });
const getTranslations = (lang: string) => {
  const translations = { fa, en, ar, tr };
  return translations[lang as keyof typeof translations] || en;
};
type Props = {
  lang: string; 
};

export default function ServicesSection({ lang }: Props) {
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
    <section
      id="services"
      className=" bg-white dark:bg-black  transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center ">
          <h2 className="text-4xl font-bold text-[#0F4C75] mb-4">
            {t.service.servicesTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] mx-auto rounded-full"></div>
        </div>

        <Swipper services={services} />
      </div>
    </section>
  );
};

