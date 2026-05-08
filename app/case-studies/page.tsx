'use client';

import Link from 'next/link';
import { Header, Footer, Badge, Button, StatCard } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion } from '@/components/ui';

const caseStudies = [
  {
    title: 'Citizen Engagement at Scale',
    sector: 'Government',
    product: 'JanSeva',
    icon: 'ri-government-line',
    gradient: 'bg-gradient-blue',
    challenge:
      'Representatives needed a scalable way to handle citizen messages, grievances, and campaign communication without overwhelming staff.',
    solution:
      'We built a WhatsApp-first engagement layer with AI-assisted routing, multilingual messaging, and analytics dashboards for staff visibility.',
    outcomes: ['95% grievance resolution rate', '24/7 constituent response coverage', 'Operational load reduced for frontline teams'],
  },
  {
    title: 'AI Tutoring for Faster Student Support',
    sector: 'Education',
    product: 'RoboGuru',
    icon: 'ri-graduation-cap-line',
    gradient: 'bg-gradient-green',
    challenge:
      'Students needed instant support for homework and concept revision without waiting for live tutor availability.',
    solution:
      'We combined photo-to-solution workflows, adaptive learning paths, and guided explanations into a student-friendly AI learning experience.',
    outcomes: ['Photo-based problem solving workflow', 'Support across core school subjects', 'Improved learning continuity outside classrooms'],
  },
  {
    title: 'Healthcare Digitization for Public Delivery',
    sector: 'Healthcare',
    product: 'Xappy',
    icon: 'ri-heart-pulse-line',
    gradient: 'bg-gradient-cyan',
    challenge:
      'Healthcare teams needed cleaner patient records, better reporting, and smoother coordination across facilities.',
    solution:
      'We delivered a digital care operations platform with patient management, EHR workflows, and admin dashboards for program oversight.',
    outcomes: ['Multi-facility digital records', 'Better reporting visibility', 'Stronger operational consistency across teams'],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <section className="relative bg-gradient-hero py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')" }}
        />
        <div className="container relative z-10">
          <motion.nav
            aria-label="breadcrumb"
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ol className="breadcrumb bg-white/10 px-5 py-2.5 rounded-lg inline-flex m-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">
                Case Studies
              </li>
            </ol>
          </motion.nav>
          <div className="hero-two-col">
            <div className="hero-content-col">
              <Animated animation="fadeInUp">
                <Badge icon="ri-bar-chart-box-line" variant="white" className="mb-5">
                  Proof of Impact
                </Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  Real Deployments. Real Outcomes.
                </h1>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  A snapshot of how Mobirizer turns AI ideas into working products and operational
                  systems across government, education, and healthcare.
                </p>
              </Animated>
            </div>
            <div className="hero-image-col">
              <Animated animation="fadeInRight" delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-6 text-center">
                    <div className="text-3xl font-extrabold text-white">500+</div>
                    <div className="text-sm text-white/70">Clients Served</div>
                  </div>
                  <div className="glass-card p-6 text-center">
                    <div className="text-3xl font-extrabold text-white">1000+</div>
                    <div className="text-sm text-white/70">Projects Delivered</div>
                  </div>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" role="main">
        <section className="py-20 bg-white">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-focus-3-line">Why This Matters</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">From Capability to Credibility</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">
                  These examples show how we scope, ship, and scale AI in production environments.
                </p>
              </Animated>
            </div>
            <Stagger className="stats-grid" staggerDelay={0.1}>
              <StaggerItem>
                <StatCard value="3" label="Featured Case Studies" />
              </StaggerItem>
              <StaggerItem>
                <StatCard value="24/7" label="Automation Coverage" />
              </StaggerItem>
              <StaggerItem>
                <StatCard value="95%" label="Resolution Example" />
              </StaggerItem>
              <StaggerItem>
                <StatCard value="AI" label="Built for Real Ops" />
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-file-chart-line">Featured Stories</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">Selected Case Studies</h2>
              </Animated>
            </div>
            <Stagger className="space-y-8" staggerDelay={0.15}>
              {caseStudies.map((study) => (
                <StaggerItem key={study.title}>
                  <HoverCard className="service-card p-0 overflow-hidden">
                    <div className="grid lg:grid-cols-[280px_1fr]">
                      <div className={`${study.gradient} p-8 text-white`}>
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                          <i className={`${study.icon} text-3xl`} />
                        </div>
                        <div className="text-sm uppercase tracking-[0.2em] text-white/80 mb-3">
                          {study.sector}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
                        <p className="text-white/90 text-sm">Built with {study.product}</p>
                      </div>
                      <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-text-dark mb-3">Challenge</h4>
                            <p className="text-text-muted leading-relaxed">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-text-dark mb-3">Solution</h4>
                            <p className="text-text-muted leading-relaxed">{study.solution}</p>
                          </div>
                        </div>
                        <div className="mt-8">
                          <h4 className="text-lg font-semibold text-text-dark mb-4">Outcomes</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {study.outcomes.map((outcome) => (
                              <div key={outcome} className="rounded-2xl bg-bg-light p-4 text-sm text-text-dark">
                                <i className="ri-check-double-line text-primary-blue mr-2" />
                                {outcome}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <Animated animation="scaleIn">
              <div className="cta-card">
                <h2>Want your team to be our next case study?</h2>
                <p>
                  Let&apos;s talk about the workflow, product, or service experience you want AI to
                  improve.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <Button variant="ctaWhite" asChild>
                    <Link href="/contact">
                      <span>Start a Conversation</span>
                      <i className="ri-arrow-right-line" />
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/solutions">
                      <span>Explore Solutions</span>
                      <i className="ri-arrow-right-line" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Animated>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
