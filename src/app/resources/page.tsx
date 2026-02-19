import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Torah Resources | Hakhel",
  description:
    "Free downloadable Torah learning schedules, tefillah aids, halachic guidelines, reference charts, and educational materials from Hakhel.",
  keywords: [
    "Torah resources",
    "learning schedule",
    "Kitzur Yomi",
    "Daf Yomi",
    "tefillah aids",
    "halacha guides",
    "brachos chart",
    "Hakhel",
  ],
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Torah Resources</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Comprehensive collection of learning schedules, tefillah aids, halachic
          guidelines, and educational materials — all free to download and share.
        </p>
      </section>
      <ResourcesClient />
    </main>
  );
}
