import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-black/50 backdrop-blur-md relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm order-2 md:order-1"
        >
          © {new Date().getFullYear()} Vrund Darji. All rights reserved.
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="order-1 md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-6 w-12 h-12 rounded-full bg-gradient-to-b from-purple-600 to-cyan-600 p-px flex items-center justify-center group transition-all duration-300 shadow-[0_0_20px_rgba(138,63,252,0.3)]"
        >
          <div className="w-full h-full rounded-full bg-[#030014] flex items-center justify-center text-white group-hover:bg-transparent transition-all">
            <ChevronUp size={24} />
          </div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 text-sm text-gray-400 order-3"
        >
          <a href="https://github.com/vrunddarji007" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/vrund-darji-0179742b7/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
        </motion.div>
      </div>
    </footer>
  );
}
