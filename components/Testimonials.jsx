"use client";

import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  ["Quick response and neat service. Fridge issue fixed the same day.", "Anitha R.", "Coimbatore"],
  ["Technician explained clearly. No hidden charges.", "Suresh K.", "Pollachi"],
  ["Best washing machine service in Pollachi. Professional work.", "Divya M.", "Pollachi"],
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section">
      <ScrollReveal>
        <span className="eyebrow">Testimonials</span>
        <h2 className="max-w-2xl text-4xl md:text-5xl">Trusted by local customers</h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {reviews.map(([review, name, place], i) => (
          <ScrollReveal key={review} delay={i * 0.1}>
            <article className="glass-panel h-full p-7">
              <div className="mb-4 flex text-[var(--amber)]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="leading-7 text-[var(--ink-soft)]">&ldquo;{review}&rdquo;</p>
              <p className="mt-5 text-sm font-bold text-[var(--ink)]">
                {name} <span className="text-[var(--ink-soft)] font-normal">&middot; {place}</span>
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
