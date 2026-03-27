import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          Jet!Set!Go!
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/features" className={({ isActive }) => isActive ? styles.active : ''}>
            Features
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? styles.active : ''}>
            Pricing
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? styles.active : ''}>
            Blog
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
            About
          </NavLink>
        </nav>
        <div className={styles.actions}>
          <a href="https://app.letsjetsetgo.com" className={styles.loginBtn}>Log in</a>
          <a href="https://app.letsjetsetgo.com/signup" className={styles.ctaBtn}>
            Start planning — free
          </a>
        </div>
      </div>
    </header>
  );
}
