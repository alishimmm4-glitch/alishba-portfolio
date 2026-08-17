import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects, profile } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-mono-ui uppercase tracking-wider text-accent-2">
          Open Source
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Latest <span className="gradient-text">Projects</span>
        </h2>
        <p className="mt-4 text-text-muted leading-relaxed">
          Check out my most recently updated open-source repositories on GitHub.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-strong text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          <FiGithub size={16} />
          View All on GitHub
          <FiExternalLink size={13} />
        </a>
      </div>
    </section>
  );
}
