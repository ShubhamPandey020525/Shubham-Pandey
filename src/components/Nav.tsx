import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy/10 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="font-display font-bold text-3xl tracking-tight">
          <span className="text-navy">S</span>P
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-body font-semibold text-base lg:text-lg transition-colors relative ${
                (link.href === "#" && activeSection === "") || activeSection === link.href.slice(1)
                  ? "text-navy"
                  : "text-slate-600 hover:text-navy"
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-navy"
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-navy/10"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-body font-semibold transition-colors ${
                  (link.href === "#" && activeSection === "") || activeSection === link.href.slice(1)
                    ? "bg-navy/10 text-navy"
                    : "text-slate-600 hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
