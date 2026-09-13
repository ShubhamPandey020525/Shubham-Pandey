import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data";

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-8 items-center">
          <div className="font-display font-bold text-3xl sm:text-4xl text-slate-900">
            <span className="text-slate-900">S</span>P
          </div>
          <div className="flex gap-4 sm:gap-6 lg:gap-10 text-slate-900">
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-3 sm:p-4 glass-card text-slate-900 hover:text-slate-600 hover:shadow-glow transition-all group"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 sm:p-4 glass-card text-slate-900 hover:text-slate-600 hover:shadow-glow transition-all group"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 glass-card text-blue-600 hover:text-slate-600 hover:shadow-glow transition-all group"
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 glass-card text-slate-900 hover:text-slate-600 hover:shadow-glow transition-all group"
            >
              <Github className="w-6 h-6 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          <p className="text-slate-900 text-base sm:text-lg lg:text-xl">
            © 2026 {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};
