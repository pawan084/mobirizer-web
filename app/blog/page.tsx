'use client';

import Link from 'next/link';
import { Header, Footer, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion } from '@/components/ui';

const posts = [
  {
    category: 'Delivery',
    title: 'What “Production-Ready AI” Actually Means',
    excerpt:
      'A grounded look at reliability, workflow fit, human review, monitoring, and the operational detail that separates demos from real systems.',
    readTime: '6 min read',
    icon: 'ri-rocket-2-line',
    gradient: 'bg-gradient-blue',
  },
  {
    category: 'Design',
    title: 'How to Make Automation Feel Helpful, Not Robotic',
    excerpt:
      'Design principles for conversational and service automation that reduce friction while keeping the interaction clear and trustworthy.',
    readTime: '5 min read',
    icon: 'ri-chat-smile-3-line',
    gradient: 'bg-gradient-green',
  },
  {
    category: 'Operations',
    title: 'Where Teams Lose Momentum in AI Rollouts',
    excerpt:
      'Common implementation mistakes in scoping, ownership, evaluation, and adoption, with practical ways to avoid them.',
    readTime: '7 min read',
    icon: 'ri-settings-3-line',
    gradient: 'bg-gradient-purple',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      <section className="relative bg-gradient-hero py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1920&q=80')" }}
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
                Blog
              </li>
            </ol>
          </motion.nav>
          <div className="hero-two-col">
            <div className="hero-content-col">
              <Animated animation="fadeInUp">
                <Badge icon="ri-quill-pen-line" variant="white" className="mb-5">
                  Blog
                </Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  Writing from the Field
                </h1>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  Notes on shipping AI, designing service experiences, and building systems that are
                  useful outside the prototype stage.
                </p>
              </Animated>
            </div>
            <div className="hero-image-col">
              <Animated animation="fadeInRight" delay={0.3}>
                <div className="glass-card p-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-white/70 mb-3">
                    What You’ll Find
                  </div>
                  <div className="space-y-3 text-white">
                    <div className="flex items-center gap-3">
                      <i className="ri-check-line text-xl" />
                      <span>Implementation lessons</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-check-line text-xl" />
                      <span>Operational design thinking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="ri-check-line text-xl" />
                      <span>Real-world AI delivery notes</span>
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
                <Badge icon="ri-file-list-3-line">Featured Posts</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">Current Highlights</h2>
              </Animated>
            </div>
            <Stagger className="grid-3-col" staggerDelay={0.12}>
              {posts.map((post) => (
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
                        <span className="text-primary-blue font-medium">Publishing soon</span>
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
                <h2>Need help applying these ideas to your team?</h2>
                <p>
                  We can turn the thinking behind these posts into a concrete roadmap for your AI
                  rollout.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <Button variant="ctaWhite" asChild>
                    <Link href="/contact">
                      <span>Start a Conversation</span>
                      <i className="ri-arrow-right-line" />
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href="/insights">
                      <span>Explore Insights</span>
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
