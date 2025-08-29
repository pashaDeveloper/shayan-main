import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToActionSection from "@/components/CallToActionSection";
import Relatives from "@/components/services/Relatives";
import { ShareButtons } from "@/components/ShareButtons";
import Main from "@/layouts/Main";

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
  return (
    <Main params={params}>
      <div className="md:grid md:grid-cols-12 max-w-7xl mx-auto gap-4 mt-20 items-start justify-start">
        {children}
      </div>
    </Main>
  );
}
