import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // This will make Vite try port 3000 first, then increment if busy
    port: 3000,
    strictPort: false, // This allows Vite to try other ports if 3000 is taken
    open: true, // This will open your browser automatically
  },
});
