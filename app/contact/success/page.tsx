'use client';

import Link from 'next/link';
import { Header, Footer, Badge, Button } from '@/components';
import { Animated, HoverCard, motion } from '@/components/ui';

export default function ContactSuccessPage() {
  return (
    <>
      <Header activePage="contact" />

      <section className="page-header">
        <div className="container">
          <Animated animation="fadeInUp">
            <h1>Message Received</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.1}>
            <p>Thanks for reaching out. Our team will review your message and get back to you shortly.</p>
          </Animated>
        </div>
      </section>

      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Success
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <main id="main-content" role="main">
        <section className="section bg-white">
          <div className="container">
            <div className="flex justify-center">
              <div className="max-w-2xl w-full">
                <Animated animation="scaleIn">
                  <HoverCard className="service-card text-center p-10">
                    <motion.div
                      className="w-20 h-20 bg-gradient-green rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 220 }}
                    >
                      <i className="ri-checkbox-circle-line text-4xl text-white" />
                    </motion.div>
                    <Badge icon="ri-mail-check-line" className="mb-4">
                      Submission Complete
                    </Badge>
                    <h2 className="text-3xl font-bold text-text-dark mb-4">
                      We&apos;ll get back to you within 24 hours
                    </h2>
                    <p className="text-text-muted text-lg leading-relaxed mb-8">
                      Your inquiry has been shared with the Mobirizer team. We&apos;ll reply by email
                      or phone based on the details you provided.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3 text-left mb-8">
                      {[
                        {
                          icon: 'ri-search-eye-line',
                          title: 'Review',
                          desc: 'We evaluate your message and route it to the right team.',
                        },
                        {
                          icon: 'ri-calendar-check-line',
                          title: 'Follow-up',
                          desc: 'We reach out with next steps, questions, or a meeting option.',
                        },
                        {
                          icon: 'ri-rocket-2-line',
                          title: 'Plan',
                          desc: 'We shape a practical path forward for your project or inquiry.',
                        },
                      ].map((item) => (
                        <div key={item.title} className="rounded-2xl bg-bg-light p-5">
                          <i className={`${item.icon} text-2xl text-primary-blue block mb-3`} />
                          <div className="font-semibold text-text-dark mb-1">{item.title}</div>
                          <div className="text-sm text-text-muted">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 justify-center flex-wrap">
                      <Button variant="cta" asChild>
                        <Link href="/">
                          <span>Back to Home</span>
                          <i className="ri-arrow-right-line" />
                        </Link>
                      </Button>
                      <Button variant="ghost" asChild>
                        <Link href="/case-studies">
                          <span>View Case Studies</span>
                          <i className="ri-file-list-3-line" />
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
