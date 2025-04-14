import React, { FC } from "react";
import { motion } from "framer-motion"
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiSolidity,
  SiSolana,
  SiRust,
  SiTestinglibrary,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiFigma,
  SiRedux,
  SiAntdesign,
  SiMongodb,
  SiAppwrite,
  SiPython,
  SiEthereum
} from "react-icons/si"
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "language" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", category: "language" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "frontend" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "frontend" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", category: "frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "backend" },
  { name: "Express", icon: SiExpress, color: "#000000", category: "backend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", category: "frontend" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "database" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "database" },
  { name: "Vercel", icon: SiVercel, color: "#000000", category: "devops" },
  { name: "Testing Library", icon: SiTestinglibrary, color: "#E33332", category: "testing" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "devops" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "tool" },
  { name: "GitHub", icon: SiGithub, color: "#181717", category: "tool" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC", category: "tool" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "frontend" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "design" },
  { name: "Redux", icon: SiRedux, color: "#764ABC", category: "frontend" },
  { name: "Ant Design", icon: SiAntdesign, color: "#0170FE", category: "frontend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "database" },
  { name: "Appwrite", icon: SiAppwrite, color: "#FD366E", category: "backend" },
  { name: "Python", icon: SiPython, color: "#3776AB", category: "language" },
  {name: "Solidity", icon: SiSolidity, color: "#363636", category: "language"},
  {name: "Solana", icon: SiSolana, color: "#00FFA3", category: "blockchain"},
  {name: "Rust", icon: SiRust, color: "#000000", category: "language"},
  {name: "Ethereum", icon: SiEthereum, color: "#3C3C3D", category: "blockchain"},
]

const SkillsGrid: FC = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
    {skills.map((skill, index) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: index * 0.05,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
      >
        <div className="text-xl mb-2" style={{ color: skill.color }}>
          <skill.icon />
        </div>
        <span className="text-xs text-gray-300 text-center font-medium">{skill.name}</span>
      </motion.div>
    ))}
  </div>
  );
};

export default SkillsGrid;