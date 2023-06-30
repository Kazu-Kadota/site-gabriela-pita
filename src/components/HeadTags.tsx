import { NextSeo } from "next-seo";

const HeadTags = () => (
  <NextSeo
    title="Doses de Amor Próprio - Gabriela Pita"
    description="O impulso que você precisa para se tornar a líder da própria vida"
    robotsProps={{}}
    canonical="https://www.gabrielapita.com/"
    additionalLinkTags={[
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
    ]}
  />
);

export default HeadTags;
