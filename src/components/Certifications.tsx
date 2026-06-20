import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "../data";
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
          className="space-y-4"
        >
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="block bg-white border border-navy/15 rounded-2xl p-7 hover:border-navy hover:shadow-lg transition-all group hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <h3 className="font-semibold text-xl group-hover:text-navy transition-colors text-slate-800">
                    {cert.title}
                  </h3>
                  <p className="text-slate-500 text-base">{cert.issuer}</p>
                </div>
                <span className="flex items-center gap-2 text-navy text-base font-semibold px-5 py-2 bg-navy/10 border border-navy/30 rounded-full hover:bg-navy hover:text-white transition-all">
                  Verify
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
