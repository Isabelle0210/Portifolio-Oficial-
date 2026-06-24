"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ lang, toggleLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = lang === "pt" ? [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#about" },
    { name: "Tecnologias", href: "#technologies" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ] : [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="#">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tighter"
          >
            <span className="text-white">Dev</span>
            <span className="text-brand-accent">.Portfolio</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={link.href}
                className="text-white/80 hover:text-brand-accent transition-colors font-medium"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          {/* Language Toggle Button */}
          <motion.button
            onClick={toggleLang}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
            className="px-3 py-1 rounded-full glass border border-brand-accent/30 text-xs font-bold text-brand-accent hover:bg-brand-accent hover:text-white transition-all cursor-pointer uppercase tracking-wider"
            title={lang === "pt" ? "Change to English" : "Mudar para Português"}
          >
            {lang === "pt" ? "EN" : "PT"}
          </motion.button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass border-t-0 mt-4 absolute w-full left-0 animate-fade-in"
        >
          <div className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-medium text-lg hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            {/* Language Toggle Button Mobile */}
            <button
              onClick={() => {
                toggleLang();
                setIsMobileMenuOpen(false);
              }}
              className="px-4 py-2 rounded-full glass border border-brand-accent/40 text-sm font-bold text-brand-accent hover:bg-brand-accent hover:text-white transition-all uppercase tracking-wider cursor-pointer"
            >
              {lang === "pt" ? "English (EN)" : "Português (PT)"}
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
