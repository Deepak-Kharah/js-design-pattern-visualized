import React from "react";

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className="sm:text-5xl text-3xl">{children}</h1>;
}
export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl sm:text-3xl">{children}</h2>;
}
