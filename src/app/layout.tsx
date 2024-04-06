import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JS Design pattern visualized",
  description: "Visualize design patterns in JavaScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          "bg-slate-900",
          "text-white flex flex-col min-h-[100vh]"
        )}
      >
        <nav className="font-extralight text-slate-400 py-2 px-3">
          <ul className="flex gap-5 mx-auto justify-center">
            <li>
              <Link className="transition-all hover:text-white" href="/">
                JS Design patterns
              </Link>
            </li>
            <li>
              <Link className="transition-all hover:text-white" href="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex flex-col gap-10 text-center flex-1">
          {children}
        </main>
        <footer className="font-extralight text-slate-400 py-2 px-3 text-center">
          Build by{" "}
          <a
            className="transition-all hover:text-white"
            href="https://github.com/Deepak-Kharah"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deepak Kharah
          </a>
        </footer>
      </body>
    </html>
  );
}
