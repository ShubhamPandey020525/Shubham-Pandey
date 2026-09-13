import { motion } from "framer-motion";
import { ExternalLink, Briefcase } from "lucide-react";
import { jobSimulations } from "../data";
import { SectionHeading } from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const JobSimulations = () => {
  return (
    <section className="py-16 px-6" id="simulations">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Job Simulations" id="simulations" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.25 }}
          className="relative pl-12 space-y-10"
        >
          <div className="absolute left-5 top-2 bottom-0 w-1 bg-gradient-to-b from-accent/50 to-transparent rounded-full" />
          {jobSimulations.map((sim, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-12 w-10 h-10 bg-white border-3 border-accent rounded-full flex items-center justify-center shadow-glow">
                <Briefcase className="w-5 h-5 text-slate-900" />
              </div>
              <div className="glass-card p-7">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {sim.company}
                    </h3>
                    <span className="flex items-center gap-1.5 px-3 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-xs font-mono text-slate-900 font-semibold">
                      <Briefcase className="w-3.5 h-3.5" />
                      Job Simulation
                    </span>
                  </div>
                  <p className="text-slate-900Alt font-semibold text-lg">{sim.role}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <span className="text-slate-900 font-mono text-base">
                    {sim.date}
                  </span>
                  {sim.certificateLink && (
                    <a
                      href={sim.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 glass-card text-slate-900 hover:text-slate-600 transition-all font-semibold text-sm group"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4 transition-colors" />
                    </a>
                  )}
                </div>
              </div>
              <ul className="space-y-3 text-slate-900 text-base">
                {sim.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-slate-900 mt-1.5">•</span>
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
