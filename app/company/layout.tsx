import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Company',
  description:
    'About Mobirizer, the AI development studio founded in 2014 and now serving government, education, healthcare, and enterprise clients across India.',
  keywords: 'Mobirizer, AI Company, About Us, AI Development Studio, Bihar, India',
  ogTitle: 'Company - Mobirizer AI Development Studio',
  ogDescription: 'Learn about Mobirizer, our journey, leadership, and AI-first approach since 2014.',
  path: '/company',
});

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
