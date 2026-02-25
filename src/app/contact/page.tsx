import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Hakhel — Get in Touch, Subscribe, or Donate",
  description:
    "Contact Hakhel in Brooklyn, NY. Subscribe to daily Torah emails, support our programs, submit a gemach listing, or reach out with questions. Phone: 718-523-3636.",
  keywords: [
    "contact Hakhel",
    "Hakhel Brooklyn",
    "Hakhel phone number",
    "Hakhel email",
    "subscribe Torah emails",
    "donate Hakhel",
  ],
  openGraph: {
    title: "Contact Hakhel — Get in Touch, Subscribe, or Donate",
    description:
      "Contact Hakhel in Brooklyn, NY. Subscribe to daily Torah emails, support our programs, or reach out with questions.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions, suggestions, or to get involved."
        breadcrumb="Contact"
        tintClass="bg-bg-soft"
      />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="bg-bg-pure rounded-xl p-5 border border-gray-100 shadow-sm card-accent-blue">
                <h2 className="font-semibold mb-2">General Inquiries</h2>
                <a href="mailto:information@hakhel.info" className="text-primary hover:underline text-sm">
                  information@hakhel.info
                </a>
              </div>

              <div className="bg-bg-pure rounded-xl p-5 border border-gray-100 shadow-sm card-accent-blue">
                <h2 className="font-semibold mb-2">Phone</h2>
                <div className="space-y-1">
                  <a href="tel:+17182535497" className="text-primary hover:underline text-sm block">(718) 253-5497</a>
                  <a href="tel:+17182525274" className="text-primary hover:underline text-sm block">(718) 252-5274</a>
                </div>
              </div>

              <div className="bg-bg-pure rounded-xl p-5 border border-gray-100 shadow-sm card-accent-blue">
                <h2 className="font-semibold mb-2">Location</h2>
                <p className="text-sm text-text-muted">Brooklyn, NY 11210</p>
              </div>

              <div className="bg-bg-pure rounded-xl p-5 border border-gray-100 shadow-sm card-accent-gold">
                <h2 className="font-semibold mb-2">Email Subscription</h2>
                <p className="text-sm text-text-muted mb-3">
                  Subscribe to the daily email or send a message to{" "}
                  <a href="mailto:postmaster@hakhel.info" className="text-primary hover:underline">
                    postmaster@hakhel.info
                  </a>
                </p>
                <a
                  href="https://lp.constantcontactpages.com/su/opBjZAX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors"
                >
                  Subscribe to Daily Emails
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-accent-bg rounded-2xl p-6 md:p-8 border border-accent/10">
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-3">Support Hakhel</h2>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  Hakhel is a non-profit volunteer organization. Your generous
                  support helps us continue providing free Torah education and
                  community resources to thousands of people worldwide.
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  To make a donation or learn about sponsorship opportunities,
                  please contact us at{" "}
                  <a href="mailto:information@hakhel.info" className="text-primary hover:underline">
                    information@hakhel.info
                  </a>
                </p>
              </div>

              <div className="bg-bg-pure rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h3 className="font-semibold mb-2">Submit a Gemach Listing</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Know a gemach that should be in our directory? Email us the
                  details and we&apos;ll add it to our community resource list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
