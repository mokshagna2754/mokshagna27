import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#0D1B2A] overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
