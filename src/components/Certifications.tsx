import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications, personalInfo } from "../data";
import { SectionHeading } from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Certifications = () => {
  return (
    <section className="py-16 px-6" id="certifications">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Certifications" id="certifications" />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-slate-400 text-lg mb-10 text-center max-w-2xl mx-auto"
        >
          I have completed <strong className="text-slate-900">18+ professional certifications</strong>. To view the full list, please visit my <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent underline font-semibold hover:text-accentAlt transition-colors">LinkedIn profile</a>. Below are my featured certifications and industry job simulations in the AI/ML field.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
          className="relative pl-12 space-y-8"
        >
          <div className="absolute left-5 top-2 bottom-0 w-1 bg-gradient-to-b from-accent/50 to-transparent rounded-full" />
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute -left-12 w-10 h-10 bg-white border-3 border-accent rounded-full flex items-center justify-center shadow-glow z-10 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card p-7 transition-all"
              >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h3 className="font-semibold text-xl group-hover:text-accent transition-colors text-slate-900">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-base">{cert.issuer}</p>
                </div>
                <span
                  className="flex items-center gap-2 text-slate-600 text-base font-semibold px-5 py-2 glass-card group-hover:text-accent group-hover:shadow-glow transition-all"
                >
                  Verify
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
