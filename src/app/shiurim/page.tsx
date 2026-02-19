import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shiurim & Recordings | Hakhel",
  description:
    "Access 300+ Torah shiurim and recordings from Hakhel events on Torah Anytime. Featuring prominent speakers on halacha, mussar, parasha, tefillah, and more.",
  keywords: [
    "Torah shiurim",
    "Torah lectures",
    "Hakhel recordings",
    "Torah Anytime",
    "Yarchei Kallah recordings",
    "Jewish lectures",
  ],
};

const featuredSpeakers = [
  { name: "R' Dovid Goldwasser", topic: "Inspiration & Mussar" },
  { name: "R' Mordechai Finkelman", topic: "Hashkafah & Parasha" },
  { name: "R' Zev Smith", topic: "Halacha & Daily Living" },
  { name: "R' Doniel Osher Kleinman", topic: "Torah Study" },
  { name: "R' Yosef Eisen", topic: "Practical Halacha" },
  { name: "R' Daniel Glatstein", topic: "In-Depth Parasha" },
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
      {/* Hero */}
      <section className="py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Shiurim & Recordings
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto mb-8">
          Over 300 Torah lectures from Hakhel events and programs, featuring
          prominent rabbanim and scholars. All available free on Torah Anytime.
        </p>
        <a
          href="https://torahanytime.com/organizations/41"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          Browse All Shiurim on Torah Anytime
        </a>
      </section>

      {/* Stats */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div className="bg-bg-soft rounded-2xl p-6 border border-gray-100">
            <p className="text-3xl font-bold text-primary">300+</p>
            <p className="text-sm text-text-muted mt-1">Recorded Shiurim</p>
          </div>
          <div className="bg-bg-soft rounded-2xl p-6 border border-gray-100">
            <p className="text-3xl font-bold text-primary">60+</p>
            <p className="text-sm text-text-muted mt-1">Contributing Speakers</p>
          </div>
          <div className="bg-bg-soft rounded-2xl p-6 border border-gray-100">
            <p className="text-3xl font-bold text-primary">12+</p>
            <p className="text-sm text-text-muted mt-1">Torah Topics</p>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Featured Speakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSpeakers.map((speaker) => (
              <div
                key={speaker.name}
                className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                <p className="font-semibold text-sm">{speaker.name}</p>
                <p className="text-xs text-text-muted mt-0.5">{speaker.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">Topics Covered</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full text-sm bg-bg-soft border border-gray-100 text-text-muted"
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
          <div className="bg-bg-soft rounded-2xl p-8 border border-gray-100 text-center">
            <h2 className="text-xl font-bold mb-3">Yarchei Kallah Recordings</h2>
            <p className="text-text-muted mb-6 max-w-xl mx-auto">
              Many of our Yarchei Kallah programs — intensive Torah study events held
              on federal holidays — have been recorded and are available for listening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://torahanytime.com/organizations/41"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Listen on Torah Anytime
              </a>
              <Link
                href="/programs"
                className="inline-block bg-bg-pure text-text-main px-6 py-2.5 rounded-xl text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
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
