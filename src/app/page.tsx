import Image from "next/image";
import Link from "next/link";

const designPatterns = [
  {
    name: "Singleton",
    description:
      "Ensure a class has only one instance and provide a global point of access to it.",
    link: "/singleton",
  },
];

export default function Home() {
  return (
    <>
      <section className="px-7 flex flex-col justify-center items-center gap-6 sm:gap-16 h-svh">
        <h1 className="sm:text-5xl text-3xl">Welcome to JS Design pattern</h1>
        <p className="max-w-4xl  sm:text-lg opacity-50  font-light tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          atque necessitatibus quaerat rem nam. Nulla praesentium, doloribus
          corrupti facilis ducimus nobis voluptatibus corporis nesciunt aliquam
          perferendis, inventore ipsum assumenda molestiae.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-5 flex flex-col items-center py-16 gap-16">
        <h2 className="text-3xl">Browse Design patterns</h2>
        <ul className="flex flex-wrap gap-10 px-5 justify-center lg:mb-0 text-left">
          {designPatterns.map((pattern) => (
            <li key={pattern.name}>
              <DesignPatternList
                title={pattern.name}
                link={pattern.link}
                description={pattern.description}
              />
            </li>
          ))}
          <DesignPatternList title="More coming soon" link="" description="" />
        </ul>
      </section>
    </>
  );
}

interface DesignPatternListProps {
  title: string;
  link: string;
  description: string;
}

function DesignPatternList({
  title,
  link,
  description,
}: DesignPatternListProps) {
  return (
    <Link
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 bg-slate-700/10 transition-all hover:border-blue-900 hover:bg-blue-800/20 block"
    >
      <h3 className={`mb-3 text-2xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h3>
      <p
        className={`m-0 max-w-[30ch] text-sm font-light opacity-50 line-clamp-3 tracking-wide`}
      >
        {description}
      </p>
    </Link>
  );
}
