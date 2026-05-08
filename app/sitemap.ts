import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/case-studies',
    '/company',
    '/contact',
    '/industries',
    '/insights',
    '/products',
    '/solutions',
    '/products/d23-ai',
    '/products/whatsapp-commerce',
    '/products/roboguru',
    '/products/ohgrt',
    '/products/xappy',
    '/products/janseva',
    '/privacy-policy',
    '/terms-of-service',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/products/') ? 0.7 : 0.8,
  }));
}
