import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Black · AI Full-Stack Engineer',
  description: 'Black — AI Full-Stack Engineer based in Hangzhou. Python · JS/TS · Node.js · Agent engineering.',
  keywords: ['Black', 'AI Full-Stack Engineer', 'Python', 'TypeScript', 'Agent', '杭州', '全栈工程师'],
  authors: [{ name: 'Black', url: 'https://github.com/ii3lack' }],
  openGraph: {
    title: 'Black · AI Full-Stack Engineer',
    description: 'AI Full-Stack Engineer · Hangzhou · 3+ yrs full-stack · Agent engineering (in progress)',
    type: 'website',
    url: 'https://ii3lack.github.io/ii3lack',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
