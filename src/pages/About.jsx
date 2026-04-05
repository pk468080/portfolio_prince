// src/pages/About.jsx
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/shared/Button';
import SectionTitle from '../components/shared/SectionTitle';
import FadeInSection from '../components/shared/FadeInSection';
import styles from './About.module.css';

const skills = [
  { name: 'SEO Strategy', percent: 95 },
  { name: 'Google Ads / PPC', percent: 90 },
  { name: 'Meta Advertising', percent: 88 },
  { name: 'Content Marketing', percent: 85 },
  { name: 'Social Media Marketing', percent: 92 },
  { name: 'Email Marketing', percent: 80 },
  { name: 'Google Analytics 4', percent: 90 },
  { name: 'Conversion Rate Optimization', percent: 78 },
];

const timeline = [
  {
    date: '2024 – Present',
    role: 'Senior Digital Marketing Consultant',
    company: 'Freelance / Remote',
    description: 'Working with e-commerce brands, SaaS companies, and local businesses to build and execute full-funnel digital marketing strategies. Specializing in SEO, paid media, and conversion optimization.',
  },
  {
    date: '2022 – 2024',
    role: 'Digital Marketing Manager',
    company: 'GrowthLab Agency',
    description: 'Led digital marketing for 15+ clients across SEO, PPC, and social media. Managed a $200k/month collective ad spend portfolio and grew agency revenue by 45% through new client acquisition.',
  },
  {
    date: '2021 – 2022',
    role: 'SEO & Content Specialist',
    company: 'TechBridge Solutions',
    description: 'Built and executed SEO strategies for B2B tech clients. Produced 8–12 pieces of long-form content monthly, contributing to a 180% increase in organic lead generation.',
  },
  {
    date: '2019 – 2021',
    role: 'Marketing Coordinator',
    company: 'Retail Ventures Inc.',
    description: 'First marketing role. Managed social media accounts, email campaigns, and supported paid advertising efforts for a mid-sized retail chain with 12 locations.',
  },
];

const certifications = [
  { icon: '🏅', name: 'Google Ads Certified', issuer: 'Google · 2024' },
  { icon: '🏅', name: 'Google Analytics Certified', issuer: 'Google · 2024' },
  { icon: '🏆', name: 'Meta Blueprint Certified', issuer: 'Meta · 2023' },
  { icon: '📜', name: 'HubSpot Content Marketing', issuer: 'HubSpot Academy · 2023' },
  { icon: '📜', name: 'SEMrush SEO Fundamentals', issuer: 'SEMrush · 2024' },
  { icon: '📜', name: 'Ahrefs SEO Training', issuer: 'Ahrefs Academy · 2023' },
];

const tools = [
  'Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Google Search Console',
  'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog', 'Mailchimp', 'Klaviyo',
  'HubSpot', 'Salesforce', 'Canva', 'Adobe Photoshop', 'Later', 'Sprout Social',
  'Data Studio / Looker Studio', 'Hotjar', 'Zapier', 'Notion',
];

// SkillBar uses IntersectionObserver to animate on scroll
function SkillBar({ name, percent }) {
  const fillRef = useRef(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.setProperty('--skill-width', `${percent}%`);
          el.classList.add(styles.animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPercent}>{percent}%</span>
      </div>
      <div className={styles.skillBar} role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label={`${name}: ${percent}%`}>
        <div ref={fillRef} className={styles.skillFill} />
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <Helmet>
        <title>About | Alex Johnson – Digital Marketing Specialist</title>
        <meta
          name="description"
          content="Learn about Alex Johnson's background, skills, experience, and certifications in digital marketing."
        />
      </Helmet>

      {/* ===== Hero ===== */}
      <section className={styles.hero} aria-label="About hero">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.label}>About Me</span>
              <h1>Digital Marketer With a Data-First Mindset</h1>
              <p>
                I&apos;m Alex Johnson — a Digital Marketing Specialist based in New York, helping
                brands of all sizes grow their online presence through strategies that are rooted
                in data, driven by creativity, and laser-focused on results.
              </p>
              <div className={styles.heroBtns}>
                <Button to="/contact" size="lg">Work With Me</Button>
                <Button href="/assets/AlexJohnson-Resume.pdf" variant="outline" size="lg">
                  Download CV
                </Button>
              </div>
            </div>
            <div className={styles.heroImage} aria-hidden="true">
              👤
            </div>
          </div>
        </div>
      </section>

      {/* ===== Bio ===== */}
      <section className={styles.bio} aria-label="Biography">
        <div className="container">
          <div className={styles.bioGrid}>
            <FadeInSection>
              <div className={styles.bioText}>
                <h2>My Story</h2>
                <p>
                  I fell into digital marketing somewhat by accident — I started as a content
                  writer for a small e-commerce startup, and quickly became obsessed with why
                  some content ranked and some didn&apos;t. That curiosity led me down a rabbit
                  hole of SEO, which led to PPC, which led to social media strategy... and
                  four years later, I&apos;m helping businesses across industries grow their
                  digital presence.
                </p>
                <p>
                  What sets me apart is my obsession with data. Every strategy I build starts
                  with a deep audit and ends with clear, measurable KPIs. I believe marketing
                  should be accountable — if we can&apos;t measure it, we can&apos;t improve it.
                </p>
                <p>
                  Outside of work, I&apos;m passionate about staying at the cutting edge of the
                  industry. I read marketing publications daily, test new platforms and tools
                  regularly, and share insights through my blog and LinkedIn.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className={styles.quickFacts}>
                <h3>Quick Facts</h3>
                {[
                  { label: 'Location', value: 'New York, NY' },
                  { label: 'Experience', value: '4 Years' },
                  { label: 'Specialization', value: 'SEO & Paid Media' },
                  { label: 'Clients Served', value: '50+' },
                  { label: 'Languages', value: 'English, Spanish' },
                  { label: 'Availability', value: 'Open to projects' },
                ].map(({ label, value }) => (
                  <div key={label} className={styles.factItem}>
                    <span className={styles.factLabel}>{label}</span>
                    <span className={styles.factValue}>{value}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section className={styles.skills} aria-label="Skills">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Expertise"
              title="My Skill Set"
              subtitle="Years of hands-on experience across every major digital marketing discipline."
            />
          </FadeInSection>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Timeline ===== */}
      <section className={styles.timeline} aria-label="Experience timeline">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Experience"
              title="My Journey"
              subtitle="From marketing coordinator to independent consultant – here's the path that shaped my expertise."
            />
          </FadeInSection>
          <ol className={styles.timelineList}>
            {timeline.map((item, i) => (
              <FadeInSection key={item.date} delay={i * 100}>
                <li className={styles.timelineItem}>
                  <span className={styles.timelineDate}>{item.date}</span>
                  <div className={styles.timelineContent}>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              </FadeInSection>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Certifications ===== */}
      <section className={styles.certifications} aria-label="Certifications">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Credentials"
              title="Certifications"
              subtitle="Officially certified across all major digital marketing platforms and methodologies."
            />
          </FadeInSection>
          <div className={styles.certsGrid}>
            {certifications.map((cert, i) => (
              <FadeInSection key={cert.name} delay={i * 80}>
                <div className={styles.certCard}>
                  <span className={styles.certIcon} aria-hidden="true">{cert.icon}</span>
                  <div className={styles.certInfo}>
                    <h4>{cert.name}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tools ===== */}
      <section className={styles.tools} aria-label="Tools and software">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Toolkit"
              title="Tools I Work With"
              subtitle="A selection of the platforms, tools, and software I use daily to execute winning campaigns."
            />
          </FadeInSection>
          <div className={styles.toolsGrid} role="list">
            {tools.map((tool) => (
              <span key={tool} className={styles.toolTag} role="listitem">{tool}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
