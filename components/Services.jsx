"use client";

import { motion } from "framer-motion";
import { WashingMachine, Snowflake, Tv, Wind, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Washing Machine Repair",
    desc: "Leakage, vibration, drum noise and spinning issues.",
    icon: WashingMachine,
    img: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Fridge Repair",
    desc: "No cooling, gas filling, compressor and freezer problems.",
    icon: Snowflake,
    img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "TV Repair",
    desc: "Display, sound, power and smart TV issues.",
    icon: Tv,
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "AC Service & Repair",
    desc: "Cooling issue, water dripping, gas refill and general service.",
    icon: Wind,
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <ScrollReveal>
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Our Services</span>
            <h2 className="max-w-2xl text-4xl md:text-5xl">
              Complete appliance repair for your home
            </h2>
          </div>
          <a href="tel:+919999999999" className="btn-primary">
            Book Service
          </a>
        </div>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map(({ title, desc, icon: Icon, img }, i) => (
          <ScrollReveal key={title} delay={i * 0.08}>
            <motion.article whileHover={{ y: -8 }} className="glass-panel group">
              <div className="relative overflow-hidden">
                <motion.img
                  src={img}
                  alt={title}
                  className="h-[230px] w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Glass gradient fade where the photo meets the card body */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(255,255,255,0.7), transparent)",
                  }}
                />
              </div>

              <div className="relative p-7 pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--glass-border-light)] bg-white/60 backdrop-blur-md">
                    <Icon className="text-[var(--amber-dark)]" size={26} />
                  </span>
                  <ArrowUpRight
                    className="text-[var(--ink-soft)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={20}
                  />
                </div>
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--ink-soft)]">{desc}</p>
              </div>
            </motion.article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
