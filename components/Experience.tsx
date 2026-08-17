"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience, responsibilities } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-mono-ui uppercase tracking-wider text-accent-2">
          Where I&apos;ve worked
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Experience
        </h2>
      </div>

      <div className="mt-14 grid lg:grid-cols-[1fr_320px] gap-10">
        <div className="relative pl-8 border-l border-border">
          {experience.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-4"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3.5 w-3.5 rounded-full gradient-btn" />
              <div className="glass rounded-2xl p-7">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-xl grid place-items-center bg-accent-soft text-accent">
                    <FiBriefcase size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg leading-snug">
                      {item.role}
                    </h3>
                    <p className="text-sm text-accent-2 mt-0.5">{item.org}</p>
                    <p className="text-xs text-text-faint font-mono-ui mt-1">
                      {item.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-text-muted leading-relaxed flex gap-2.5"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono-ui px-2.5 py-1 rounded-full border border-border text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-7 h-fit"
        >
          <p className="text-xs uppercase tracking-wider text-text-faint font-mono-ui">
            Core responsibilities
          </p>
          <ul className="mt-4 space-y-3">
            {responsibilities.map((r) => (
              <li key={r} className="text-sm flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
