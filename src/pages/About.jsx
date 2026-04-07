import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/shared/Button';
import SectionTitle from '../components/shared/SectionTitle';
import FadeInSection from '../components/shared/FadeInSection';
import styles from './About.module.css';

const skills = [
  { name: 'SEO Strategy', percent: 90 },
  { name: 'Google Ads (Search & Display)', percent: 88 },
  { name: 'Meta Ads (Facebook & Instagram)', percent: 85 },
  { name: 'Keyword Research', percent: 92 },
  { name: 'Technical SEO & SEO Audits', percent: 85 },
  { name: 'Conversion Tracking & Analytics', percent: 82 },
  { name: 'Campaign Optimization', percent: 84 },
  { name: 'Content & Blog Optimization', percent: 80 },
];

const timeline = [
  {
    date: 'Jan 2026 – Mar 2026',
    role: 'Digital Marketing Executive',
    company: 'Thumbpin Private Limited',
    description:
      'Executed multi-channel marketing campaigns across Google Ads, Meta Ads, and LinkedIn Ads. Designed ad creatives using Canva and AI tools, implemented on-page SEO improvements, and generated performance reports and campaign insights.',
  },
  {
    date: 'Apr 2025 – Jan 2026',
    role: 'Digital Marketing Assistant',
    company: 'Mesnotechno Media Pvt. Ltd.',
    description:
      'Implemented SEO strategies including on-page and off-page optimization, created GEO and AEO optimized content, analyzed website performance using Google Analytics and Search Console, and managed paid advertising campaigns.',
  },
  {
    date: '2023 – Present',
    role: 'B.Com (Hons.) Student',
    company: 'Manav Rachna University',
    description:
      'Currently pursuing Bachelor of Commerce while developing practical skills in digital marketing including SEO, performance marketing, and marketing analytics.',
  },
];

const certifications = [
  { icon: '📜', name: 'Digital Marketing Professional', issuer: 'DIDM' },
  { icon: '📜', name: 'SEO Certification', issuer: 'Moz' },
];

const tools = [
  'Google Ads',
  'Meta Ads Manager',
  'LinkedIn Campaign Manager',
  'Google Analytics',
  'Google Search Console',
  'Google Tag Manager',
  'SEMrush',
  'Ahrefs',
  'WordPress',
  'Canva',
  'ChatGPT',
  'Gemini',
  'Claude AI',
];

// SkillBar animation
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

      <div
        className={styles.skillBar}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div ref={fillRef} className={styles.skillFill} />
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <Helmet>
        <title>About | Prince Kumar – Digital Marketing Executive</title>
        <meta
          name="description"
          content="Learn about Prince Kumar, a Digital Marketing Executive specializing in SEO, Google Ads, Meta Ads, and performance marketing strategies."
        />
      </Helmet>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.label}>About Me</span>

              <h1>Digital Marketing Executive Focused on Growth</h1>

              <p>
                I’m <strong>Prince Kumar</strong>, a Digital Marketing Executive
                passionate about helping businesses grow through data-driven
                marketing strategies. My expertise includes SEO, Google Ads,
                Meta Ads, and performance analytics to increase traffic,
                leads, and conversions.
              </p>

              <div className={styles.heroBtns}>
                <Button to="/contact" size="lg">
                  Work With Me
                </Button>

                <Button
                  href="/assets/PrinceKumar-Resume.pdf"
                  variant="outline"
                  size="lg"
                >
                  Download CV
                </Button>
              </div>
            </div>

            <div className={styles.heroImage}>👤</div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className={styles.bio}>
        <div className="container">
          <div className={styles.bioGrid}>
            <FadeInSection>
              <div className={styles.bioText}>
                <h2>My Story</h2>

                <p>
                  My journey into digital marketing started with a curiosity
                  about how websites rank on Google and how online campaigns
                  generate customers. That curiosity led me to explore SEO,
                  performance marketing, and analytics.
                </p>

                <p>
                  Over the past year, I have worked on SEO optimization,
                  content strategy, and multi-platform advertising campaigns
                  across Google, Meta, and LinkedIn. I focus on creating
                  strategies that improve visibility, drive traffic, and
                  increase conversions.
                </p>

                <p>
                  I continuously explore new marketing technologies and AI
                  tools to stay updated with the evolving digital marketing
                  landscape.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className={styles.quickFacts}>
                <h3>Quick Facts</h3>

                {[
                  { label: 'Location', value: 'Gurgaon, Haryana, India' },
                  { label: 'Experience', value: '1+ Years' },
                  { label: 'Specialization', value: 'SEO & Paid Advertising' },
                  { label: 'Campaign Platforms', value: 'Google, Meta, LinkedIn' },
                  { label: 'Education', value: 'B.Com (Hons.)' },
                  { label: 'Availability', value: 'Open to opportunities' },
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

      {/* SKILLS */}
      <section className={styles.skills}>
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Expertise"
              title="My Skill Set"
              subtitle="Core digital marketing skills developed through hands-on campaigns and analytics-driven optimization."
            />
          </FadeInSection>

          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={styles.timeline}>
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Experience"
              title="Professional Journey"
              subtitle="My path in digital marketing and performance marketing."
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

      {/* CERTIFICATIONS */}
      <section className={styles.certifications}>
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Credentials"
              title="Certifications"
              subtitle="Professional certifications validating my digital marketing expertise."
            />
          </FadeInSection>

          <div className={styles.certsGrid}>
            {certifications.map((cert, i) => (
              <FadeInSection key={cert.name} delay={i * 80}>
                <div className={styles.certCard}>
                  <span className={styles.certIcon}>{cert.icon}</span>

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

      {/* TOOLS */}
      <section className={styles.tools}>
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Toolkit"
              title="Tools I Work With"
              subtitle="Platforms and tools I use daily for SEO analysis, advertising campaigns, and marketing analytics."
            />
          </FadeInSection>

          <div className={styles.toolsGrid}>
            {tools.map((tool) => (
              <span key={tool} className={styles.toolTag}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;