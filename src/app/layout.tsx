import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  title: "JS Design pattern visualized",
  description:
    "Visualize practical implementation of design patterns in JavaScript",
  applicationName: "JS Design pattern visualized",
  openGraph: {
    type: "website",
    url: "https://js-design-pattern-visualized.vercel.app",
    siteName: "JS Design pattern visualized",
    title: "JS Design pattern visualized",
    images: [
      {
        url: "https://js-design-pattern-visualized.vercel.app/images/og-image.png",
        alt: "JS Design pattern visualized",
      },
    ],
    description:
      "Visualize practical implementation of design patterns in JavaScript",
  },
  twitter: {
    card: "summary_large_image",
    title: "JS Design pattern visualized",
    description:
      "Visualize practical implementation of design patterns in JavaScript",
    creator: "@deepak_kharah",
    images: [
      "https://js-design-pattern-visualized.vercel.app/images/og-image.png",
    ],
  },
  authors: [
    {
      name: "Deepak Kharah",
      url: "https://github.com/Deepak-Kharah",
    },
  ],
  icons: {
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      {
        rel: "mask-icon",
        url: "images/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    apple: "/images/apple-touch-icon.png",
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/images/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/images/favicon-16x16.png",
      },
    ],
  },
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
        <nav className="font-extralight text-slate-400 py-4 px-3 bg-gradient-to-b from-slate-700/40 to-transparent">
          <ul className="flex gap-5 mx-auto justify-center">
            <li>
              <Link className="transition-all hover:text-white" href="/">
                JS Design patterns
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="font-extralight text-sm text-slate-400 py-4 px-3 text-center bg-gradient-to-t from-slate-700/40 to-transparent">
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
