import { Metadata } from 'next';

export const siteConfig = {
  name: 'Mobirizer',
  tagline: 'AI Development Studio',
  description:
    'AI Development Studio building production-grade solutions for government, education, healthcare, and enterprise clients since 2014.',
  url: 'https://mobirizer.com',
  themeColor: '#6366f1',
  locale: 'en_IN',
  ogImage: '/assets/images/og-image.png',
  company: {
    name: 'Mobirizer Services Pvt. Ltd.',
    address: 'At- Bihari Gadh, Post- Bithauli, P.S.- Bhagwanpur, Hajipur, Dist.- Vaishali, Bihar 844114, India',
    email: 'info@mobirizer.com',
    phone: '+91 9810503222',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/mobirizer/',
    twitter: 'https://twitter.com/mobirizer',
    github: 'https://github.com/mobirizer',
    facebook: 'https://www.facebook.com/MobiRizer',
  },
};

export function getAbsoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata(options: {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  themeColor?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const path = options.path || '/';
  const title = options.title;
  const description = options.description;
  const url = getAbsoluteUrl(path);
  const imageUrl = getAbsoluteUrl(siteConfig.ogImage);

  return {
    title,
    description,
    keywords: options.keywords,
    authors: [{ name: siteConfig.company.name }],
    alternates: {
      canonical: path,
    },
    robots: options.noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
    themeColor: options.themeColor || siteConfig.themeColor,
    category: 'technology',
    openGraph: {
      title: options.ogTitle || title,
      description: options.ogDescription || description,
      type: 'website',
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Open Graph image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: options.ogTitle || title,
      description: options.ogDescription || description,
      images: [imageUrl],
    },
    icons: {
      icon: '/assets/images/favicon.png',
    },
  };
}
