import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Contact',
  description:
    'Contact Mobirizer to discuss AI strategy, product development, and deployment. Reach us by email, phone, or at our Bihar office.',
  keywords: 'Contact Mobirizer, AI Development, Hajipur, Bihar, India',
  ogTitle: 'Contact - Mobirizer AI Development Studio',
  ogDescription: 'Get in touch with the Mobirizer AI development team.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
