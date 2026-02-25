import { Suspense } from "react";
import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Free Torah Library — 60+ PDFs, Schedules, Tefillah Aids & Charts",
  description:
    "Download 60+ free Torah resources: Kitzur Yomi and Daf Yomi schedules, Shemone Esrei kavanos, brachos charts, halachic guidelines, tefillah aids, and reference tables from Hakhel.",
  keywords: [
    "Torah resources",
    "free Torah PDF",
    "learning schedule",
    "Kitzur Yomi",
    "Daf Yomi",
    "tefillah aids",
    "halacha guides",
    "brachos chart",
    "Shemone Esrei",
    "kavanos",
    "Torah download",
    "Hakhel resources",
  ],
  openGraph: {
    title: "Free Torah Library — 60+ PDFs, Schedules & Tefillah Aids",
    description:
      "Download 60+ free Torah resources: learning schedules, tefillah aids, brachos charts, halachic guidelines, and more.",
  },
};

export default function ResourcesPage() {
  return (
    <main>
      <PageHeader
        title="Torah Library"
        subtitle="Comprehensive collection of learning schedules, tefillah aids, halachic guidelines, and educational materials — all free to download and share."
        breadcrumb="Torah Library"
        tintClass="bg-section-resources"
      />
      <Suspense>
        <ResourcesClient />
      </Suspense>
    </main>
  );
}
