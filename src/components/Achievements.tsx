import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { achievements } from "../data";
import { SectionHeading } from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Achievements = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Achievements" id="achievements" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.2 }}
          className="relative pl-12 space-y-8"
        >
          <div className="absolute left-5 top-2 bottom-0 w-1 bg-gradient-to-b from-accent/50 to-transparent rounded-full" />
          {achievements.map((achievement, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-12 w-10 h-10 bg-white border-3 border-accent rounded-full flex items-center justify-center shadow-glow">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div className="flex gap-4 items-start glass-card p-6">
                <span className="text-slate-700 text-lg">{achievement}</span>
              </div>
            </motion.li>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
