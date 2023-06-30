import "@/styles/globals.css";
import { montserratFont } from "@/assets/fonts";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`min-h-[100dvh] flex bg-white flex-col ${montserratFont.className} text-dark font-medium`}
    >
      <NextSeo
        title="Doses de Amor Próprio - Gabriela Pita"
        description="O impulso que você precisa para se tornar a líder da própria vida"
        robotsProps={{}}
        canonical="https://www.gabrielapita.com/"
      />
      <Component {...pageProps} />
    </div>
  );
}
