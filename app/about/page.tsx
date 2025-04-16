'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 p-8"
        >
          <h1 className="text-4xl font-bold text-cyan-400 mb-8">About Me</h1>
          
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              I am a passionate cybersecurity researcher and ethical hacker, dedicated to building a safer digital Ethiopia. 
              As the founder of Buna Byte, I work to strengthen cybersecurity awareness and capabilities in the region.
            </p>
            
            <div>
              <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Penetration Testing',
                  'Vulnerability Assessment',
                  'Network Security',
                  'Web Application Security',
                  'Exploit Development',
                  'Security Tools',
                  'Python',
                  'Bash Scripting'
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Experience</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-xl font-medium text-cyan-300">Founder & Security Researcher</h3>
                  <p className="text-gray-400">Buna Byte • 2020 - Present</p>
                  <p className="text-gray-300 mt-2">
                    Leading cybersecurity initiatives, conducting research, and building security awareness in Ethiopia.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-xl font-medium text-cyan-300">Security Consultant</h3>
                  <p className="text-gray-400">Previous Company • 2018 - 2020</p>
                  <p className="text-gray-300 mt-2">
                    Provided security consulting services, conducted penetration tests, and implemented security solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 