import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lukascarvajal.com",
  output: "static",
  integrations: [react(), sitemap()],
});
