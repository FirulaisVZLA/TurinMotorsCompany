// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: actualizar si el cliente compra un dominio propio (ej. turinmotors.com).
const SITE_URL = 'https://turin-motors-maturin-firulaisvzlas-projects.vercel.app';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias'),
    }),
  ],
});
