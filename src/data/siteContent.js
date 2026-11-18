import { PARTNER_LOGOS } from '@/assets/images';

export const NAV_LINKS = [
  { id: 'ai-banking', label: 'AI Banking', href: '#ai-banking', active: true },
  {
    id: 'payments',
    label: 'Payments',
    href: '#suite',
    children: [
      { label: 'Payment Gateway', href: '#suite' },
      { label: 'Payment Links', href: '#suite' },
      { label: 'UPI, Cards & Wallets', href: '#suite' },
    ],
  },
  {
    id: 'payouts',
    label: 'Payouts',
    href: '#suite',
    children: [
      { label: 'Bulk Payouts', href: '#suite' },
      { label: 'Vendor Payments', href: '#suite' },
      { label: 'Payout APIs', href: '#developers' },
    ],
  },
  { id: 'support', label: 'Support', href: '#support' },
];

export const HERO = {
  titleStart: 'AI-powered',
  titleHighlight: 'Banking & Payment Solutions',
  titleEnd: 'built for Modern Businesses',
  subtitle:
    'UzOfin brings intelligent automation, real-time payments, and seamless financial operations together so you can scale without friction.',
  primaryCta: { label: 'Start Building', href: '#developers' },
  secondaryCta: { label: 'Read Docs', href: '#developers' },
};

export const PARTNERS = {
  title: 'Powering tools and integration for companies around the world',

  logos: [
    { name: 'Brave', src: PARTNER_LOGOS.brave, modifier: 'brave' },
    { name: 'Circle', src: PARTNER_LOGOS.circle, modifier: 'circle' },
    { name: 'Discord', src: PARTNER_LOGOS.discord, modifier: 'discord' },
    { name: 'Google', src: PARTNER_LOGOS.google, modifier: 'google' },
    { name: 'Jump', src: PARTNER_LOGOS.jump, modifier: 'jump' },
    { name: 'Lollapalooza', src: PARTNER_LOGOS.lollapalooza, modifier: 'lolla' },
    { name: 'Magic Eden', src: PARTNER_LOGOS.magicEden, modifier: 'magic' },
  ],
};

export const STATS = {
  title: ['Your Business Pays Are Now', 'Faster and Secure'],
  items: [
    { value: 11.5, decimals: 1, suffix: 'M+', label: 'Transactions processed monthly', tone: 'violet' },
    { value: 99.9, decimals: 1, suffix: '%', label: 'Platform uptime and reliability', tone: 'blue' },
    { value: 70, suffix: '%', extra: 'Faster', label: 'Merchant onboarding with AI automation', tone: 'teal' },
  ],
};

export const SUITE = {
  title: ['Our Intelligent', 'Financial Suite'],
  note: 'Tools That Accelerate Every Step Of Your Financial Workflow.',

  columns: [
    [
      {
        title: 'AI Banking',
        description:
          'Smart, automated digital banking for businesses. Instant onboarding, intelligent insights, and real-time account operations.',
        value: 3969,
        label: 'Transactions per second',
        accent: 'blue',
      },
      {
        title: 'Payouts',
        description:
          'Bulk, automated payouts built for high-volume businesses. Reliable, trackable, and lightning-fast disbursements.',
        value: 163077581394,
        label: 'Total transactions',
        accent: 'violet',
      },
    ],
    [
      {
        title: 'Payments',
        description:
          'Fast, secure, and scalable payment infrastructure. Send and receive money globally with ease.',
        value: 1675,
        label: 'Validator nodes',
        accent: 'amber',
      },
      {
        title: 'Merchant Onboarding',
        description:
          'Frictionless onboarding for merchants at any scale. Automated KYC, verification, and risk assessments—done in minutes.',
        value: 100,
        suffix: '%',
        hidePlus: true,
        label: 'On-time merchant onboard',
        accent: 'green',
      },
    ],
  ],
};

const FEATURES = {
  dashboard: { title: 'Unified Dashboard', text: 'Manage banking, payments, and merchants in one place.' },
  ai: { title: 'AI-Driven Decisions', text: 'Automate approvals, verification, and financial operations.' },
  apis: { title: 'Developer-Friendly APIs', text: 'Build, integrate, and launch faster.' },
  security: { title: 'Enterprise-Grade Security', text: 'Bank-level encryption and compliance.' },
  options: { title: 'Multiple Payment Options', text: 'Accept payment options like cards, wallets, etc.' },
  scale: { title: 'Scalable Infrastructure', text: 'Designed for startups to enterprises.' },
};

export const WHY = {
  titleStart: 'Why',
  titleHighlight: 'UzOFin?',
  description:
    'Discover endless creativity with PromptVerse. Generate diverse content effortlessly using prompts. Stay updated with real-time trends, automate tasks, and extract insights from any document or URL. All within a sleek, futuristic design. Create more, effortlessly.',
  rows: [
    { direction: 'left', items: [FEATURES.dashboard, FEATURES.ai, FEATURES.dashboard, FEATURES.ai] },
    { direction: 'right', items: [FEATURES.options, FEATURES.apis, FEATURES.security, FEATURES.apis] },
    { direction: 'left', items: [FEATURES.ai, FEATURES.scale, FEATURES.security, FEATURES.apis] },
  ],
};

export const API_SECTION = {
  titleStart: 'Build Faster with Our',
  titleHighlight: 'Powerful API’s',
  subtitle: 'Plug into secure, developer-friendly financial API’s and launch in days, not months',
  cta: { label: 'Start Building', href: '#contact' },
};

const LOREM =
  'Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed.';

export const INDUSTRY = {
  eyebrow: '24/7 support',
  titleStart: 'Industry',
  titleHighlight: 'Standard',
  cards: [
    { title: 'Modern & clean design', text: LOREM },
    { title: 'Easy to customize', text: LOREM },
    { title: 'Scalability & Integration', text: LOREM },
    { title: 'Step-by-step guide', text: LOREM },
    { title: 'SaaS based solution', text: LOREM },
  ],
};

export const CTA = {
  titleStart: 'The future of your',
  titleMid: 'industry',
  titleHighlight: 'starts here',
  primary: { label: 'Book a Demo', href: '#contact' },
  secondary: { label: 'Build AI', href: '#developers' },
};

export const FOOTER = {
  about:
    'Experience the new age of payments with UzOFin and explore new growth opportunities to reach greater heights',
  columns: [
    {
      title: 'Products',
      links: ['AI Banking', 'Payment', 'Payout', 'Merchant Onboarding', 'FRM'],
    },
    { title: 'Company', links: ['About Us', 'Help Center', 'Contact'] },
    { title: 'Legal', links: ['Cookie Policy', 'Privacy Policy', 'Terms of Service'] },
  ],
  socials: [
    { icon: 'linkedin', label: 'LinkedIn', handle: '/uzofin', href: 'https://www.linkedin.com' },
    { icon: 'x', label: 'X (Twitter)', handle: '/uzofin', href: 'https://x.com' },
    { icon: 'instagram', label: 'Instagram', handle: '/uzofin', href: 'https://www.instagram.com' },
    { icon: 'facebook', label: 'Facebook', handle: '/uzofin', href: 'https://www.facebook.com' },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} UzOFin. All rights reserved`,
  madeIn: 'India 🇮🇳',
};
