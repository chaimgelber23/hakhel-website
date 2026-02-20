"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "./Icon";

const learnLinks = [
  { href: "/resources", label: "Resources", desc: "60+ downloadable Torah materials", icon: "book" },
  { href: "/daily-emails", label: "Daily Emails", desc: "15+ years of Torah insights", icon: "envelope" },
  { href: "/shiurim", label: "Shiurim", desc: "300+ recorded lectures", icon: "mic" },
];

const communityLinks = [
  { href: "/gemach", label: "Gemach", desc: "700+ chesed resource listings", icon: "heart" },
  { href: "/programs", label: "Programs", desc: "Yarchei Kallah, bulletins & more", icon: "calendar" },
  { href: "/about", label: "About", desc: "Our history since 1755", icon: "info" },
  { href: "/contact", label: "Contact", desc: "Get in touch with Hakhel", icon: "phone" },
];

function Dropdown({ label, links, isActive }: { label: string; links: typeof learnLinks; isActive: boolean }) {
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
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          isActive ? "text-primary" : "text-text-main hover:text-primary"
        }`}
      >
        {label}
        <Icon name="chevronDown" size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-64 bg-bg-pure rounded-xl border border-gray-100 shadow-warm-lg overflow-hidden z-50"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 px-4 py-3 hover:bg-bg-soft transition-colors"
              >
                <span className="text-accent mt-0.5">
                  <Icon name={link.icon} size={16} />
                </span>
                <div>
                  <p className="text-sm font-medium text-text-main">{link.label}</p>
                  <p className="text-xs text-text-muted">{link.desc}</p>
                </div>
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
  const pathname = usePathname();

  const learnActive = learnLinks.some((l) => pathname === l.href);
  const communityActive = communityLinks.some((l) => pathname === l.href);

  return (
    <nav className="sticky top-0 z-50 bg-bg-pure/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-main">
            Hakhel
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === "/" ? "text-primary" : "text-text-main hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Dropdown label="Learn" links={learnLinks} isActive={learnActive} />
          <Dropdown label="Community" links={communityLinks} isActive={communityActive} />
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://lp.constantcontactpages.com/su/opBjZAX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors"
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
              className={`block h-0.5 bg-text-main transition-transform ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-text-main transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-text-main transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
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
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 py-2.5 text-sm font-medium ${
                  pathname === "/" ? "text-primary" : "text-text-main"
                }`}
              >
                <span className="text-accent"><Icon name="home" size={16} /></span>
                Home
              </Link>

              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mt-4 mb-2">Learn</p>
              {learnLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 py-2.5 text-sm font-medium ${
                    pathname === link.href ? "text-primary" : "text-text-main"
                  }`}
                >
                  <span className="text-accent"><Icon name={link.icon} size={16} /></span>
                  {link.label}
                </Link>
              ))}

              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mt-4 mb-2">Community</p>
              {communityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 py-2.5 text-sm font-medium ${
                    pathname === link.href ? "text-primary" : "text-text-main"
                  }`}
                >
                  <span className="text-accent"><Icon name={link.icon} size={16} /></span>
                  {link.label}
                </Link>
              ))}

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
