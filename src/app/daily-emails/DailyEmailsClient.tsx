"use client";

import { useState } from "react";
import data from "@/data/daily-emails.json";
import Icon from "@/components/Icon";

const years = data.years;
const specialCollections = data.specialCollections;

export default function DailyEmailsClient() {
  const [selectedYear, setSelectedYear] = useState(years[0]?.year ?? 2020);

  const currentYear = years.find((y) => y.year === selectedYear);

  return (
    <>
      {/* Special Collections */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
            Special Collections
          </h2>
          <div className="w-10 h-0.5 bg-accent mb-6 rounded-full" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialCollections.map((col) => (
              <a
                key={col.id}
                href={col.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-warm-lg transition-all card-accent-gold group"
              >
                <div className="flex items-start gap-2 mb-1">
                  <span className="text-accent shrink-0 mt-0.5">
                    <Icon name="star" size={14} />
                  </span>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {col.title}
                  </h3>
                </div>
                <p className="text-xs text-text-muted pl-[22px]">{col.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Year Selector */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
            Browse by Year
          </h2>
          <div className="w-10 h-0.5 bg-accent mb-6 rounded-full" />

          <div className="flex flex-wrap gap-2 mb-8">
            {years.map((y) => (
              <button
                key={y.year}
                onClick={() => setSelectedYear(y.year)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedYear === y.year
                    ? "bg-primary text-white"
                    : "bg-bg-soft text-text-muted hover:bg-bg-accent"
                }`}
              >
                {y.year}
                {y.year === years[0]?.year && (
                  <span className="ml-1.5 text-[10px] font-bold bg-accent/20 text-accent-dark px-1.5 py-0.5 rounded-full">
                    Latest
                  </span>
                )}
              </button>
            ))}
          </div>

          {currentYear && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {currentYear.months.map((m) => (
                <a
                  key={m.month}
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-warm-lg hover:border-accent/30 transition-all text-center group"
                >
                  <span className="text-accent mb-2 inline-block">
                    <Icon name="calendar" size={18} />
                  </span>
                  <p className="font-[family-name:var(--font-heading)] font-semibold text-sm group-hover:text-primary transition-colors">
                    {m.month}
                  </p>
                  <p className="text-xs text-text-muted mt-0.5">{selectedYear}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
