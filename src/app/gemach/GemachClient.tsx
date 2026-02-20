"use client";

import { useState, useMemo } from "react";
import data from "@/data/gemach.json";
import Icon from "@/components/Icon";

const entries = data.entries;
const categories = data.categories;
const locations = data.locations;

export default function GemachClient() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const filtered = useMemo(() => {
    return entries.filter((entry) => {
      const matchesSearch =
        !search ||
        entry.name.toLowerCase().includes(search.toLowerCase()) ||
        entry.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || entry.category === selectedCategory;
      const matchesLocation =
        selectedLocation === "all" || entry.location === selectedLocation;
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [search, selectedCategory, selectedLocation]);

  return (
    <>
      {/* Search & Filters */}
      <section className="px-6 pb-4 pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative max-w-md mx-auto mb-6">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <Icon name="search" size={16} />
            </span>
            <input
              type="text"
              placeholder="Search gemachs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-bg-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          {/* Location filter */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-1.5">
              <Icon name="mapPin" size={12} />
              Location
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedLocation("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedLocation === "all"
                    ? "bg-primary text-white"
                    : "bg-bg-soft text-text-muted hover:bg-bg-accent"
                }`}
              >
                All Locations
              </button>
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedLocation === loc.id
                      ? "bg-primary text-white"
                      : "bg-bg-soft text-text-muted hover:bg-bg-accent"
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 flex items-center gap-1.5">
              <Icon name="heart" size={12} />
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-accent text-white"
                    : "bg-bg-soft text-text-muted hover:bg-bg-accent"
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-accent text-white"
                      : "bg-bg-soft text-text-muted hover:bg-bg-accent"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-text-muted mb-6">
            {filtered.length} gemach{filtered.length !== 1 ? "s" : ""} found
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((entry) => (
              <div
                key={entry.id}
                className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-warm transition-all card-accent-green"
              >
                <h3 className="font-semibold text-sm mb-1">{entry.name}</h3>
                <p className="text-xs text-text-muted mb-3 leading-relaxed">
                  {entry.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent-bg text-accent-dark border border-accent/20">
                    {categories.find((c) => c.id === entry.category)?.label ?? entry.category}
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-bg-soft text-text-muted border border-gray-100 inline-flex items-center gap-1">
                    <Icon name="mapPin" size={8} />
                    {locations.find((l) => l.id === entry.location)?.label ?? entry.location}
                  </span>
                </div>
                {entry.phone && (
                  <a
                    href={`tel:${entry.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <Icon name="phone" size={12} />
                    {entry.phone}
                  </a>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-12">
              No gemachs found matching your search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
