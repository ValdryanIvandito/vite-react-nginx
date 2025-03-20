import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 4173,
    watch: {
      usePolling: true,
    },
    allowedHosts: ["your_domain.com", "localhost", "app"],
  },
});
