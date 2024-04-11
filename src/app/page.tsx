import { H2 } from "@/components/Heading";
import TitleSection from "@/components/TitleSection";
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
      <TitleSection
        title="Welcome to JS Design pattern"
        body={
          <>
            <p>
              The{" "}
              <strong className="font-medium underline opacity-100">
                Design Pattern
              </strong>{" "}
              is a general repeatable solution to a commonly occurring problem
              in software design. A design pattern isn&apos;t a finished design
              that can be transformed directly into code. It is a description or
              template for how to solve a problem that can be used in many
              different situations.
            </p>
            <br />
            <p>
              This website is a collection of implementations of various design
              patterns in JavaScript. You can browse through the patterns and
              see how they work in real-time.
            </p>
          </>
        }
      />

      <section className="flex flex-col items-center py-16 gap-16">
        <H2>Browse Design patterns</H2>
        <ul className="flex flex-wrap max-w-7xl mx-auto gap-10 px-5 justify-center lg:mb-0 text-left">
          {designPatterns.map((pattern) => (
            <li key={pattern.name}>
              <DesignPatternList
                title={pattern.name}
                link={pattern.link}
                description={pattern.description}
              />
            </li>
          ))}
          <div className="group rounded-lg border border-transparent w-80 h-32 px-5 py-4 bg-slate-700/10 transition-all hover:border-blue-900 hover:bg-blue-800/20 block">
            <h3 className={`mb-3 text-2xl font-semibold`}>
              More coming soon{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h3>
          </div>
        </ul>
      </section>
    </>
  );
}

interface DesignPatternListProps {
  title: string;
  link: string;
  description: string;
  disabled?: boolean;
}

function DesignPatternList({
  title,
  link,
  description,
}: DesignPatternListProps) {
  return (
    <Link
      href={link}
      className="group rounded-lg border border-transparent w-80 h-32 px-5 py-4 bg-slate-700/30 transition-all hover:border-blue-900 hover:bg-blue-800/20 block"
    >
      <h3 className={`mb-3 text-2xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h3>
      <p
        className={`m-0  text-sm font-light opacity-50 line-clamp-3 tracking-wide`}
      >
        {description}
      </p>
    </Link>
  );
}
