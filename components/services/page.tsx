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
type Service = {
  _id: any;
  serviceId: any;
  title: string;
  image: string;
  color: string;
};

async function fetchServices(lang: string): Promise<Service[]> {
  try {
    const baseUrl = process.env.API_URL;
    const response = await fetch(`${baseUrl}/service/get-all/?lang=${lang}`, {
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    const data = await response.json();
    return data.services || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export default async function ServicesSection({ lang }: Props) {
  const t = getTranslations(lang);

  const services = await fetchServices(lang);
  return (
    <section id="services" className="  transition-colors duration-300">
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
}
