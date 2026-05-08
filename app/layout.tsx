import type { Metadata } from 'next';
import { BackToTop } from '@/components';
import { getAbsoluteUrl, siteConfig } from '@/lib/metadata';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mobirizer - AI Development Studio',
    template: '%s | Mobirizer',
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords:
    'AI Development, Machine Learning, Conversational AI, WhatsApp Chatbots, Government AI, Healthcare AI, Education Technology',
  authors: [{ name: siteConfig.company.name }],
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  category: 'technology',
  robots: {
    index: true,
    follow: true,
  },
  themeColor: siteConfig.themeColor,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: getAbsoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Open Graph image`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [getAbsoluteUrl(siteConfig.ogImage)],
  },
  icons: {
    icon: '/assets/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company.name,
    url: siteConfig.url,
    logo: getAbsoluteUrl('/assets/images/logo.png'),
    email: siteConfig.company.email,
    telephone: siteConfig.company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.company.address,
      addressCountry: 'IN',
    },
    sameAs: Object.values(siteConfig.social),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.company.name,
    },
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
