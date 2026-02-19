import type { Metadata } from "next";
import GemachClient from "./GemachClient";

export const metadata: Metadata = {
  title: "Community Gemach Directory | Hakhel",
  description:
    "Search hundreds of gemach (free-loan) services across the tri-state area. Find equipment loans, clothing, food, medical supplies, and more.",
  keywords: [
    "gemach directory",
    "gemach list",
    "free loan",
    "chesed",
    "Brooklyn gemach",
    "Flatbush",
    "Lakewood",
    "Jewish community resources",
  ],
};

export default function GemachPage() {
  return (
    <main>
      <section className="py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Community Gemach Directory
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Hundreds of chesed resources across the tri-state area. Search by
          category, location, or keyword to find exactly what you need.
        </p>
      </section>
      <GemachClient />
    </main>
  );
}
