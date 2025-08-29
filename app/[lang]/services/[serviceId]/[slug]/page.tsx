import Relatives from "@/components/services/Relatives";
import Content from "./Content";
import { ShareButtons } from "@/components/ShareButtons";
import React from "react";
import CallToActionSection from "@/components/CallToActionSection";

type Params = {
  lang: string;
  serviceId: any;
};

export default function Page({ params }: { params: Params }) {
  return (
    <>
      <main className="col-span-9">
        <Content params={params} />
      </main>
      <aside className="col-span-3 md:mt-96  flex flex-col justify-center items-center">
          <ShareButtons />
        <Relatives lang={params.lang} />
      </aside>
    </>
  );
}

