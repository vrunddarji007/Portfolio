import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden relative">
      {/* Background Image - Absolute to home section top */}
      <div className="absolute inset-x-0 top-0 h-screen z-0 overflow-hidden pointer-events-none">
        <div 
          className="opacity-90 absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 contrast-[1.1] saturate-[1.1]"
          style={{ 
            backgroundImage: 'url("/hero-bg10.png"), linear-gradient(135deg, #b300ffff 0%, #6200ffff 50%, #ff0000ff 100%)' 
          }}
        />
        {/* Radial fade to darkening edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(48, 25, 180, 0.1)_0%,#030014_90%)]" />
        {/* Bottom fade into darkness */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030014]" />
        <div className="absolute inset-0 bg-[#030014]/40" />
      </div>
      {/* Ambient gradient orbs in background */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
