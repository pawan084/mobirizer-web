import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Insights',
  description:
    'Read Mobirizer insights on AI strategy, agentic systems, conversational interfaces, WhatsApp experiences, and production AI delivery.',
  keywords:
    'AI insights, Mobirizer blog, AI strategy, conversational AI, agentic AI, WhatsApp AI, enterprise AI',
  ogTitle: 'Insights - Mobirizer AI Development Studio',
  ogDescription:
    'Ideas, lessons, and practical guidance from the Mobirizer team on building AI that works in production.',
  path: '/insights',
});

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
