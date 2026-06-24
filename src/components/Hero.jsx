"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration removed for performance */}

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-brand-accent/30 text-brand-accent font-medium text-sm"
          >
            <Terminal size={16} />
            <span>Estudante de Engenharia de Software</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Olá, eu sou a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-hover">
              Isabelle Caroline
            </span> <br />
            desenvolvedora.
          </h1>
          
          <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
            Sou apaixonada por tecnologia e focada em desenvolver sistemas robustos usando Next.js, construindo APIs RESTful e aplicações de alta performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="#projects">
              <button className="bg-gradient-to-r from-brand-accent to-brand-hover text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(254,89,194,0.4)] transition-all flex items-center gap-2 group">
                Ver Projetos
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </Link>
            <Link href="#contact">
              <button className="px-8 py-4 rounded-xl font-bold text-lg glass glass-hover transition-all text-white">
                Entrar em Contato
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square rounded-full glass border-brand-accent/20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-4 rounded-full border-2 border-brand-accent/20 border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-brand-secondary/40 to-brand-accent/20" />
            <div className="relative z-10 text-center">
              <div className="text-brand-accent opacity-80 mb-4">
                <Terminal size={80} className="mx-auto" />
              </div>
              <h2 className="text-2xl font-bold tracking-wider">CODE. DEPLOY. SCALE.</h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
