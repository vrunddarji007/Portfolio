import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "Portfolio Website",
    description: "A dark, cinematic developer portfolio with smooth animations, glassmorphism, and responsive design.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    image: "/src/assets/portfolio_mockup.png",
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication, payment processing, and an admin dashboard.",
    tags: ["Node.js", "MongoDB", "React", "Stripe"],
    image: "/src/assets/ecommerce_mockup.png",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task manager featuring drag-and-drop, real-time collaboration, and rich text editing.",
    tags: ["React", "Firebase", "Tailwind"],
    image: "/src/assets/task_manager_mockup.png",
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with interactive forecasts, maps, and location tracking.",
    tags: ["Vue.js", "OpenWeather API", "Chart.js"],
    image: null,
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    description: "A modern CMS and publishing platform for developers to share technical articles and tutorials.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    image: null,
    github: "#",
    live: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat platform with rooms, direct messaging, typing indicators, and file sharing.",
    tags: ["Socket.io", "Express", "React"],
    image: null,
    github: "#",
    live: "#",
  },
];

// Gradient colors per card (cycles through)
const gradients = [
  "from-purple-900/40 to-cyan-900/20",
  "from-cyan-900/40 to-purple-900/20",
  "from-indigo-900/40 to-pink-900/20",
  "from-violet-900/40 to-teal-900/20",
  "from-fuchsia-900/40 to-cyan-900/20",
  "from-blue-900/40 to-purple-900/20",
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Work
          </span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl">
          A selection of my recent projects, from full-stack applications to
          open-source tools.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_10px_40px_-15px_rgba(124,58,237,0.3)] transition-all duration-500"
          >
            {/* Image placeholder with gradient */}
            <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <span className="text-4xl font-black text-white/10 select-none">
                  {project.title.charAt(0)}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="px-4 py-2 bg-white text-black font-bold rounded-full text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Project
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md bg-white/10 text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <SiGithub size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
