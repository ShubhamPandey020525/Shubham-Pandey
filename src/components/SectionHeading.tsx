import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  id: string;
}

export const SectionHeading = ({ title, id }: SectionHeadingProps) => {
  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="font-display text-4xl md:text-5xl font-bold mb-10 flex items-center gap-4"
    >
      {title}
      <div className="h-1.5 flex-1 max-w-60 bg-gradient-to-r from-navy to-navyLight/0 rounded-full" />
    </motion.h2>
  );
};
