import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Terms of Service',
  description:
    'Terms of Service for Mobirizer Services Pvt. Ltd. Read our terms and conditions for using our AI development services.',
  path: '/terms-of-service',
});

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
