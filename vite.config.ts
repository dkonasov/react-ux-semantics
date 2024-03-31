import { defineConfig } from "vite";
import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: "src/index.ts",
        autohide: "src/autohide/index.ts",
        showable: "src/showable/index.ts",
      },
    },
    outDir: "dist",
    rollupOptions: {
      external: ["react"],
      plugins: [typescript()],
    },
  },
});
