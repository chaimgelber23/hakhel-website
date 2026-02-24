"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/data/gemach.json";

const entries = data.entries;
const categories = data.categories;
const locations = data.locations;

// Group categories for display
const categoryGroups = [
  {
    title: "Baby & Children",
    ids: ["baby-bris", "baby-equipment", "baby-preemie", "baby-clothing", "baby-nursing", "children"],
  },
  {
    title: "Wedding & Simcha",
    ids: ["wedding-gowns", "wedding-makeup", "wedding-headpieces", "wedding-shoes", "wedding-capes", "wedding-chuppah", "wedding-shtick", "wedding-misc", "simcha-gowns", "simcha-jewelry", "simcha-shabbos", "simcha-centerpieces", "simcha-tablecloths", "simcha-flowers", "simcha-tables", "simcha-misc"],
  },
  {
    title: "Essentials",
    ids: ["food", "clothing", "maternity", "sheitels", "household", "medical", "money"],
  },
  {
    title: "Support & Services",
    ids: ["support", "hotlines", "services", "seforim"],
  },
];

export default function GemachClient() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const hasFilters =
    search !== "" || selectedCategory !== "all" || selectedLocation !== "all";

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedLocation("all");
  };

  // Smart suggestions: detect location/category matches from search text
  const smartSuggestions = useMemo(() => {
    if (!search || search.length < 2) return [];
    const q = search.toLowerCase();
    const suggestions: { type: "location" | "category"; id: string; label: string }[] = [];

    for (const loc of locations) {
      if (loc.label.toLowerCase().includes(q) || q.includes(loc.label.toLowerCase())) {
        suggestions.push({ type: "location", id: loc.id, label: loc.label });
      }
    }
    for (const cat of categories) {
      if (cat.label.toLowerCase().includes(q) || q.includes(cat.label.toLowerCase())) {
        suggestions.push({ type: "category", id: cat.id, label: cat.label });
      }
    }
    return suggestions.slice(0, 4);
  }, [search]);

  const applySuggestion = (suggestion: { type: "location" | "category"; id: string }) => {
    if (suggestion.type === "location") {
      setSelectedLocation(suggestion.id);
    } else {
      setSelectedCategory(suggestion.id);
    }
    setSearch("");
  };

  // Count entries per location and category for display
  const locationCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const e of entries) {
      counts[e.location] = (counts[e.location] || 0) + 1;
    }
    return counts;
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const e of entries) {
      counts[e.category] = (counts[e.category] || 0) + 1;
    }
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return entries.filter((entry) => {
      const categoryLabel =
        categories.find((c) => c.id === entry.category)?.label || "";
      const locationLabel =
        locations.find((l) => l.id === entry.location)?.label || "";

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

  const activeFilterCount =
    (selectedCategory !== "all" ? 1 : 0) + (selectedLocation !== "all" ? 1 : 0);

  // Active filter labels for mobile display
  const activeLocationLabel =
    selectedLocation !== "all"
      ? locations.find((l) => l.id === selectedLocation)?.label
      : null;
  const activeCategoryLabel =
    selectedCategory !== "all"
      ? categories.find((c) => c.id === selectedCategory)?.label
      : null;

  return (
    <>
      {/* Search & Controls */}
      <section className="px-6 pt-8 pb-2">
        <div className="max-w-6xl mx-auto">
          {/* Search bar row */}
          <div className="relative max-w-xl mx-auto mb-4 flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by name, type, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-bg-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            {/* Mobile-only filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`md:hidden px-4 py-2.5 rounded-xl text-sm font-medium transition-colors whitespace-nowrap border ${
                showFilters || activeFilterCount > 0
                  ? "bg-primary text-white border-primary"
                  : "bg-bg-soft text-text-muted hover:bg-bg-accent border-gray-200"
              }`}
            >
              Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
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

          {/* Smart suggestions */}
          <AnimatePresence>
            {smartSuggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="max-w-xl mx-auto mb-4 flex flex-wrap gap-2"
              >
                <span className="text-xs text-text-muted self-center">
                  Quick filter:
                </span>
                {smartSuggestions.map((s) => (
                  <button
                    key={`${s.type}-${s.id}`}
                    onClick={() => applySuggestion(s)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20"
                  >
                    {s.type === "location"
                      ? `All in ${s.label}`
                      : `All ${s.label}`}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active filter chips (mobile - shown when filters panel is closed) */}
          {(activeLocationLabel || activeCategoryLabel) && (
            <div className="md:hidden max-w-xl mx-auto mb-3 flex flex-wrap gap-2">
              {activeLocationLabel && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {activeLocationLabel}
                  <button
                    onClick={() => setSelectedLocation("all")}
                    className="ml-0.5 hover:text-primary/70"
                    aria-label="Remove location filter"
                  >
                    x
                  </button>
                </span>
              )}
              {activeCategoryLabel && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-dark border border-accent/20">
                  {activeCategoryLabel}
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="ml-0.5 hover:text-accent/70"
                    aria-label="Remove category filter"
                  >
                    x
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Mobile filter panel (toggle) */}
      <AnimatePresence>
        {showFilters && (
          <motion.section
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden px-6"
          >
            <div className="max-w-6xl mx-auto pb-4">
              {/* Location filter */}
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Location
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedLocation("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                      selectedLocation === "all"
                        ? "bg-primary text-white border-primary"
                        : "bg-bg-soft text-text-muted hover:bg-bg-accent border-gray-200"
                    }`}
                  >
                    All
                  </button>
                  {locations.map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                        selectedLocation === loc.id
                          ? "bg-primary text-white border-primary"
                          : "bg-bg-soft text-text-muted hover:bg-bg-accent border-gray-200"
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category filter */}
              <div className="mb-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Category
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                      selectedCategory === "all"
                        ? "bg-accent text-white border-accent"
                        : "bg-bg-soft text-text-muted hover:bg-bg-accent border-gray-200"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                        selectedCategory === cat.id
                          ? "bg-accent text-white border-accent"
                          : "bg-bg-soft text-text-muted hover:bg-bg-accent border-gray-200"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Desktop browse-by section (always visible on md+) */}
      <section className="hidden md:block px-6 pb-4">
        <div className="max-w-6xl mx-auto">
          {/* Locations */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Browse by Location
            </p>
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-2">
              {locations.map((loc) => {
                const count = locationCounts[loc.id] || 0;
                const isActive = selectedLocation === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() =>
                      setSelectedLocation(isActive ? "all" : loc.id)
                    }
                    className={`px-3 py-2.5 rounded-xl text-left transition-all border ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-sm"
                        : "bg-bg-pure text-text-main hover:bg-bg-soft border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <span className="text-sm font-medium block">{loc.label}</span>
                    <span
                      className={`text-[11px] ${
                        isActive ? "text-white/70" : "text-text-muted"
                      }`}
                    >
                      {count} gemach{count !== 1 ? "s" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Categories - grouped */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
              Browse by Category
            </p>
            <div className="space-y-3">
              {categoryGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-[11px] font-medium text-text-muted/70 mb-1.5 uppercase tracking-wide">
                    {group.title}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.ids.map((id) => {
                      const cat = categories.find((c) => c.id === id);
                      if (!cat) return null;
                      const count = categoryCounts[id] || 0;
                      const isActive = selectedCategory === id;
                      return (
                        <button
                          key={id}
                          onClick={() =>
                            setSelectedCategory(isActive ? "all" : id)
                          }
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                            isActive
                              ? "bg-accent text-white border-accent shadow-sm"
                              : "bg-bg-pure text-text-main hover:bg-bg-soft border-gray-100 hover:border-gray-200"
                          }`}
                        >
                          {cat.label}
                          <span
                            className={`ml-1.5 ${
                              isActive ? "text-white/70" : "text-text-muted"
                            }`}
                          >
                            ({count})
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <hr className="border-gray-100" />
      </div>

      {/* Results */}
      <section className="px-6 pb-20 pt-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-text-muted mb-6">
            {filtered.length} gemach{filtered.length !== 1 ? "s" : ""} found
            {activeLocationLabel && ` in ${activeLocationLabel}`}
            {activeCategoryLabel && ` - ${activeCategoryLabel}`}
          </p>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
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
                    <button
                      onClick={() => setSelectedCategory(entry.category)}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent-bg text-accent-dark border border-accent/20 hover:bg-accent/20 transition-colors cursor-pointer"
                    >
                      {categories.find((c) => c.id === entry.category)?.label ??
                        entry.category}
                    </button>
                    <button
                      onClick={() => setSelectedLocation(entry.location)}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-bg-soft text-text-muted border border-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {locations.find((l) => l.id === entry.location)?.label ??
                        entry.location}
                    </button>
                  </div>
                  <div className="mt-auto">
                    {entry.phone && (
                      <a
                        href={`tel:${entry.phone.replace(/[^+\d]/g, "")}`}
                        className="text-sm font-medium text-primary hover:underline"
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
        </div>
      </section>
    </>
  );
}
