import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About | Hakhel",
  description: "Learn about Hakhel - a non-profit volunteer organization dedicated to Torah education since 1995.",
};

const whatWeDo = [
  { title: "Daily Email Bulletins", desc: "Torah insights delivered every morning since 2005", icon: "envelope", href: "/daily-emails" },
  { title: "Yarchei Kallah", desc: "Free public shiurim on federal holidays", icon: "calendar", href: "/programs" },
  { title: "Gemach Directory", desc: "700+ community chesed resources listed", icon: "heart", href: "/gemach" },
  { title: "Torah Resources", desc: "Hundreds of free guides, schedules, and aids", icon: "book", href: "/resources" },
  { title: "Tefillin Project", desc: "Sunday outreach ensuring tefillin sanctity", icon: "star", href: "/programs" },
  { title: "V'Ani Tefilah", desc: "Resources to enhance focus in tefillah", icon: "mic", href: "/resources" },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Hakhel"
        subtitle="A volunteer Torah organization gathering the community together since 1995."
        icon="info"
        breadcrumb="About"
        tintClass="bg-section-about"
      />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
                Our Story
              </h2>
              <div className="w-10 h-0.5 bg-accent mb-6 rounded-full" />
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  <strong className="text-text-main">Hakhel</strong> is a not-for-profit
                  volunteer organization established in 5755/1995 in Flatbush, Brooklyn.
                  Our mission is to promote Torah study, charitable acts, and proper
                  mitzvah performance throughout the Jewish community.
                </p>
                <p>
                  The name &ldquo;Hakhel&rdquo; — meaning &ldquo;to gather&rdquo; —
                  reflects our core belief that when Jews come together to learn and
                  grow, the impact extends far beyond the moment of gathering into
                  every home and heart.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/library.jpg"
                alt="Library of Torah books"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="bg-accent-bg rounded-2xl p-8 md:p-10 mb-16 border border-accent/10">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-text-muted text-center max-w-2xl mx-auto leading-relaxed">
              Hakhel is dedicated to fostering community education and spiritual
              growth through timeless Torah wisdom. We achieve this through daily
              email bulletins reaching over 15,000 subscribers, comprehensive
              community resources, and free public educational programs.
            </p>
          </div>

          {/* What We Do */}
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-2 text-center">
            What We Do
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-10 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDo.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-bg-pure rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-warm-lg transition-all card-accent-left group"
              >
                <span className="inline-block p-2 rounded-lg bg-accent-bg text-accent mb-3">
                  <Icon name={item.icon} size={18} />
                </span>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-16 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
              Get in Touch
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
              <a href="mailto:information@hakhel.info" className="flex items-center gap-2 text-primary hover:underline">
                <Icon name="envelope" size={16} />
                information@hakhel.info
              </a>
              <a href="tel:+17182535497" className="flex items-center gap-2 text-primary hover:underline">
                <Icon name="phone" size={16} />
                (718) 253-5497
              </a>
              <span className="flex items-center gap-2">
                <Icon name="mapPin" size={16} className="text-accent" />
                Brooklyn, NY 11210
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
