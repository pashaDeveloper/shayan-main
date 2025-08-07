import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SocialNav from "@/components/SocialNav";
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
    <div>
      <Header />
 <SocialNav /> 
      {children}
      <WhatsAppWidget lang={params.lang} />
      <Footer lang={params.lang} />
    </div>
  );
}

export default Main;
