// src/pages/Services.jsx
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Button from '../components/shared/Button';
import SectionTitle from '../components/shared/SectionTitle';
import FadeInSection from '../components/shared/FadeInSection';
import { services, process as processList, faqs } from '../data/servicesData';
import styles from './Services.module.css';

// Emoji icon map for process steps
const PROCESS_ICONS = ['🔎', '📋', '🚀', '📈', '📊'];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQuestion}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={`${styles.faqIcon} ${open ? styles.open : ''}`} aria-hidden="true">+</span>
      </button>
      <div className={`${styles.faqAnswer} ${open ? styles.open : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Alex Johnson – Digital Marketing</title>
        <meta
          name="description"
          content="Explore Alex Johnson's digital marketing services: SEO, PPC, Social Media Marketing, and Content Marketing."
        />
      </Helmet>

      {/* ===== Hero ===== */}
      <section className={styles.hero} aria-label="Services hero">
        <div className="container">
          <span className={styles.heroLabel}>What I Offer</span>
          <h1>Digital Marketing Services</h1>
          <p>
            Data-driven strategies tailored to your goals. I offer end-to-end digital
            marketing services that drive measurable growth for your business.
          </p>
          <Button to="/contact" size="lg">Get a Free Consultation</Button>
        </div>
      </section>

      {/* ===== Service Detail Sections ===== */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={styles.serviceSection}
          aria-label={svc.title}
        >
          <div className="container">
            <div className={`${styles.serviceGrid} ${i % 2 !== 0 ? styles.reverse : ''}`}>
              {/* Content */}
              <FadeInSection>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTag}>
                    <span aria-hidden="true">{svc.icon}</span> {svc.shortTitle}
                  </div>
                  <h2>{svc.title}</h2>
                  <p className={styles.tagline}>&ldquo;{svc.tagline}&rdquo;</p>
                  <p>{svc.description}</p>
                  <div className={styles.resultBadge}>
                    <strong>📊 Result:</strong> {svc.results}
                  </div>
                  <ul className={styles.featureList}>
                    {svc.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Button to="/contact">Get Started</Button>
                </div>
              </FadeInSection>

              {/* Image placeholder */}
              <FadeInSection delay={200}>
                <div className={styles.serviceImage} aria-hidden="true">
                  {svc.icon}
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      ))}

      {/* ===== Process ===== */}
      <section className={styles.process} aria-label="My process">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="How I Work"
              title="My 5-Step Process"
              subtitle="A structured, transparent approach that ensures every campaign is built on a solid foundation and continuously optimized."
            />
          </FadeInSection>
          <div className={styles.processGrid}>
            {processList.map((step, i) => (
              <FadeInSection key={step.step} delay={i * 100}>
                <div className={styles.processStep}>
                  <div className={styles.processNumber} aria-hidden="true">
                    {PROCESS_ICONS[i]}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section className={styles.pricing} aria-label="Pricing">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="Investment"
              title="Transparent Pricing"
              subtitle="No hidden fees, no surprises. Choose the package that fits your goals and budget."
            />
          </FadeInSection>
          <div className={styles.pricingGrid}>
            {[
              { label: 'Starter', key: 'starter' },
              { label: 'Pro', key: 'pro', featured: true },
              { label: 'Enterprise', key: 'enterprise' },
            ].map(({ label, key, featured }) => {
              // Use first service pricing as representative
              const p = services[0].pricing[key];
              return (
                <FadeInSection key={key} delay={key === 'pro' ? 100 : 0}>
                  <div className={`${styles.pricingCard} ${featured ? styles.featured : ''}`}>
                    {featured && <span className={styles.featuredBadge}>Most Popular</span>}
                    <div className={styles.pricingTitle}>{label}</div>
                    <div className={styles.pricingAmount}>
                      <span className={styles.price}>{p.price}</span>
                      {p.period && <span className={styles.period}>{p.period}</span>}
                    </div>
                    <ul className={styles.pricingFeatures}>
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <Button to="/contact" variant={featured ? 'primary' : 'outline'} style={{ width: '100%' }}>
                      Get Started
                    </Button>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
          <p style={{ textAlign: 'center', marginTop: 'var(--space-8)', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
            Pricing shown is for SEO services. Each service has its own pricing structure.{' '}
            <Button to="/contact" variant="ghost" size="sm">Contact me for custom quotes →</Button>
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className={styles.faq} aria-label="Frequently asked questions">
        <div className="container">
          <FadeInSection>
            <SectionTitle
              label="FAQ"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know before we work together."
            />
          </FadeInSection>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
