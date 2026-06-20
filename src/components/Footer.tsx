import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data";

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-navy/15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="font-display font-bold text-4xl">
            <span className="text-navy">S</span>P
          </div>
          <div className="flex gap-10 text-slate-600">
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-4 bg-white/50 rounded-full hover:text-navy hover:bg-navy/10 transition-all"
            >
              <Phone className="w-8 h-8" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-4 bg-white/50 rounded-full hover:text-navy hover:bg-navy/10 transition-all"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/50 rounded-full hover:text-navy hover:bg-navy/10 transition-all"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/50 rounded-full hover:text-navy hover:bg-navy/10 transition-all"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
          <p className="text-slate-500 text-xl">
            © 2026 {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};
