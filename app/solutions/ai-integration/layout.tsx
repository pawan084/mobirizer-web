import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'AI Integration Services - Connect AI to Your Systems',
  description:
    'Seamlessly integrate AI capabilities into your existing workflows with API development, legacy system modernization, and data pipeline automation.',
  keywords:
    'AI Integration, API Development, System Integration, Data Pipelines, AI Deployment, MLOps',
  ogTitle: 'AI Integration Services | Mobirizer',
  ogDescription: 'Connect AI to your existing systems and workflows.',
  path: '/solutions/ai-integration',
});

export default function AIIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
