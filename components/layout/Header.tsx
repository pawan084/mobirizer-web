'use client';

import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useMobileNav } from '@/hooks';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/ui';
import { cn } from '@/lib/cn';

interface HeaderProps {
  activePage?: 'home' | 'solutions' | 'company' | 'contact';
}

const solutions = [
  {
    href: '/solutions/agentic-ai',
    icon: 'ri-robot-line',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    title: 'Agentic AI',
    description: 'Autonomous AI agents',
  },
  {
    href: '/solutions/conversational-ai',
    icon: 'ri-chat-voice-line',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
    title: 'Conversational AI',
    description: 'Chatbots & Voice AI',
  },
  {
    href: '/solutions/ai-integration',
    icon: 'ri-plug-line',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
    title: 'AI Integration',
    description: 'Connect to your systems',
  },
  {
    href: '/solutions/custom-development',
    icon: 'ri-code-s-slash-line',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    title: 'Custom Development',
    description: 'Tailored AI solutions',
  },
];

export function Header({ activePage }: HeaderProps) {
  const { isOpen, openNav, closeNav } = useMobileNav();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/images/logo.png"
              alt="Mobirizer Logo"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-lg text-text-dark leading-tight">
                Mobirizer
              </span>
              <span className="text-xs text-text-muted leading-tight">
                AI Development Studio
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <NavigationMenu.Root className="hidden md:flex">
            <NavigationMenu.List className="flex items-center gap-1">
              {/* Home */}
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/"
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                      activePage === 'home'
                        ? 'text-primary-blue bg-primary-blue/5'
                        : 'text-text-dark hover:text-primary-blue hover:bg-primary-blue/5'
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              {/* Solutions Dropdown */}
              <NavigationMenu.Item>
                <NavigationMenu.Trigger
                  className={cn(
                    'group px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1',
                    activePage === 'solutions'
                      ? 'text-primary-blue bg-primary-blue/5'
                      : 'text-text-dark hover:text-primary-blue hover:bg-primary-blue/5'
                  )}
                >
                  <Link href="/solutions">Solutions</Link>
                  <i className="ri-arrow-down-s-line transition-transform duration-200 group-data-[state=open]:rotate-180"></i>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute top-full left-0 w-[450px] bg-white rounded-2xl shadow-xl border border-border p-6 animate-fade-in-down">
                  <div className="grid grid-cols-2 gap-3">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-bg-light transition-colors group/item"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: solution.gradient }}
                        >
                          <i className={cn(solution.icon, 'text-white text-lg')}></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-text-dark group-hover/item:text-primary-blue transition-colors">
                            {solution.title}
                          </h4>
                          <p className="text-xs text-text-muted">{solution.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              {/* Company */}
              <NavigationMenu.Item>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/company"
                    className={cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                      activePage === 'company'
                        ? 'text-primary-blue bg-primary-blue/5'
                        : 'text-text-dark hover:text-primary-blue hover:bg-primary-blue/5'
                    )}
                  >
                    Company
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Indicator className="top-full z-10 flex h-2 items-end justify-center overflow-hidden transition-all">
                <div className="relative top-1 h-2 w-2 rotate-45 bg-white border-l border-t border-border" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <NavigationMenu.Viewport className="absolute top-full left-1/2 -translate-x-1/2 mt-2" />
          </NavigationMenu.Root>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button asChild variant="cta" size="default" className="hidden sm:inline-flex">
              <Link href="/contact">
                <span>Book a Demo</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </Button>
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-bg-light transition-colors"
              onClick={openNav}
              aria-label="Open menu"
            >
              <i className="ri-menu-line text-xl text-text-dark"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} onClose={closeNav} activePage={activePage} />
    </>
  );
}
