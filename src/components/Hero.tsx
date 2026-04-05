import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

// Cycling titles
const titles = [
  "Full Stack Developer",
  "React Specialist",
  "Problem Solver",
  "Open Source Enthusiast",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-24 overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-purple-500/50 p-1 bg-[#030014]">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-900/50 to-cyan-900/50 relative">
              <img 
                src="/src/assets/hero.png" 
                alt="Vrund Darji Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Subtle glow ring */}
          <div className="absolute inset-0 rounded-full border border-purple-500/20 blur-sm -z-10" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8a3ffc] via-[#cc24ad] to-[#0ea5e9]">
            Vrund Darji
          </span>
        </motion.h1>

        {/* Animated subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 flex items-center justify-center"
        >
          <div className="text-xl sm:text-2xl md:text-4xl font-medium text-gray-400 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>A</span>
            <div className="text-white font-bold inline-block min-w-[200px] text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={titleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {titles[titleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-white-400 max-w-2xl mb-12 leading-relaxed"
        >
          I build elegant, performant web applications with a focus on immersive
          user experiences and clean code architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#projects"
            className="px-10 py-3.5 rounded-full bg-gradient-to-r from-[#8a3ffc] to-[#0ea5e9] hover:from-[#9d58ff] hover:to-[#22b1f0] text-white font-bold shadow-[0_0_20px_rgba(138,63,252,0.3)] hover:shadow-[0_0_35px_rgba(138,63,252,0.5)] transition-all duration-300 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-10 py-3.5 rounded-full bg-[#11111d] border border-white/10 hover:bg-[#1a1a2e] text-white font-semibold transition-all duration-300 text-center"
          >
            Get In Touch
          </a>
          <a
            href="resume.pdf" target="_blank"
            className="px-10 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
