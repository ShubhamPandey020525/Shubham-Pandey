import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
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
        <SectionHeading title="Work Experience" id="experience" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.25 }}
          className="relative pl-12 space-y-10"
        >
          <div className="absolute left-5 top-2 bottom-0 w-1 bg-gradient-to-b from-accent/50 to-transparent rounded-full" />
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-12 w-10 h-10 bg-white border-3 border-accent rounded-full flex items-center justify-center shadow-glow">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <div className="glass-card p-7">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-slate-900">
                    {exp.company}
                  </h3>
                  <p className="text-accent font-semibold text-lg">{exp.role}</p>
                </div>
                <div>
                  <span className="text-slate-400 font-mono text-base">
                    {exp.date}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-slate-600 text-base">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-accent mt-1.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
