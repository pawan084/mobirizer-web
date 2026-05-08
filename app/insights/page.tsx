'use client';

import Link from 'next/link';
import { Header, Footer, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion } from '@/components/ui';

const featuredPosts = [
  {
    category: 'AI Strategy',
    title: 'How to Find the First AI Use Case Worth Shipping',
    excerpt:
      'A practical way to evaluate ideas, avoid novelty traps, and prioritize AI projects that improve operations or customer experience.',
    readTime: '6 min read',
    icon: 'ri-compass-3-line',
    gradient: 'bg-gradient-blue',
  },
  {
    category: 'Conversational AI',
    title: 'Designing WhatsApp AI Flows People Actually Complete',
    excerpt:
      'Lessons from building chat-first experiences that reduce drop-off, maintain clarity, and keep automation feeling human.',
    readTime: '5 min read',
    icon: 'ri-whatsapp-line',
    gradient: 'bg-gradient-whatsapp',
  },
  {
    category: 'Agentic AI',
    title: 'Where Agentic Systems Create Value and Where They Don’t',
    excerpt:
      'A grounded view of agentic workflows, human review, tool use, and the operational boundaries that matter in production.',
    readTime: '7 min read',
    icon: 'ri-robot-2-line',
    gradient: 'bg-gradient-purple',
  },
];

const topics = [
  {
    title: 'AI Strategy',
    desc: 'Choosing use cases, sequencing investment, and aligning technical direction with measurable business outcomes.',
    icon: 'ri-line-chart-line',
  },
  {
    title: 'Build & Ship',
    desc: 'Implementation notes on prompts, systems, integrations, quality control, and production constraints.',
    icon: 'ri-code-box-line',
  },
  {
    title: 'Industry Lessons',
    desc: 'Patterns we see in government, healthcare, education, and service delivery environments.',
    icon: 'ri-building-2-line',
  },
];

export default function InsightsPage() {
  return (
    <>
      <Header />

      <section className="relative bg-gradient-hero py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80')" }}
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
                Insights
              </li>
            </ol>
          </motion.nav>
          <div className="hero-two-col">
            <div className="hero-content-col">
              <Animated animation="fadeInUp">
                <Badge icon="ri-article-line" variant="white" className="mb-5">
                  Blog & Insights
                </Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  Ideas for Teams Building with AI
                </h1>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  Strategy notes, implementation lessons, and field-tested thinking from the
                  Mobirizer team on designing and deploying production AI systems.
                </p>
              </Animated>
            </div>
            <div className="hero-image-col">
              <Animated animation="fadeInRight" delay={0.3}>
                <div className="glass-card p-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/70 mb-3">
                    Covered Topics
                  </div>
                  <div className="space-y-3 text-white">
                    <div className="flex items-center gap-3">
                      <i className="ri-check-line text-xl" />
                      <span>AI strategy and prioritization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-check-line text-xl" />
                      <span>WhatsApp and conversational UX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-check-line text-xl" />
                      <span>Agentic workflows in production</span>
                    </div>
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
                <Badge icon="ri-star-smile-line">Featured</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">Latest Featured Posts</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">
                  Editorial-style landing page content to grow authority and make future content easy
                  to expand.
                </p>
              </Animated>
            </div>
            <Stagger className="grid-3-col" staggerDelay={0.12}>
              {featuredPosts.map((post) => (
                <StaggerItem key={post.title}>
                  <HoverCard className="service-card h-full p-0 overflow-hidden">
                    <div className={`${post.gradient} p-6 text-white`}>
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <i className={`${post.icon} text-2xl`} />
                      </div>
                      <div className="text-sm uppercase tracking-[0.2em] text-white/80">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-text-dark mb-3">{post.title}</h3>
                      <p className="text-text-muted leading-relaxed mb-5">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-muted">{post.readTime}</span>
                        <span className="text-primary-blue font-medium">Coming soon</span>
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
                <Badge icon="ri-book-open-line">Topics</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">What This Section Covers</h2>
              </Animated>
            </div>
            <Stagger className="grid-3-col" staggerDelay={0.1}>
              {topics.map((topic) => (
                <StaggerItem key={topic.title}>
                  <HoverCard className="service-card text-center h-full p-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <i className={`${topic.icon} text-3xl text-white`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
                    <p className="text-text-muted">{topic.desc}</p>
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
                <h2>Want insights tailored to your team’s AI roadmap?</h2>
                <p>
                  We can turn these ideas into a concrete plan for your product, service workflow,
                  or internal operations.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <Button variant="ctaWhite" asChild>
                    <Link href="/contact">
                      <span>Talk to Us</span>
                      <i className="ri-arrow-right-line" />
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/industries">
                      <span>Explore Industries</span>
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
