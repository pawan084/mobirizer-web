'use client';

import Link from 'next/link';
import { Header, Footer, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion } from '@/components/ui';

const principles = [
  {
    title: 'Ship Useful Things',
    desc: 'We care about work that reaches real users and improves a real workflow, not just internal novelty.',
    icon: 'ri-rocket-line',
  },
  {
    title: 'Think Like Builders',
    desc: 'We value teammates who can move between product thinking, engineering detail, and operational pragmatism.',
    icon: 'ri-tools-line',
  },
  {
    title: 'Work With Context',
    desc: 'Strong execution comes from understanding the user, the system, and the environment around the problem.',
    icon: 'ri-focus-3-line',
  },
];

const roles = [
  {
    title: 'AI Engineer',
    type: 'Future Opening',
    desc: 'Model integration, evaluation, orchestration, and production delivery across customer-facing and internal systems.',
  },
  {
    title: 'Frontend Engineer',
    type: 'Future Opening',
    desc: 'Interfaces for AI products and workflows with strong attention to clarity, usability, and motion.',
  },
  {
    title: 'Product & Delivery',
    type: 'Future Opening',
    desc: 'People who can turn ambiguous client requirements into concrete rollout plans and shipped outcomes.',
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />

      <section className="relative bg-gradient-hero py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80')" }}
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
                Careers
              </li>
            </ol>
          </motion.nav>
          <div className="hero-two-col">
            <div className="hero-content-col">
              <Animated animation="fadeInUp">
                <Badge icon="ri-briefcase-4-line" variant="white" className="mb-5">
                  Careers
                </Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  Join a Team That Builds for Real Use
                </h1>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  We’re interested in thoughtful builders who care about product quality, technical
                  depth, and outcomes that matter outside the pitch deck.
                </p>
              </Animated>
            </div>
            <div className="hero-image-col">
              <Animated animation="fadeInRight" delay={0.3}>
                <div className="glass-card p-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/70 mb-3">
                    Current Status
                  </div>
                  <div className="text-white text-lg font-semibold mb-2">No active hiring campaign</div>
                  <div className="text-white/80 text-sm">
                    We still welcome strong introductions from people aligned with our work and
                    values.
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
                <Badge icon="ri-heart-line">How We Work</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">What We Value</h2>
              </Animated>
            </div>
            <Stagger className="grid-3-col" staggerDelay={0.12}>
              {principles.map((item) => (
                <StaggerItem key={item.title}>
                  <HoverCard className="service-card text-center h-full p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <i className={`${item.icon} text-3xl text-white`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-text-muted">{item.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-user-search-line">Typical Roles</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">Teams We Usually Build</h2>
              </Animated>
            </div>
            <Stagger className="grid-3-col" staggerDelay={0.1}>
              {roles.map((role) => (
                <StaggerItem key={role.title}>
                  <HoverCard className="service-card h-full p-8">
                    <div className="text-sm uppercase tracking-[0.18em] text-primary-blue mb-3">
                      {role.type}
                    </div>
                    <h3 className="text-xl font-bold text-text-dark mb-3">{role.title}</h3>
                    <p className="text-text-muted">{role.desc}</p>
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
                <h2>Think you’d work well with this kind of team?</h2>
                <p>
                  Reach out with your background, what you like building, and the kind of problems
                  you want to work on.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <Button variant="ctaWhite" asChild>
                    <Link href="/contact">
                      <span>Contact Us</span>
                      <i className="ri-arrow-right-line" />
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/company">
                      <span>Learn About Us</span>
                      <i className="ri-building-line" />
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
