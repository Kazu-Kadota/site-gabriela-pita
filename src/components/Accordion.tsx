import { ArrowDown } from "@/icons";
import Collapse from "@kunukn/react-collapse";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface Props {
  items: AccordionItem[];
}

export default function Accordion({ items }: Props) {
  const [elementsOpen, setElementsOpen] = useState(() =>
    Array(items.length).fill(false)
  );

  const onClickElement = (index: number) =>
    setElementsOpen((values) =>
      values.map((isOpen, i) => (i === index ? !isOpen : false))
    );

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div key={item.title} className="bg-accent">
          <button
            className="flex py-4 px-3 border-b border-gray w-full items-center outline-none appearance-none"
            type="button"
            onClick={() => onClickElement(index)}
          >
            <p className="flex-1 text-left text-primary text-sm md:text-base font-bold">
              {item.title}
            </p>
            <ArrowDown
              className={`fill-gray/50 w-5 collapse-css-transition ${
                elementsOpen[index] ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          <Collapse isOpen={elementsOpen[index]}>
            <p className="pt-3 pb-4 px-3 text-black text-sm/relaxed">
              {item.content}
            </p>
          </Collapse>
        </div>
      ))}
    </div>
  );
}
