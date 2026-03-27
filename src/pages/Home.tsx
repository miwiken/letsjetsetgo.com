import { useEffect } from 'react';
import styles from './Home.module.css';

export function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add(styles.visible), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(`.${styles.fadeIn}`).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span>🌍</span> Group travel planning, reimagined
          </div>
          <h1 className={styles.heroTitle}>
            Plan trips together without unfriending each other.
          </h1>
          <p className={styles.heroSub}>
            JET SET GO is your group travel planner that turns "so… are we actually doing this?"
            into boarding passes, belly laughs, and post-trip highs. Plan with your crew or design
            for clients; either way, we make it (ridiculously) easy.
          </p>
          <div className={styles.heroCtas}>
            <a href="#travelers" className="btn btn-coral btn-large">I'm a Traveler</a>
            <a href="#designers" className="btn btn-teal btn-large">I'm a Travel Designer</a>
          </div>
        </div>
        <div className={styles.scrollHint}>
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </section>

      {/* For Travelers */}
      <section className={styles.travelers} id="travelers">
        <div className="container">
          <div className={`${styles.sectionLabel} ${styles.labelCoral} ${styles.fadeIn}`}>
            FOR TRAVELERS
          </div>
          <h2 className={`section-header ${styles.fadeIn}`}>
            Finally, a group chat that gets things done.
          </h2>
          <p className={`section-sub ${styles.fadeIn}`}>
            We got tired of hearing (and saying!) "we should totally go somewhere."
          </p>
          <div className={`${styles.storyBlock} ${styles.fadeIn}`}>
            You know it well. Someone says, "we should totally go somewhere." Then 47 screenshots
            fly. Three people go silent. One person suggests Bali again. Nothing happens for six
            months.
            <br /><br />
            JET SET GO brings people together to turn the chaos and endless feedback loops into an
            actual plan. Like, with maps. And a day-to-day what's-next. And zero timid "just
            following up!" texts.
          </div>
          <div className={styles.featuresGrid}>
            <FeatureCard
              className={styles.fadeIn}
              title="Drag it. Drop it. Book it."
              description="Our drag-and-drop itinerary builder is so satisfying, you'll plan trips you have no business taking. Beach resort Tuesday? Mountain lodge Wednesday? We listen and we don't judge. Then, we organize."
            />
            <FeatureCard
              className={styles.fadeIn}
              title="Split bills, keep friendships."
              description='Track your group trip budget, split expenses, and settle up before anyone starts "keeping a mental tab."'
            />
            <FeatureCard
              className={styles.fadeIn}
              title="Collaborate and customize."
              description="Everyone adds their preferences and top picks: niche museums, wine and tapas at a local bar, an easy-to-moderate hike for expansive views. The details live in one shared travel itinerary, beautifully organized and updated in real time."
            />
            <FeatureCard
              className={styles.fadeIn}
              title="No Wi-Fi? No problem."
              description="Download your itinerary and access it offline. (Because, you know, the best adventures are where the signal isn't.)"
            />
          </div>
        </div>
      </section>

      {/* For Travel Designers */}
      <section className={styles.designers} id="designers">
        <div className="container">
          <div className={`${styles.sectionLabel} ${styles.labelTeal} ${styles.fadeIn}`}>
            FOR TRAVEL DESIGNERS
          </div>
          <h2 className={`section-header ${styles.designersHeader} ${styles.fadeIn}`}>
            Your itineraries should be as jaw-dropping as the destinations.
          </h2>
          <p className={`section-sub ${styles.designersSub} ${styles.fadeIn}`}>
            You didn't become a travel designer to send PDFs named
            "Final_Rome_Itinerary_v4_REAL_usethisone.pdf."
          </p>
          <div className={`${styles.storyBlock} ${styles.designersStory} ${styles.fadeIn}`}>
            JET SET GO gives travel advisors a client-facing itinerary builder that makes your
            work look as premium as the trips you plan. You'll have the space and tools to adjust
            the details based on preferences, feedback, and timing.
          </div>
          <div className={styles.featuresGrid}>
            <FeatureCard
              className={`${styles.fadeIn} ${styles.designerCard}`}
              title="Brand it like you mean it."
              description="White-label everything: your logo, colors, vibe. Every client touchpoint looks and feels like you."
            />
            <FeatureCard
              className={`${styles.fadeIn} ${styles.designerCard}`}
              title="Groups? We eat groups for breakfast."
              description="Crafting a group adventure for four friends turning 40? Managing a 130-person incentive trip with five suppliers? Our group travel management tools keep every flight, transfer, and dinner resi in one unflinching dashboard."
            />
            <FeatureCard
              className={`${styles.fadeIn} ${styles.designerCard}`}
              title="Client portal that wows."
              description='Give your travelers a dedicated space to view their trip, access docs, and get hyped. No app download, no "can you resend that link?"'
            />
            <FeatureCard
              className={`${styles.fadeIn} ${styles.designerCard}`}
              title="Jet fuel for your workflow."
              description="Solo advisor? Boutique agency? Full-blown DMC? JET SET GO flexes harder than your clients' vacation selfies."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className="container">
          <div className={`${styles.sectionLabel} ${styles.labelLavender} ${styles.fadeIn}`}>
            HOW IT WORKS
          </div>
          <h2 className={`section-header ${styles.fadeIn}`}>1-2-3, then ✈️</h2>
          <div className={styles.steps}>
            <div className={`${styles.step} ${styles.fadeIn}`}>
              <div className={`${styles.stepNumber} ${styles.stepCoral}`}>1</div>
              <div>
                <h3>Drop a pin on your next adventure.</h3>
                <p>Pick your destination, set your dates, and invite your crew (or your clients).</p>
              </div>
            </div>
            <div className={`${styles.step} ${styles.fadeIn}`}>
              <div className={`${styles.stepNumber} ${styles.stepTeal}`}>2</div>
              <div>
                <h3>Build the dream.</h3>
                <p>
                  Add flight options, hotels, activities, that one restaurant your friend saw online.
                  Choose the winners, then drag and drop to structure your days just like you like 'em.
                </p>
              </div>
            </div>
            <div className={`${styles.step} ${styles.fadeIn}`}>
              <div className={`${styles.stepNumber} ${styles.stepGold}`}>3</div>
              <div>
                <h3>Jet. Set. GO.</h3>
                <div className={styles.stepBreakdown}>
                  <div className={styles.breakdownItem}>
                    <span className={styles.breakdownLabel}>JET:</span>
                    <span className={styles.breakdownText}>
                      Finalize your own flights (that's where we draw the line, people).
                    </span>
                  </div>
                  <div className={styles.breakdownItem}>
                    <span className={styles.breakdownLabel}>SET:</span>
                    <span className={styles.breakdownText}>
                      Click READY to toggle on your automatic bookings, scheduling, and itinerary gen.
                    </span>
                  </div>
                  <div className={styles.breakdownItem}>
                    <span className={styles.breakdownLabel}>GO:</span>
                    <span className={styles.breakdownText}>
                      Load, access, and share your itinerary across any device, land mass, or ocean.
                      Then? Show up and actually experience the trip.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className={styles.socialProof}>
        <div className="container">
          <div className={`${styles.sectionLabel} ${styles.labelGold} ${styles.fadeIn}`}>
            SOCIAL PROOF
          </div>
          <h2 className={`section-header ${styles.fadeIn}`}>People like us. Like, a lot.</h2>
          <div className={styles.testimonials}>
            <Testimonial
              className={styles.fadeIn}
              quote="We planned a 12-person trip to Portugal and nobody fought. That alone is worth five stars."
              author="Placeholder Name"
              role="Group Traveler"
            />
            <Testimonial
              className={styles.fadeIn}
              quote="My clients used to get PDFs. Now they get a branded portal that makes me look like I have a team of 20. I do not."
              author="Placeholder Name"
              role="Travel Advisor"
            />
            <Testimonial
              className={styles.fadeIn}
              quote="I switched from three different tools to JET SET GO and got my evenings back. My spouse says thank you."
              author="Placeholder Name"
              role="Agency Owner"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2 className={`section-header ${styles.finalCtaHeader} ${styles.fadeIn}`}>
            Ready? JET SET GO. 🛫
          </h2>
          <p className={`section-sub ${styles.finalCtaSub} ${styles.fadeIn}`}>
            We're about to make every other travel planning tool feel like a fax machine.
          </p>
          <div className={`${styles.heroCtas} ${styles.fadeIn}`}>
            <div className={styles.ctaGroup}>
              <a href="#" className="btn btn-coral btn-large">Start Planning for Free</a>
              <span className={styles.ctaSubtext}>Your Group Chat Will Thank You</span>
            </div>
            <div className={styles.ctaGroup}>
              <a href="#" className="btn btn-teal btn-large">See the Travel Designer Plan</a>
              <span className={styles.ctaSubtext}>Your Clients Will Thank You</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`${styles.featureCard} ${className || ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Testimonial({
  quote,
  author,
  role,
  className,
}: {
  quote: string;
  author: string;
  role: string;
  className?: string;
}) {
  return (
    <div className={`${styles.testimonial} ${className || ''}`}>
      <div className={styles.testimonialStars}>★★★★★</div>
      <p>"{quote}"</p>
      <div className={styles.testimonialAuthor}>{author}</div>
      <div className={styles.testimonialRole}>{role}</div>
    </div>
  );
}
