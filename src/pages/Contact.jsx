import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com';
import Button from '../components/shared/Button';
import FadeInSection from '../components/shared/FadeInSection';
import styles from './Contact.module.css';

const SERVICES = [
  'SEO Optimization',
  'Google Ads Management',
  'Meta Ads (Facebook & Instagram)',
  'LinkedIn Ads',
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
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name])
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
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

      setFields({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });

    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Prince Kumar – Digital Marketing Executive</title>
        <meta
          name="description"
          content="Contact Prince Kumar for SEO services, Google Ads management, Meta Ads campaigns, and digital marketing consulting."
        />
      </Helmet>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">

          <span className={styles.heroLabel}>
            Contact
          </span>

          <h1>
            Let’s Grow Your Business
          </h1>

          <p>
            Have a project or marketing goal in mind? Send me a message and
            let's discuss how SEO, Google Ads, and performance marketing
            can help grow your business.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.section}>
        <div className="container">

          <div className={styles.grid}>

            {/* INFO COLUMN */}
            <FadeInSection>

              <div className={styles.infoCard}>

                <h3>Contact Information</h3>

                <p>
                  I’m available for digital marketing projects including
                  SEO optimization, paid advertising campaigns, and
                  marketing strategy consulting.
                </p>

                <div className={styles.infoItems}>

                  {[
                    {
                      icon: '📧',
                      label: 'Email',
                      value: 'pk468080@gmail.com',
                    },
                    {
                      icon: '📍',
                      label: 'Location',
                      value: 'Gurgaon, Haryana (Remote Available)',
                    },
                    {
                      icon: '📅',
                      label: 'Response Time',
                      value: 'Within 24 hours',
                    },
                  ].map(({ icon, label, value }) => (

                    <div key={label} className={styles.infoItem}>

                      <div className={styles.infoIcon}>
                        {icon}
                      </div>

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

            </FadeInSection>

            {/* FORM COLUMN */}
            <FadeInSection delay={200}>

              <div className={styles.formCard}>

                <h2>Send a Message</h2>

                <p>
                  Fill out the form below and I’ll respond within 24 hours.
                </p>

                {status === 'success' && (
                  <div className={styles.successBanner}>
                    ✅ Thank you! Your message has been sent.
                  </div>
                )}

                {status === 'error' && (
                  <div className={styles.errorBanner}>
                    ❌ Something went wrong. Please try again.
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                >

                  <div className={styles.formRow}>

                    <div className={styles.formGroup}>

                      <label>Name *</label>

                      <input
                        name="name"
                        type="text"
                        value={fields.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />

                      {errors.name && (
                        <span className={styles.fieldError}>
                          {errors.name}
                        </span>
                      )}

                    </div>

                    <div className={styles.formGroup}>

                      <label>Email *</label>

                      <input
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />

                      {errors.email && (
                        <span className={styles.fieldError}>
                          {errors.email}
                        </span>
                      )}

                    </div>

                  </div>

                  <div className={styles.formGroup}>

                    <label>Company / Website</label>

                    <input
                      name="company"
                      value={fields.company}
                      onChange={handleChange}
                      placeholder="Optional"
                    />

                  </div>

                  <div className={styles.formGroup}>

                    <label>Service Interested In</label>

                    <select
                      name="service"
                      value={fields.service}
                      onChange={handleChange}
                    >

                      <option value="">
                        Select a service…
                      </option>

                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}

                    </select>

                  </div>

                  <div className={styles.formGroup}>

                    <label>Message *</label>

                    <textarea
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                    />

                    {errors.message && (
                      <span className={styles.fieldError}>
                        {errors.message}
                      </span>
                    )}

                  </div>

                  <div className={styles.submitRow}>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? 'Sending…' : 'Send Message'}
                    </Button>

                    <span className={styles.submitNote}>
                      I’ll respond within 24 hours
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