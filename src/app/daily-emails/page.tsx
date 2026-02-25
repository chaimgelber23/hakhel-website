import type { Metadata } from "next";
import DailyEmailsClient from "./DailyEmailsClient";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Daily Torah Email Archives (2005–2020) — 15,000+ Subscribers",
  description:
    "Browse 15+ years of curated daily Torah insights from Hakhel's email bulletins. Halacha, hashkafa, mussar, minhagim, and more — delivered to 15,000+ subscribers worldwide since 2005. Subscribe free or browse the full archive.",
  keywords: [
    "daily Torah email",
    "Hakhel emails",
    "Torah insights daily",
    "Jewish daily email",
    "Torah bulletin",
    "subscribe Torah email",
    "halacha email",
    "hashkafa",
    "mussar daily",
    "Torah inspiration",
  ],
  openGraph: {
    title: "Daily Torah Email Archives (2005–2020) — Hakhel",
    description:
      "15+ years of curated Torah insights delivered daily to 15,000+ subscribers. Browse the archive or subscribe free.",
  },
};

export default function DailyEmailsPage() {
  return (
    <main>
      <PageHeader
        title="Daily Email Archives"
        subtitle="15+ years of curated Torah insights, delivered daily to thousands worldwide. Browse the archives or subscribe to receive them each morning."
        breadcrumb="Daily Emails"
        tintClass="bg-section-emails"
      >
        <a
          href="https://lp.constantcontactpages.com/su/opBjZAX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-accent text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-accent-dark transition-colors"
        >
          Subscribe to Daily Emails
        </a>
      </PageHeader>
      <DailyEmailsClient />
    </main>
  );
}
