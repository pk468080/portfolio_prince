// src/components/shared/SectionTitle.jsx
import styles from './SectionTitle.module.css';

/**
 * Reusable section title block
 * @param {string} label - Small label above the title
 * @param {string} title - Main heading
 * @param {string} subtitle - Supporting text below title
 * @param {string} align - 'center' | 'left'
 */
function SectionTitle({ label, title, subtitle, align = 'center' }) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {label && <span className={styles.label}>{label}</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
