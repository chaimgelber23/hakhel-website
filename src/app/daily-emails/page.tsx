import type { Metadata } from "next";
import DailyEmailsClient from "./DailyEmailsClient";

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
      <section className="py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Daily Email Archives
        </h1>
        <p className="text-text-muted max-w-2xl mx-auto mb-6">
          15+ years of curated Torah insights, delivered daily to thousands
          worldwide. Browse the archives or subscribe to receive them each morning.
        </p>
        <a
          href="https://lp.constantcontactpages.com/su/opBjZAX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Subscribe to Daily Emails
        </a>
      </section>
      <DailyEmailsClient />
    </main>
  );
}
