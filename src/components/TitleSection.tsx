import React from "react";
import Paragraph from "./Paragraph";
import { H1 } from "./Heading";

interface TitleSectionProps {
  body: React.ReactNode;
  title: React.ReactNode;
}

function TitleSection({ title, body }: TitleSectionProps) {
  return (
    <section className="px-7 py-10 flex flex-col justify-center items-center gap-10 sm:gap-16 min-h-svh">
      <H1>{title}</H1>
      <Paragraph>{body}</Paragraph>
    </section>
  );
}

export default TitleSection;
