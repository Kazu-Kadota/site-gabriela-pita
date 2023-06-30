import "@/styles/globals.css";
import { montserratFont } from "@/assets/fonts";
import { HeadTags } from "@/components";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`min-h-[100dvh] flex bg-white flex-col ${montserratFont.className} text-dark font-medium`}
    >
      <HeadTags />
      <Component {...pageProps} />
    </div>
  );
}
