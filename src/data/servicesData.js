// src/data/servicesData.js
// Services offered by Alex Johnson

export const services = [
  {
    id: 'seo',
    icon: '🔍',
    title: 'Search Engine Optimization',
    shortTitle: 'SEO',
    tagline: 'Rank higher. Get found. Grow organically.',
    description:
      'Data-driven SEO strategies that improve your search rankings and drive qualified organic traffic. From technical audits to content optimization, I cover every angle.',
    features: [
      'Technical SEO audits & fixes',
      'Keyword research & mapping',
      'On-page & off-page optimization',
      'Local SEO for businesses',
      'Monthly performance reporting',
      'Core Web Vitals optimization',
    ],
    results: '+240% organic traffic for e-commerce client in 6 months',
    image: '/assets/images/service-seo.jpg',
    pricing: {
      starter: { price: '$499', period: '/mo', features: ['Up to 20 pages optimized', 'Monthly report', 'Keyword tracking'] },
      pro: { price: '$999', period: '/mo', features: ['Up to 50 pages optimized', 'Bi-weekly report', 'Competitor analysis', 'Link building (5/mo)'] },
      enterprise: { price: 'Custom', period: '', features: ['Unlimited pages', 'Weekly report', 'Full link building', 'Dedicated account manager'] },
    },
  },
  {
    id: 'ppc',
    icon: '💰',
    title: 'Pay-Per-Click Advertising',
    shortTitle: 'PPC',
    tagline: 'Every dollar spent, precision targeted.',
    description:
      'Maximize your ad budget with expertly managed Google Ads and Meta Ads campaigns. I build, optimize, and scale campaigns that deliver measurable ROI.',
    features: [
      'Google Ads campaign setup & management',
      'Meta (Facebook & Instagram) Ads',
      'Audience targeting & remarketing',
      'A/B testing ad creatives',
      'Conversion tracking & attribution',
      'Budget optimization & scaling',
    ],
    results: '3.8× ROAS achieved for SaaS client within 90 days',
    image: '/assets/images/service-ppc.jpg',
    pricing: {
      starter: { price: '$599', period: '/mo', features: ['1 platform', 'Up to $2k ad spend', 'Monthly optimization'] },
      pro: { price: '$1,199', period: '/mo', features: ['2 platforms', 'Up to $10k ad spend', 'Weekly optimization', 'A/B testing'] },
      enterprise: { price: 'Custom', period: '', features: ['All platforms', 'Unlimited ad spend', 'Daily monitoring', 'Dedicated manager'] },
    },
  },
  {
    id: 'social',
    icon: '📱',
    title: 'Social Media Marketing',
    shortTitle: 'Social',
    tagline: 'Build community. Drive engagement. Convert followers.',
    description:
      'Strategic social media management that grows your brand presence and turns followers into loyal customers. Authentic content meets data-backed strategy.',
    features: [
      'Platform strategy (Instagram, LinkedIn, TikTok)',
      'Content calendar & scheduling',
      'Community management',
      'Influencer partnership coordination',
      'Social analytics & reporting',
      'Paid social campaigns',
    ],
    results: '+180% engagement rate for lifestyle brand in 3 months',
    image: '/assets/images/service-social.jpg',
    pricing: {
      starter: { price: '$399', period: '/mo', features: ['2 platforms', '12 posts/mo', 'Monthly report'] },
      pro: { price: '$799', period: '/mo', features: ['4 platforms', '24 posts/mo', 'Community management', 'Paid campaigns'] },
      enterprise: { price: 'Custom', period: '', features: ['All platforms', 'Unlimited posts', 'Full community mgmt', 'Influencer outreach'] },
    },
  },
  {
    id: 'content',
    icon: '✍️',
    title: 'Content Marketing',
    shortTitle: 'Content',
    tagline: 'Stories that sell. Content that converts.',
    description:
      'SEO-optimized content strategies that establish authority, attract qualified leads, and nurture prospects through every stage of the funnel.',
    features: [
      'Content strategy & editorial planning',
      'Blog posts & long-form articles',
      'Email marketing campaigns',
      'Landing page copywriting',
      'Video script writing',
      'Content performance analysis',
    ],
    results: '62% increase in lead generation through blog content alone',
    image: '/assets/images/service-content.jpg',
    pricing: {
      starter: { price: '$449', period: '/mo', features: ['4 blog posts/mo', 'Basic SEO optimization', 'Monthly report'] },
      pro: { price: '$849', period: '/mo', features: ['8 blog posts/mo', 'Full SEO optimization', 'Email newsletter', 'Landing page copy'] },
      enterprise: { price: 'Custom', period: '', features: ['Unlimited content', 'Full strategy', 'Video scripts', 'Dedicated writer'] },
    },
  },
];

export const process = [
  { step: 1, title: 'Discovery & Audit', description: 'We start by deeply understanding your business, goals, and current digital presence through a comprehensive audit.' },
  { step: 2, title: 'Strategy Development', description: 'Based on research and data, I craft a tailored strategy aligned with your KPIs and target audience.' },
  { step: 3, title: 'Implementation', description: 'Expert execution of campaigns, content, and optimizations with meticulous attention to detail.' },
  { step: 4, title: 'Monitor & Optimize', description: 'Continuous monitoring, A/B testing, and iterative improvements to maximize performance.' },
  { step: 5, title: 'Report & Scale', description: 'Transparent reporting with actionable insights, followed by scaling what works best.' },
];

export const faqs = [
  { question: 'How long before I see results?', answer: 'SEO typically shows meaningful results in 3–6 months. PPC and paid social campaigns can generate leads within the first week of launch. Content marketing builds momentum over 2–4 months.' },
  { question: 'Do you work with small businesses?', answer: 'Absolutely! I work with businesses of all sizes. My Starter packages are designed with small businesses in mind, offering professional results at an accessible price point.' },
  { question: 'How do we communicate and track progress?', answer: 'You receive monthly (or more frequent) detailed reports, access to a live dashboard, and regular check-in calls. I use Slack or email for day-to-day communication.' },
  { question: 'Can I hire you for a one-time project?', answer: 'Yes! I offer project-based engagements like SEO audits, campaign setups, or content strategy workshops. Reach out via the contact form for a custom quote.' },
  { question: 'What industries do you specialize in?', answer: 'I have deep experience in e-commerce, SaaS, local businesses, and professional services. My strategies are data-driven and adapt to any industry.' },
];
