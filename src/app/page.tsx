import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";

const stats = [
  { label: "Daily Email Subscribers", value: "15,000+", icon: "envelope" },
  { label: "Downloadable Resources", value: "60+", icon: "download" },
  { label: "Recorded Shiurim", value: "300+", icon: "mic" },
  { label: "Gemach Listings", value: "700+", icon: "heart" },
];

const explore = [
  {
    title: "Torah Resources",
    desc: "Learning schedules, tefillah aids, brachos charts, halacha guides — all free PDFs ready to download and print.",
    href: "/resources",
    count: "60+ resources",
    icon: "book",
    accent: "card-accent-blue",
  },
  {
    title: "Daily Email Archives",
    desc: "15+ years of curated Torah insights organized by month and year. Browse the full archive or subscribe.",
    href: "/daily-emails",
    count: "2005–2020",
    icon: "envelope",
    accent: "card-accent-gold",
  },
  {
    title: "Shiurim & Recordings",
    desc: "Hundreds of Torah lectures from Hakhel events featuring prominent rabbanim, available on Torah Anytime.",
    href: "/shiurim",
    count: "300+ shiurim",
    icon: "mic",
    accent: "card-accent-purple",
  },
  {
    title: "Gemach Directory",
    desc: "Searchable directory of chesed resources across Brooklyn, Lakewood, Monsey, Five Towns, and beyond.",
    href: "/gemach",
    count: "700+ listings",
    icon: "heart",
    accent: "card-accent-green",
  },
  {
    title: "Community Programs",
    desc: "Yarchei Kallah, Community Bulletin, Tefillin Project, V'Ani Tefilah Foundation, and more.",
    href: "/programs",
    count: "6 programs",
    icon: "users",
    accent: "card-accent-left",
  },
  {
    title: "About Hakhel",
    desc: "A volunteer organization since 1755, gathering the community together for Torah study and chesed.",
    href: "/about",
    count: "Est. 1755",
    icon: "info",
    accent: "card-accent-blue",
  },
];

const initiatives = [
  {
    title: "Yarchei Kallah",
    desc: "Free public shiurim on federal holidays featuring prominent Torah scholars.",
    href: "/programs",
    icon: "calendar",
  },
  {
    title: "Daily Email Bulletins",
    desc: "Torah insights delivered every morning since 2005 to thousands worldwide.",
    href: "/daily-emails",
    icon: "envelope",
  },
  {
    title: "Gemach Directory",
    desc: "700+ chesed resources across the tri-state area, searchable by category and location.",
    href: "/gemach",
    icon: "heart",
  },
  {
    title: "Torah Anytime Shiurim",
    desc: "300+ recorded lectures from Hakhel events with 60+ contributing speakers.",
    href: "/shiurim",
    icon: "headphones",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bg-warm py-20 md:py-28 px-6">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-torah.jpg"
            alt=""
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-warm/80 via-bg-warm/90 to-bg-warm" />
        </div>

        <div className="max-w-4xl mx-auto relative text-center">
          <p className="font-[family-name:var(--font-heading)] text-accent-dark text-lg font-bold mb-3 tracking-wide">
            HAKHEL
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-text-main">
            Gathering Together for Torah & Wisdom
          </h1>
          <p className="text-lg text-text-muted mb-10 leading-relaxed max-w-2xl mx-auto">
            A comprehensive hub of Torah resources, daily inspiration, community
            services, and recorded shiurim — serving the global Jewish community
            since 1755.
          </p>

          {/* Quick Nav Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { icon: "envelope", label: "Daily Torah", href: "/daily-emails" },
              { icon: "book", label: "60+ Resources", href: "/resources" },
              { icon: "mic", label: "300+ Shiurim", href: "/shiurim" },
              { icon: "heart", label: "700+ Gemachs", href: "/gemach" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-bg-pure/70 backdrop-blur-sm border border-accent/20 hover:border-accent/40 hover:shadow-warm transition-all group"
              >
                <span className="text-accent group-hover:text-accent-dark transition-colors">
                  <Icon name={item.icon} size={22} />
                </span>
                <span className="text-xs font-semibold text-text-main">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/daily-emails"
              className="bg-accent text-white px-7 py-3 rounded-xl font-medium hover:bg-accent-dark transition-colors shadow-warm"
            >
              Subscribe to Daily Emails
            </Link>
            <Link
              href="/resources"
              className="bg-bg-pure text-text-main px-7 py-3 rounded-xl font-medium border border-gray-200 hover:border-accent/40 hover:shadow-warm transition-all"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-14 px-6 bg-primary-dark">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-accent mb-2">
                <Icon name={stat.icon} size={24} />
              </span>
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Find */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-center mb-1">
            What You&apos;ll Find Here
          </h2>
          <p className="text-text-muted text-center mb-4 max-w-2xl mx-auto">
            Decades of Torah wisdom organized and accessible. Every resource is
            free to use, download, and share.
          </p>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {explore.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`bg-bg-pure rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-warm-lg transition-all group ${item.accent}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="p-2 rounded-lg bg-accent-bg text-accent shrink-0">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <span className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-accent-bg text-accent-dark">
                        {item.count}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-text-muted leading-relaxed pl-[44px]">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image + Daily Email Section */}
      <section className="py-16 px-6 bg-accent-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/books-study.jpg"
                alt="Torah study"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-accent-dark font-semibold text-sm uppercase tracking-wider mb-2">
                Flagship Program
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
                Daily Torah Inspiration
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Every morning since 2005, Hakhel has delivered curated Torah
                insights to over 15,000 subscribers worldwide. From halacha to
                hashkafa, mussar to minhagim — daily wisdom that enriches lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://lp.constantcontactpages.com/su/opBjZAX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-6 py-2.5 rounded-xl font-medium hover:bg-accent-dark transition-colors text-center"
                >
                  Subscribe Free
                </a>
                <Link
                  href="/daily-emails"
                  className="bg-bg-pure text-text-main px-6 py-2.5 rounded-xl font-medium border border-gray-200 hover:border-accent/40 transition-colors text-center"
                >
                  Browse Archives
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Initiatives */}
      <section className="py-16 px-6 bg-bg-soft">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-center mb-1">
            Core Initiatives
          </h2>
          <p className="text-text-muted text-center mb-4 max-w-2xl mx-auto">
            Programs that bring Torah learning into the rhythm of daily life.
          </p>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-bg-pure rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-warm-lg transition-all card-accent-left"
              >
                <span className="inline-block p-2 rounded-lg bg-accent-bg text-accent mb-3">
                  <Icon name={item.icon} size={20} />
                </span>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-16 px-6 bg-primary-dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-white leading-relaxed italic mb-6">
            &ldquo;Hakhel es ha&apos;am — Gather the people: the men, the women,
            and the children&rdquo;
          </p>
          <p className="text-accent text-sm font-medium">
            Devarim 31:12
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-accent mb-3 inline-block">
            <Icon name="envelope" size={32} />
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-3">
            Join 15,000+ Readers
          </h2>
          <p className="text-text-muted mb-8">
            Morning Torah inspiration delivered to your inbox. Daily since 2005.
          </p>
          <a
            href="https://lp.constantcontactpages.com/su/opBjZAX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-white px-8 py-3 rounded-xl font-medium hover:bg-accent-dark transition-colors shadow-warm"
          >
            Get Daily Emails
          </a>
        </div>
      </section>
    </main>
  );
}
