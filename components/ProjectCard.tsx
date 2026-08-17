"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiClock } from "react-icons/fi";
import { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasRepo = Boolean(project.github);
  const hasDemo = Boolean(project.demo);
  const repoName = hasRepo ? project.github.replace(/\/$/, "").split("/").pop() : project.slug;

  const headerContent = (
    <>
      <span className="flex items-center gap-2.5 min-w-0">
        <FiGithub size={16} className="text-text-faint shrink-0" />
        <span className="text-sm font-mono-ui font-medium truncate">{repoName}</span>
      </span>
      {hasRepo ? (
        <FiExternalLink size={14} className="text-text-faint shrink-0" />
      ) : (
        <span className="text-[10px] font-mono-ui uppercase tracking-wide text-text-faint shrink-0">
          Soon
        </span>
      )}
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-2xl p-6 flex flex-col h-full hover:border-accent/40 transition-colors"
    >
      {hasRepo ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3"
        >
          {headerContent}
        </a>
      ) : (
        <div className="flex items-center justify-between gap-3">{headerContent}</div>
      )}

      <p className="mt-3 text-sm text-text-muted leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="mt-4 flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1.5 text-xs text-text-faint">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-2" />
          {project.stack[0]}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        {hasRepo ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-border-strong text-xs font-medium hover:border-accent hover:text-accent transition-colors"
          >
            <FiGithub size={13} />
            GitHub
          </a>
        ) : (
          <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-border text-xs font-medium text-text-faint cursor-not-allowed">
            <FiClock size={13} />
            GitHub soon
          </span>
        )}

        {hasDemo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full gradient-btn text-white text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <FiExternalLink size={13} />
            Live Demo
          </a>
        ) : (
          <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-border text-xs font-medium text-text-faint cursor-not-allowed">
            <FiClock size={13} />
            Demo soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
