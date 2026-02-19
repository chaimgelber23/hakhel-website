import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Hakhel",
  description: "Learn about Hakhel - a non-profit volunteer organization dedicated to Torah education since 1755.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Hakhel</h1>

          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>
              <strong className="text-text-main">Hakhel</strong> is a not-for-profit
              volunteer organization established in 5515/1755 in Flatbush, Brooklyn.
              Our mission is to promote Torah study, charitable acts, and proper
              mitzvah performance throughout the Jewish community.
            </p>

            <p>
              The name &ldquo;Hakhel&rdquo; — meaning &ldquo;to gather&rdquo; —
              reflects our core belief that when Jews come together to learn and
              grow, the impact extends far beyond the moment of gathering into
              every home and heart.
            </p>

            <h2 className="text-xl font-bold text-text-main pt-4">Our Mission</h2>
            <p>
              Hakhel is dedicated to fostering community education and spiritual
              growth through timeless Torah wisdom. We achieve this through daily
              email bulletins reaching over 15,000 subscribers, comprehensive
              community resources, and free public educational programs.
            </p>

            <h2 className="text-xl font-bold text-text-main pt-4">What We Do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Daily Email Bulletins</strong> — Torah insights delivered
                every morning since 2005
              </li>
              <li>
                <strong>Yarchei Kallah</strong> — Free public shiurim on federal
                holidays featuring prominent Torah scholars
              </li>
              <li>
                <strong>Community Awareness Bulletin</strong> — Alerting the
                public to timely halachic issues
              </li>
              <li>
                <strong>Tefillin Awareness Project</strong> — Sunday community
                outreach ensuring tefillin sanctity
              </li>
              <li>
                <strong>V&apos;Ani Tefilah Foundation</strong> — Resources and
                shiurim dedicated to enhancing tefillah
              </li>
              <li>
                <strong>Gemach Directory</strong> — Comprehensive listing of
                700+ community chesed resources
              </li>
              <li>
                <strong>Torah Resources</strong> — Hundreds of free downloadable
                learning schedules, tefillah aids, and guides
              </li>
            </ul>

            <h2 className="text-xl font-bold text-text-main pt-4">Contact Us</h2>
            <p>
              Email:{" "}
              <a
                href="mailto:information@hakhel.info"
                className="text-primary hover:underline"
              >
                information@hakhel.info
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+17182535497" className="text-primary hover:underline">
                (718) 253-5497
              </a>
              <br />
              Location: Brooklyn, NY 11210
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
