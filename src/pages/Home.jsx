import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import SectionTitle from '../components/shared/SectionTitle';
import AnimatedCounter from '../components/shared/AnimatedCounter';
import FadeInSection from '../components/shared/FadeInSection';
import { services } from '../data/servicesData';
import { caseStudies } from '../data/portfolioData';
import styles from './Home.module.css';
import princeImg from '../img/prince.png';

const testimonials = [
  {
    quote: 'Prince helped optimize our Google Ads campaigns and significantly improved lead quality and conversions.',
    name: 'Marketing Manager',
    role: 'B2B SaaS Company',
    initials: 'MM',
  },
  {
    quote: "Our website traffic improved after Prince implemented SEO optimizations and keyword strategies.",
    name: 'Startup Founder',
    role: 'Ecommerce Brand',
    initials: 'SF',
  },
  {
    quote: "Great understanding of performance marketing and analytics. Campaign reporting and insights were very clear.",
    name: 'Growth Lead',
    role: 'Digital Company',
    initials: 'GL',
  },
];

const stats = [
  { value: 15, suffix: '+', label: 'Campaigns Managed' },
  { value: 120, suffix: '%', label: 'Traffic Growth Achieved' },
  { value: 3, suffix: '+', label: 'Ad Platforms Managed' },
  { value: 1, suffix: '+ yrs', label: 'Industry Experience' },
];

function Home() {
  return (
    <>
      <Helmet>
        <title>Prince Kumar | Digital Marketing Executive</title>
        <meta
          name="description"
          content="Prince Kumar – Digital Marketing Executive specializing in SEO, Google Ads, Meta Ads, and data-driven marketing strategies to grow traffic and conversions."
        />
      </Helmet>

      {/* ===== Hero ===== */}
      <section className={styles.hero} aria-label="Hero section">
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Content */}
            <div className={styles.heroContent}>
              <div className={`${styles.heroLabel} fade-in-up`}>
                <span>👋</span> Digital Marketing Executive
              </div>

              <h1 className={`${styles.heroTitle} fade-in-up`}>
                I grow businesses with <span>SEO & performance marketing</span>
              </h1>

              <p className={`${styles.heroDesc} fade-in-up`}>
                Hi, I&apos;m <strong>Prince Kumar</strong> – a Digital Marketing Executive
                specializing in SEO, Google Ads, Meta Ads, and data-driven marketing
                strategies. I help businesses increase organic traffic, generate
                leads, and scale campaigns through analytics and performance
                optimization.
              </p>

              <div className={styles.heroBtns}>
                <Button to="/portfolio" size="lg">View My Work</Button>
                <Button to="/contact" variant="outline" size="lg">Let&apos;s Talk</Button>
              </div>
            </div>

            {/* Image */}
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroImage}>
                <div className={styles.heroImagePlaceholder}>
                  <img src={princeImg} alt="Prince Kumar" />
                  <span role="img" aria-label="Portrait">👤</span>
                  <span>Prince Kumar</span>
                </div>
              </div>

              <div className={styles.heroBadge} aria-label="Experience badge">
                1+ Year Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className={styles.stats} aria-label="Statistics">
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map(({ value, suffix, label }) => (
              <FadeInSection key={label}>
                <div className={styles.statItem}>
                  <strong className={styles.statValue}>
                    <AnimatedCounter end={value} suffix={suffix} />
                  </strong>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Services Snapshot ===== */}
      <section className={styles.servicesSnap} aria-label="Services overview">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="What I Do"
              title="Digital Marketing Services"
              subtitle="From SEO strategy and keyword research to paid advertising and campaign optimization, I provide data-driven marketing solutions designed to increase traffic, leads, and conversions."
            />
          </FadeInSection>

          <div className={styles.servicesGrid}>
            {services.map((svc, i) => (
              <FadeInSection key={svc.id} delay={i * 100}>
                <Link to={`/services#${svc.id}`} className={styles.serviceCard} aria-label={svc.title}>
                  <span className={styles.serviceIcon} aria-hidden="true">{svc.icon}</span>
                  <h3>{svc.title}</h3>
                  <p>{svc.description}</p>
                  <span className={styles.serviceCardLink}>
                    Learn more →
                  </span>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Portfolio ===== */}
      <section className={styles.portfolio} aria-label="Featured portfolio">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Portfolio"
              title="Marketing Projects & Campaigns"
              subtitle="Examples of SEO improvements, paid advertising campaigns, and digital marketing strategies that improved traffic, visibility, and conversions."
            />
          </FadeInSection>

          <div className={styles.portfolioGrid}>
            {caseStudies.map((cs, i) => (
              <FadeInSection key={cs.id} delay={i * 100}>
                <Link
                  to={`/portfolio/${cs.slug}`}
                  className={styles.portfolioCard}
                  aria-label={`Case study: ${cs.title}`}
                >
                  <img
                    src={cs.thumbnail}
                    alt={cs.title}
                    className={styles.portfolioThumb}
                    loading="lazy"
                  />
                  <div className={styles.portfolioCardBody}>
                    <span className={styles.portfolioTag}>{cs.category}</span>
                    <h3>{cs.title}</h3>
                    <p>{cs.summary}</p>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
            <Button to="/portfolio" variant="outline">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className={styles.testimonials} aria-label="Client testimonials">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Testimonials"
              title="Client Feedback"
              subtitle="Here’s what clients and teams have said about working with me on SEO and performance marketing campaigns."
            />
          </FadeInSection>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 100}>
                <article className={styles.testimonialCard}>
                  <blockquote className={styles.testimonialQuote}>
                    {t.quote}
                  </blockquote>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar} aria-hidden="true">
                      {t.initials}
                    </div>
                    <div>
                      <h4>{t.name}</h4>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.cta} aria-label="Call to action">
        <div className="container">
          <FadeInSection>
            <div className={styles.ctaInner}>
              <h2>Ready to Grow Your Business?</h2>
              <p>
                Let’s build a data-driven digital marketing strategy using SEO,
                Google Ads, and Meta Ads to increase your traffic, leads, and ROI.
              </p>

              <div className={styles.ctaBtns}>
                <Button to="/contact" size="lg">Book a Free Consultation</Button>
                <Button to="/services" variant="outline" size="lg">See Services</Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

export default Home;