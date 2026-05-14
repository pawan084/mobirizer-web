import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Careers',
  description:
    'Explore careers at Mobirizer and learn how we work, what we value, and how we build AI systems with product and delivery discipline.',
  keywords:
    'Mobirizer careers, AI jobs, careers in AI, engineering jobs, product jobs, remote AI team',
  ogTitle: 'Careers - Mobirizer AI Development Studio',
  ogDescription:
    'Learn about working at Mobirizer, our values, and the kind of builders we want on the team.',
  path: '/careers',
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
