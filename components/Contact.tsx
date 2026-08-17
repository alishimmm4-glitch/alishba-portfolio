"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { profile } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const fullName = `${form.firstName} ${form.lastName}`.trim();
    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${fullName || "a visitor"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${fullName}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contactItems = [
    { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: FiMapPin, label: "Address", value: profile.address, href: undefined },
    { icon: FiGithub, label: "GitHub", value: "alishimmm4-glitch", href: profile.github },
    { icon: FiLinkedin, label: "LinkedIn", value: "Alishba Shahid", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-mono-ui uppercase tracking-wider text-accent-2">
          Let&apos;s talk
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="mt-4 text-text-muted leading-relaxed">
          Have a role, project, or collaboration in mind? Send a message and
          I&apos;ll get back to you — usually within a day.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-7 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                required
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                placeholder="Alishba"
                className="mt-2 w-full rounded-xl bg-bg-elevated border border-border px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                required
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                placeholder="Shahid"
                className="mt-2 w-full rounded-xl bg-bg-elevated border border-border px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl bg-bg-elevated border border-border px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="Project Inquiry / Collaboration / Hire"
              className="mt-2 w-full rounded-xl bg-bg-elevated border border-border px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project, role, or timeline..."
              className="mt-2 w-full rounded-xl bg-bg-elevated border border-border px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-btn text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <FiSend size={15} />
            Send Message
          </button>
          {sent && (
            <p className="text-sm text-accent-2 text-center">
              Your email app should be opening now — thanks for reaching out!
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-7"
        >
          <h3 className="font-display font-semibold text-lg mb-6">
            Contact Information
          </h3>
          <div className="space-y-5">
            {contactItems.map((item) => {
              const content = (
                <>
                  <div className="h-11 w-11 shrink-0 rounded-xl grid place-items-center bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    <item.icon size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-text-faint font-mono-ui uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium group-hover:text-accent transition-colors">
                      {item.value}
                    </p>
                  </div>
                </>
              );
              if (!item.href) {
                return (
                  <div key={item.label} className="flex items-center gap-4 group">
                    {content}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  {content}
                </a>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-border flex items-center gap-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-accent-2" />
            <span className="text-accent-2 font-medium">Available for Work</span>
          </div>
          <p className="text-sm text-text-muted mt-2 leading-relaxed">
            Open to internships, freelance projects and full-time roles.
            I typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
