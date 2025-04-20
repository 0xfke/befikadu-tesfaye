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
            I am a self-taught cybersecurity researcher, penetration tester, and ethical hacker with a strong passion for security and innovation. 
            I thrive on exploring cybersecurity challenges, breaking things ethically to make them safe, and sharing knowledge with others.
            </p>
            
            <div>
              <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Penetration Testing',
                  'Vulnerability Assessment',
                  'Network Security',
                  'Web Application Security',
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
                  <h3 className="text-xl font-medium text-cyan-300">Instructor & Security Researcher</h3>
                  <p className="text-gray-400">Buna Byte Cybersecurity • 2024 - Present</p>
                  <p className="text-gray-300 mt-2">
                    Leading cybersecurity initiatives, conducting research, and building security awareness in Ethiopia.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-xl font-medium text-cyan-300">National Cybertalent</h3>
                  <p className="text-gray-400">INSA • 2024 - present</p>
                  <p className="text-gray-300 mt-2">
                  Participated in a Cybersecurity Summer Camp, gaining hands-on experience in ethical hacking, CTFs, malware detection and analysis, and AI-driven cybersecurity.
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