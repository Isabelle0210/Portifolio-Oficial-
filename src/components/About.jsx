"use client";

import { motion } from "framer-motion";
import { Server, LayoutDashboard, Database, CheckCircle2 } from "lucide-react";

export default function About({ lang }) {
  const experiences = lang === "pt" ? [
    {
      icon: <Server className="text-brand-accent mb-4" size={32} />,
      title: "Backend & APIs",
      description: "Desenvolvimento de APIs RESTful robustas, integrações complexas e microsserviços."
    },
    {
      icon: <LayoutDashboard className="text-brand-accent mb-4" size={32} />,
      title: "Sistemas Administrativos",
      description: "Criação de dashboards, painéis de controle e ERPs com foco em usabilidade e performance."
    },
    {
      icon: <Database className="text-brand-accent mb-4" size={32} />,
      title: "Arquitetura de Dados",
      description: "Modelagem de banco de dados, otimização de consultas e sistemas financeiros de alta confiabilidade."
    }
  ] : [
    {
      icon: <Server className="text-brand-accent mb-4" size={32} />,
      title: "Backend & APIs",
      description: "Development of robust RESTful APIs, complex integrations, and microservices."
    },
    {
      icon: <LayoutDashboard className="text-brand-accent mb-4" size={32} />,
      title: "Administrative Systems",
      description: "Creation of dashboards, control panels, and ERPs focusing on usability and performance."
    },
    {
      icon: <Database className="text-brand-accent mb-4" size={32} />,
      title: "Data Architecture",
      description: "Database modeling, query optimization, and high-reliability financial systems."
    }
  ];

  const highlights = lang === "pt" ? [
    "Desenvolvendo projetos acadêmicos e pessoais",
    "Foco na entrega de código limpo e manutenível",
    "Experiência com metodologias ágeis (Scrum/Kanban)",
    "Habilidade de traduzir regras de negócio para código",
    "Vibe Coding com IAs (Gemini, ChatGPT e Claude) para acelerar o desenvolvimento"
  ] : [
    "Developing academic and personal projects",
    "Focus on delivering clean and maintainable code",
    "Experience with agile methodologies (Scrum/Kanban)",
    "Ability to translate business rules into code",
    "Vibe Coding with AIs (Gemini, ChatGPT, and Claude) to accelerate development"
  ];

  const t = {
    pt: {
      about: "Sobre",
      me: "Mim",
      focusTitle: "Desenvolvedora focada em",
      focusHighlight: "Resultados Reais",
      bio1: "Sou uma desenvolvedora apaixonada por construir soluções que resolvem problemas reais. Minha especialidade é criar sistemas robustos de ponta a ponta, conectando interfaces modernas em Next.js com backends sólidos e APIs eficientes.",
      bio2: "Tenho experiência na arquitetura e desenvolvimento de sistemas financeiros, automações de processos e dashboards analíticos, sempre prezando pela segurança e performance do código."
    },
    en: {
      about: "About",
      me: "Me",
      focusTitle: "Developer focused on",
      focusHighlight: "Real Results",
      bio1: "I am a developer passionate about building solutions that solve real problems. My specialty is creating robust end-to-end systems, connecting modern Next.js interfaces with solid backends and efficient APIs.",
      bio2: "I have experience in the architecture and development of financial systems, process automation, and analytical dashboards, always prioritizing security and code performance."
    }
  };

  const content = t[lang] || t.pt;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{content.about} <span className="text-brand-accent">{content.me}</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-hover mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">{content.focusTitle} <br/><span className="text-brand-hover">{content.focusHighlight}</span></h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              {content.bio1}
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {content.bio2}
            </p>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-accent" size={20} />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full group-hover:bg-brand-accent/10 transition-all -z-10" />
                <div className="flex gap-6 items-start">
                  <div className="bg-brand-bg p-4 rounded-xl shadow-inner shadow-brand-accent/20 border border-brand-accent/10">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{exp.title}</h4>
                    <p className="text-white/60 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
