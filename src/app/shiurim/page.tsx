import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ShiurimClient from "./ShiurimClient";

export const metadata: Metadata = {
  title: "323 Torah Shiurim & Recordings — Hakhel on Torah Anytime",
  description:
    "Access 323 free Torah shiurim and recordings from Hakhel events on Torah Anytime. Featuring 59 speakers including R' Dovid Goldwasser, R' Yisroel Reisman, R' Daniel Glatstein, and R' Asher Weiss on halacha, kashrus, tefillah, Shabbos, and Yomim Tovim.",
  keywords: [
    "Torah shiurim",
    "Torah lectures",
    "Hakhel recordings",
    "Torah Anytime",
    "Yarchei Kallah recordings",
    "Jewish lectures",
    "free Torah classes",
    "R' Dovid Goldwasser",
    "R' Yisroel Reisman",
    "R' Daniel Glatstein",
    "R' Asher Weiss",
    "halacha shiur",
    "kashrus shiur",
  ],
  openGraph: {
    title: "323 Torah Shiurim & Recordings — Hakhel on Torah Anytime",
    description:
      "Free Torah shiurim from 59 speakers. Halacha, kashrus, Shabbos, tefillah, and more from Hakhel events.",
  },
};

export default function ShiurimPage() {
  return (
    <main>
      <PageHeader
        title="Shiurim & Recordings"
        subtitle="323 Torah lectures from Hakhel events and programs, featuring 59 prominent rabbanim and scholars. All available free on Torah Anytime."
        breadcrumb="Shiurim"
        tintClass="bg-section-shiurim"
      >
        <a
          href="https://torahanytime.com/organizations/41"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:bg-primary-dark transition-colors"
        >
          Browse All on Torah Anytime
        </a>
      </PageHeader>

      <ShiurimClient />
    </main>
  );
}
