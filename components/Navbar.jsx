"use client";

import { motion, useScroll } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Process", "#process"],
    ["Reviews", "#reviews"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      {/* Sticky scroll progress — gives a sense of "how far through the page" */}
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <header className="fixed left-4 right-4 top-4 z-50">
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between rounded-2xl border border-[var(--glass-border-light)] bg-white/55 px-5 py-4 shadow-lg backdrop-blur-2xl backdrop-saturate-150">
          <h1 className="text-xl text-[var(--ink)]">PR Home Tech</h1>

          <div className="hidden gap-7 text-sm font-bold text-[var(--ink-soft)] md:flex">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-[var(--amber-dark)]">
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="tel:+919999999999" className="btn-primary !hidden !px-4 !py-2.5 md:!flex">
              <Phone size={17} /> Call
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="rounded-lg p-2 text-[var(--ink)] md:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex flex-col gap-1 rounded-2xl border border-[var(--glass-border-light)] bg-white/70 p-3 shadow-lg backdrop-blur-2xl md:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 font-bold text-[var(--ink)] hover:bg-[var(--cream-dim)]"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </header>
    </>
  );
}
