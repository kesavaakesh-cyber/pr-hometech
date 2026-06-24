"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, ShieldCheck, Clock, Star } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Three depth layers move at different speeds — the core parallax illusion
  const orbsSlowY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const orbsFastY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      <div className="mesh-bg" />

      {/* Layer 1 — large soft glass orbs, slow drift */}
      <motion.div className="parallax-layer" style={{ y: orbsSlowY }}>
        <div className="glass-orb" style={{ width: 280, height: 280, top: "8%", left: "4%" }} />
        <div className="glass-orb" style={{ width: 180, height: 180, top: "58%", left: "78%" }} />
      </motion.div>

      {/* Layer 2 — smaller orbs, fast drift (closer to viewer) */}
      <motion.div className="parallax-layer" style={{ y: orbsFastY }}>
        <div className="glass-orb" style={{ width: 90, height: 90, top: "26%", left: "70%" }} />
        <div className="glass-orb" style={{ width: 60, height: 60, top: "72%", left: "12%" }} />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="section grid min-h-screen items-center gap-12 pt-32 md:grid-cols-2"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow on-dark"
          >
            Coimbatore &amp; Pollachi Doorstep Service
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-5xl leading-[1.05] text-white md:text-7xl"
          >
            Your appliance breaks down.
            <br />
            <span className="text-[var(--amber)]">We show up fast.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
          >
            Washing machine, fridge, TV and AC repair — at your door, with
            transparent pricing and a technician who explains the problem
            before fixing it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a className="btn-primary" href="tel:+919999999999">
              <Phone size={19} /> Call Technician
            </a>
            <a className="btn-glass" href="https://wa.me/919999999999">
              <MessageCircle size={19} /> WhatsApp Booking
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="glass-panel-dark mt-8 flex items-center gap-3 p-4"
          >
            <ShieldCheck className="text-[var(--amber)]" />
            <b className="text-white">
              No hidden charges &middot; Service warranty support
            </b>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="relative"
        >
          <div className="image-hover relative overflow-hidden rounded-[22px] border border-white/15 shadow-2xl">
            <motion.img
              animate={{ scale: [1, 1.035, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
              alt="Technician repairing a home appliance"
              className="h-[480px] w-full object-cover"
            />
            {/* Glass sheen over the photo for cohesion with the rest of the page */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.12), transparent 40%)",
              }}
            />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="floating-card -bottom-6 -left-6"
          >
            <Clock className="text-[var(--amber)]" />
            <div>
              <b>30 Min Callback</b>
              <p>Fast response</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="floating-card -right-6 top-10"
          >
            <Star className="text-[var(--amber)]" fill="currentColor" />
            <div>
              <b>4.9 Rating</b>
              <p>Trusted service</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
