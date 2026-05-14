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
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
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
          <div className="footer-section footer-brand">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/images/logo.png"
                alt="Mobirizer Logo"
                className="w-12 h-12 rounded-xl"
              />
              <div>
                <div className="text-xl font-bold text-white">Mobirizer</div>
                <div className="text-sm text-white/55">AI Development Studio</div>
              </div>
            </div>
            <p className="text-white/72 leading-relaxed mb-6 max-w-md">
              AI Development Studio building production-grade solutions
              {!isSimple && ' for government, education, healthcare, and enterprise clients'} since
              2014.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <i className={cn(social.icon, 'text-lg')}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="footer-section">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-links">
              {solutionLinks
                .filter((link) => !link.defaultOnly || !isSimple)
                .map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links footer-links-two-col">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Mobirizer Services Pvt. Ltd.
          </p>
          <p className="text-white/45 text-sm">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
