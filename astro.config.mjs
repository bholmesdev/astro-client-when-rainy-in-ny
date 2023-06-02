import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    customClientDirectives: true,
  },
  integrations: [
    {
      name: "client-rainy-in-ny",
      hooks: {
        "astro:config:setup"({ addClientDirective }) {
          addClientDirective({
            name: "rainy-in-ny",
            entrypoint: fileURLToPath(
              new URL("./client-rainy-in-ny.mjs", import.meta.url)
            ),
          });
        },
      },
    },
    react(),
  ],
});
