import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Assets below this size are inlined, which removes requests but bloats the
    // HTML. The wordmark is already inline SVG, so keep this low.
    assetsInlineLimit: 1024,
    cssCodeSplit: false, // one small stylesheet beats six round trips
    reportCompressedSize: true,
  },
  ssgOptions: {
    formatting: "minify",
  },
});
