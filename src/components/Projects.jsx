"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Activity } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock API Call
  useEffect(() => {
    const fetchProjects = async () => {
      // Simulando tempo de resposta da API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockProjects = [
        {
          id: 1,
          title: "FinanceControl",
          description: "Aplicação web de controle financeiro pessoal com autenticação de usuários, criação/edição de transações categorizadas, gráficos mensais, suporte multilíngue e assistente de IA.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Supabase"],
          liveUrl: "https://finance-control-25o3-git-main-isabelle0210s-projects.vercel.app/login",
          githubUrl: "https://github.com/Isabelle0210/FinanceControl"
        },
        {
          id: 2,
          title: "Projeto Signos",
          description: "Aplicação web desenvolvida como trabalho acadêmico para descobrir o signo do usuário a partir da data de nascimento, processando dados dinamicamente a partir de um arquivo XML.",
          image: null,
          tags: ["PHP", "XML", "Bootstrap 5", "Trabalho Acadêmico"],
          liveUrl: "#",
          githubUrl: "https://github.com/Isabelle0210/project-signos"
        },
        {
          id: 3,
          title: "API Metrologia & Balança",
          description: "Microsserviço de alta disponibilidade para comunicação direta com equipamentos de pesagem industrial, processando dados em tempo real.",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          tags: ["Node.js", "Express", "WebSocket", "Redis"],
          liveUrl: "#",
          githubUrl: "#"
        },
        {
          id: 4,
          title: "Projeto EcoPontos",
          description: "Projeto web simples de conscientização ambiental e controle de resíduos, com cadastro de descartes por tipo de material e listagem de ecopontos com mapas a partir de arquivos XML.",
          image: null,
          tags: ["HTML5", "CSS3", "JavaScript", "XML", "Trabalho Acadêmico"],
          liveUrl: "https://isabelle0210.github.io/Projeto-EcoPontos/",
          githubUrl: "https://github.com/Isabelle0210/Projeto-EcoPontos"
        }
      ];
      
      setProjects(mockProjects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background decorations removed for performance */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Projetos em <span className="text-brand-accent">Destaque</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-accent to-brand-hover mx-auto rounded-full mb-8"></div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Aplicações reais que resolvem problemas reais. De sistemas financeiros complexos a integrações industriais de baixa latência.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Activity className="animate-spin text-brand-accent mb-4" size={40} />
            <p className="text-brand-accent font-medium">Carregando projetos via API...</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(254,89,194,0.15)] transition-all duration-500 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-bg/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  {project.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-brand-secondary/30 to-brand-accent/25 flex items-center justify-center text-brand-accent/80">
                      <Code size={48} className="transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a href={project.githubUrl} className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white hover:text-brand-accent transition-colors">
                      <Code size={18} />
                    </a>
                    <a href={project.liveUrl} className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white hover:text-brand-accent transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-hover transition-colors">{project.title}</h3>
                  <p className="text-white/60 mb-6 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-brand-accent/10 text-brand-hover rounded-full border border-brand-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
