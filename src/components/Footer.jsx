export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/5 text-center bg-black/20 relative z-10">
      <div className="container mx-auto px-6">
        <p className="text-white/40 text-sm">
          &copy; {currentYear} <span className="text-white/70 font-medium">Isabelle Caroline</span>. Todos os direitos reservados.
        </p>
        <p className="text-white/30 text-xs mt-2 flex items-center justify-center gap-1">
          Desenvolvido com Next.js, TailwindCSS e <span className="text-brand-accent">&hearts;</span>
        </p>
      </div>
    </footer>
  );
}
