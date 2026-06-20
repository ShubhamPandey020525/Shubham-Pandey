import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 relative min-h-screen flex flex-col" id="home">
      {/* Decorative circles */}
      <div className="absolute top-20 right-5 sm:right-20 w-60 sm:w-80 h-60 sm:h-80 bg-navy/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 left-5 sm:left-20 w-60 sm:w-96 h-60 sm:h-96 bg-navyLight/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col md:flex-row items-center gap-10 lg:gap-16"
        >
          <div className="flex-1 space-y-8 text-center md:text-left">
            <motion.div variants={fadeUp} transition={{ duration: 0.8 }}>
              <p className="text-navy font-mono text-sm sm:text-lg tracking-widest uppercase mb-4 sm:mb-6">
                Aspiring AI/ML Engineer + Data Science
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
                {personalInfo.name}
              </h1>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center md:justify-start text-slate-600"
            >
              <a
                href={`tel:${personalInfo.phone}`}
                style={{ backgroundColor: '#ffffff' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#1e4a8a';
                  e.currentTarget.style.borderColor = '#1e4a8a';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(20, 52, 100, 0.3)';
                }}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border border-navy/30 rounded-full hover:text-white transition-all text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-mono text-xs sm:text-base">{personalInfo.phone}</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{ backgroundColor: '#ffffff' }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#1e4a8a';
                  e.currentTarget.style.borderColor = '#1e4a8a';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.borderColor = 'rgba(20, 52, 100, 0.3)';
                }}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border border-navy/30 rounded-full hover:text-white transition-all text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-base">{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.linkedin}
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
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border border-navy/30 rounded-full hover:text-white transition-all text-sm sm:text-base"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-base">LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
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
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border border-navy/30 rounded-full hover:text-white transition-all text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-base">GitHub</span>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center md:justify-start"
            >
              <a
                href="/Resume_AIML.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-navy text-white border border-navy rounded-full hover:bg-navyLight transition-all font-semibold text-sm sm:text-base"
              >
                Click Here For Resume
              </a>
            </motion.div>
          </div>
          
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 order-first md:order-last"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full border-4 border-navy/40 overflow-hidden shadow-lg shadow-navy/20">
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
