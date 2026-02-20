import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Programs | Hakhel",
  description: "Hakhel's programs: Yarchei Kallah, Community Bulletin, Tefillin Project, V'Ani Tefilah Foundation, and more.",
};

const programs = [
  {
    title: "Yarchei Kallah",
    description:
      "Free public shiurim held on federal holidays, bringing together scholars and laymen for intensive Torah study. Recordings of past programs are available.",
    details: [
      "Held on major federal holidays throughout the year",
      "Features prominent Torah scholars and community leaders",
      "Free and open to the public",
      "Past recordings available on the Hakhel tape list",
    ],
    icon: "calendar",
    accent: "card-accent-blue",
  },
  {
    title: "Community Awareness Bulletin",
    description:
      "Published to alert the public regarding timely issues which raise serious shailos, so that community members can consult their rabbis. Each issue receives personal review by leading poskim.",
    details: [
      "Covers timely halachic issues and seasonal topics",
      "Reviewed by HaRav Yisroel Belsky zt\"l",
      "Archive of bulletins available from 5761-5765",
      "Special editions for Pesach, Succos, and Eruv Tavshilin",
    ],
    link: { href: "/resources", label: "Browse Bulletin Archives" },
    icon: "clipboard",
    accent: "card-accent-gold",
  },
  {
    title: "Daily Email Bulletins",
    description:
      "Since 2005, Hakhel has sent daily Torah insights to thousands of subscribers worldwide. The archive contains 15 years of curated wisdom on topics ranging from halacha to hashkafa.",
    details: [
      "Over 15,000 daily subscribers",
      "Archives spanning 2005-2020",
      "Special series: 48 Ways, Tefillah, Brochos, and more",
      "Subscribe via Constant Contact",
    ],
    link: { href: "/daily-emails", label: "Browse Email Archives" },
    icon: "envelope",
    accent: "card-accent-gold",
  },
  {
    title: "Tefillin Awareness Project",
    description:
      "A Sunday community outreach initiative dedicated to ensuring the sanctity and accuracy of tefillin throughout the community.",
    details: [
      "Professional tefillin examination and awareness",
      "Educational materials and posters available",
      "Sunday community outreach programs",
    ],
    icon: "star",
    accent: "card-accent-purple",
  },
  {
    title: "V'Ani Tefilah Foundation",
    description:
      "Dedicated to enhancing focus and inspiration within daily tefillah. The foundation provides materials, shiurim, and resources to deepen one's connection through prayer.",
    details: [
      "Praying With Fire excerpts and study materials",
      "Kavannah Initiative documents and guides",
      "Audio shiurim on tefillah topics",
      "Video and audio resources from various rabbanim",
    ],
    link: { href: "/resources", label: "Browse Tefillah Resources" },
    icon: "mic",
    accent: "card-accent-blue",
  },
  {
    title: "Shatnez Newsletter",
    description:
      "Periodic publication raising awareness about shatnez (prohibited fabric mixtures) and related halachos.",
    details: [
      "Educational articles on shatnez identification",
      "Practical guidance for consumers",
      "Newsletter archive available",
    ],
    icon: "fileText",
    accent: "card-accent-green",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <PageHeader
        title="Our Programs"
        subtitle="Bringing Torah learning and community together since 1755."
        icon="calendar"
        breadcrumb="Programs"
        tintClass="bg-section-programs"
      />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`bg-bg-pure rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm ${program.accent}`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="p-2 rounded-lg bg-accent-bg text-accent shrink-0">
                    <Icon name={program.icon} size={20} />
                  </span>
                  <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                    {program.title}
                  </h2>
                </div>
                <p className="text-text-muted leading-relaxed mb-4">
                  {program.description}
                </p>
                <ul className="list-disc list-inside text-sm text-text-muted space-y-1 mb-4">
                  {program.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                {program.link && (
                  <Link
                    href={program.link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    {program.link.label}
                    <Icon name="chevronRight" size={14} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
