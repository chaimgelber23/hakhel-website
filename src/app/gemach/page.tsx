import type { Metadata } from "next";
import GemachClient from "./GemachClient";
import PageHeader from "@/components/PageHeader";

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
      <PageHeader
        title="Community Gemach Directory"
        subtitle="Hundreds of chesed resources across the tri-state area. Search by category, location, or keyword to find exactly what you need."
        icon="heart"
        breadcrumb="Gemach"
        tintClass="bg-section-gemach"
      />
      <GemachClient />
    </main>
  );
}
