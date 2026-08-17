"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiDownload, FiMail } from "react-icons/fi";
import { profile } from "@/lib/data";
import Pulseline from "./Pulseline";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 md:pt-20 pb-24">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-25"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="pointer-events-none absolute top-64 right-[-10%] h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--accent-2)" }}
      />

      <div className="max-w-4xl mx-auto px-6 relative flex flex-col items-center text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 text-xs font-mono-ui uppercase tracking-wider px-4 py-2 rounded-full glass text-accent-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
          {profile.availability}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]"
        >
          Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-5 text-text-muted text-lg sm:text-xl max-w-2xl"
        >
          {profile.title} &middot; {profile.subtitle}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-3 text-sm text-text-faint font-mono-ui"
        >
          Based in {profile.location} &middot; React &middot; Node.js &middot; Express &middot; MongoDB
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-btn text-white font-medium text-sm hover:opacity-90 transition-all"
          >
            <FiDownload size={15} />
            Download Resume
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-strong text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <FiMail size={15} />
            Get In Touch
          </a>
        </motion.div>

        <div className="mt-16 flex flex-col items-center gap-2 text-text-faint">
          <span className="text-xs font-mono-ui tracking-widest uppercase">Scroll</span>
          <span className="w-px h-4 bg-current opacity-40" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16">
        <Pulseline className="w-full h-10" />
      </div>
    </section>
  );
}
