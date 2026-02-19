import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">Hakhel</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            A non-profit volunteer organization dedicated to fostering Torah
            education and spiritual growth through daily inspiration and
            community resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
            <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            <li><Link href="/daily-emails" className="hover:text-white transition-colors">Daily Emails</Link></li>
            <li><Link href="/shiurim" className="hover:text-white transition-colors">Shiurim</Link></li>
            <li><Link href="/gemach" className="hover:text-white transition-colors">Gemach Directory</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
            Resources
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/resources" className="hover:text-white transition-colors">Tefillah Aids</Link></li>
            <li><Link href="/resources" className="hover:text-white transition-colors">Learning Schedules</Link></li>
            <li><Link href="/resources" className="hover:text-white transition-colors">Bulletin Archives</Link></li>
            <li><Link href="/resources" className="hover:text-white transition-colors">Halacha Guidelines</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Brooklyn, NY 11210</li>
            <li>
              <a href="mailto:information@hakhel.info" className="hover:text-white transition-colors">
                information@hakhel.info
              </a>
            </li>
            <li>
              <a href="tel:+17182535497" className="hover:text-white transition-colors">
                (718) 253-5497
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Hakhel. All rights reserved.</p>
      </div>
    </footer>
  );
}
