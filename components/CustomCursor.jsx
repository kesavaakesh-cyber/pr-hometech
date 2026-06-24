"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 450, damping: 35 });
  const y = useSpring(mouseY, { stiffness: 450, damping: 35 });

  useEffect(() => {
    // Only enable on devices with a real mouse (desktop), never on touch
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    document.body.classList.add("cursor-enabled");

    const move = (e) => {
      mouseX.set(e.clientX - 18);
      mouseY.set(e.clientY - 18);
    };

    // Event delegation: works even for elements added after mount (cards, modals, etc.)
    const enter = (e) => {
      if (e.target.closest("a, button")) setHovered(true);
    };
    const leave = (e) => {
      if (e.target.closest("a, button")) setHovered(false);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);

    return () => {
      document.body.classList.remove("cursor-enabled");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`custom-cursor hidden md:block ${hovered ? "cursor-hover" : ""}`}
      style={{ x, y }}
    />
  );
}