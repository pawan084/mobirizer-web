import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Xappy - Healthcare Management Platform',
  description:
    'Xappy provides digital healthcare solutions for patient management and health services delivery, including electronic health records and multi-facility support.',
  keywords:
    'Xappy, Healthcare Platform, EHR, Health Records, Digital Healthcare, Government Healthcare, Sri Lanka',
  ogTitle: 'Xappy - Healthcare Management Platform | Mobirizer',
  ogDescription:
    'Digital healthcare solutions for patient management and health services delivery.',
  path: '/products/xappy',
});

export default function XappyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
