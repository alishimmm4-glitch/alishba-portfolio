import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile, navLinks } from "@/lib/data";
import Pulseline from "./Pulseline";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <Pulseline className="w-full h-6 opacity-30" animated={false} />
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5 font-display font-semibold text-lg">
            <span className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-accent/40 shrink-0">
              <Image src="/alishba-photo.png" alt="Alishba Shahid" fill sizes="36px" className="object-cover" />
            </span>
            Alishba Shahid
          </p>
          <p className="text-sm text-text-muted mt-3 max-w-xs">
            Full Stack Developer building considered, dependable web products
            from Lahore, Pakistan.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <FiMail size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-text-faint font-mono-ui">
            Quick links
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-text-faint font-mono-ui">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-muted">
            <li>{profile.email}</li>
            <li>{profile.phone}</li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-faint">
          <p>&copy; {new Date().getFullYear()} Alishba Shahid. All rights reserved.</p>
          <p className="font-mono-ui">Built with Next.js, Tailwind &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
