// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { label: 'SEO', path: '/services#seo' },
  { label: 'PPC Advertising', path: '/services#ppc' },
  { label: 'Social Media', path: '/services#social' },
  { label: 'Content Marketing', path: '/services#content' },
];

const socials = [
  { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com' },
  { label: 'Twitter', icon: '𝕏', href: 'https://twitter.com' },
  { label: 'Instagram', icon: '📷', href: 'https://instagram.com' },
  { label: 'GitHub', icon: '⌥', href: 'https://github.com' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className="container">
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              Alex<span>.</span>
            </Link>
            <p>
              Digital Marketing Specialist helping brands grow through data-driven
              SEO, PPC, social media, and content strategies that deliver real results.
            </p>
            <div className={styles.socials} role="list" aria-label="Social links">
              {socials.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  role="listitem"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className={styles.column}>
            <h4>Services</h4>
            <ul>
              {serviceLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p>
            © {year}{' '}
            <a href="mailto:alex@alexjohnson.com">Alex Johnson</a>. All rights reserved.
          </p>
          <nav className={styles.bottomLinks} aria-label="Footer legal links">
            <a href="/contact">Privacy Policy</a>
            <a href="/contact">Terms of Use</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
