// src/pages/BlogPost.jsx
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../components/shared/Button';
import FadeInSection from '../components/shared/FadeInSection';
import { blogPosts } from '../data/blogData';
import styles from './BlogPost.module.css';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} | Alex Johnson Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* ===== Hero ===== */}
      <section className={styles.hero} aria-label="Blog post hero">
        <div className="container">
          <Link to="/blog" className={styles.back}>
            ← Back to Blog
          </Link>
          <span className={styles.heroBadge}>{post.category}</span>
          <h1>{post.title}</h1>
          <div className={styles.heroMeta}>
            <div className={styles.author}>
              <div className={styles.authorAvatar} aria-hidden="true">AJ</div>
              <div>
                <strong>{post.author}</strong>
                <span>{post.date} · {post.readTime}</span>
              </div>
            </div>
          </div>
          <img
            src={post.thumbnail}
            alt={post.title}
            className={styles.heroImage}
            loading="eager"
          />
        </div>
      </section>

      {/* ===== Article ===== */}
      <article className={styles.article} aria-label="Blog post content">
        <div className="container">
          <div className={styles.articleGrid}>
            {/* Body */}
            <FadeInSection>
              <div className={styles.body}>
                {post.body.map((block, i) => {
                  if (block.type === 'h2') {
                    return <h2 key={i}>{block.content}</h2>;
                  }
                  if (block.type === 'p') {
                    return <p key={i}>{block.content}</p>;
                  }
                  return null;
                })}
              </div>
            </FadeInSection>

            {/* Sidebar */}
            <FadeInSection delay={200}>
              <aside className={styles.sidebar} aria-label="Post sidebar">
                <div className={styles.sidebarCard}>
                  <h3>About the Author</h3>
                  <p>
                    Alex Johnson is a Digital Marketing Specialist with 4+ years of experience
                    helping brands grow through SEO, PPC, and social media strategies.
                  </p>
                  <Button to="/about" variant="outline" size="sm">
                    Read Bio
                  </Button>
                </div>
                <div className={styles.sidebarCard}>
                  <h3>Tags</h3>
                  <div className={styles.tags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.sidebarCard}>
                  <h3>Work With Me</h3>
                  <p>
                    Ready to apply these strategies to your business? Let&apos;s talk about
                    how I can help.
                  </p>
                  <Button to="/contact" size="sm">
                    Book a Free Call
                  </Button>
                </div>
              </aside>
            </FadeInSection>
          </div>
        </div>
      </article>

      {/* ===== More Posts ===== */}
      <section className={styles.morePosts} aria-label="More blog posts">
        <div className="container">
          <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-text-light)' }}>
            More Articles
          </h2>
          <div className={styles.morePostsGrid}>
            {relatedPosts.map((p, i) => (
              <FadeInSection key={p.id} delay={i * 80}>
                <Link to={`/blog/${p.slug}`} className={styles.morePostCard} aria-label={p.title}>
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className={styles.morePostThumb}
                    loading="lazy"
                  />
                  <div className={styles.morePostBody}>
                    <span>{p.category} · {p.readTime}</span>
                    <h4>{p.title}</h4>
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

export default BlogPost;
