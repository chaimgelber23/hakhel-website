"use client";

import { useState } from "react";
import data from "@/data/daily-emails.json";

const years = data.years;
const specialCollections = data.specialCollections;

export default function DailyEmailsClient() {
  const [selectedYear, setSelectedYear] = useState(years[0]?.year ?? 2020);

  const currentYear = years.find((y) => y.year === selectedYear);

  return (
    <>
      {/* Special Collections */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Special Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialCollections.map((col) => (
              <a
                key={col.id}
                href={col.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-soft rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-sm mb-1">{col.title}</h3>
                <p className="text-xs text-text-muted">{col.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Year Selector */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Browse by Year</h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {years.map((y) => (
              <button
                key={y.year}
                onClick={() => setSelectedYear(y.year)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedYear === y.year
                    ? "bg-primary text-white"
                    : "bg-bg-soft text-text-muted hover:bg-gray-200"
                }`}
              >
                {y.year}
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
                  className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <p className="font-semibold text-sm">{m.month}</p>
                  <p className="text-xs text-text-muted mt-1">{selectedYear}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
