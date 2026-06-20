import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section className="pt-36 pb-60 px-6 relative min-h-screen flex flex-col" id="home">
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-navy/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-navyLight/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          <div className="flex-1 space-y-10">
            <motion.div variants={fadeUp} transition={{ duration: 0.8 }}>
              <p className="text-navy font-mono text-lg tracking-widest uppercase mb-6">
                Aspiring AI/ML Engineer + Data Science
              </p>
              <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight">
                {personalInfo.name}
              </h1>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-6 items-center text-slate-600"
            >
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 px-6 py-3 bg-white/70 border border-navy/20 rounded-full hover:text-slate-900 hover:border-navy/50 transition-all text-base"
              >
                <Phone className="w-5 h-5 text-navy" />
                <span className="font-mono">{personalInfo.phone}</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 px-6 py-3 bg-white/70 border border-navy/20 rounded-full hover:text-slate-900 hover:border-navy/50 transition-all text-base"
              >
                <Mail className="w-5 h-5 text-navy" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/70 border border-navy/20 rounded-full hover:text-slate-900 hover:border-navy/50 transition-all text-base"
              >
                <Linkedin className="w-5 h-5 text-navy" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/70 border border-navy/20 rounded-full hover:text-slate-900 hover:border-navy/50 transition-all text-base"
              >
                <Github className="w-5 h-5 text-navy" />
                <span>GitHub</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a
                href="/Resume_AIML.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white/70 border border-navy/20 rounded-full hover:text-slate-900 hover:border-navy/50 transition-all font-semibold text-base"
              >
                Click Here For Resume
              </a>
            </motion.div>
          </div>
          
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 -mt-20"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-navy/40 overflow-hidden shadow-lg shadow-navy/20">
              <img 
                src="/profile.jpeg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
