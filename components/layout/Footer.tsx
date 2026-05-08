import Link from 'next/link';
import { cn } from '@/lib/cn';

interface FooterProps {
  variant?: 'default' | 'simple';
}

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/mobirizer/',
    icon: 'ri-linkedin-fill',
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/mobirizer',
    icon: 'ri-twitter-x-line',
    label: 'Twitter',
  },
  {
    href: 'https://github.com/mobirizer',
    icon: 'ri-github-fill',
    label: 'GitHub',
  },
  {
    href: 'https://www.facebook.com/MobiRizer',
    icon: 'ri-facebook-fill',
    label: 'Facebook',
  },
];

const productLinks = [
  { href: '/products/d23-ai', label: 'D23.ai' },
  { href: '/products/roboguru', label: 'RoboGuru' },
  { href: '/products/ohgrt', label: 'OHGRT' },
  { href: '/products/xappy', label: 'Xappy.io' },
  { href: '/products/janseva', label: 'JanSeva' },
  { href: '/products/whatsapp-commerce', label: 'WhatsApp Commerce', defaultOnly: true },
];

const solutionLinks = [
  { href: '/solutions#agentic', label: 'Agentic AI' },
  { href: '/solutions#conversational', label: 'Conversational AI' },
  { href: '/solutions#integration', label: 'AI Integration' },
  { href: '/solutions#custom', label: 'Custom Development', defaultOnly: true },
];

const companyLinks = [
  { href: '/company', label: 'About Us' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/industries', label: 'Industries' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

export function Footer({ variant = 'default' }: FooterProps) {
  const isSimple = variant === 'simple';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/logo.png"
                alt="Mobirizer Logo"
                className="w-12 h-12 rounded-xl"
              />
              <span className="text-xl font-bold text-white">Mobirizer</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              AI Development Studio building production-grade solutions
              {!isSimple && ' for government, education, healthcare, and enterprise clients'} since
              2014.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <i className={cn(social.icon, 'text-lg')}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4>Products</h4>
            <ul className="space-y-3">
              {productLinks
                .filter((link) => !link.defaultOnly || !isSimple)
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-section">
            <h4>Solutions</h4>
            <ul className="space-y-3">
              {solutionLinks
                .filter((link) => !link.defaultOnly || !isSimple)
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Mobirizer Services Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
