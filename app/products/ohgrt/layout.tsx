import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'OHGRT - AI Voice Generation Studio',
  description:
    'OHGRT is an AI voice generation studio with support for 10+ languages, video dubbing, and voice cloning technology.',
  keywords: 'OHGRT, AI Voice, Voice Generation, Voice Cloning, Video Dubbing, TTS',
  ogTitle: 'OHGRT - AI Voice Generation Studio | Mobirizer',
  ogDescription: 'AI voice generation in 10+ languages.',
  path: '/products/ohgrt',
});

export default function OHGRTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
