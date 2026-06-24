"use client";

import { motion } from "framer-motion";

export default function Technologies() {
  const techs = [
    { name: "Next.js", level: "Avançado", color: "from-black to-neutral-800" },
    { name: "React.js", level: "Avançado", color: "from-blue-900 to-blue-600" },
    { name: "Python", level: "Avançado", color: "from-yellow-700 to-yellow-500" },
    { name: "Django", level: "Avançado", color: "from-green-900 to-emerald-800" },
    { name: "Node.js", level: "Avançado", color: "from-green-900 to-green-600" },
    { name: "TailwindCSS", level: "Avançado", color: "from-cyan-900 to-cyan-600" },
    { name: "TypeScript", level: "Intermediário", color: "from-blue-800 to-blue-500" },
    { name: "PostgreSQL", level: "Avançado", color: "from-indigo-900 to-indigo-600" },
    { name: "APIs REST", level: "Especialista", color: "from-brand-secondary to-brand-accent" },
    { name: "Docker", level: "Intermediário", color: "from-sky-900 to-sky-600" },
    { name: "Vibe Coding", level: "Gemini / Claude / GPT", color: "from-fuchsia-950 to-pink-600" },
    { name: "Git & GitHub", level: "Avançado", color: "from-orange-950 to-red-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="technologies" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tech <span className="text-brand-accent">Stack</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-hover mx-auto rounded-full mb-8"></div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            As principais tecnologias e ferramentas que utilizo no meu dia a dia para construir aplicações escaláveis e performáticas.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center group cursor-default relative overflow-hidden"
            >
              {/* Gradient border hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0" />
              
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg mb-2 relative z-10 border border-white/10`}>
                <span className="font-bold text-xl text-white">{tech.name.charAt(0)}</span>
              </div>
              
              <div className="relative z-10">
                <h4 className="font-bold text-lg text-white group-hover:text-brand-hover transition-colors">{tech.name}</h4>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{tech.level}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
