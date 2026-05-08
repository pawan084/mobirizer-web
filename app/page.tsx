import type { Metadata } from 'next';
import { Header, Footer } from '@/components';
import { createMetadata } from '@/lib/metadata';
import { HomePageContent } from './HomePageContent';

export const metadata: Metadata = createMetadata({
  title: 'Transform Your Business with AI',
  description:
    'Mobirizer delivers tailored AI solutions from strategy through implementation, helping businesses drive efficiency, automation, and growth.',
  keywords:
    'AI Development, Machine Learning, Conversational AI, Agentic AI, Voice AI, AI Strategy, AI Solutions, Mobirizer',
  ogTitle: 'Mobirizer - AI Development Studio',
  ogDescription:
    'Tailored AI solutions from strategy through implementation, designed to drive efficiency and growth.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Header activePage="home" />
      <HomePageContent />
      <Footer />
    </>
  );
}
