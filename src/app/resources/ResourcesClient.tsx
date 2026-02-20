"use client";

import { useState, useMemo } from "react";
import data from "@/data/resources.json";
import Icon from "@/components/Icon";

const categories = data.categories;
const allCount = categories.reduce((s, c) => s + c.resources.length, 0);

const iconMap: Record<string, string> = {
  calendar: "calendar",
  table: "table",
  heart: "heart",
  archive: "archive",
  clipboard: "clipboard",
  book: "book",
};

const categoryDescriptions: Record<string, string> = {
  calendars: "Daily and yearly Torah learning schedules — Kitzur Yomi, Daf Yomi, Mishnayos tracking",
  tables: "Quick-reference charts for halachic measurements, davening locations, and karbonos",
  tefillah: "26 tefillos and kavanos — Shemone Esrei checklists, tefillos for parnassah, health, children, and more",
  archives: "In-depth study series — Shemoneh Esrei, Brochos shailos, Shemiras HaLashon, and mussar",
  guidelines: "Practical halacha — brachos on cereals, kashrus tips, Eruv Tavshilin, speech guidelines",
  tefillin: "Kedushas Tefillin newsletter and quick-reference halacha card",
};

const fileTypeColors: Record<string, string> = {
  PDF: "bg-red-50 text-red-600 border-red-100",
  HTML: "bg-amber-50 text-amber-700 border-amber-100",
  JPG: "bg-green-50 text-green-600 border-green-100",
};

export default function ResourcesClient() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!activeCategory && !search) return [];
    return categories
      .filter((cat) => !activeCategory || cat.id === activeCategory)
      .map((cat) => ({
        ...cat,
        resources: cat.resources.filter(
          (r) => !search || r.title.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter((cat) => cat.resources.length > 0);
  }, [activeCategory, search]);

  const totalCount = filtered.reduce((sum, cat) => sum + cat.resources.length, 0);
  const showBrowse = activeCategory !== null || search.length > 0;

  return (
    <>
      {/* Category Showcase */}
      {!showBrowse && (
        <section className="px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-text-muted text-center mb-8">
              {allCount} free downloads across {categories.length} categories — click any to browse
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="text-left bg-bg-pure rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-warm-lg transition-all card-accent-left group"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="p-2 rounded-lg bg-accent-bg text-accent">
                      <Icon name={iconMap[cat.icon] || "book"} size={18} />
                    </span>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {cat.label}
                      </h3>
                      <p className="text-xs text-text-muted">
                        {cat.resources.length} {cat.resources.length === 1 ? "item" : "items"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">
                    {categoryDescriptions[cat.id] || ""}
                  </p>
                  {/* Preview top 3 items */}
                  <div className="space-y-1.5">
                    {cat.resources.slice(0, 3).map((r) => (
                      <div key={r.id} className="flex items-center gap-2 text-xs text-text-muted">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span className="truncate">{r.title}</span>
                      </div>
                    ))}
                    {cat.resources.length > 3 && (
                      <p className="text-xs text-primary font-medium pl-3">
                        +{cat.resources.length - 3} more
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search + Filters (shown when browsing) */}
      <section className="px-6 pb-4 pt-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative max-w-md mx-auto mb-6">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <Icon name="search" size={16} />
            </span>
            <input
              type="text"
              placeholder="Search all resources..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value && !activeCategory) setActiveCategory(null);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-bg-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          {showBrowse && (
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              <button
                onClick={() => { setActiveCategory(null); setSearch(""); }}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-bg-soft text-text-muted hover:bg-bg-accent transition-colors"
              >
                Back to Categories
              </button>
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === null && search
                    ? "bg-primary text-white"
                    : "bg-bg-soft text-text-muted hover:bg-bg-accent"
                }`}
              >
                All ({allCount})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-primary text-white"
                      : "bg-bg-soft text-text-muted hover:bg-bg-accent"
                  }`}
                >
                  <Icon name={iconMap[cat.icon] || "book"} size={14} />
                  {cat.label} ({cat.resources.length})
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      {showBrowse && (
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm text-text-muted mb-6">{totalCount} resources</p>

            {filtered.map((cat) => (
              <div key={cat.id} className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent">
                    <Icon name={iconMap[cat.icon] || "book"} size={20} />
                  </span>
                  <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold">
                    {cat.label}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.resources.map((resource) => (
                    <a
                      key={resource.id}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-bg-pure rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-warm-lg transition-all group card-accent-left"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-medium text-sm leading-snug group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <span className={`shrink-0 text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded border ${
                          fileTypeColors[resource.fileType.toUpperCase()] || "bg-bg-soft text-text-muted border-gray-100"
                        }`}>
                          {resource.fileType}
                        </span>
                      </div>
                      {resource.description && (
                        <p className="text-xs text-text-muted mt-1.5 leading-relaxed">
                          {resource.description}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {totalCount === 0 && (
              <p className="text-center text-text-muted py-12">
                No resources found matching your search.
              </p>
            )}
          </div>
        </section>
      )}
    </>
  );
}
