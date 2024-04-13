import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JS DP Visualized",
    short_name: "JS DP Visualized",
    description:
      "Visualize practical implementation of design patterns in JavaScript",
    icons: [
      {
        src: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#373943",
    background_color: "#373943",
    display: "standalone",
  };
}
