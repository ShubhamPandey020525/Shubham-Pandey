import { motion } from "framer-motion";
import { technicalSkills } from "../data";
import { SectionHeading } from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Skills = () => {
  return (
    <section className="py-16 px-6" id="skills">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Technical Skills" id="skills" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-6"
        >
          {Object.entries(technicalSkills).map(([category, skills], i) => (
            <motion.div key={i} variants={fadeUp} transition={{ duration: 0.6 }} className="glass-card p-6">
              <h3 className="font-display text-xl font-semibold mb-4 text-slate-900">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-5 py-2 glass-card text-base font-mono text-slate-900 hover:text-slate-900 hover:border-accent/50 hover:shadow-glow transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
