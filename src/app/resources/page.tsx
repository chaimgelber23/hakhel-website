import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";
import PageHeader from "@/components/PageHeader";

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
      <PageHeader
        title="Torah Resources"
        subtitle="Comprehensive collection of learning schedules, tefillah aids, halachic guidelines, and educational materials — all free to download and share."
        icon="book"
        breadcrumb="Resources"
        tintClass="bg-section-resources"
      />
      <ResourcesClient />
    </main>
  );
}
