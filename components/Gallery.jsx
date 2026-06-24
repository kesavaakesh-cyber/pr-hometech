"use client";

import ScrollReveal from "./ScrollReveal";

const images = [
  ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80", "Repair tools ready for service"],
  ["https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80", "Technician at work"],
  ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80", "Doorstep home service"],
  ["https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80", "AC service and repair"],
];

export default function Gallery() {
  return (
    <section className="section">
      <ScrollReveal>
        <span className="eyebrow">Work Gallery</span>
        <h2 className="max-w-2xl text-4xl md:text-5xl">
          Clean repair work, real service experience
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {images.map(([img, alt], i) => (
          <ScrollReveal key={img} delay={i * 0.08} className={i % 2 ? "md:mt-10" : ""}>
            <div className="image-hover overflow-hidden rounded-2xl border border-[var(--glass-border-light)] shadow-lg">
              <img src={img} alt={alt} className="h-[300px] w-full object-cover" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
