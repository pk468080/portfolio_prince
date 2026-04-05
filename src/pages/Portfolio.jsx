// src/pages/Portfolio.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeInSection from '../components/shared/FadeInSection';
import { caseStudies, categories } from '../data/portfolioData';
import styles from './Portfolio.module.css';

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio | Alex Johnson – Case Studies</title>
        <meta
          name="description"
          content="Browse Alex Johnson's portfolio of digital marketing case studies across SEO, PPC, and Social Media."
        />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero} aria-label="Portfolio hero">
        <div className="container">
          <span className={styles.heroLabel}>My Work</span>
          <h1>Portfolio & Case Studies</h1>
          <p>
            Real campaigns, real results. Explore detailed case studies showing the strategies,
            execution, and outcomes from my client work.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className={styles.section} aria-label="Portfolio projects">
        <div className="container">
          {/* Filter bar */}
          <nav className={styles.filterBar} aria-label="Filter by category">
            <span className={styles.filterLabel}>Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* Cards */}
          <div className={styles.grid}>
            {filtered.map((cs, i) => (
              <FadeInSection key={cs.id} delay={i * 80}>
                <Link
                  to={`/portfolio/${cs.slug}`}
                  className={styles.card}
                  aria-label={`View case study: ${cs.title}`}
                >
                  <img
                    src={cs.thumbnail}
                    alt={cs.title}
                    className={styles.thumbnail}
                    loading="lazy"
                  />
                  <div className={styles.cardBody}>
                    <div className={styles.meta}>
                      <span className={styles.categoryBadge}>{cs.category}</span>
                      <span className={styles.year}>{cs.year}</span>
                    </div>
                    <h3>{cs.title}</h3>
                    <p>{cs.summary}</p>
                    <div className={styles.tags}>
                      {cs.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
