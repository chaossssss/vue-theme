import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { viteThemePlugin } from "vite-plugin-theme";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // viteThemePlugin({
    //   colorVariables: ["rgb(227, 245, 255)"],
    //   fileName: "light-vite-theme.css",
    // }),
  ],
  server: {
    cors: {
      origin: "*",
    },
  },
});
