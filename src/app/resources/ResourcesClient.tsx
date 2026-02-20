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

const fileTypeColors: Record<string, string> = {
  PDF: "bg-red-50 text-red-600 border-red-100",
  HTML: "bg-blue-50 text-blue-600 border-blue-100",
  JPG: "bg-green-50 text-green-600 border-green-100",
};

export default function ResourcesClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return categories
      .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
      .map((cat) => ({
        ...cat,
        resources: cat.resources.filter(
          (r) => !search || r.title.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter((cat) => cat.resources.length > 0);
  }, [activeCategory, search]);

  const totalCount = filtered.reduce((sum, cat) => sum + cat.resources.length, 0);

  return (
    <>
      {/* Filters */}
      <section className="px-6 pb-4 pt-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative max-w-md mx-auto mb-6">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <Icon name="search" size={16} />
            </span>
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-bg-soft text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all"
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
        </div>
      </section>

      {/* Results */}
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
                        fileTypeColors[resource.fileType] || "bg-bg-soft text-text-muted border-gray-100"
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
    </>
  );
}
