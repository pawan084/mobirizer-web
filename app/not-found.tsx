'use client';

import Link from 'next/link';
import { Header, Footer, Badge, Button } from '@/components';
import { Animated, HoverCard, motion } from '@/components/ui';

export default function NotFound() {
  return (
    <>
      <Header />

      <main id="main-content" role="main">
        <section className="section bg-white min-h-[70vh] flex items-center">
          <div className="container">
            <div className="flex justify-center">
              <div className="max-w-3xl w-full">
                <Animated animation="scaleIn">
                  <HoverCard className="service-card text-center p-10 md:p-14">
                    <Badge icon="ri-error-warning-line" className="mb-5">
                      Page Not Found
                    </Badge>
                    <motion.div
                      className="text-7xl md:text-8xl font-extrabold text-primary-blue mb-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      404
                    </motion.div>
                    <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
                      This page doesn&apos;t exist
                    </h1>
                    <p className="text-lg text-text-muted leading-relaxed mb-8">
                      The link may be outdated, the page may have moved, or the URL might be
                      incorrect. Let&apos;s get you back to something useful.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3 text-left mb-8">
                      {[
                        { href: '/', title: 'Home', desc: 'Return to the main Mobirizer overview.' },
                        { href: '/solutions', title: 'Solutions', desc: 'See our AI services and capabilities.' },
                        { href: '/contact', title: 'Contact', desc: 'Reach out if you were looking for something specific.' },
                      ].map((item) => (
                        <Link key={item.href} href={item.href} className="rounded-2xl bg-bg-light p-5 hover:bg-primary-blue/5 transition-colors">
                          <div className="font-semibold text-text-dark mb-1">{item.title}</div>
                          <div className="text-sm text-text-muted">{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <Button variant="cta" asChild>
                        <Link href="/">
                          <span>Go Home</span>
                          <i className="ri-home-4-line" />
                        </Link>
                      </Button>
                      <Button variant="ghost" asChild>
                        <Link href="/case-studies">
                          <span>Browse Case Studies</span>
                          <i className="ri-arrow-right-line" />
                        </Link>
                      </Button>
                    </div>
                  </HoverCard>
                </Animated>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="simple" />
    </>
  );
}
