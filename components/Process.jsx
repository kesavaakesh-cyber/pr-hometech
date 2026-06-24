"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  ["01", "Book a Service", "Call, WhatsApp or submit a quick enquiry."],
  ["02", "Technician Callback", "Our team confirms issue, location and timing."],
  ["03", "Doorstep Visit", "Technician inspects and explains the problem."],
  ["04", "Repair Complete", "Work is completed with clean service support."],
];

export default function Process() {
  return (
    <section id="process" className="section">
      <ScrollReveal>
        <span className="eyebrow">How It Works</span>
        <h2 className="max-w-2xl text-4xl md:text-5xl">
          Simple process for fast appliance repair
        </h2>
      </ScrollReveal>

      <div className="process-line mt-14">
        {steps.map(([num, title, desc], index) => (
          <motion.div
            key={title}
            className="process-item glass-panel"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.14, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="process-num">{num}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
