import type { Metadata } from "next";
import DailyEmailsClient from "./DailyEmailsClient";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Daily Email Archives | Hakhel",
  description:
    "Browse 15+ years of curated Torah insights from Hakhel's daily email bulletins, delivered to over 15,000 subscribers worldwide since 2005.",
  keywords: [
    "daily Torah email",
    "Hakhel emails",
    "Torah insights",
    "daily inspiration",
    "Jewish daily email",
    "Torah bulletin",
  ],
};

export default function DailyEmailsPage() {
  return (
    <main>
      <PageHeader
        title="Daily Email Archives"
        subtitle="15+ years of curated Torah insights, delivered daily to thousands worldwide. Browse the archives or subscribe to receive them each morning."
        icon="envelope"
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
