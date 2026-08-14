import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Build config for the FigBank Design System package.
// In dev mode, `vite` serves index.html as a living style-guide/preview page.
// In build mode, it bundles src/index.ts as a library for consumption by apps.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "FigBankDesignSystem",
      fileName: (format) => `index.${format === "es" ? "js" : format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
    sourcemap: true,
  },
});
