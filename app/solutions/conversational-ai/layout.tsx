import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Conversational AI - Chatbots & Voice Assistants',
  description:
    'Build intelligent chatbots and voice assistants with natural language understanding and multi-channel deployment on WhatsApp, web, mobile, and voice platforms.',
  keywords: 'Conversational AI, Chatbots, Voice AI, NLP, WhatsApp Bots, Customer Service AI',
  ogTitle: 'Conversational AI Solutions | Mobirizer',
  ogDescription: 'Intelligent chatbots and voice assistants for your business.',
  path: '/solutions/conversational-ai',
});

export default function ConversationalAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
