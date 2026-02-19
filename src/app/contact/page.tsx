import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Hakhel",
  description: "Contact Hakhel - reach out for questions, subscriptions, or to contribute to our programs.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Contact Us
          </h1>
          <p className="text-text-muted text-center mb-12">
            We&apos;d love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-semibold mb-2">General Inquiries</h2>
                <a
                  href="mailto:information@hakhel.info"
                  className="text-primary hover:underline text-sm"
                >
                  information@hakhel.info
                </a>
              </div>

              <div>
                <h2 className="font-semibold mb-2">Phone</h2>
                <a
                  href="tel:+17182535497"
                  className="text-primary hover:underline text-sm"
                >
                  (718) 253-5497
                </a>
                <br />
                <a
                  href="tel:+17182525274"
                  className="text-primary hover:underline text-sm"
                >
                  (718) 252-5274
                </a>
              </div>

              <div>
                <h2 className="font-semibold mb-2">Location</h2>
                <p className="text-sm text-text-muted">Brooklyn, NY 11210</p>
              </div>

              <div>
                <h2 className="font-semibold mb-2">Email Subscription</h2>
                <p className="text-sm text-text-muted mb-2">
                  To subscribe to the daily email, send a message to{" "}
                  <a
                    href="mailto:postmaster@hakhel.info"
                    className="text-primary hover:underline"
                  >
                    postmaster@hakhel.info
                  </a>{" "}
                  or use the button below.
                </p>
                <a
                  href="https://lp.constantcontactpages.com/su/opBjZAX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Subscribe to Daily Emails
                </a>
              </div>
            </div>

            {/* Donate / Support */}
            <div className="bg-bg-soft rounded-2xl p-6 border border-gray-100">
              <h2 className="font-bold text-lg mb-3">Support Hakhel</h2>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Hakhel is a non-profit volunteer organization. Your generous
                support helps us continue providing free Torah education and
                community resources to thousands of people worldwide.
              </p>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                To make a donation or learn about sponsorship opportunities,
                please contact us at{" "}
                <a
                  href="mailto:information@hakhel.info"
                  className="text-primary hover:underline"
                >
                  information@hakhel.info
                </a>
                .
              </p>

              <h3 className="font-semibold text-sm mt-6 mb-2">
                Submit a Gemach Listing
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Know a gemach that should be in our directory? Email us the
                details and we&apos;ll add it to our community resource list.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
