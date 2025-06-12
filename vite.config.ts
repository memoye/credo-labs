import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import path from "path";
import { peerDependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss(),
    dts({
      // entryRoot: "src",
      // rollupTypes: true,
      exclude: ["src/**/*.test.*", "src/**/*.stories.*"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        styles: path.resolve(__dirname, "src/styles/tailwind.css"),
        "ui/button/index": path.resolve(
          __dirname,
          "src/components/button/index.ts"
        ),
        "ui/icons/index": path.resolve(
          __dirname,
          "src/components/icons/index.ts"
        ),
        "utils/index": path.resolve(__dirname, "src/utils/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        /^node_modules/,
        /\/node_modules\//,
      ],
      output: {
        preserveModules: true,
        entryFileNames: "[name].js",
        preserveModulesRoot: "src",

        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
