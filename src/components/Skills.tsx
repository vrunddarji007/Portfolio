import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiVuedotjs, SiTypescript,
  SiHtml5, SiNodedotjs, SiExpress, SiPython,
  SiPostgresql, SiMongodb, SiGit, SiDocker, SiFigma,
  SiLinux, SiGithub,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";

const frontendSkills = [
  { name: "React",      icon: SiReact,      color: "#61DAFB" },
  { name: "Next.js",   icon: SiNextdotjs,  color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Vue.js",    icon: SiVuedotjs,   color: "#4FC08D" },
  { name: "Tailwind",  icon: SiTailwindcss,color: "#06B6D4" },
  { name: "HTML",      icon: SiHtml5,      color: "#E34F26" },
  { name: "CSS",       icon: FaCss3Alt,    color: "#1572B6" },
];

const backendSkills = [
  { name: "Node.js",    icon: SiNodedotjs,  color: "#339933" },
  { name: "Express",    icon: SiExpress,    color: "#ffffff" },
  { name: "Python",     icon: SiPython,     color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB",    icon: SiMongodb,    color: "#47A248" },
];

const toolsSkills = [
  { name: "Git",    icon: SiGit,    color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Figma",  icon: SiFigma,  color: "#F24E1E" },
  { name: "Linux",  icon: SiLinux,  color: "#FCC624" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center tracking-tight">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Arsenal
          </span>
        </h2>
      </motion.div>

      <div className="space-y-16">
        <SkillCategory title="Frontend Engineering" skills={frontendSkills} delay={0.1} />
        <SkillCategory title="Backend & Database"   skills={backendSkills}  delay={0.2} />
        <SkillCategory title="Tools & Workflow"     skills={toolsSkills}    delay={0.3} />
      </div>
    </section>
  );
}

function SkillCategory({
  title,
  skills,
  delay,
}: {
  title: string;
  skills: { name: string; icon: any; color: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className="text-xl font-semibold mb-6 text-gray-300">{title}</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + index * 0.05 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-500/50 hover:bg-white/10 transition-all cursor-pointer group"
          >
            <skill.icon
              size={32}
              style={{ color: skill.color }}
              className="mb-3 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all"
            />
            <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
