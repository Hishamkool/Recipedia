import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),
    svgr(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),

    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Recipedia",
        short_name: "Recipedia",
        description:
          "My Progressive Web App built with Vite and React.js and tailwind css with meal api",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192-recipe.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512-recipe.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
