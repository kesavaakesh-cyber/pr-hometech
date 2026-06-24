"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
  return (
    <>
      {/* Desktop: floating WhatsApp bubble, bottom-right */}
      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl md:flex"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      >
        <MessageCircle size={30} />
      </motion.a>

      {/* Mobile: sticky bottom bar with Call + WhatsApp, always reachable */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-[var(--glass-border-light)] bg-white/70 p-3 backdrop-blur-xl shadow-[0_-8px_30px_rgba(15,23,42,0.12)] md:hidden">
        <a
          href="tel:+919999999999"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--ink)] py-3 font-bold text-white"
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 font-bold text-white"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </>
  );
}
