import Image from "next/image";
import styles from "./page.module.css";

const collections = [
  {
    title: "Modular Layers",
    description: "Architected silhouettes built for the city and beyond.",
    image: "/look-01.jpg",
  },
  {
    title: "Concrete Essentials",
    description: "Neutral foundations in premium textiles with technical trims.",
    image: "/look-02.jpg",
  },
  {
    title: "Night Shift",
    description: "After-hours staples with reflective detailing and sharp lines.",
    image: "/look-03.jpg",
  },
];

const customerCare = [
  {
    title: "Worldwide Delivery",
    description:
      "Express shipping from our European distribution hub with end-to-end tracking.",
  },
  {
    title: "Tailored Fit Support",
    description:
      "Personal styling consultations and detailed size guidance for every drop.",
  },
  {
    title: "Sustainable Promise",
    description:
      "Responsible sourcing, recycled packaging, and carbon offset logistics.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>DOLENGA</div>
        <nav className={styles.nav}>
          <a href="#catalog">Catalog</a>
          <a href="#about">About Brand</a>
          <a href="#customers">For Customers</a>
          <a href="#contacts">Contacts</a>
        </nav>
        <div className={styles.actions}>
          <button aria-label="Search" className={styles.iconButton}>
            <SearchIcon />
          </button>
          <button aria-label="Shopping bag" className={styles.iconButton}>
            <BagIcon />
          </button>
        </div>
      </header>

      <main>
        <section className={styles.hero} id="catalog">
          <div className={styles.heroCopy}>
            <p className={styles.tagline}>Modern Uniforms for Urban Pioneers</p>
            <h1>DOLENGA WEAR</h1>
            <p className={styles.description}>
              A brand of crafted essentials engineered for movement, precision,
              and longevity. Built in limited runs, designed for life between
              architecture and asphalt.
            </p>
            <div className={styles.heroCtas}>
              <a className={styles.primaryCta} href="#catalog-grid">
                Explore Catalog
              </a>
              <a className={styles.secondaryCta} href="#about">
                Discover the House
              </a>
            </div>
            <div className={styles.metrics}>
              <div>
                <span>42</span>
                <p>Limited styles per season</p>
              </div>
              <div>
                <span>24H</span>
                <p>Prime dispatch worldwide</p>
              </div>
              <div>
                <span>93%</span>
                <p>Recycled and organic fabrics</p>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroFrame}>
              <Image
                src="/hero-model.jpg"
                alt="Model wearing a gray DOLENGA WEAR hoodie and sweatpants"
                width={640}
                height={840}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles.collections} id="catalog-grid">
          <header>
            <p className={styles.sectionLabel}>Selected Capsules</p>
            <h2>Catalog Highlights</h2>
            <p className={styles.sectionIntro}>
              Functional streetwear with an elevated minimal language. Each
              piece is engineered to layer seamlessly and transition between
              climates without compromise.
            </p>
          </header>
          <div className={styles.collectionGrid}>
            {collections.map((collection) => (
              <article key={collection.title}>
                <div className={styles.collectionImage}>
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    width={420}
                    height={520}
                  />
                </div>
                <div className={styles.collectionContent}>
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                  <a href="#catalog" className={styles.collectionLink}>
                    View drop
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.story} id="about">
          <div className={styles.storyContent}>
            <p className={styles.sectionLabel}>About Brand</p>
            <h2>Crafted for the rhythm of the city.</h2>
            <p>
              DOLENGA WEAR operates at the intersection of premium tailoring and
              technical utility. Each capsule is developed with precise pattern
              engineering, eco-conscious fabrics, and a focus on enduring
              comfort.
            </p>
            <p>
              From concept studios in Berlin and Milan, we synthesize global
              street culture with the refinement of contemporary fashion
              houses—resulting in collections that are distinctly calm, confident,
              and urban.
            </p>
          </div>
          <div className={styles.storyStats}>
            <div>
              <span>2018</span>
              <p>Year founded with a vision for modern street luxury.</p>
            </div>
            <div>
              <span>12</span>
              <p>Specialist ateliers crafting each garment.</p>
            </div>
            <div>
              <span>08</span>
              <p>Global stockists curating our signature lines.</p>
            </div>
          </div>
        </section>

        <section className={styles.customers} id="customers">
          <div className={styles.customersHeader}>
            <p className={styles.sectionLabel}>For Customers</p>
            <h2>Premium aftercare for the modern wardrobe.</h2>
          </div>
          <div className={styles.customerGrid}>
            {customerCare.map((item) => (
              <div key={item.title} className={styles.customerCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.contacts} id="contacts">
          <div>
            <p className={styles.sectionLabel}>Contacts</p>
            <h2>Join the movement.</h2>
            <p>
              Connect with the studio, request wholesale access, or arrange a
              private viewing in one of our partner showrooms.
            </p>
          </div>
          <div className={styles.contactDetails}>
            <div>
              <h3>Showroom</h3>
              <p>32 Lindenstraße, Berlin</p>
              <p>Mon — Sat · 10:00 to 18:00</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>
                <a href="mailto:studio@dolenga-wear.com">
                  studio@dolenga-wear.com
                </a>
              </p>
              <p>+49 30 1234 5678</p>
            </div>
            <div>
              <h3>Social</h3>
              <p>
                <a href="https://www.instagram.com">Instagram</a> ·{" "}
                <a href="https://www.tiktok.com">TikTok</a> ·{" "}
                <a href="https://www.pinterest.com">Pinterest</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} DOLENGA WEAR. All rights reserved.</span>
        <div>
          <a href="#catalog">Catalog</a>
          <a href="#about">About</a>
          <a href="#customers">Support</a>
          <a href="#contacts">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      role="presentation"
      className={styles.icon}
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
      <line
        x1="15.5"
        y1="15.5"
        x2="21"
        y2="21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      role="presentation"
      className={styles.icon}
    >
      <path
        d="M6.5 8h11l1.5 12H5L6.5 8z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d="M9 8a3 3 0 0 1 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
