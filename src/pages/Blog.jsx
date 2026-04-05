// src/pages/Blog.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeInSection from '../components/shared/FadeInSection';
import { blogPosts, categories } from '../data/blogData';
import styles from './Blog.module.css';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Blog | Alex Johnson – Digital Marketing Insights</title>
        <meta
          name="description"
          content="Digital marketing insights, strategies, and case studies from Alex Johnson. SEO, PPC, social media, and content marketing articles."
        />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero} aria-label="Blog hero">
        <div className="container">
          <span className={styles.heroLabel}>The Blog</span>
          <h1>Digital Marketing Insights</h1>
          <p>
            Practical strategies, in-depth guides, and behind-the-scenes looks at campaigns
            that actually work. No fluff, just actionable insights.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className={styles.section} aria-label="Blog posts">
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
            {filtered.map((post, i) => (
              <FadeInSection key={post.id} delay={i * 80}>
                <Link
                  to={`/blog/${post.slug}`}
                  className={styles.card}
                  aria-label={`Read: ${post.title}`}
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className={styles.thumbnail}
                    loading="lazy"
                  />
                  <div className={styles.cardBody}>
                    <div className={styles.meta}>
                      <span className={styles.categoryBadge}>{post.category}</span>
                      <span className={styles.date}>{post.date}</span>
                      <span className={styles.readTime}>{post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className={styles.readMore}>Read more →</span>
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

export default Blog;
