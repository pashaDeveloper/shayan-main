"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
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

function WhatsAppWidget({ lang }: Props) {
  const t = getTranslations(lang);

  return (
    <div>
      <FloatingWhatsApp
        accountName={t.whatsapp.accountName}
        phoneNumber="+905011308483"
        chatMessage={t.whatsapp.chatMessage}
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar="/assets/icon.jpg"
      />
    </div>
  );
}

export default WhatsAppWidget;
