import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssCustomMedia from "postcss-custom-media";
import postcssMixins from "postcss-mixins";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  css: {
    postcss: {
      plugins: [postcssCustomMedia, postcssMixins],
    },
  },
});
