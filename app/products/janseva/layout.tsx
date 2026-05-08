import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'JanSeva - AI Citizen Engagement Platform',
  description:
    'JanSeva is an AI-powered citizen engagement platform for elected representatives to connect with constituents, manage grievances, and build a digital presence.',
  keywords:
    'JanSeva, Citizen Engagement, WhatsApp Bot, Grievance Management, MP MLA Platform, GovTech',
  ogTitle: 'JanSeva - AI Citizen Engagement Platform | Mobirizer',
  ogDescription: 'AI-powered platform for elected representatives to connect with citizens.',
  path: '/products/janseva',
});

export default function JanSevaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
