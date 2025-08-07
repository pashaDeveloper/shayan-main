import AboutSection from "@/components/AboutSection";
import Main from "@/layouts/Main";
import React from "react";

export default function AboutPage({ params }: { params: { lang: string } }) {
  return (
    <div>
      <Main params={params}>
        <AboutSection lang={params.lang} />
      </Main>
    </div>
  );
}
