import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Solutions',
  description:
    'Mobirizer provides Agentic AI, Conversational AI, AI Integration, and Custom AI Development services from strategy through production deployment.',
  keywords:
    'AI Solutions, Agentic AI, Conversational AI, AI Integration, Custom AI Development, AI Strategy, AI Services',
  ogTitle: 'Solutions - Mobirizer AI Development Studio',
  ogDescription:
    'AI solutions from concept to production with strategy, development, integration, and ongoing support.',
  path: '/solutions',
});

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
