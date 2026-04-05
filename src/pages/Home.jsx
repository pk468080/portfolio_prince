// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/shared/Button';
import SectionTitle from '../components/shared/SectionTitle';
import AnimatedCounter from '../components/shared/AnimatedCounter';
import FadeInSection from '../components/shared/FadeInSection';
import { services } from '../data/servicesData';
import { caseStudies } from '../data/portfolioData';
import styles from './Home.module.css';

const testimonials = [
  {
    quote: 'Alex transformed our organic presence completely. The results speak for themselves – our revenue from organic search tripled in just six months.',
    name: 'Sarah K.',
    role: 'Head of Digital, StyleHub',
    initials: 'SK',
  },
  {
    quote: "What a transformation! Alex knew exactly what was wrong and fixed it systematically. Our paid channel is now our top-performing acquisition source.",
    name: 'Marcus T.',
    role: 'Growth Lead, Taskflow',
    initials: 'MT',
  },
  {
    quote: "Alex brought our brand to life on social. The content strategy they built is so clear that our whole team can execute it. Incredible results.",
    name: 'Priya S.',
    role: 'Founder, Luminary Living',
    initials: 'PS',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Clients Served' },
  { value: 240, suffix: '%', label: 'Avg. Traffic Growth' },
  { value: 3, suffix: '.8×', label: 'Avg. ROAS' },
  { value: 4, suffix: ' yrs', label: 'Experience' },
];

function Home() {
  return (
    <>
      <Helmet>
        <title>Alex Johnson | Digital Marketing Portfolio</title>
        <meta
          name="description"
          content="Alex Johnson – Digital Marketing Specialist offering SEO, PPC, Social Media & Content Strategy that drives measurable results."
        />
      </Helmet>

      {/* ===== Hero ===== */}
      <section className={styles.hero} aria-label="Hero section">
        <div className="container">
          <div className={styles.heroGrid}>
            {/* Content */}
            <div className={styles.heroContent}>
              <div className={`${styles.heroLabel} fade-in-up`}>
                <span>👋</span> Available for new projects
              </div>
              <h1 className={`${styles.heroTitle} fade-in-up`}>
                I grow brands with <span>digital marketing</span>
              </h1>
              <p className={`${styles.heroDesc} fade-in-up`}>
                Hi, I&apos;m <strong>Alex Johnson</strong> – a Digital Marketing Specialist with
                4 years of experience helping brands scale through data-driven SEO, PPC,
                social media, and content strategies.
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
                  <span role="img" aria-label="Portrait">👤</span>
                  <span>Alex Johnson</span>
                </div>
              </div>
              <div className={styles.heroBadge} aria-label="4 years experience">
                4+ Years Experience
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
              title="Services That Drive Results"
              subtitle="From traffic acquisition to conversion optimization, I provide end-to-end digital marketing solutions tailored to your business goals."
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
              label="Featured Work"
              title="Recent Case Studies"
              subtitle="Real campaigns, real results. Here's a sample of the work I've done for clients across industries."
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
              title="What Clients Say"
              subtitle="Don't just take my word for it. Here's what clients have said about working with me."
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
              <h2>Ready to Grow Your Brand?</h2>
              <p>
                Let&apos;s build a digital marketing strategy that drives real, measurable
                results for your business. Book a free 30-minute strategy call today.
              </p>
              <div className={styles.ctaBtns}>
                <Button to="/contact" size="lg">Book a Free Call</Button>
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
