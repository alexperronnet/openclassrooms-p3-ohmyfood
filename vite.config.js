import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        aLaFrancaise: resolve(root, "a-la-francaise.html"),
        laNoteEnchantee: resolve(root, "la-note-enchantee.html"),
        laPaletteDuGout: resolve(root, "la-palette-du-gout.html"),
        leDeliceDesSens: resolve(root, "le-delice-des-sens.html"),
      },
    },
  },
});
