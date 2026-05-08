import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Case Studies',
  description:
    'Explore Mobirizer case studies across government, healthcare, education, and conversational AI with measurable outcomes and deployment details.',
  keywords:
    'Mobirizer case studies, AI case studies, government AI, healthcare AI, education AI, conversational AI projects',
  ogTitle: 'Case Studies - Mobirizer AI Development Studio',
  ogDescription:
    'Real AI deployments, measurable outcomes, and production-ready systems built by Mobirizer.',
  path: '/case-studies',
});

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
