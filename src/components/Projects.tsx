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
          className="space-y-6"
        >
          {/* First Row - 2 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="bg-white border border-navy/15 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-1">
                      {project.title}
                    </h3>
                    <span className="text-slate-500 font-mono text-sm">
                      {project.date}
                    </span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-navy/10 rounded-full text-slate-600 hover:text-white hover:bg-navy transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-0.5 bg-navy/10 border border-navy/30 rounded-full text-xs font-mono text-navy"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-slate-700 text-sm flex-1">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-navy mt-1">•</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: bullet.replace(
                            /<strong>([^<]+)<\/strong>/g,
                            '<strong class="text-navy font-semibold">$1</strong>'
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(2, 4).map((project, i) => (
              <motion.div
                key={i + 2}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-white border border-navy/15 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold mb-1">
                      {project.title}
                    </h3>
                    <span className="text-slate-500 font-mono text-sm">
                      {project.date}
                    </span>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-navy/10 rounded-full text-slate-600 hover:text-white hover:bg-navy transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-0.5 bg-navy/10 border border-navy/30 rounded-full text-xs font-mono text-navy"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-slate-700 text-sm flex-1">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-navy mt-1">•</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: bullet.replace(
                            /<strong>([^<]+)<\/strong>/g,
                            '<strong class="text-navy font-semibold">$1</strong>'
                          ),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Third Row - 1 Centered Project */}
          <div className="flex justify-center">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-navy/15 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col w-full md:max-w-[600px]"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">
                    {projects[4].title}
                  </h3>
                  <span className="text-slate-500 font-mono text-sm">
                    {projects[4].date}
                  </span>
                </div>
                <a
                  href={projects[4].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-navy/10 rounded-full text-slate-600 hover:text-white hover:bg-navy transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {projects[4].stack.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-0.5 bg-navy/10 border border-navy/30 rounded-full text-xs font-mono text-navy"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-slate-700 text-sm flex-1">
                {projects[4].bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-navy mt-1">•</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: bullet.replace(
                          /<strong>([^<]+)<\/strong>/g,
                          '<strong class="text-navy font-semibold">$1</strong>'
                        ),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
