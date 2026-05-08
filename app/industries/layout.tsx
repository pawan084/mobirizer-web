import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Industries',
  description:
    'Discover how Mobirizer applies AI in government, education, healthcare, retail, and enterprise operations with production-ready delivery.',
  keywords:
    'AI by industry, government AI, healthcare AI, education AI, retail AI, enterprise AI, Mobirizer industries',
  ogTitle: 'Industries - Mobirizer AI Development Studio',
  ogDescription:
    'Sector-specific AI solutions for government, healthcare, education, retail, and enterprise teams.',
  path: '/industries',
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
