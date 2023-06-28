import { Check } from "@/icons";

interface Props {
  text: string;
}

export default function Info({ text }: Props) {
  return (
    <div className="border-2 flex items-center border-primary gap-1 py-2 sm:py-[0.85rem] px-2 sm:px-3 rounded-2xl">
      <Check className="w-12 sm:w-14 md:w-[3.8rem] shrink-0 fill-success" />
      <h4 className="text-dark flex-1 text-[0.9375rem]/snug sm:text-lg/snug md:text-1.5xl">
        {text}
      </h4>
    </div>
  );
}
