"use client"

import { store } from "@/app/store";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import UserPersist from "@/components/persistent/UserPersist";
import SocialNav from "@/components/SocialNav";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import React from "react";
import { Provider } from "react-redux";

function Main({
  children,
  params
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <div>
      <Provider store={store}>
        <UserPersist>
          <Header />
        </UserPersist>
      </Provider>
      <SocialNav />
      {children}
      <WhatsAppWidget lang={params.lang} />
      <Footer lang={params.lang} />
    </div>
  );
}

export default Main;
