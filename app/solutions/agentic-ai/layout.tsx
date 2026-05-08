import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Agentic AI Solutions - Autonomous AI Agents',
  description:
    'Build autonomous AI agents that reason, plan, and execute complex tasks with multi-step workflows, tool integration, and human-in-the-loop systems.',
  keywords:
    'Agentic AI, Autonomous AI, AI Agents, Workflow Automation, AI Planning, Tool Integration',
  ogTitle: 'Agentic AI Solutions | Mobirizer',
  ogDescription: 'Autonomous AI agents for complex multi-step task execution.',
  path: '/solutions/agentic-ai',
});

export default function AgenticAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
