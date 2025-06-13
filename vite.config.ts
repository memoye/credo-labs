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
    svgr({
      svgrOptions: {
        exportType: "default",
        ref: true,
        svgo: false,
        titleProp: true,
        plugins: ["@svgr/plugin-jsx"],
        template: (variables, { tpl }) => {
          return tpl`
            "use client";
            ${variables.imports};
            ${variables.interfaces};
            const ${variables.componentName} = (${variables.props}) => (
              ${variables.jsx}
            );
            ${variables.exports};
          `;
        },
      },
      include: "**/*.svg",
    }),
    tailwindcss(),
    dts({
      // entryRoot: "src",
      // rollupTypes: true,
      exclude: ["src/**/*.test.*", "src/**/*.stories.*", "**/*.svg"],
      beforeWriteFile: (filePath, content) => {
        if (filePath.includes("icons")) {
          return {
            filePath,
            content: content.replace(/\.svg/g, ""),
          };
        }
      },
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
        styles: path.resolve(__dirname, "src/styles/entry.css"),
        palette: path.resolve(__dirname, "src/styles/palette.css"),
        "styles/palette.css": path.resolve(__dirname, "src/styles/palette.css"),
        "ui/button/index": path.resolve(__dirname, "src/ui/button/index.ts"),
        "ui/icons/index": path.resolve(__dirname, "src/ui/icons/index.ts"),
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
