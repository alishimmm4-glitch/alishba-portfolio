"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { educationHistory } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 pb-24">
      <div className="max-w-2xl mb-8">
        <p className="text-xs font-mono-ui uppercase tracking-wider text-accent-2">
          Academic background
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
          Education
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {educationHistory.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-7"
          >
            <div className="h-12 w-12 rounded-2xl grid place-items-center bg-accent-2-soft text-accent-2 mb-4">
              <FiAward size={20} />
            </div>
            <p className="text-xs uppercase tracking-wider text-text-faint font-mono-ui">
              {item.period}
            </p>
            <h3 className="mt-1 font-display font-semibold leading-snug">
              {item.degree}
            </h3>
            <p className="text-text-muted text-sm mt-1">{item.school}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
