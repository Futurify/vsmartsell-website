// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://vsmartsell.com',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
});
