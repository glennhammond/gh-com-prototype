import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const stripImagePreloads = (html) =>
  html.replace(
    /<link\b(?=[^>]*\brel=["']preload["'])(?=[^>]*\bas=["']image["'])[^>]*>/gi,
    "",
  );

export default defineConfig({
  plugins: [react()],
  build: {
    // Assets below this size are inlined, which removes requests but bloats the
    // HTML. The wordmark is already inline SVG, so keep this low.
    assetsInlineLimit: 1024,
    cssCodeSplit: false,
    reportCompressedSize: true,
  },
  ssgOptions: {
    formatting: "minify",
    // vite-react-ssg can infer image assets from lazy route dependencies and
    // emit them as critical preload hints. The actual evidence images already
    // carry responsive srcsets and loading="lazy"; promoting dozens of unrelated
    // portfolio images to urgent network work defeats that intent.
    onPageRendered: (_route, renderedHTML) => stripImagePreloads(renderedHTML),
  },
});
