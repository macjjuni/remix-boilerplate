import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app'), // app 폴더로의 별칭 설정
    },
  },
  css: {
    preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/index.scss";`,
          includePaths: ["./app", "./app/styles/**/*.scss"],
        },
    }
  },
});
