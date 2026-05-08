import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'RoboGuru - AI Education Platform',
  description:
    'RoboGuru is an AI-powered education platform with photo-to-solution technology and adaptive learning for students.',
  keywords: 'RoboGuru, AI Tutor, Education AI, Photo to Solution, Adaptive Learning',
  ogTitle: 'RoboGuru - AI Education Platform | Mobirizer',
  ogDescription: 'Photo-to-solution AI tutor for students.',
  path: '/products/roboguru',
});

export default function RoboGuruLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
