"use client";

import { motion } from "framer-motion";
import { Mail, Globe, MessageCircle, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-16 border-t border-brand-accent/30 shadow-[0_0_50px_rgba(254,28,172,0.1)]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Vamos <span className="text-brand-accent">Conversar?</span></h2>
            <p className="text-white/60 text-lg">
              Estou sempre aberta a discutir novos projetos, oportunidades criativas ou parcerias tecnológicas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Informações de Contato</h3>
              
              <a href="mailto:isabelleisa646@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-hover group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">Email</p>
                  <p className="text-white font-medium group-hover:text-brand-hover transition-colors">isabelleisa646@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/isabellecaroline/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-hover group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">LinkedIn</p>
                  <p className="text-white font-medium group-hover:text-brand-hover transition-colors">isabellecaroline</p>
                </div>
              </a>

              <a href="https://wa.me/5516994475251" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-hover group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-white/50 text-sm">WhatsApp</p>
                  <p className="text-white font-medium group-hover:text-brand-hover transition-colors">+55 16 99447-5251</p>
                </div>
              </a>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <input 
                  type="text" 
                  placeholder="Seu Nome" 
                  className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/30"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Seu Email" 
                  className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/30"
                />
              </div>
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Sua Mensagem" 
                  className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-white/30 resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-brand-accent to-brand-hover text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(254,89,194,0.4)] transition-all flex items-center justify-center gap-2">
                <MessageSquare size={20} />
                Enviar Mensagem
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
