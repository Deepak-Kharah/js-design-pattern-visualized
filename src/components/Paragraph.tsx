import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
}

function Paragraph(props: ParagraphProps) {
  return (
    <div className="max-w-4xl sm:text-lg opacity-50 font-light tracking-wide leading-relaxed">
      {props.children}
    </div>
  );
}

export default Paragraph;
