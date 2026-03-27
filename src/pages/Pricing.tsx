import styles from './Pricing.module.css';

export function Pricing() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>Simple, honest pricing</h1>
          <p>Collaboration is free. Always. Pro unlocks power features.</p>
        </header>

        <div className={styles.plans}>
          {/* Free */}
          <div className={styles.plan}>
            <div className={styles.planHeader}>
              <h2>Free</h2>
              <div className={styles.price}>
                <span className={styles.amount}>$0</span>
                <span className={styles.period}>forever</span>
              </div>
            </div>
            <ul className={styles.features}>
              <li>Unlimited trips</li>
              <li>Unlimited collaborators</li>
              <li>Real-time co-editing</li>
              <li>Interactive maps</li>
              <li>Day-by-day itinerary</li>
              <li>Budget tracking</li>
              <li>Email import</li>
              <li>Offline support</li>
              <li>Public profile</li>
            </ul>
            <a href="https://app.letsjetsetgo.com/signup" className={styles.freeBtn}>
              Get started
            </a>
          </div>

          {/* Pro */}
          <div className={`${styles.plan} ${styles.proPlan}`}>
            <div className={styles.planHeader}>
              <h2>Pro</h2>
              <div className={styles.price}>
                <span className={styles.amount}>$8</span>
                <span className={styles.period}>/month</span>
              </div>
            </div>
            <p className={styles.planNote}>Everything in Free, plus:</p>
            <ul className={styles.features}>
              <li>AI trip assistant</li>
              <li>Chrome extension</li>
              <li>Advanced route optimization</li>
              <li>PDF & map exports</li>
              <li>Priority support</li>
            </ul>
            <a href="https://app.letsjetsetgo.com/signup?plan=pro" className={styles.proBtn}>
              Start free trial
            </a>
          </div>
        </div>

        <section className={styles.faq}>
          <h2>Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Is collaboration really free?</h3>
              <p>Yes. Inviting people, real-time editing, presence indicators — all free. No limits on collaborators. We will never paywall collaboration.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I try Pro before paying?</h3>
              <p>Pro comes with a free trial. No credit card required to start.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What happens if I cancel Pro?</h3>
              <p>You keep all your trips and data. You just lose access to Pro features. Nothing gets deleted.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you sell my data?</h3>
              <p>No. We don't run ads or sell user data. Revenue comes from Pro subscriptions and affiliate booking links.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
