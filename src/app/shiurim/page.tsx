import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "323 Torah Shiurim & Recordings — Hakhel on Torah Anytime",
  description:
    "Access 323 free Torah shiurim and recordings from Hakhel events on Torah Anytime. Featuring 59 speakers including R' Dovid Goldwasser, R' Yisroel Reisman, R' Daniel Glatstein, and R' Asher Weiss on halacha, kashrus, tefillah, Shabbos, and Yomim Tovim.",
  keywords: [
    "Torah shiurim",
    "Torah lectures",
    "Hakhel recordings",
    "Torah Anytime",
    "Yarchei Kallah recordings",
    "Jewish lectures",
    "free Torah classes",
    "R' Dovid Goldwasser",
    "R' Yisroel Reisman",
    "R' Daniel Glatstein",
    "R' Asher Weiss",
    "halacha shiur",
    "kashrus shiur",
  ],
  openGraph: {
    title: "323 Torah Shiurim & Recordings — Hakhel on Torah Anytime",
    description:
      "Free Torah shiurim from 59 speakers. Halacha, kashrus, Shabbos, tefillah, and more from Hakhel events.",
  },
};

const HAKHEL_PAGE = "https://torahanytime.com/organizations/41";

const featuredSpeakers = [
  { name: "R' Dovid Goldwasser", topic: "Inspiration & Mussar", id: 34 },
  { name: "R' Yisroel Reisman", topic: "Halacha & Hashkafa", id: 327 },
  { name: "R' Daniel Glatstein", topic: "In-Depth Parasha", id: 105 },
  { name: "R' Asher Weiss", topic: "Halacha & Lomdus", id: 860 },
  { name: "R' Noach Isaac Oelbaum", topic: "Hashkafa & Parasha", id: 59 },
  { name: "R' Eytan Feiner", topic: "Inspiration & Growth", id: 46 },
  { name: "R' Zev Smith", topic: "Halacha & Daily Living", id: 164 },
  { name: "R' Mordechai Finkelman", topic: "Hashkafa & Mussar", id: 91 },
  { name: "R' Fischel Schachter", topic: "Inspiration", id: 115 },
  { name: "R' Avraham Schorr", topic: "Mussar & Avodah", id: 156 },
  { name: "R' Doniel Osher Kleinman", topic: "Practical Halacha", id: 645 },
  { name: "R' Yosef Eisen", topic: "Practical Halacha", id: 605 },
];

const speakerColors = [
  "bg-primary/10 text-primary",
  "bg-accent-bg text-accent-dark",
  "bg-green-50 text-green-700",
  "bg-purple-50 text-purple-700",
  "bg-amber-50 text-amber-700",
  "bg-orange-50 text-orange-700",
];

const topics = [
  "Halacha & Jewish Law",
  "Kashrus",
  "Shabbos",
  "Tefillah & Prayer",
  "Yomim Tovim & Holidays",
  "Marriage & Family",
  "Emunah & Hashkafa",
  "Elul & Teshuvah",
  "Mussar & Self-Improvement",
  "Parasha & Chumash",
];

const topicColors = [
  "bg-primary/10 text-primary border-primary/20",
  "bg-accent-bg text-accent-dark border-accent/20",
  "bg-green-50 text-green-700 border-green-200",
  "bg-purple-50 text-purple-700 border-purple-200",
  "bg-amber-50 text-amber-700 border-amber-200",
  "bg-red-50 text-red-600 border-red-200",
];

function getInitials(name: string) {
  const parts = name.replace(/^R'\s*/, "").split(" ");
  if (parts.length >= 2) return parts[0][0] + parts[parts.length - 1][0];
  return parts[0].slice(0, 2).toUpperCase();
}

export default function ShiurimPage() {
  return (
    <main>
      <PageHeader
        title="Shiurim & Recordings"
        subtitle="323 Torah lectures from Hakhel events and programs, featuring 59 prominent rabbanim and scholars. All available free on Torah Anytime."
        breadcrumb="Shiurim"
        tintClass="bg-section-shiurim"
      >
        <a
          href={HAKHEL_PAGE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:bg-primary-dark transition-colors"
        >
          Browse All on Torah Anytime
        </a>
      </PageHeader>

      {/* Stats */}
      <section className="px-6 py-12 bg-primary-dark">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: "323", label: "Recorded Shiurim" },
            { value: "59", label: "Contributing Speakers" },
            { value: "10+", label: "Torah Topics" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Featured Speakers</h2>
          <p className="text-sm text-text-muted mb-1">Some of the rabbanim who have spoken at Hakhel events. Click to view their shiurim.</p>
          <div className="w-10 h-0.5 bg-accent mb-6 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSpeakers.map((speaker, i) => (
              <a
                key={speaker.name}
                href={`https://torahanytime.com/speakers/${speaker.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-warm-lg transition-all flex items-center gap-3 group"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${speakerColors[i % speakerColors.length]}`}>
                  {getInitials(speaker.name)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{speaker.name}</p>
                  <p className="text-xs text-text-muted">{speaker.topic}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href={HAKHEL_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary font-medium hover:underline"
            >
              View all 59 speakers on Torah Anytime
            </a>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Topics Covered</h2>
          <div className="w-10 h-0.5 bg-accent mb-6 rounded-full" />
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, i) => (
              <span
                key={topic}
                className={`px-4 py-2 rounded-full text-sm border ${topicColors[i % topicColors.length]}`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Yarchei Kallah */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent-bg rounded-2xl p-8 border border-accent/10 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
              Yarchei Kallah Recordings
            </h2>
            <p className="text-text-muted mb-6 max-w-xl mx-auto">
              Many of our Yarchei Kallah programs — intensive Torah study events held
              on federal holidays — have been recorded and are available for listening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={HAKHEL_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-accent-dark transition-colors"
              >
                Listen on Torah Anytime
              </a>
              <Link
                href="/programs"
                className="inline-block bg-bg-pure text-text-main px-6 py-2.5 rounded-xl text-sm font-medium border border-gray-200 hover:border-accent/40 transition-colors"
              >
                Learn About Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-text-muted">
            New shiurim are added regularly.{" "}
            <a
              href={HAKHEL_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Visit our Torah Anytime page
            </a>{" "}
            for the latest recordings.
          </p>
        </div>
      </section>
    </main>
  );
}
