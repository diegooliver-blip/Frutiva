"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sabores", label: "Sabores" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 py-2 rounded-full transition-all duration-500",
          isScrolled
            ? "glass shadow-elevated border border-white/20"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-1">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#inicio")}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-black/5 transition-colors"
          >
            <Leaf className={cn(
              "w-5 h-5 transition-colors duration-300",
              isScrolled ? "text-frutiva-primary" : "text-white"
            )} />
            <span className={cn(
              "font-display text-lg tracking-wide transition-colors duration-300",
              isScrolled ? "text-frutiva-dark" : "text-white"
            )}>
              Frutiva
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  isScrolled
                    ? activeSection === link.href.replace("#", "")
                      ? "text-frutiva-primary"
                      : "text-stone-600 hover:text-frutiva-dark"
                    : activeSection === link.href.replace("#", "")
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className={cn(
                      "absolute inset-0 rounded-full -z-10",
                      isScrolled ? "bg-frutiva-primary/10" : "bg-white/15"
                    )}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("#contacto")}
            className={cn(
              "hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
              isScrolled
                ? "bg-frutiva-primary text-white hover:bg-frutiva-dark shadow-glow"
                : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
            )}
          >
            Cotizar
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-full transition-colors",
              isScrolled ? "text-frutiva-dark" : "text-white"
            )}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-frutiva-dark/95 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-3xl font-display text-white hover:text-frutiva-lime transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollToSection("#contacto")}
                className="mt-4 px-8 py-3 bg-frutiva-primary text-white rounded-full font-semibold text-lg hover:bg-frutiva-primary-light transition-colors"
              >
                Cotizar Ahora
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
