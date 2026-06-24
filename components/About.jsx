"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section grid gap-12 md:grid-cols-2">
      <ScrollReveal y={20}>
        <div className="grid grid-cols-2 gap-4">
          <div className="image-hover mt-10 overflow-hidden rounded-2xl border border-[var(--glass-border-light)] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
              className="h-[330px] w-full object-cover"
              alt="Repair tools laid out for service"
            />
          </div>
          <div className="image-hover overflow-hidden rounded-2xl border border-[var(--glass-border-light)] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
              className="h-[330px] w-full object-cover"
              alt="Technician providing home service"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <span className="eyebrow">About PR Home Tech</span>
        <h2 className="text-4xl leading-tight md:text-5xl">
          Professional appliance service with a personal touch
        </h2>
        <p className="mt-5 leading-8 text-[var(--ink-soft)]">
          We help homes in Coimbatore and Pollachi fix appliance problems quickly
          with trained technicians, clean inspection and clear communication.
        </p>

        <div className="mt-7 grid gap-3">
          {["Fast local response", "Experienced technicians", "Transparent service approach"].map(
            (item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="glass-panel flex items-center gap-3 px-5 py-4 font-bold"
              >
                <BadgeCheck className="text-[var(--amber-dark)]" /> {item}
              </motion.div>
            )
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
