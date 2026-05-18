import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
  // @ts-expect-error — ssgOptions added by vite-react-ssg, not part of standard Vite types
  ssgOptions: {
    script: "async",
    dirStyle: "nested",
    formatting: "minify",
  },
});
