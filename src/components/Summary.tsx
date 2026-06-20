import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Database, BrainCircuit, FolderGit2, Award, GraduationCap, Briefcase } from "lucide-react";
import { professionalSummary } from "../data";
import { SectionHeading } from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const highlights = [
  { icon: <Briefcase className="w-6 h-6 text-navy" />, text: "2 Job Simulations: BCG X & JPMorgan Chase" },
  { icon: <FolderGit2 className="w-6 h-6 text-navy" />, text: "5 Complete Projects including this Portfolio" },
  { icon: <Award className="w-6 h-6 text-navy" />, text: "5 Verified Professional Certifications" },
  { icon: <Sparkles className="w-6 h-6 text-navy" />, text: "Smart India Hackathon Participant" },
  { icon: <GraduationCap className="w-6 h-6 text-navy" />, text: "Final Year Computer Science Engineering Student" },
];

export const Summary = () => {
  return (
    <section className="py-16 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About" id="about" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              {professionalSummary.split(/(Agentic AI|Generative AI|Retrieval-Augmented Generation \(RAG\)|Computer Vision|Deep Learning|Machine Learning)/).map((part, i) => {
                const isHighlight = [
                  "Agentic AI",
                  "Generative AI",
                  "Retrieval-Augmented Generation (RAG)",
                  "Computer Vision",
                  "Deep Learning",
                  "Machine Learning",
                ].includes(part);
                return (
                  <span
                    key={i}
                    className={isHighlight ? "text-navy font-semibold" : ""}
                  >
                    {part}
                  </span>
                );
              })}
            </p>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="grid gap-4">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/70 border border-navy/10 rounded-2xl p-6"
              >
                {highlight.icon}
                <span className="text-slate-800 text-lg font-medium">{highlight.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
