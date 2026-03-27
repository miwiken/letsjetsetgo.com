import styles from './Header.module.css';

export function Header() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logo}>
        <span className={styles.logoDots}>
          <span className={`${styles.dot} ${styles.dotNavy}`} />
          <span className={`${styles.dot} ${styles.dotTeal}`} />
          <span className={`${styles.dot} ${styles.dotCoral}`} />
        </span>
        JET SET <span className={styles.logoAccent}>GO</span>
      </a>
      <div className={styles.ctas}>
        <a href="#travelers" className="btn btn-outline">I'm a Traveler</a>
        <a href="#designers" className="btn btn-coral">I'm a Travel Designer</a>
      </div>
    </nav>
  );
}
