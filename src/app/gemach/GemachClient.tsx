"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/gemach.json";

const entries = data.entries;
const categories = data.categories;
const locations = data.locations;

export default function GemachClient() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const hasFilters = search !== "" || selectedCategory !== "all" || selectedLocation !== "all";

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedLocation("all");
  };

  const filtered = useMemo(() => {
    return entries.filter((entry) => {
      const categoryLabel = categories.find(c => c.id === entry.category)?.label || "";
      const locationLabel = locations.find(l => l.id === entry.location)?.label || "";

      const matchesSearch =
        !search ||
        entry.name.toLowerCase().includes(search.toLowerCase()) ||
        entry.description.toLowerCase().includes(search.toLowerCase()) ||
        categoryLabel.toLowerCase().includes(search.toLowerCase()) ||
        locationLabel.toLowerCase().includes(search.toLowerCase());

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
          <div className="relative max-w-xl mx-auto mb-6 flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search gemachs, categories, locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-bg-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap border ${showFilters || selectedCategory !== "all" || selectedLocation !== "all"
                  ? "bg-primary text-white border-primary"
                  : "bg-bg-soft text-text-muted hover:bg-bg-accent border-gray-200"
                }`}
            >
              Filters {(selectedCategory !== "all" || selectedLocation !== "all") && "• Active"}
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="px-4 py-2.5 rounded-xl bg-bg-soft text-text-muted hover:bg-bg-accent hover:text-text-main text-sm font-medium transition-colors whitespace-nowrap border border-gray-200"
              >
                Clear
              </button>
            )}
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >

                {/* Location filter */}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                    Location
                  </p>
                  <div className="flex overflow-x-auto md:flex-wrap whitespace-nowrap scrollbar-hide gap-2 pb-2 -mx-6 px-6 md:mx-0 md:px-0">
                    <button
                      onClick={() => setSelectedLocation("all")}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${selectedLocation === "all"
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
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${selectedLocation === loc.id
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                    Category
                  </p>
                  <div className="flex overflow-x-auto md:flex-wrap whitespace-nowrap scrollbar-hide gap-2 pb-2 -mx-6 px-6 md:mx-0 md:px-0">
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${selectedCategory === "all"
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
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${selectedCategory === cat.id
                          ? "bg-accent text-white"
                          : "bg-bg-soft text-text-muted hover:bg-bg-accent"
                          }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-text-muted mb-6">
            {filtered.length} gemach{filtered.length !== 1 ? "s" : ""} found
          </p>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filtered.map((entry) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={entry.id}
                  className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-warm transition-shadow card-accent-green flex flex-col h-full"
                >
                  <h3 className="font-semibold text-sm mb-1">{entry.name}</h3>
                  <p className="text-xs text-text-muted mb-3 leading-relaxed">
                    {entry.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent-bg text-accent-dark border border-accent/20">
                      {categories.find((c) => c.id === entry.category)?.label ?? entry.category}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-bg-soft text-text-muted border border-gray-100">
                      {locations.find((l) => l.id === entry.location)?.label ?? entry.location}
                    </span>
                  </div>
                  <div className="mt-auto">
                    {entry.phone && (
                      <a
                        href={`tel:${entry.phone.replace(/[^+\d]/g, "")}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        {entry.phone}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-12">
              No gemachs found matching your search.
            </p>
          )}
        </div >
      </section >
    </>
  );
}
