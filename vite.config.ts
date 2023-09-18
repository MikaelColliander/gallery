import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssCustomMedia from "postcss-custom-media";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [postcssCustomMedia],
    },
  },
});
