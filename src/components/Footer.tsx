import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Jet!Set!Go!</span>
          <p className={styles.tagline}>Plan trips together. For free. Forever.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <a href="https://app.letsjetsetgo.com">Open App</a>
          </div>
          <div className={styles.column}>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className={styles.column}>
            <h4>Legal</h4>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Jet!Set!Go! All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
