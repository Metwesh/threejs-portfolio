import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "development" ? undefined : "/threejs-portfolio/",
  plugins: [
    react(),
    VitePWA({
      injectRegister: null,
      minify: true,
      includeAssets: [
        "/favicons/favicon.ico",
        "/favicons/favicon.svg",
        "/favicons/apple-touch-icon-180x180.png",
        "/favicons/maskable-icon-512x512.png",
        "/favicons/pwa-64x64.png",
        "/favicons/pwa-192x192.png",
        "/favicons/pwa-512x512.png",
      ],
      manifest: {
        name: "Metwesh | Portfolio",
        short_name: "Portfolio",
        theme_color: "#915DFF",
        background_color: "#aaa6c3",
        display: "standalone",
        scope: "/",
        icons: [
          {
            src: "/favicons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/favicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/favicons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],
        sourcemap: true,
      },
      devOptions: {
        enabled: true,
      },
      selfDestroying: true,
    }),
  ],
}));
