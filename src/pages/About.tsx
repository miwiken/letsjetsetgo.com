import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>About Jet!Set!Go!</h1>
          <p>Trip planning should be collaborative, not complicated.</p>
        </header>

        <section className={styles.story}>
          <h2>The problem</h2>
          <p>
            Every group trip starts the same way: one person opens a Google Doc, pastes in some links,
            and hopes everyone contributes. They don't. The doc gets messy. People text alternatives.
            Someone makes a spreadsheet. By departure day, the "plan" is scattered across five apps
            and nobody knows what's confirmed.
          </p>
          <p>
            Existing tools try to solve this, but they charge for the one thing that actually matters
            — letting everyone plan together. Share a trip? That's a Pro feature. Real-time editing?
            Upgrade. More than 3 collaborators? Pay up.
          </p>

          <h2>Our approach</h2>
          <p>
            Jet!Set!Go! is built on a simple premise: collaboration should be free. Not freemium-free
            where the useful parts are locked. Actually free. Unlimited collaborators, real-time editing,
            presence indicators — all of it, forever, at no cost.
          </p>
          <p>
            We make money from Pro features (AI assistant, advanced exports) and affiliate booking links.
            The collaborative core stays free because that's the whole point.
          </p>
        </section>
      </div>
    </div>
  );
}
