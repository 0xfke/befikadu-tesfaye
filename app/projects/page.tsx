'use client';
import { motion } from 'framer-motion';
// Link component is no longer needed for the external project links
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Buna Byte Cybersecurity",
      description: "A cybersecurity platform focused on building security awareness and capabilities in Ethiopia.",
      technologies: ["Canva", "Capcut", "Adobe"],
      link: "https://www.youtube.com/@bunabyte",
      image: "/images/projects/bbcs-yt.png",
      category: "Education"
    },
    {
      title: "Malware Detection and Analysis using Machine Learning ",
      description: "A user-friendly web application that leverages static analysis and machine learning to detect and analyze malware in files, URLs, and executables with real-time threat assessment.",
      technologies: ["Python", "Security Tools", "Data Analysis", "Machine Learning"],
      link: "https://0xfke.github.io/posts/projectmdaml/",
      image: "/images/projects/mdmal.png",
      category: "Research"
    },
    {
      title: "Security Training Platform",
      description: "BunaByte Cybersecurity  Bootcamp – A hands-on training program that teaches cybersecurity from fundamentals to advanced hacking through CTFs, labs, and real-world exercises.",
      technologies: ["Linux", "Networking", "Web", "Localization"],
      link: "https://www.linkedin.com/company/buna-byte",
      image: "/images/projects/IEH-Logo.png",
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">Projects</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore my latest projects in cybersecurity, research, and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full" // Ensure motion.div takes full height
              >
                {/* Use standard <a> tag for external links */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full" // Make the link fill the motion.div
                >
                  <div className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-colors h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-0 left-0 bg-cyan-500/90 text-white px-3 py-1 rounded-tl-lg">
                        {project.category}
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between"> {/* Adjust padding/flex for content */}
                      <div> {/* Content wrapper */}
                        <h2 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-400 transition-colors mb-2">
                          {project.title}
                        </h2>
                        
                        <p className="text-gray-300 text-sm mb-4">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors mt-auto"> {/* Push 'View Project' down */}
                        View Project
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 