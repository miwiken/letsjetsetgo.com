import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span className={styles.logoDots}>
          <span className={`${styles.dot} ${styles.dotWhite}`} />
          <span className={`${styles.dot} ${styles.dotTeal}`} />
          <span className={`${styles.dot} ${styles.dotCoral}`} />
        </span>
        JET SET <span className={styles.logoAccent}>GO</span>
      </div>
      <div className={styles.tagline}>The trip planner that gives you your group chat back.</div>
      <p>&copy; {new Date().getFullYear()} JET SET GO. All rights reserved.</p>
    </footer>
  );
}
