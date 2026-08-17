"use client";

import { motion } from "framer-motion";

export default function Pulseline({
  className = "",
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  const path =
    "M0,40 L140,40 L165,40 L180,10 L200,70 L220,40 L250,40 L270,20 L285,40 L400,40 L440,40 L465,40 L480,10 L500,70 L520,40 L550,40 L570,20 L585,40 L700,40 L740,40 L765,40 L780,10 L800,70 L820,40 L850,40 L870,20 L885,40 L1000,40 L1040,40 L1065,40 L1080,10 L1100,70 L1120,40 L1150,40 L1170,20 L1185,40 L1300,40 L1440,40";

  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={path}
        fill="none"
        stroke="url(#pulse-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
        whileInView={animated ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="pulse-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
