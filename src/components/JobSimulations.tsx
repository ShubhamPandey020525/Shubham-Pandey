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
          className="space-y-8"
        >
          {jobSimulations.map((sim, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="bg-white border border-navy/15 rounded-2xl p-7 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl font-bold">
                      {sim.company}
                    </h3>
                    <span className="flex items-center gap-1.5 px-3 py-0.5 bg-navy/10 border border-navy/20 rounded-full text-xs font-mono text-navy font-semibold">
                      <Briefcase className="w-3.5 h-3.5" />
                      Job Simulation
                    </span>
                  </div>
                  <p className="text-navy font-semibold text-lg">{sim.role}</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <span className="text-slate-500 font-mono text-base">
                    {sim.date}
                  </span>
                  {sim.certificateLink && (
                    <a
                      href={sim.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: '#ffffff' }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#1e4a8a';
                        e.currentTarget.style.borderColor = '#1e4a8a';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.borderColor = 'rgba(20, 52, 100, 0.3)';
                      }}
                      className="flex items-center gap-2 px-5 py-2 border border-navy/30 rounded-full text-navy hover:text-white transition-all font-semibold text-sm"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <ul className="space-y-3 text-slate-700 text-base">
                {sim.bullets.map((bullet, j) => (
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
