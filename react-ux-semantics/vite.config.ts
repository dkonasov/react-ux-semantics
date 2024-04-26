/// <reference types="vitest" />

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
      plugins: [typescript({})],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
