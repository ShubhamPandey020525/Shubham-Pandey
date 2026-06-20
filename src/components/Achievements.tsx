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
          className="space-y-6"
        >
          {achievements.map((achievement, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex gap-4 items-start bg-white/80 border border-navy/10 rounded-2xl p-6"
            >
              <Sparkles className="w-6 h-6 text-navy shrink-0" />
              <span className="text-slate-800 text-lg">{achievement}</span>
            </motion.li>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
