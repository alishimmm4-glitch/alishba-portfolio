"use client";

import { motion } from "framer-motion";
import { FiTarget, FiBookOpen, FiCompass, FiGlobe } from "react-icons/fi";
import { education, profile, languages } from "@/lib/data";

const cards = [
  {
    icon: FiBookOpen,
    label: "Education",
    value: education.degree,
    detail: education.school,
  },
  {
    icon: FiTarget,
    label: "Focus",
    value: "MERN Stack Engineering",
    detail: "React · Node.js · Express · MongoDB",
  },
  {
    icon: FiCompass,
    label: "Looking for",
    value: "Internships & full-time roles",
    detail: "Remote or on-site in Lahore",
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div>
          <p className="text-xs font-mono-ui uppercase tracking-wider text-accent-2">
            Who I am
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-6 text-text-muted leading-relaxed">
            I&apos;m a {education.degree} graduate of {education.school}, and a
            full stack developer who likes finishing what I start — a project
            isn&apos;t done when it works on my laptop, it&apos;s done when
            someone else can log in and use it.
          </p>
          <p className="mt-4 text-text-muted leading-relaxed">
            My path into engineering has been hands-on from day one:
            university coursework paired with self-taught MERN development,
            building real applications like a blood donation platform and an
            AI-assisted test generator rather than only following tutorials.
            I care about clean component structure, APIs that make sense a
            year later, and interfaces that don&apos;t make people think.
          </p>
          <p className="mt-4 text-text-muted leading-relaxed">
            {profile.careerObjective}
          </p>

          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 text-xs font-mono-ui px-3 py-1.5 rounded-full glass text-text-muted">
              <FiGlobe size={13} className="text-accent-2" />
              {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-2xl p-6 ${
                i === 2 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="h-10 w-10 rounded-xl grid place-items-center bg-accent-soft text-accent mb-4">
                <card.icon size={18} />
              </div>
              <p className="text-xs uppercase tracking-wider text-text-faint font-mono-ui">
                {card.label}
              </p>
              <p className="mt-2 font-medium leading-snug">{card.value}</p>
              <p className="text-sm text-text-muted mt-1">{card.detail}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sm:col-span-2 rounded-2xl p-6 border border-border-strong"
          >
            <p className="text-sm text-text-muted leading-relaxed">
              <span className="text-text font-medium">Currently based in </span>
              {profile.location} — open to remote work worldwide and on-site
              roles locally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
