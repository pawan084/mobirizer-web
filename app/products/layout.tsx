import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Products',
  description:
    'Explore Mobirizer AI products including D23.ai, RoboGuru, OHGRT, Xappy, and JanSeva serving government, education, healthcare, and enterprise use cases.',
  keywords:
    'AI Products, D23.ai, RoboGuru, OHGRT, Xappy, JanSeva, Government AI, Education AI, Healthcare AI',
  ogTitle: 'Products - Mobirizer AI Development Studio',
  ogDescription:
    'AI products serving millions of users across government, education, healthcare, and enterprise sectors.',
  path: '/products',
});

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
