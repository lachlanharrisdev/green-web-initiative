import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), starlight(
    {
      title: "Green Web Design",
      description: "Teaching developers how to produce, convert & support websites that are built for the future"
    }
  )],
  site : "https://numonu.github.io",
  base : ""
});
