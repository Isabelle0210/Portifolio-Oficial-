export default function Footer({ lang }) {
  const currentYear = new Date().getFullYear();
  
  const t = {
    pt: {
      rights: "Todos os direitos reservados.",
      developed: "Desenvolvido com"
    },
    en: {
      rights: "All rights reserved.",
      developed: "Developed with"
    }
  };

  const content = t[lang] || t.pt;

  return (
    <footer className="py-8 border-t border-white/5 text-center bg-black/20 relative z-10">
      <div className="container mx-auto px-6">
        <p className="text-white/40 text-sm">
          &copy; {currentYear} <span className="text-white/70 font-medium">Isabelle Caroline</span>. {content.rights}
        </p>
        <p className="text-white/30 text-xs mt-2 flex items-center justify-center gap-1">
          {content.developed} Next.js, TailwindCSS e <span className="text-brand-accent">&hearts;</span>
        </p>
      </div>
    </footer>
  );
}
