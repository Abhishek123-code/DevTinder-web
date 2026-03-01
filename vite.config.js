import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Any request starting with /api will be intercepted
      "/api": {
        target: "http://localhost:7777", // Point to your local backend
        changeOrigin: true,
        // The rewrite line below perfectly mimics what Nginx does on AWS
        // by stripping '/api' before sending it to your Express app
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
