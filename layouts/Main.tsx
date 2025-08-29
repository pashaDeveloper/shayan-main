import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import React from "react";

function Main({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div className="relative max-w-7xl">
      <Header />

      {children}
      <WhatsAppWidget lang={params.lang} />
      <Footer lang={params.lang} />
    </div>
  );
}

export default Main;
