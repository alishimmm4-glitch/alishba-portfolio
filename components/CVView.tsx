"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiDownload, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  profile,
  skillGroups,
  softSkills,
  projects,
  experience,
  educationHistory,
  languages,
} from "@/lib/data";

export default function CVView() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
        >
          <FiArrowLeft size={15} />
          Back to portfolio
        </Link>
        <a
          href="/Alishba-Shahid-Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-btn text-white font-medium text-sm hover:opacity-90 transition-opacity"
        >
          <FiDownload size={15} />
          Download PDF
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl overflow-hidden grid md:grid-cols-[1fr_2fr]"
      >
        {/* Sidebar */}
        <aside className="bg-bg-elevated-2 p-8 flex flex-col gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-32 w-32 rounded-full overflow-hidden relative ring-4 ring-accent/30">
              <Image
                src="/alishba-photo.png"
                alt="Alishba Shahid"
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
            <h1 className="mt-4 text-xl font-display font-semibold">{profile.name}</h1>
            <p className="text-sm text-accent-2">Computer Science</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-text-faint font-mono-ui mb-3 border-b border-border pb-2">
              Contact
            </p>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2 text-text-muted">
                <FiPhone className="mt-0.5 shrink-0" size={14} /> {profile.phone}
              </p>
              <p className="flex items-start gap-2 text-text-muted break-all">
                <FiMail className="mt-0.5 shrink-0" size={14} /> {profile.email}
              </p>
              <p className="flex items-start gap-2 text-text-muted">
                <FiMapPin className="mt-0.5 shrink-0" size={14} /> {profile.address}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-text-faint font-mono-ui mb-3 border-b border-border pb-2">
              Education
            </p>
            <div className="space-y-4">
              {educationHistory.map((item) => (
                <div key={item.degree}>
                  <p className="text-xs text-text-faint font-mono-ui">{item.period}</p>
                  <p className="text-sm font-medium mt-0.5">{item.degree}</p>
                  <p className="text-xs text-text-muted">{item.school}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-text-faint font-mono-ui mb-3 border-b border-border pb-2">
              Skills
            </p>
            <ul className="space-y-2">
              {skillGroups.map((g) => (
                <li key={g.label} className="text-xs text-text-muted leading-relaxed">
                  <span className="font-semibold text-text">{g.label}: </span>
                  {g.items}
                </li>
              ))}
            </ul>
            <ul className="mt-3 space-y-1.5">
              {softSkills.map((s) => (
                <li key={s} className="text-xs text-text-muted flex gap-1.5">
                  <span className="mt-1 h-1 w-1 rounded-full bg-accent-2 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <div className="p-8 sm:p-10">
          <section>
            <h2 className="text-xs font-mono-ui uppercase tracking-wider text-accent-2 mb-2 border-b border-border pb-2">
              About me
            </h2>
            <p className="text-sm text-text-muted leading-relaxed mt-3">
              {profile.summary}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-mono-ui uppercase tracking-wider text-accent-2 mb-3 border-b border-border pb-2">
              Experience
            </h2>
            {experience.map((item) => (
              <div key={item.role}>
                <p className="font-semibold text-sm">{item.org}</p>
                <ul className="mt-2 space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm text-text-muted leading-relaxed flex gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-mono-ui uppercase tracking-wider text-accent-2 mb-3 border-b border-border pb-2">
              Project
            </h2>
            {projects.map((project) => (
              <div key={project.slug} className="mb-4 last:mb-0">
                <p className="font-semibold text-sm">{project.title}</p>
                <p className="text-xs text-text-faint font-mono-ui mt-0.5 mb-2">
                  {project.stack.join(" · ")}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            ))}
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-mono-ui uppercase tracking-wider text-accent-2 mb-3 border-b border-border pb-2">
              Career Objective
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              {profile.careerObjective}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xs font-mono-ui uppercase tracking-wider text-accent-2 mb-3 border-b border-border pb-2">
              Language
            </h2>
            <ul className="space-y-1.5">
              {languages.map((l) => (
                <li key={l.name} className="text-sm">
                  <span className="font-semibold">{l.name}</span>{" "}
                  <span className="text-text-muted">— {l.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
