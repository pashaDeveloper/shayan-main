// components/SeoHead.tsx
import Head from "next/head";

type SeoHeadProps = {
  title?: string;
  description?: string;
  image?: string;
  locale?: string;
  url?: string;
};

export default function SeoHead({
  title,
  description,
  image,
  locale = "fa",
  url = "https://2shigroup.com",
}: SeoHeadProps) {
  const siteName = "2Shigroup";

  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title || siteName} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
