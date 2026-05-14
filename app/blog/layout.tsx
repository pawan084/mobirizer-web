import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Blog',
  description:
    'Read the Mobirizer blog for practical writing on AI delivery, product thinking, conversational design, and implementation lessons from real deployments.',
  keywords:
    'Mobirizer blog, AI blog, conversational AI blog, product AI, AI deployment, AI implementation',
  ogTitle: 'Blog - Mobirizer AI Development Studio',
  ogDescription:
    'Practical writing from the Mobirizer team on AI delivery, implementation, and production lessons.',
  path: '/blog',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
