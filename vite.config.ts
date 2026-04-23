import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/MyDamen-KnowledgeBase/', // Add this line!
  plugins: [react()],
});

