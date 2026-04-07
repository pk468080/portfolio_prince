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
        <title>Services | Prince Kumar – Digital Marketing Executive</title>
        <meta
          name="description"
          content="Explore digital marketing services offered by Prince Kumar including SEO, Google Ads, Meta Ads, LinkedIn Ads, and performance marketing strategies."
        />
      </Helmet>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>Digital Marketing Services</span>

          <h1>SEO & Performance Marketing Services</h1>

          <p>
            I help businesses grow online through SEO, Google Ads, Meta Ads,
            and data-driven marketing strategies that increase traffic,
            generate leads, and improve conversions.
          </p>

          <Button to="/contact" size="lg">
            Get a Free Consultation
          </Button>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          className={styles.serviceSection}
        >
          <div className="container">
            <div className={`${styles.serviceGrid} ${i % 2 !== 0 ? styles.reverse : ''}`}>

              <FadeInSection>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTag}>
                    <span>{svc.icon}</span> {svc.shortTitle}
                  </div>

                  <h2>{svc.title}</h2>

                  <p className={styles.tagline}>
                    “{svc.tagline}”
                  </p>

                  <p>{svc.description}</p>

                  <div className={styles.resultBadge}>
                    <strong>📊 Result:</strong> {svc.results}
                  </div>

                  <ul className={styles.featureList}>
                    {svc.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <Button to="/contact">
                    Get Started
                  </Button>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className={styles.serviceImage}>
                  {svc.icon}
                </div>
              </FadeInSection>

            </div>
          </div>
        </section>
      ))}

      {/* PROCESS */}
      <section className={styles.process}>
        <div className="container">

          <FadeInSection>
            <SectionTitle
              label="My Workflow"
              title="My Digital Marketing Process"
              subtitle="A structured process that ensures campaigns are planned, executed, and optimized for measurable results."
            />
          </FadeInSection>

          <div className={styles.processGrid}>
            {processList.map((step, i) => (
              <FadeInSection key={step.step} delay={i * 100}>
                <div className={styles.processStep}>
                  <div className={styles.processNumber}>
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

      {/* PRICING */}
      <section className={styles.pricing}>
        <div className="container">

          <FadeInSection>
            <SectionTitle
              label="Pricing"
              title="Service Packages"
              subtitle="Flexible digital marketing packages designed for startups, growing businesses, and established brands."
            />
          </FadeInSection>

          <div className={styles.pricingGrid}>
            {[
              { label: 'Starter', key: 'starter' },
              { label: 'Growth', key: 'pro', featured: true },
              { label: 'Advanced', key: 'enterprise' },
            ].map(({ label, key, featured }) => {

              const p = services[0].pricing[key];

              return (
                <FadeInSection key={key}>
                  <div className={`${styles.pricingCard} ${featured ? styles.featured : ''}`}>

                    {featured && (
                      <span className={styles.featuredBadge}>
                        Most Popular
                      </span>
                    )}

                    <div className={styles.pricingTitle}>
                      {label}
                    </div>

                    <div className={styles.pricingAmount}>
                      <span className={styles.price}>{p.price}</span>
                      {p.period && <span className={styles.period}>{p.period}</span>}
                    </div>

                    <ul className={styles.pricingFeatures}>
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>

                    <Button
                      to="/contact"
                      variant={featured ? 'primary' : 'outline'}
                      style={{ width: '100%' }}
                    >
                      Get Started
                    </Button>

                  </div>
                </FadeInSection>
              );
            })}
          </div>

          <p style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>
            Need a custom marketing strategy?
            <Button to="/contact" variant="ghost" size="sm">
              Contact me →
            </Button>
          </p>

        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">

          <FadeInSection>
            <SectionTitle
              label="FAQ"
              title="Common Questions"
              subtitle="Answers to common questions about SEO, advertising campaigns, and digital marketing services."
            />
          </FadeInSection>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default Services;