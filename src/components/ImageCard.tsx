import { cremepastryFont } from "@/assets/fonts";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

export default function ImageCard({
  imageSrc,
  description,
  className,
  title,
}: Props) {
  return (
    <div className={twJoin("relative overflow-hidden rounded-lg", className)}>
      <Image
        src={imageSrc}
        alt={title}
        quality={100}
        width={485}
        height={676}
        className="w-[323px]"
      />
      <div className="absolute max-w-full p-2 inset-x-0 bottom-6 sm:bottom-auto sm:top-[62%] md:top-[47%] xl:top-[62%] 2xl:top-[67%]">
        <h5
          className={`text-white text-2xl text-center ${cremepastryFont.className}`}
        >
          {title}
        </h5>
        <p className="text-white text-sm/snug text-center mt-3">
          {description}
        </p>
      </div>
    </div>
  );
}
