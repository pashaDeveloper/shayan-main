// app/[lang]/services/page.tsx (Server Component)
import Main from "@/layouts/Main";
import ServicesClient from "./ServicesClient";

type Service = {
  id: string;
  serviceId: any;
  title: string;
  subtitle: string;
  image: string;
  color: string;
  features: any;
};

async function fetchServices(lang: string): Promise<Service[]> {
  try {
    const baseUrl = process.env.API_URL;
    const response = await fetch(`${baseUrl}/service/get-all/?lang=${lang}`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to fetch services");
    const data = await response.json();
    return data.services || [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export default async function ServicesPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang || "fa";
  const services = await fetchServices(lang);

  return (
    <Main params={{ lang }}>
      <ServicesClient lang={lang} services={services} />
    </Main>
  );
}
