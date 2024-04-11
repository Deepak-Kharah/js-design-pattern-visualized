import Paragraph from "@/components/Paragraph";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="flex flex-col justify-center items-center w-full p-7 min-h-svh">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-8xl sm:text-9xl text-white font-bold [text-shadow:_0_0px_2rem_rgb(255_255_255_/_50%)]">
          404
        </h2>
        <h1 className="text-2xl sm:text-3xl font-light [text-shadow:_0_0px_1rem_rgb(255_255_255_/_80%)]">
          No Design Pattern found
        </h1>
        <br />
        <Paragraph>
          <p>
            How did you end up here? Let&apos;s go back to the{" "}
            <Link
              className="font-semibold transition-all hover:text-white"
              href="/"
            >
              homepage
            </Link>{" "}
            and browse more patterns.
          </p>
          <p>
            Buttttttt.... If you are sure this link is correct,{" "}
            <a
              className="font-semibold transition-all hover:text-white"
              href="https://github.com/Deepak-Kharah/js-design-pattern-visualized/issues/new"
              target="_blank"
            >
              Let me know
            </a>{" "}
            and I&apos;ll look into it.
          </p>
        </Paragraph>
      </div>
    </section>
  );
}

export default NotFound;
