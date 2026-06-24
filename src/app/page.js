import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Portfólio | Isabelle Caroline - Engenharia de Software',
  description: 'Portfólio de uma estudante de Engenharia de Software focada em desenvolvimento Full Stack, Next.js e APIs REST.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white font-sans selection:bg-brand-accent selection:text-white">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
