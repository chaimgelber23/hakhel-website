import type { Metadata } from "next";
import GemachClient from "./GemachClient";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "500+ Gemach Directory — Free-Loan Services in Brooklyn, Lakewood & More",
  description:
    "Search 500+ gemach (free-loan) services across Brooklyn, Queens, Five Towns, Monsey, and Lakewood. Find baby equipment, wedding gowns, food, clothing, medical supplies, seforim, and chesed resources by category and location.",
  keywords: [
    "gemach directory",
    "gemach list",
    "free loan Jewish",
    "chesed resources",
    "Brooklyn gemach",
    "Flatbush gemach",
    "Lakewood gemach",
    "Monsey gemach",
    "Five Towns gemach",
    "wedding gemach",
    "baby equipment gemach",
    "clothing gemach",
    "food gemach",
  ],
  openGraph: {
    title: "500+ Gemach Directory — Free-Loan Services",
    description:
      "Search 500+ gemach services across the tri-state area. Baby equipment, wedding supplies, food, clothing, medical, and more.",
  },
};

export default function GemachPage() {
  return (
    <main>
      <PageHeader
        title="Community Gemach Directory"
        subtitle="Hundreds of chesed resources across the tri-state area. Search by category, location, or keyword to find exactly what you need."
        breadcrumb="Gemach"
        tintClass="bg-section-gemach"
      />
      <GemachClient />
    </main>
  );
}
