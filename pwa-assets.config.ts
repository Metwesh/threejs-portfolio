import {
  defineConfig,
  minimal2023Preset as preset,
} from "@vite-pwa/assets-generator/config";
/*
Plugin for generating static assets needed by PWA
*/
export default defineConfig({
  preset,
  images: ["public/favicons/favicon.svg"],
});
