// src/pages/CaseStudy.jsx
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../components/shared/Button';
import FadeInSection from '../components/shared/FadeInSection';
import { caseStudies } from '../data/portfolioData';
import styles from './CaseStudy.module.css';

function CaseStudy() {
  const { id } = useParams();
  const cs = caseStudies.find((c) => c.slug === id);

  if (!cs) return <Navigate to="/portfolio" replace />;

  const next = caseStudies.find((c) => c.id === cs.nextProject);

  // Initials for testimonial avatar
  const initials = cs.testimonial.author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <>
      <Helmet>
        <title>{cs.title} | Alex Johnson Portfolio</title>
        <meta name="description" content={cs.summary} />
      </Helmet>

      {/* ===== Hero ===== */}
      <section className={styles.hero} aria-label="Case study hero">
        <div className="container">
          <Link to="/portfolio" className={styles.back}>
            ← Back to Portfolio
          </Link>
          <span className={styles.heroBadge}>{cs.category}</span>
          <h1>{cs.title}</h1>
          <div className={styles.heroPMeta}>
            {[
              { label: 'Client', value: cs.client },
              { label: 'Duration', value: cs.duration },
              { label: 'Year', value: cs.year },
            ].map(({ label, value }) => (
              <div key={label} className={styles.metaItem}>
                <strong>{label}</strong>
                {value}
              </div>
            ))}
          </div>
          <img
            src={cs.heroImage}
            alt={cs.title}
            className={styles.heroImage}
            loading="eager"
          />
        </div>
      </section>

      {/* ===== Content ===== */}
      <section className={styles.content} aria-label="Case study content">
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Main content */}
            <FadeInSection>
              <div className={styles.mainContent}>
                <h2>The Challenge</h2>
                <p>{cs.challenge}</p>

                <h2>My Solution</h2>
                <p>{cs.solution}</p>

                {/* Results grid */}
                <h2>Results</h2>
                <div className={styles.resultsGrid}>
                  {cs.results.map((r) => (
                    <div key={r.metric} className={styles.resultItem}>
                      <span className={styles.resultValue}>{r.value}</span>
                      <span className={styles.resultMetric}>{r.metric}</span>
                      <span className={styles.resultDesc}>{r.description}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className={styles.testimonial}>
                  <blockquote>&ldquo;{cs.testimonial.quote}&rdquo;</blockquote>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar} aria-hidden="true">
                      {initials}
                    </div>
                    <div>
                      <strong>{cs.testimonial.author}</strong>
                      <span>{cs.testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Sidebar */}
            <FadeInSection delay={200}>
              <aside className={styles.sidebar} aria-label="Project details">
                <div className={styles.sidebarCard}>
                  <h3>Tools Used</h3>
                  <div className={styles.toolsList}>
                    {cs.tools.map((t) => (
                      <span key={t} className={styles.toolTag}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.sidebarCard}>
                  <h3>Tags</h3>
                  <div className={styles.toolsList}>
                    {cs.tags.map((t) => (
                      <span key={t} className={styles.toolTag}>{t}</span>
                    ))}
                  </div>
                </div>
                <Button to="/contact" style={{ width: '100%' }}>
                  Work With Me
                </Button>
              </aside>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ===== Next Project ===== */}
      {next && (
        <section className={styles.nextProject} aria-label="Next project">
          <div className="container">
            <div className={styles.nextProjectInner}>
              <div>
                <div className={styles.nextProjectLabel}>Next Project</div>
                <Link to={`/portfolio/${next.slug}`} className={styles.nextProjectTitle}>
                  {next.title} →
                </Link>
              </div>
              <Button to={`/portfolio/${next.slug}`} variant="outline">
                View Case Study
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default CaseStudy;
