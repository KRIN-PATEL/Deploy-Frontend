import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,
    allowedHosts: ["deploy-frontend-5uty.onrender.com"] //  Add this line
  },
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 4173
  }
});
