"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiTool, FiUploadCloud } from "react-icons/fi";
import { skills, Skill } from "@/lib/data";

const groups: { key: Skill["category"]; label: string; subtitle: string; icon: typeof FiCode }[] = [
  { key: "Frontend", label: "Frontend", subtitle: "Interfaces people actually enjoy using", icon: FiCode },
  { key: "Backend", label: "Backend", subtitle: "APIs, auth and server-side logic", icon: FiServer },
  { key: "Database", label: "Database", subtitle: "Where the data actually lives", icon: FiDatabase },
  { key: "Tools", label: "Tools", subtitle: "Development & design workflow", icon: FiTool },
  { key: "Deployment", label: "Deployment", subtitle: "Shipping it to the real world", icon: FiUploadCloud },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-mono-ui uppercase tracking-wider text-accent-2">
          Technical arsenal
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h2>
        <p className="mt-4 text-text-muted leading-relaxed">
          The stack I reach for most: React on the front, Node and Express
          underneath, MongoDB holding the data — and the tools that keep the
          workflow honest.
        </p>
      </div>

      <div className="mt-14 space-y-14">
        {groups.map((group, gi) => (
          <div key={group.key}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-12 w-12 rounded-2xl grid place-items-center bg-accent-2-soft text-accent-2 shrink-0">
                <group.icon size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">{group.label}</h3>
                <p className="text-sm text-text-muted">{group.subtitle}</p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills
                .filter((s) => s.category === group.key)
                .map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: si * 0.06 }}
                    className="glass rounded-2xl p-5"
                  >
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-semibold text-sm">{skill.name}</span>
                      <span className="text-xs font-mono-ui px-2.5 py-1 rounded-full border border-border text-text-muted shrink-0">
                        {skill.label}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-border overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full gradient-btn"
                      />
                    </div>
                    <div className="flex items-baseline justify-between text-xs mt-2">
                      <span className="text-text-faint">Proficiency</span>
                      <span className="text-text-faint font-mono-ui">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
