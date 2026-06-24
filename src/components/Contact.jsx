"use client";

import { motion } from "framer-motion";
import { Mail, Globe, MessageCircle, MessageSquare } from "lucide-react";

export default function Contact({ lang }) {
  const t = {
    pt: {
      title: "Vamos",
      highlight: "Conversar?",
      description: "Estou sempre aberta a discutir novos projetos, oportunidades criativas ou parcerias tecnológicas.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      whatsappLabel: "WhatsApp"
    },
    en: {
      title: "Let's",
      highlight: "Talk?",
      description: "I am always open to discussing new projects, creative opportunities, or tech partnerships.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      whatsappLabel: "WhatsApp"
    }
  };

  const content = t[lang] || t.pt;

  return (
    <section id="contact" className="py-24 bg-black/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-12 border-t border-brand-accent/30 shadow-[0_0_50px_rgba(254,28,172,0.1)]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">{content.title} <span className="text-brand-accent">{content.highlight}</span></h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              {content.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a 
              href="mailto:isabelleisa646@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-accent/40 hover:shadow-[0_0_35px_rgba(254,28,172,0.15)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-brand-bg flex items-center justify-center text-brand-hover group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 border border-brand-accent/20 mb-6 shadow-inner shadow-brand-accent/10">
                <Mail size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{content.emailLabel}</h4>
              <p className="text-white/50 text-sm group-hover:text-brand-hover transition-colors duration-300 break-all">isabelleisa646@gmail.com</p>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/isabellecaroline/" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-accent/40 hover:shadow-[0_0_35px_rgba(254,28,172,0.15)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-brand-bg flex items-center justify-center text-brand-hover group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 border border-brand-accent/20 mb-6 shadow-inner shadow-brand-accent/10">
                <Globe size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{content.linkedinLabel}</h4>
              <p className="text-white/50 text-sm group-hover:text-brand-hover transition-colors duration-300 break-all">isabellecaroline</p>
            </motion.a>

            <motion.a 
              href="https://wa.me/5516994475251" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-accent/40 hover:shadow-[0_0_35px_rgba(254,28,172,0.15)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-brand-bg flex items-center justify-center text-brand-hover group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 border border-brand-accent/20 mb-6 shadow-inner shadow-brand-accent/10">
                <MessageCircle size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{content.whatsappLabel}</h4>
              <p className="text-white/50 text-sm group-hover:text-brand-hover transition-colors duration-300 break-all">+55 16 99447-5251</p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
