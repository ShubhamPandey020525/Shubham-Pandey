import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experience } from "../data";
import { SectionHeading } from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Experience = () => {
  return (
    <section className="py-16 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Experience" id="experience" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.25 }}
          className="space-y-8"
        >
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="bg-white border border-navy/15 rounded-2xl p-7 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-navy font-semibold text-lg">{exp.role}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <span className="text-slate-500 font-mono text-base">
                    {exp.date}
                  </span>
                  <a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-white border border-navy/30 rounded-full text-navy hover:bg-navy hover:text-white hover:border-navy transition-all font-semibold text-sm"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700 text-base">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-navy mt-1.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
