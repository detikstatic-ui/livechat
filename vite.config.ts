import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }

  // if (command !== "serve") {
  //   config.base = "/react-vite-gh-pages/"
  // }

  return config
})
