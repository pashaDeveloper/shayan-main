import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToActionSection from "@/components/CallToActionSection";
import Relatives from "@/components/services/Relatives";
import Feedback  from "./Feedback";

type Params = {
  lang: string;
  serviceId: string;
};
export async function generateStaticParams() {
  return [{ lang: "fa" }, { lang: "en" }, { lang: "tr" }, { lang: "ar" }];
}
export default function ServiceLayout({
  params,
  children
}: {
  params: Params;
  children: React.ReactNode;
}) {
  const { lang } = params;
  return (
    <div className="min-h-screen relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <div className="md:grid md:grid-cols-12 flex flex-col gap-4 mt-20 ">
        <main className="col-span-9">
          {children}
          <Feedback  lang={lang} serviceId={"3"}/>
        </main>
        <aside className="col-span-3">
          <Relatives lang={params.lang} />
        </aside>
      </div>
      <CallToActionSection />
      <Footer lang={params.lang} />
    </div>
  );
}
