import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
];

export const Nav = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY < 100) {
        setActiveSection("");
      } else {
        const sections = navLinks.filter(link => link.href !== "#").map((link) => link.href.slice(1));
        const scrollPosition = window.scrollY + 150;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (
            element &&
            element.offsetTop <= scrollPosition &&
            element.offsetTop + element.offsetHeight > scrollPosition
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-navy/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="font-display font-bold text-4xl tracking-tight">
          <span className="text-navy">S</span>P
        </div>
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-body font-semibold text-lg transition-colors relative ${
                (link.href === "#" && activeSection === "") || activeSection === link.href.slice(1)
                  ? "text-navy"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.name}
              {((link.href === "#" && activeSection === "") || activeSection === link.href.slice(1)) && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-navy rounded-full"
                />
              )}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};
