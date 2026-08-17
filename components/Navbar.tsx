"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      className={`border-b transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-border-strong shadow-lg shadow-black/10"
          : "bg-bg/70 backdrop-blur-sm border-border"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/#home" className="flex items-center gap-2.5 font-display font-semibold text-lg tracking-tight">
          <span className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-accent/40 shrink-0">
            <Image src="/alishba-photo.png" alt="Alishba Shahid" fill sizes="36px" className="object-cover" />
          </span>
          Alishba Shahid
        </Link>

        <div className="hidden md:flex items-center gap-1 glass rounded-full p-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm px-4 py-2 rounded-full transition-colors ${
                active === link.href
                  ? "text-white"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full gradient-btn -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/cv"
            className="text-sm px-4 py-2 rounded-full gradient-btn text-white font-medium hover:opacity-90 transition-opacity"
          >
            Hire Me
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="h-9 w-9 grid place-items-center rounded-full border border-border"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden glass border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm transition-colors ${
                    active === link.href ? "text-accent" : "text-text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/cv"
                onClick={() => setOpen(false)}
                className="text-sm px-4 py-2 rounded-full gradient-btn text-white font-medium text-center"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
