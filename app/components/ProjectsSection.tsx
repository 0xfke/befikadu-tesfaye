'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaLink } from 'react-icons/fa6';

const projects = [
  {
    title: "PowerShell Reverse Shell",
    description: "Advanced red team tool for penetration testing, featuring encrypted communication, anti-detection mechanisms, and persistence capabilities.",
    image: "/projects/reverse-shell.jpg",
    technologies: ["PowerShell", "C++", "Windows API"],
    githubUrl: "#",
    type: "Red Team Project"
  },
  {
    title: "Malware Sandbox Research",
    description: "Custom sandbox environment for malware analysis using Windows API hooks and Hyper-V virtualization, with automated behavior analysis.",
    image: "/projects/sandbox.jpg",
    technologies: ["C++", "WinAPI", "Hyper-V"],
    githubUrl: "#",
    type: "Research Project"
  },
  {
    title: "TryHackMe Video Series",
    description: "Comprehensive 100-room walkthrough series, covering various cybersecurity topics from basic to advanced. Over 50K views on YouTube.",
    image: "/projects/tryhackme.jpg",
    technologies: ["Penetration Testing", "CTF", "Tutorial"],
    youtubeUrl: "#",
    type: "Educational Content"
  },
  {
    title: "Barcode Scanner ESM",
    description: "Enterprise Security Management prototype for securing barcode scanning systems against manipulation and data injection attacks.",
    image: "/projects/barcode.jpg",
    technologies: ["Python", "Computer Vision", "Security"],
    demoUrl: "#",
    githubUrl: "#",
    type: "Security Tool"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-cyan-400 mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-[#111827]">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-cyan-400 text-sm font-mono">{project.type}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.youtubeUrl && (
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <FaYoutube className="w-5 h-5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FaLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 