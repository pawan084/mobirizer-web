import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Contact Success',
  description:
    'Thank you for contacting Mobirizer. Your message has been received and our team will follow up shortly.',
  path: '/contact/success',
  noIndex: true,
});

export default function ContactSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
