// src/pages/NotFound.jsx
import { Helmet } from 'react-helmet-async';
import Button from '../components/shared/Button';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Alex Johnson</title>
      </Helmet>
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'var(--space-16)',
        }}
        aria-label="404 page not found"
      >
        <div>
          <div style={{ fontSize: '6rem', marginBottom: 'var(--space-6)' }} aria-hidden="true">
            🔍
          </div>
          <h1
            style={{
              fontSize: 'var(--text-6xl)',
              fontWeight: 800,
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-4)',
              fontFamily: 'var(--font-heading)',
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 700,
              color: 'var(--color-text-light)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Page Not Found
          </h2>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-muted)',
              marginBottom: 'var(--space-10)',
              maxWidth: '400px',
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Button to="/" size="lg">
            Back to Home
          </Button>
        </div>
      </section>
    </>
  );
}

export default NotFound;
