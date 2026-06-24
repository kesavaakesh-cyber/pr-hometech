"use client";

import { motion } from "framer-motion";

/**
 * Wrap any block of content to make it fade + rise into view
 * once it's scrolled into the viewport. Animates once only
 * (viewport={{ once: true }}) so it doesn't replay on scroll-back,
 * which keeps the page feeling calm rather than jumpy.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  y = 32,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
