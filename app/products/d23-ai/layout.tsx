import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'D23.ai - WhatsApp AI Assistant',
  description:
    "D23.ai is India's WhatsApp AI assistant with support for 11+ Indian languages, voice messages, image generation, train PNR status, web search, and more.",
  keywords: 'D23.ai, WhatsApp AI, ChatGPT for India, Indian Languages AI, Voice AI',
  ogTitle: 'D23.ai - WhatsApp AI Assistant | Mobirizer',
  ogDescription: 'AI assistant for India with 11+ languages, voice, and image capabilities.',
  path: '/products/d23-ai',
});

export default function D23AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
