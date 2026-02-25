import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "300+ Torah Shiurim & Recordings — Hakhel on Torah Anytime",
  description:
    "Access 300+ free Torah shiurim and recordings from Hakhel events on Torah Anytime. Featuring R' Dovid Goldwasser, R' Zev Smith, R' Daniel Glatstein, and 60+ speakers on halacha, mussar, parasha, and tefillah.",
  keywords: [
    "Torah shiurim",
    "Torah lectures",
    "Hakhel recordings",
    "Torah Anytime",
    "Yarchei Kallah recordings",
    "Jewish lectures",
    "free Torah classes",
    "R' Dovid Goldwasser",
    "R' Zev Smith",
    "halacha shiur",
    "mussar shiur",
  ],
  openGraph: {
    title: "300+ Torah Shiurim & Recordings — Hakhel on Torah Anytime",
    description:
      "Free Torah shiurim from 60+ speakers. Halacha, mussar, parasha, tefillah, and more from Hakhel events.",
  },
};

const featuredSpeakers = [
  { name: "R' Dovid Goldwasser", topic: "Inspiration & Mussar", initials: "DG" },
  { name: "R' Mordechai Finkelman", topic: "Hashkafah & Parasha", initials: "MF" },
  { name: "R' Zev Smith", topic: "Halacha & Daily Living", initials: "ZS" },
  { name: "R' Doniel Osher Kleinman", topic: "Torah Study", initials: "DK" },
  { name: "R' Yosef Eisen", topic: "Practical Halacha", initials: "YE" },
  { name: "R' Daniel Glatstein", topic: "In-Depth Parasha", initials: "DG" },
];

const speakerColors = [
  "bg-primary/10 text-primary",
  "bg-accent-bg text-accent-dark",
  "bg-green-50 text-green-700",
  "bg-purple-50 text-purple-700",
  "bg-amber-50 text-amber-700",
  "bg-orange-50 text-orange-700",
];

const topicColors = [
  "bg-primary/10 text-primary border-primary/20",
  "bg-accent-bg text-accent-dark border-accent/20",
  "bg-green-50 text-green-700 border-green-200",
  "bg-purple-50 text-purple-700 border-purple-200",
  "bg-amber-50 text-amber-700 border-amber-200",
  "bg-red-50 text-red-600 border-red-200",
];

const topics = [
  "Parasha & Chumash",
  "Halacha & Jewish Law",
  "Mussar & Self-Improvement",
  "Tefillah & Spirituality",
  "Yomim Tovim & Holidays",
  "Shabbos",
  "Kashrus",
  "Marriage & Family",
  "Emunah & Bitachon",
  "Daf Yomi & Gemara",
  "Navi & Tanach",
  "Community & Chesed",
];

export default function ShiurimPage() {
  return (
    <main>
      <PageHeader
        title="Shiurim & Recordings"
        subtitle="Over 300 Torah lectures from Hakhel events and programs, featuring prominent rabbanim and scholars. All available free on Torah Anytime."
        breadcrumb="Shiurim"
        tintClass="bg-section-shiurim"
      >
        <a
          href="https://torahanytime.com/organizations/41"
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
            { value: "300+", label: "Recorded Shiurim" },
            { value: "60+", label: "Contributing Speakers" },
            { value: "12+", label: "Torah Topics" },
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
          <div className="w-10 h-0.5 bg-accent mb-6 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSpeakers.map((speaker, i) => (
              <div
                key={speaker.name}
                className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm flex items-center gap-3"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${speakerColors[i % speakerColors.length]}`}>
                  {speaker.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{speaker.name}</p>
                  <p className="text-xs text-text-muted">{speaker.topic}</p>
                </div>
              </div>
            ))}
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
      <section className="px-6 pb-20">
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
                href="https://torahanytime.com/organizations/41"
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
    </main>
  );
}
