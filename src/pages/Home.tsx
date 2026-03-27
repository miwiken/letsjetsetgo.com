import styles from './Home.module.css';

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.headline}>
            Plan trips together.<br />
            <span className={styles.accent}>For free. Forever.</span>
          </h1>
          <p className={styles.subheadline}>
            Jet!Set!Go! is the collaborative trip planner where everyone can edit in real-time.
            No paywalls on sharing. No limits on collaborators. Just plan.
          </p>
          <div className={styles.heroCta}>
            <a href="https://app.letsjetsetgo.com/signup" className={styles.primaryBtn}>
              Start planning — it's free
            </a>
            <a href="#features" className={styles.secondaryBtn}>
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Social proof placeholder */}
      <section className={styles.proof}>
        <div className="container">
          <p className={styles.proofText}>
            Join travelers who plan smarter, together.
          </p>
        </div>
      </section>

      {/* Features overview */}
      <section id="features" className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Everything you need to plan the perfect trip</h2>
          <div className={styles.featureGrid}>
            <FeatureCard
              title="Real-time collaboration"
              description="See everyone's cursor. Edit together. No more 'who changed what?' in the group chat."
            />
            <FeatureCard
              title="Interactive maps"
              description="Search places, pin them to your itinerary, and see your entire trip on the map."
            />
            <FeatureCard
              title="Day-by-day itinerary"
              description="Drag-and-drop your days into shape. Split-view with map so you can see routes at a glance."
            />
            <FeatureCard
              title="Budget tracking"
              description="Set a trip budget, log expenses by category, and see how you're doing in real-time."
            />
            <FeatureCard
              title="Email import"
              description="Forward booking confirmations and they're automatically parsed into your itinerary."
            />
            <FeatureCard
              title="Works offline"
              description="Cache your trips for flights and remote areas. Sync when you're back online."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to plan your next adventure?</h2>
          <p className={styles.ctaSubtitle}>
            Free forever. No credit card required. Start in seconds.
          </p>
          <a href="https://app.letsjetsetgo.com/signup" className={styles.primaryBtn}>
            Get started
          </a>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
