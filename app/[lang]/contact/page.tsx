import ContactSection from "@/components/ContactSection";
import Main from "@/layouts/Main";
import React from "react";

export default function ContactPage({ params }: { params: { lang: string } }) {
  return (
    <div>
      <Main params={params}>
        <ContactSection lang={params.lang} />
      </Main>
    </div>
  );
}
