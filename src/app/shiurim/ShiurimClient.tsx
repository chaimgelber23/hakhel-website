"use client";

import { useState } from "react";
import Link from "next/link";

const HAKHEL_PAGE = "https://torahanytime.com/organizations/41";

const featuredSpeakers = [
  { name: "R' Dovid Goldwasser", topic: "Inspiration & Mussar" },
  { name: "R' Yisroel Reisman", topic: "Halacha & Hashkafa" },
  { name: "R' Daniel Glatstein", topic: "In-Depth Parasha" },
  { name: "R' Asher Weiss", topic: "Halacha & Lomdus" },
  { name: "R' Noach Isaac Oelbaum", topic: "Hashkafa & Parasha" },
  { name: "R' Eytan Feiner", topic: "Inspiration & Growth" },
  { name: "R' Zev Smith", topic: "Halacha & Daily Living" },
  { name: "R' Mordechai Finkelman", topic: "Hashkafa & Mussar" },
  { name: "R' Fischel Schachter", topic: "Inspiration" },
  { name: "R' Avraham Schorr", topic: "Mussar & Avodah" },
  { name: "R' Doniel Osher Kleinman", topic: "Practical Halacha" },
  { name: "R' Yosef Eisen", topic: "Practical Halacha" },
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

function searchHakhel(query: string) {
  const encoded = encodeURIComponent(`hakhel ${query} site:torahanytime.com`);
  window.open(`https://www.google.com/search?q=${encoded}`, "_blank");
}

export default function ShiurimClient() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      searchHakhel(search.trim());
    }
  };

  return (
    <>
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

      {/* Search */}
      <section className="px-6 pt-10 pb-2">
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Search for a speaker, topic, or shiur..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-bg-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Find on Torah Anytime
            </button>
          </form>
          <p className="text-xs text-text-muted mt-2 text-center">
            Click a speaker or topic below to search, or type your own query
          </p>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Featured Speakers</h2>
          <p className="text-sm text-text-muted mb-1">Click a speaker to find their Hakhel shiurim on Torah Anytime.</p>
          <div className="w-10 h-0.5 bg-accent mb-6 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredSpeakers.map((speaker, i) => (
              <button
                key={speaker.name}
                onClick={() => searchHakhel(speaker.name.replace(/^R'\s*/, ""))}
                className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-warm-lg transition-all flex items-center gap-3 group text-left cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${speakerColors[i % speakerColors.length]}`}>
                  {getInitials(speaker.name)}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{speaker.name}</p>
                  <p className="text-xs text-text-muted">{speaker.topic}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href={HAKHEL_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              Browse All Hakhel Shiurim
            </a>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">Topics Covered</h2>
          <p className="text-sm text-text-muted mb-1">Click a topic to find related Hakhel shiurim.</p>
          <div className="w-10 h-0.5 bg-accent mb-6 rounded-full" />
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, i) => (
              <button
                key={topic}
                onClick={() => searchHakhel(topic.split(" & ")[0])}
                className={`px-4 py-2 rounded-full text-sm border hover:shadow-warm transition-all cursor-pointer ${topicColors[i % topicColors.length]}`}
              >
                {topic}
              </button>
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

      {/* Bottom spacing */}
      <div className="pb-12" />
    </>
  );
}
