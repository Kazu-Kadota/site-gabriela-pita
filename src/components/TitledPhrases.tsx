interface Props {
  title: string;
  phrases: string[];
}

export default function TitledPhrases({ title, phrases }: Props) {
  return (
    <div className="flex lg:-mt-1 flex-col gap-2 sm:gap-3 lg:gap-5">
      <h3 className="text-primary lg:-mb-3 font-extrabold text-2xl sm:text-3xl">
        {title}
      </h3>
      {phrases.map((phrase) => (
        <p
          key={phrase}
          className="text-black font-semibold lg:whitespace-pre-line text-base"
        >
          {phrase}
        </p>
      ))}
    </div>
  );
}
