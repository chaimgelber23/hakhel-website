import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white pt-16 pb-8 px-6">
      {/* Decorative top border */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 text-accent">
            Hakhel
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            A non-profit volunteer organization dedicated to fostering Torah
            education and spiritual growth through daily inspiration and
            community resources.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent/80">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/programs" className="hover:text-accent transition-colors">Programs</Link></li>
            <li><Link href="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
            <li><Link href="/daily-emails" className="hover:text-accent transition-colors">Daily Emails</Link></li>
            <li><Link href="/shiurim" className="hover:text-accent transition-colors">Shiurim</Link></li>
            <li><Link href="/gemach" className="hover:text-accent transition-colors">Gemach Directory</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent/80">
            Resources
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/resources" className="hover:text-accent transition-colors">Tefillah Aids</Link></li>
            <li><Link href="/resources" className="hover:text-accent transition-colors">Learning Schedules</Link></li>
            <li><Link href="/resources" className="hover:text-accent transition-colors">Bulletin Archives</Link></li>
            <li><Link href="/resources" className="hover:text-accent transition-colors">Halacha Guidelines</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent/80">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Icon name="mapPin" size={14} className="text-accent/60" />
              Brooklyn, NY 11210
            </li>
            <li>
              <a href="mailto:information@hakhel.info" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Icon name="envelope" size={14} className="text-accent/60" />
                information@hakhel.info
              </a>
            </li>
            <li>
              <a href="tel:+17182535497" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Icon name="phone" size={14} className="text-accent/60" />
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
