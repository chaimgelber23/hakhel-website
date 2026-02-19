import Link from "next/link";

const stats = [
  { label: "Daily Email Subscribers", value: "15,000+" },
  { label: "Downloadable Resources", value: "60+" },
  { label: "Recorded Shiurim", value: "300+" },
  { label: "Gemach Listings", value: "700+" },
];

const explore = [
  {
    title: "Torah Resources",
    desc: "Learning schedules, tefillah aids, brachos charts, halacha guides — all free PDFs ready to download and print.",
    href: "/resources",
    count: "60+ resources",
  },
  {
    title: "Daily Email Archives",
    desc: "15+ years of curated Torah insights organized by month and year. Browse the full archive or subscribe.",
    href: "/daily-emails",
    count: "2005–2020",
  },
  {
    title: "Shiurim & Recordings",
    desc: "Hundreds of Torah lectures from Hakhel events featuring prominent rabbanim, available on Torah Anytime.",
    href: "/shiurim",
    count: "300+ shiurim",
  },
  {
    title: "Gemach Directory",
    desc: "Searchable directory of chesed resources across Brooklyn, Lakewood, Monsey, Five Towns, and beyond.",
    href: "/gemach",
    count: "700+ listings",
  },
  {
    title: "Community Programs",
    desc: "Yarchei Kallah, Community Bulletin, Tefillin Project, V'Ani Tefilah Foundation, and more.",
    href: "/programs",
    count: "6 programs",
  },
  {
    title: "About Hakhel",
    desc: "A volunteer organization since 1755, gathering the community together for Torah study and chesed.",
    href: "/about",
    count: "Est. 1755",
  },
];

const initiatives = [
  {
    title: "Yarchei Kallah",
    desc: "Free public shiurim on federal holidays featuring prominent Torah scholars.",
    href: "/programs",
  },
  {
    title: "Daily Email Bulletins",
    desc: "Torah insights delivered every morning since 2005 to thousands worldwide.",
    href: "/daily-emails",
  },
  {
    title: "Gemach Directory",
    desc: "700+ chesed resources across the tri-state area, searchable by category and location.",
    href: "/gemach",
  },
  {
    title: "Torah Anytime Shiurim",
    desc: "300+ recorded lectures from Hakhel events with 60+ contributing speakers.",
    href: "/shiurim",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Gathering Together for Torah & Wisdom
          </h1>
          <p className="text-lg text-text-muted mb-8 leading-relaxed">
            A comprehensive hub of Torah resources, daily inspiration, community
            services, and recorded shiurim — serving the global Jewish community
            since 1755.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/daily-emails"
              className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe to Daily Emails
            </Link>
            <Link
              href="/resources"
              className="bg-bg-soft text-text-main px-6 py-3 rounded-xl font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-12 px-6 bg-bg-soft">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Find */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            What You&apos;ll Find Here
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Decades of Torah wisdom organized and accessible. Every resource is
            free to use, download, and share.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {explore.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-bg-pure rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {item.count}
                  </span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Initiatives */}
      <section className="py-16 px-6 bg-bg-soft">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">
            Core Initiatives
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Programs that bring Torah learning into the rhythm of daily life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-bg-pure rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Join 15,000+ Readers</h2>
          <p className="text-text-muted mb-6">
            Morning Torah inspiration delivered to your inbox. Daily since 2005.
          </p>
          <a
            href="https://lp.constantcontactpages.com/su/opBjZAX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Get Daily Emails
          </a>
        </div>
      </section>
    </main>
  );
}
