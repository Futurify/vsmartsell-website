// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://vsmartsell.com',
  redirects: {
    '/về-vsmartsell': { status: 301, destination: '/ve-vsmartsell' },
    '/giới-thiệu-khách-hàng': { status: 301, destination: '/gioi-thieu-khach-hang' },
    '/cộng-tác-viên': { status: 301, destination: '/cong-tac-vien' },
    '/phí-dịch-vụ': { status: 301, destination: '/phi-dich-vu' },
    '/điều-khoản-dịch-vụ': { status: 301, destination: '/ai-bao-cao' },
    '/hợp-tác': { status: 301, destination: '/hop-tac' },
  },
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'vi',
        locales: {
          vi: 'vi-VN',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
});
