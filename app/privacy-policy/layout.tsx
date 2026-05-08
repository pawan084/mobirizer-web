import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Mobirizer Services Pvt. Ltd. Learn how we collect, use, and protect your personal data.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
