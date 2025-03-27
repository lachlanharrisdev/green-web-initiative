import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), starlight({
    title: "Green Web Initiative",
    customCss: [
      './src/tailwind.css',
      './src/global/styles/starlight-custom.css',
    ],
    description: "Teaching developers how to produce, convert & support websites that are built for the future",/*
    logo: {
      src: './src/assets/logo.svg',
    },*/
    sidebar: [
      {
        label: 'Guides',
        items: [
          { label: 'Getting Started', link: '/docs/' },
          { label: 'Green Hosting', link: '/docs/guides/hosting' },
        ],
      },
    ],
    components: {
      // Override Starlight's components with your own custom versions if needed
    }
  })],
  site: "https://lachlanharrisdev.github.io/",
  base: "/green-web-initiative/",
});