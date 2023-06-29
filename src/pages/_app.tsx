import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { montserratFont } from "@/assets/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`min-h-[100dvh] flex bg-white flex-col ${montserratFont.className} text-dark font-medium`}
    >
      <Head>
        <title>Doses de Amor Próprio - Gabriela Pita</title>
        <meta
          name="description"
          content="O impulso que você precisa para se tornar a líder da própria vida"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
