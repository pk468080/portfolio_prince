// src/pages/Contact.jsx
import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';
import Button from '../components/shared/Button';
import FadeInSection from '../components/shared/FadeInSection';
import styles from './Contact.module.css';

const SERVICES = [
  'SEO',
  'PPC / Google Ads',
  'Social Media Marketing',
  'Content Marketing',
  'Full Digital Marketing Strategy',
  'Other / Not sure yet',
];

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required';
  if (!fields.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = 'Please enter a valid email';
  if (!fields.message.trim()) errors.message = 'Message is required';
  else if (fields.message.trim().length < 20)
    errors.message = 'Message should be at least 20 characters';
  return errors;
}

function Contact() {
  const formRef = useRef(null);
  const [fields, setFields] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(fields);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFields({ name: '', email: '', company: '', service: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Alex Johnson – Let&apos;s Work Together</title>
        <meta
          name="description"
          content="Get in touch with Alex Johnson to discuss your digital marketing needs. Book a free consultation today."
        />
      </Helmet>

      {/* Hero */}
      <section className={styles.hero} aria-label="Contact hero">
        <div className="container">
          <span className={styles.heroLabel}>Get In Touch</span>
          <h1>Let&apos;s Work Together</h1>
          <p>
            Have a project in mind? I&apos;d love to hear about it. Send me a message and
            let&apos;s explore how I can help you grow.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.section} aria-label="Contact form and info">
        <div className="container">
          <div className={styles.grid}>
            {/* Info column */}
            <FadeInSection>
              <div>
                <div className={styles.infoCard}>
                  <h3>Contact Information</h3>
                  <p>
                    I&apos;m currently available for new projects. Whether you need a full
                    strategy or just an audit, I&apos;m happy to chat.
                  </p>
                  <div className={styles.infoItems}>
                    {[
                      { icon: '📧', label: 'Email', value: 'alex@alexjohnson.com' },
                      { icon: '📍', label: 'Location', value: 'New York, NY (Remote OK)' },
                      { icon: '📅', label: 'Response Time', value: 'Within 24 hours' },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className={styles.infoItem}>
                        <div className={styles.infoIcon} aria-hidden="true">{icon}</div>
                        <div className={styles.infoItemText}>
                          <strong>{label}</strong>
                          <span>{value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.availabilityBadge}>
                    Available for New Projects
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Form column */}
            <FadeInSection delay={200}>
              <div className={styles.formCard}>
                <h2>Send a Message</h2>
                <p>Fill out the form below and I&apos;ll get back to you within 24 hours.</p>

                {/* Banners */}
                {status === 'success' && (
                  <div className={styles.successBanner} role="alert">
                    <span aria-hidden="true">✅</span>
                    Thank you! Your message has been sent. I&apos;ll be in touch shortly.
                  </div>
                )}
                {status === 'error' && (
                  <div className={styles.errorBanner} role="alert">
                    <span aria-hidden="true">❌</span>
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <div className={styles.formRow}>
                    {/* Name */}
                    <div className={styles.formGroup}>
                      <label htmlFor="name">
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={fields.name}
                        onChange={handleChange}
                        className={errors.name ? styles.error : ''}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <span id="name-error" className={styles.fieldError} role="alert">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className={styles.formGroup}>
                      <label htmlFor="email">
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={fields.email}
                        onChange={handleChange}
                        className={errors.email ? styles.error : ''}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <span id="email-error" className={styles.fieldError} role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div className={styles.formGroup}>
                    <label htmlFor="company">Company / Website</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={fields.company}
                      onChange={handleChange}
                      placeholder="Optional"
                      autoComplete="organization"
                    />
                  </div>

                  {/* Service */}
                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={fields.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label htmlFor="message">
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      className={errors.message ? styles.error : ''}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      placeholder="Tell me about your project, goals, and timeline…"
                      rows={6}
                    />
                    {errors.message && (
                      <span id="message-error" className={styles.fieldError} role="alert">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <div className={styles.submitRow}>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      aria-disabled={loading}
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                    </Button>
                    <span className={styles.submitNote}>
                      I&apos;ll respond within 24 hours.
                    </span>
                  </div>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
