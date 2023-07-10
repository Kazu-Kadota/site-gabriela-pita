import { cremepastryFont } from "@/assets/fonts";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

interface Props {
  imageSrc: string;
  title: string;
  name: string;
  occupation: string;
  contentTitle: string;
  contentDescription: string;
  reverse?: boolean;
}

export default function ProfessionalInfo({
  title,
  name,
  occupation,
  contentDescription,
  contentTitle,
  imageSrc,
  reverse,
}: Props) {
  return (
    <div
      className={twJoin(
        "flex gap-3 md:gap-8 lg:gap-10 xl:gap-14 items-center md:items-start md:-my-1",
        reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      )}
    >
      <div>
        <figure className="h-52 w-52 xl:w-60 xl:h-60 overflow-hidden rounded-full">
          <Image src={imageSrc} alt={name} width={516} height={517} />
        </figure>
        <div
          className={twJoin(
            "w-52 xl:w-60 mt-3",
            reverse ? "ml-auto" : "mr-auto"
          )}
        >
          <p
            className={`${cremepastryFont.className} text-black text-center text-2.5xl/none sm:text-3xl/none xl:text-4xl/none`}
          >
            {title}
          </p>
          <p className="font-bold mt-1 text-primary text-lg/none sm:text-xl/none xl:text-2xl/none text-center">
            {name}
          </p>
          <p className="italic font-normal text-primary text-sm/tight mt-1 sm:text-base/tight xl:text-lg/tight text-center">
            {occupation}
          </p>
        </div>
      </div>
      <div className="border-2 md:mt-12 xl:mt-14 flex-1 border-primary p-3 md:py-6 rounded-2xl">
        <p className="text-black font-bold text-base/snug sm:text-lg/snug md:text-1.5xl xl:text-2.5xl text-center">
          {contentTitle}
        </p>
        <p className="text-black text-sm md:text-base xl:text-lg mt-1 md:mt-3 text-center">
          {contentDescription}
        </p>
      </div>
    </div>
  );
}
