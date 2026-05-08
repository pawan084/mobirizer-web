import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Custom AI Development - Tailored AI Solutions',
  description:
    'Build bespoke AI solutions for your unique requirements with custom model training, fine-tuning, MLOps, and end-to-end AI development.',
  keywords:
    'Custom AI Development, AI Solutions, Machine Learning, Model Training, Fine-tuning, MLOps',
  ogTitle: 'Custom AI Development | Mobirizer',
  ogDescription: 'Tailored AI solutions for your unique business needs.',
  path: '/solutions/custom-development',
});

export default function CustomDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
