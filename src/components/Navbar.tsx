"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const learnLinks = [
  { href: "/daily-emails", label: "Daily Emails", desc: "15+ years of Torah insights" },
  { href: "/shiurim", label: "Shiurim", desc: "300+ recorded lectures" },
  { href: "/programs", label: "Programs", desc: "Yarchei Kallah, bulletins & more" },
];

const resourceLinks = [
  { href: "/resources?category=calendars", label: "Calendars & Schedules", desc: "Kitzur Yomi, Daf Yomi & more" },
  { href: "/resources?category=tables", label: "Reference Tables", desc: "Measurements, davening & karbonos" },
  { href: "/resources?category=tefillah", label: "Tefillah Aids & Kavanos", desc: "26 tefillos and kavanos guides" },
  { href: "/resources?category=archives", label: "Study Archives", desc: "In-depth learning series" },
  { href: "/resources?category=guidelines", label: "Halachic Guidelines", desc: "Brachos, kashrus & speech guides" },
  { href: "/resources?category=tefillin", label: "Tefillin", desc: "Newsletter & halacha card" },
];

function Dropdown({ label, links, isActive, wide }: { label: string; links: typeof learnLinks; isActive: boolean; wide?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-text-main hover:text-primary"
          }`}
      >
        {label}
        <span className={`text-[10px] ml-0.5 transition-transform inline-block ${open ? "rotate-180" : ""}`}>&#9662;</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className={`absolute top-full left-0 mt-2 ${wide ? "w-72" : "w-56"} bg-bg-pure rounded-xl border border-gray-100 shadow-warm-lg overflow-hidden z-50`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 hover:bg-bg-soft transition-colors"
              >
                <p className="text-sm font-medium text-text-main">{link.label}</p>
                <p className="text-xs text-text-muted">{link.desc}</p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const learnActive = learnLinks.some((l) => pathname === l.href);
  const resourceActive = pathname === "/resources";

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-bg-pure/85 backdrop-blur-xl border-b border-gray-100 shadow-sm py-0" : "bg-bg-pure/60 backdrop-blur-md border-b border-transparent py-1"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-main">
            Hakhel
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-primary" : "text-text-main hover:text-primary"
              }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${pathname === "/about" ? "text-primary" : "text-text-main hover:text-primary"
              }`}
          >
            About
          </Link>
          <Dropdown label="Torah Library" links={learnLinks} isActive={learnActive} />
          <Dropdown label="Guides & Tools" links={resourceLinks} isActive={resourceActive} wide />
          <Link
            href="/gemach"
            className={`text-sm font-medium transition-colors ${pathname === "/gemach" ? "text-primary" : "text-text-main hover:text-primary"
              }`}
          >
            Gemach List
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${pathname === "/contact" ? "text-primary" : "text-text-main hover:text-primary"
              }`}
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://lp.constantcontactpages.com/su/opBjZAX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-warm-hover"
          >
            Subscribe
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 bg-text-main transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
            <span
              className={`block h-0.5 bg-text-main transition-opacity ${mobileOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block h-0.5 bg-text-main transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-pure border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/daily-emails", label: "Daily Emails" },
                { href: "/shiurim", label: "Shiurim" },
                { href: "/programs", label: "Programs" },
                { href: "/gemach", label: "Gemach List" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2.5 text-sm font-medium ${pathname === link.href ? "text-primary" : "text-text-main"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-gray-100 mt-3 pt-3">
                <Link
                  href="/resources"
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-xs font-semibold uppercase tracking-wider ${pathname === "/resources" ? "text-primary" : "text-text-muted"
                    }`}
                >
                  Guides & Tools
                </Link>
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 pl-3 text-sm text-text-main hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-gray-100 mt-4 pt-4 space-y-2">
                <a
                  href="https://lp.constantcontactpages.com/su/opBjZAX"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium text-center"
                >
                  Subscribe to Daily Emails
                </a>
                <div className="flex items-center gap-4 justify-center text-xs text-text-muted pt-2">
                  <a href="tel:+17182535497" className="hover:text-primary transition-colors">(718) 253-5497</a>
                  <a href="mailto:information@hakhel.info" className="hover:text-primary transition-colors">information@hakhel.info</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
