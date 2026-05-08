'use client';

import Link from 'next/link';
import { Header, Footer, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion } from '@/components/ui';

const industries = [
  {
    title: 'Government',
    icon: 'ri-government-line',
    gradient: 'bg-gradient-blue',
    challenge: 'Public-facing services need scale, transparency, multilingual access, and better response handling.',
    useCases: ['Citizen engagement on WhatsApp', 'Grievance routing and case updates', 'Program reporting dashboards'],
  },
  {
    title: 'Education',
    icon: 'ri-graduation-cap-line',
    gradient: 'bg-gradient-green',
    challenge: 'Students and institutions need always-on support, faster explanations, and scalable learning assistance.',
    useCases: ['AI tutoring and revision support', 'Photo-to-solution learning', 'Student query automation'],
  },
  {
    title: 'Healthcare',
    icon: 'ri-heart-pulse-line',
    gradient: 'bg-gradient-cyan',
    challenge: 'Care delivery teams need reliable records, smoother workflows, and more visibility across facilities.',
    useCases: ['Patient management platforms', 'Electronic health records support', 'Healthcare operations dashboards'],
  },
  {
    title: 'Retail & Commerce',
    icon: 'ri-shopping-bag-3-line',
    gradient: 'bg-gradient-whatsapp',
    challenge: 'Commercial teams need higher conversion, lower support friction, and stronger commerce experiences in messaging channels.',
    useCases: ['WhatsApp storefront experiences', 'Catalog and checkout automation', 'Lead qualification and support flows'],
  },
  {
    title: 'Enterprise Operations',
    icon: 'ri-briefcase-4-line',
    gradient: 'bg-gradient-purple',
    challenge: 'Internal teams want automation without losing control, auditability, or compatibility with legacy systems.',
    useCases: ['Internal copilots and assistants', 'Workflow automation with review steps', 'AI integrations across existing systems'],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Header />

      <section className="relative bg-gradient-hero py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80')" }}
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
                Industries
              </li>
            </ol>
          </motion.nav>
          <div className="hero-two-col">
            <div className="hero-content-col">
              <Animated animation="fadeInUp">
                <Badge icon="ri-building-2-line" variant="white" className="mb-5">
                  Sector Expertise
                </Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  AI Built for the Real Constraints of Your Industry
                </h1>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  We adapt AI delivery to the workflows, compliance needs, and service realities of
                  each sector rather than forcing the same playbook everywhere.
                </p>
              </Animated>
            </div>
            <div className="hero-image-col">
              <Animated animation="fadeInRight" delay={0.3}>
                <div className="glass-card p-6">
                  <div className="text-3xl font-extrabold text-white mb-1">5</div>
                  <div className="text-sm text-white/70 mb-4">Priority sectors represented</div>
                  <div className="text-sm text-white/90">
                    Government, education, healthcare, commerce, and enterprise operations
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
                <Badge icon="ri-layout-grid-line">Industry Focus</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">Where We Apply AI</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">
                  Sector pages can grow from here later, but this gives you a strong top-level entry
                  point now.
                </p>
              </Animated>
            </div>
            <Stagger className="grid-2-col" staggerDelay={0.12}>
              {industries.map((industry) => (
                <StaggerItem key={industry.title} className="grid-item">
                  <HoverCard className="service-card h-full p-0 overflow-hidden">
                    <div className={`${industry.gradient} p-6 text-white`}>
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <i className={`${industry.icon} text-2xl`} />
                      </div>
                      <h3 className="text-2xl font-bold">{industry.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-text-muted leading-relaxed mb-6">{industry.challenge}</p>
                      <div className="space-y-3">
                        {industry.useCases.map((item) => (
                          <div key={item} className="rounded-2xl bg-bg-light p-4 text-sm text-text-dark">
                            <i className="ri-check-double-line text-primary-blue mr-2" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
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
                <Badge icon="ri-route-line">Delivery Lens</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">What Changes by Industry</h2>
              </Animated>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Workflow Design',
                  desc: 'We tune automation depth, escalation, and handoff logic to the operating reality of each team.',
                },
                {
                  title: 'Compliance & Risk',
                  desc: 'We shape AI behavior around approval, auditability, and reliability requirements that vary by sector.',
                },
                {
                  title: 'User Experience',
                  desc: 'The best interface may be WhatsApp, an internal dashboard, a student flow, or a care operations tool.',
                },
              ].map((item) => (
                <HoverCard key={item.title} className="service-card text-center p-8 h-full">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-text-muted">{item.desc}</p>
                </HoverCard>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <Animated animation="scaleIn">
              <div className="cta-card">
                <h2>Need an industry-specific AI roadmap?</h2>
                <p>
                  We can help you choose the right use cases, interfaces, and rollout plan for your
                  sector.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <Button variant="ctaWhite" asChild>
                    <Link href="/contact">
                      <span>Book a Consultation</span>
                      <i className="ri-arrow-right-line" />
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/insights">
                      <span>Read Insights</span>
                      <i className="ri-article-line" />
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
