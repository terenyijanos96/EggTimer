import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: "5173",
  },
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist-react",
  },
  esbuild: {
    loader: "jsx",
  },
});