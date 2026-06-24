"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState("pt");

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <main className="min-h-screen bg-transparent text-white font-sans selection:bg-brand-accent selection:text-white">
      <Header lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Technologies lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
