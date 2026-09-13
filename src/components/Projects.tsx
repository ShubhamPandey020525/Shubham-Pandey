import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { projects } from "../data";
import { SectionHeading } from "./SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Projects = () => {
  return (
    <section className="py-16 px-6" id="projects">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Projects" id="projects" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accentAlt opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold mb-1 text-slate-900">
                    {project.title}
                  </h3>
                  <span className="text-slate-900 font-mono text-sm">
                    {project.date}
                  </span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-slate-900 hover:text-slate-600 hover:bg-slate-100 hover:shadow-glow transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-0.5 glass-card !border-slate-200 !bg-slate-100 text-xs font-mono text-slate-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-slate-900 text-sm flex-1">
                {project.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-slate-900 mt-1">•</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: bullet.replace(
                          /<strong>([^<]+)<\/strong>/g,
                          '<strong class="text-slate-900 font-semibold">$1</strong>'
                        ),
                      }}
                    />
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
