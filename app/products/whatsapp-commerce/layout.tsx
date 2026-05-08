import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'WhatsApp Commerce - Sell Directly on WhatsApp',
  description:
    'Enable customers to discover, browse, and purchase directly on WhatsApp with product catalogs, native payments, automated checkout, and CRM integrations.',
  keywords:
    'WhatsApp Commerce, WhatsApp Business API, WhatsApp Catalog, WhatsApp Payments, Conversational Commerce, WhatsApp Shopping',
  ogTitle: 'WhatsApp Commerce - Sell on WhatsApp | Mobirizer',
  ogDescription:
    'Turn WhatsApp into your storefront with product catalogs, native payments, and automated checkout.',
  path: '/products/whatsapp-commerce',
});

export default function WhatsAppCommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
