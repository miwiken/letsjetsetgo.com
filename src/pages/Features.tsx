import styles from './Features.module.css';

const features = [
  {
    category: 'Plan Together',
    items: [
      {
        title: 'Real-time collaboration',
        description:
          'Multiple people editing the same trip at the same time. See cursors, get presence indicators, never step on each other\'s work.',
      },
      {
        title: 'Unlimited collaborators',
        description:
          'Invite your whole group — 2 people or 20. No limits, no premium tier required. Collaboration is always free.',
      },
      {
        title: 'Presence awareness',
        description:
          'See who\'s online and what they\'re editing. Know when your travel partner is tweaking the Rome day so you can focus on Florence.',
      },
    ],
  },
  {
    category: 'Build Your Itinerary',
    items: [
      {
        title: 'Day-by-day planner',
        description:
          'Organize your trip into days with drag-and-drop reordering. Add activities, restaurants, transit — anything with a time and place.',
      },
      {
        title: 'Interactive maps',
        description:
          'Every place you add appears on the map. See your daily route, discover nearby spots, and optimize your walking path.',
      },
      {
        title: 'Route optimization',
        description:
          'Let Jet!Set!Go! suggest the most efficient order for your daily stops. Less time commuting, more time exploring.',
      },
    ],
  },
  {
    category: 'Smart Tools',
    items: [
      {
        title: 'Budget tracking',
        description:
          'Set a trip budget and track spending by category — lodging, food, transport, activities. See where your money goes.',
      },
      {
        title: 'Email import',
        description:
          'Forward flight, hotel, and booking confirmations. They\'re automatically parsed and added to your itinerary.',
      },
      {
        title: 'Offline support',
        description:
          'Cache trips for access in airplane mode or areas with no signal. Changes sync when you\'re back online.',
      },
      {
        title: 'Maps export',
        description:
          'Export your itinerary as a shareable map view or printable PDF. Perfect for offline reference or sharing with non-members.',
      },
    ],
  },
  {
    category: 'Pro Features',
    items: [
      {
        title: 'AI trip assistant',
        description:
          'Get personalized activity suggestions, schedule optimization, and answers to travel questions based on your itinerary.',
      },
      {
        title: 'Chrome extension',
        description:
          'Browsing a restaurant on Yelp? A hotel on Booking.com? Clip it directly into your trip with one click.',
      },
    ],
  },
];

export function Features() {
  return (
    <div className={styles.page}>
      <div className="container">
        <header className={styles.pageHeader}>
          <h1>Features</h1>
          <p>Everything you need to plan trips — nothing you don't.</p>
        </header>

        {features.map((section) => (
          <section key={section.category} className={styles.section}>
            <h2 className={styles.category}>{section.category}</h2>
            <div className={styles.grid}>
              {section.items.map((feature) => (
                <div key={feature.title} className={styles.card}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
