import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data";

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-navy/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <div className="font-display font-bold text-3xl sm:text-4xl">
            <span className="text-navy">S</span>P
          </div>
          <div className="flex gap-4 sm:gap-6 lg:gap-10 text-slate-600">
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-3 sm:p-4 bg-white border border-navy/20 rounded-full hover:text-white hover:bg-navy transition-all"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 sm:p-4 bg-white border border-navy/20 rounded-full hover:text-white hover:bg-navy transition-all"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white border border-navy/20 rounded-full hover:text-white hover:bg-navy transition-all"
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 bg-white border border-navy/20 rounded-full hover:text-white hover:bg-navy transition-all"
            >
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
          <p className="text-slate-500 text-base sm:text-lg lg:text-xl">
            © 2026 {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};
