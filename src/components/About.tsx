import { motion } from "framer-motion";

export function About() {
  const stats = [
    { label: "Years Experience",       value: "5+" },
    { label: "Projects Completed",     value: "40+" },
    { label: "Technologies Mastered",  value: "15+" },
    { label: "Open Source Commits",    value: "200+" },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            About <span className="text-purple-500">Me</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm a full-stack developer passionate about building digital
              products that feel right. With a keen eye for design and a deep
              understanding of modern web technologies, I bridge the gap between
              aesthetics and functionality.
            </p>
            <p>
              My journey started with simple HTML/CSS websites, and evolved into
              architecting complex, scalable React applications and robust
              Node.js backends. I believe in writing code that is not just
              functional, but maintainable and elegant.
            </p>
            <p>
              When I'm not coding, you can find me exploring new UI trends,
              contributing to open source, or brewing the perfect cup of coffee.
            </p>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
