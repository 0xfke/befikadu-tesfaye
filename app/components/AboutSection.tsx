'use client';
import { motion } from 'framer-motion';

const skills = [
  "Penetration Testing",
  "Malware Analysis",
  "Threat Intelligence",
  "Scripting",
  "C++",
  "PowerShell",
  "Network Security",
  "CTF Challenges"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-cyan-400 mb-12"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              As a passionate cybersecurity enthusiast, CTF player, and content creator, I'm dedicated to strengthening Ethiopia's digital defenses. Currently pursuing my education at AASTU, I combine academic knowledge with hands-on experience in ethical hacking and security research.
            </p>
            <p className="text-lg text-gray-300">
              My vision is to lead Ethiopia's cybersecurity future and inspire the next generation of security professionals. Through Buna Byte, I'm building a community where knowledge sharing and practical skills development go hand in hand.
            </p>
            <div className="border-l-4 border-cyan-400 pl-4 my-8">
              <p className="text-xl text-cyan-300 italic">
                "Curiosity, Code, and Cyber — That's the formula."
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-6">Core Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#1e293b] p-3 rounded-lg text-gray-300 text-sm flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 