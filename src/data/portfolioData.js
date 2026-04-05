// src/data/portfolioData.js
// Case studies for Alex Johnson's portfolio

export const caseStudies = [
  {
    id: 'ecommerce-seo',
    slug: 'ecommerce-seo',
    category: 'SEO',
    title: 'E-Commerce SEO Overhaul: 240% Traffic Growth',
    client: 'StyleHub (Fashion Retailer)',
    duration: '6 months',
    year: '2023',
    thumbnail: 'https://via.placeholder.com/600x400/6c63ff/ffffff?text=SEO+Case+Study',
    heroImage: 'https://via.placeholder.com/1200x600/6c63ff/ffffff?text=StyleHub+SEO+Case+Study',
    tags: ['SEO', 'Technical SEO', 'E-Commerce'],
    summary: 'A comprehensive SEO overhaul for an online fashion retailer that resulted in a 240% increase in organic traffic and a 3× improvement in keyword rankings.',
    challenge:
      'StyleHub was struggling with poor search visibility despite having a large product catalogue. Technical issues, thin content, and zero link-building strategy meant they were invisible to their target audience on Google.',
    solution:
      'I conducted a full technical SEO audit, fixed 140+ site errors, built a topic cluster content strategy, optimized 500+ product pages, and launched a targeted link-building campaign with fashion bloggers and publications.',
    results: [
      { metric: 'Organic Traffic', value: '+240%', description: 'Increase in 6 months' },
      { metric: 'Keyword Rankings', value: '3×', description: 'More keywords in top 10' },
      { metric: 'Conversion Rate', value: '+38%', description: 'Organic conversion improvement' },
      { metric: 'Domain Authority', value: '28 → 47', description: 'DA improvement' },
    ],
    tools: ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Google Analytics 4'],
    testimonial: {
      quote: 'Alex transformed our organic presence completely. The results speak for themselves – our revenue from organic search tripled in just six months.',
      author: 'Sarah K.',
      role: 'Head of Digital, StyleHub',
    },
    nextProject: 'saas-ppc',
  },
  {
    id: 'saas-ppc',
    slug: 'saas-ppc',
    category: 'PPC',
    title: 'SaaS PPC Campaign: 3.8× ROAS in 90 Days',
    client: 'Taskflow (Project Management SaaS)',
    duration: '3 months',
    year: '2024',
    thumbnail: 'https://via.placeholder.com/600x400/ff6584/ffffff?text=PPC+Case+Study',
    heroImage: 'https://via.placeholder.com/1200x600/ff6584/ffffff?text=Taskflow+PPC+Case+Study',
    tags: ['PPC', 'Google Ads', 'SaaS'],
    summary: 'Rebuilt Taskflow\'s Google Ads account from scratch, achieving a 3.8× return on ad spend and reducing cost-per-acquisition by 52% within 90 days.',
    challenge:
      'Taskflow had been running Google Ads for 18 months with minimal results. Their CPA was sky-high, quality scores were poor, and they had no conversion tracking in place. Ad spend was essentially being wasted.',
    solution:
      'I rebuilt the account structure using single keyword ad groups (SKAGs), implemented full conversion tracking, created custom audience segments, and launched a remarketing campaign targeting trial users who hadn\'t converted.',
    results: [
      { metric: 'ROAS', value: '3.8×', description: 'Return on ad spend' },
      { metric: 'CPA', value: '-52%', description: 'Reduction in cost per acquisition' },
      { metric: 'CTR', value: '+115%', description: 'Click-through rate improvement' },
      { metric: 'Trial Sign-ups', value: '+280%', description: 'Monthly increase' },
    ],
    tools: ['Google Ads', 'Google Analytics 4', 'Hotjar', 'Data Studio'],
    testimonial: {
      quote: 'What a transformation! Alex knew exactly what was wrong and fixed it systematically. Our paid channel is now our top-performing acquisition source.',
      author: 'Marcus T.',
      role: 'Growth Lead, Taskflow',
    },
    nextProject: 'lifestyle-social',
  },
  {
    id: 'lifestyle-social',
    slug: 'lifestyle-social',
    category: 'Social Media',
    title: 'Lifestyle Brand: 180% Engagement Boost',
    client: 'Luminary Living (Home Décor Brand)',
    duration: '4 months',
    year: '2024',
    thumbnail: 'https://via.placeholder.com/600x400/43e97b/000000?text=Social+Case+Study',
    heroImage: 'https://via.placeholder.com/1200x600/43e97b/000000?text=Luminary+Living+Case+Study',
    tags: ['Social Media', 'Instagram', 'Content'],
    summary: 'Developed and executed a full Instagram and Pinterest strategy for a home décor brand, achieving 180% engagement growth and a 4.5× follower increase.',
    challenge:
      'Luminary Living had beautiful products but no social strategy. Their Instagram was inconsistent, engagement was near zero, and they had no Pinterest presence despite being in a highly visual, pin-friendly niche.',
    solution:
      'I developed a cohesive visual identity for their social channels, built a content calendar with user-generated content integration, launched a micro-influencer partnership program, and built their Pinterest account from 0 to 12k monthly viewers.',
    results: [
      { metric: 'Engagement Rate', value: '+180%', description: 'Instagram engagement boost' },
      { metric: 'Followers', value: '4.5×', description: 'Follower growth in 4 months' },
      { metric: 'Pinterest Views', value: '12k', description: 'Monthly views from zero' },
      { metric: 'Referral Revenue', value: '+65%', description: 'From social channels' },
    ],
    tools: ['Meta Business Suite', 'Pinterest Analytics', 'Canva', 'Later', 'Sprout Social'],
    testimonial: {
      quote: 'Alex brought our brand to life on social. The content strategy they built is so clear that our whole team can execute it. Incredible results.',
      author: 'Priya S.',
      role: 'Founder, Luminary Living',
    },
    nextProject: 'ecommerce-seo',
  },
];

export const categories = ['All', 'SEO', 'PPC', 'Social Media'];
