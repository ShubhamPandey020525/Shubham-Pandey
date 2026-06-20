import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data";
import { SectionHeading } from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Education = () => {
  return (
    <section className="py-16 px-6" id="education">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Education" id="education" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.25 }}
          className="relative pl-12 space-y-10"
        >
          <div className="absolute left-5 top-2 bottom-0 w-1 bg-navy/30 rounded-full" />
          {education.map((edu, i) => (
            <motion.div key={i} variants={fadeUp} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute -left-12 w-10 h-10 bg-white border-3 border-navy rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-navy" />
              </div>
              <div className="bg-white border border-navy/15 rounded-2xl p-7">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <h3 className="font-display text-2xl font-bold text-slate-800">{edu.institution}</h3>
                  <span className="text-slate-500 font-mono text-base">{edu.dates}</span>
                </div>
                <p className="text-navy font-semibold text-lg mb-2">{edu.degree}</p>
                <p className="text-slate-700 text-base">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
