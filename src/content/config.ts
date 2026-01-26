import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('vSmartSell'),
    category: z.enum([
      'tin-tuc-vsmartsell',
      'meo-hay',
      'tin-tuc-thi-truong',
      'kien-thuc-kinh-doanh'
    ]),
    categoryLabel: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
