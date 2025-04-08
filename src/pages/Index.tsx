
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Update title
  useEffect(() => {
    document.title = "Castro Advocacia Criminal | Defesa Especializada";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
