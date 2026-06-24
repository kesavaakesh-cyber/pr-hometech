"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, BadgeCheck, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const items = [
  ["Quick Response", "Fast callback and same-day support.", Clock],
  ["Service Warranty", "Warranty support for selected repair and spares.", ShieldCheck],
  ["No Hidden Charges", "Clear pricing explanation before work starts.", BadgeCheck],
  ["Local Technicians", "Coimbatore, Pollachi and nearby areas.", MapPin],
];

export default function WhyChoose() {
  return (
    <section className="section">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[22px] p-8 md:p-14">
          <div className="mesh-bg" />
          <div className="relative">
            <span className="badge !bg-white/12 !text-[var(--amber-light)]">Why Choose Us</span>
            <h2 className="mt-5 max-w-2xl text-4xl text-white md:text-5xl">
              Built for quick booking and trusted service
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {items.map(([title, desc, Icon], i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="glass-panel-dark p-5"
                >
                  <Icon className="mb-4 text-[var(--amber)]" />
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
