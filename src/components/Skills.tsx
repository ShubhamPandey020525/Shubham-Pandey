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
            <motion.div key={i} variants={fadeUp} transition={{ duration: 0.6 }} className="bg-white/80 border border-navy/10 rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold mb-4 text-slate-800">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-5 py-2 border border-navy/30 rounded-full text-base font-mono text-navy hover:bg-navy hover:text-white transition-all cursor-default"
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
