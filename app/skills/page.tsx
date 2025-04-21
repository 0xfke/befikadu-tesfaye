"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-4">
            My Skills
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Here's a breakdown of the technologies and areas I specialize in.
          </p>
        </motion.div>

        {/* TODO: Add skill sections (e.g., Frontend, Backend, Security) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1e293b]/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 shadow-lg text-center text-gray-300"
        >
          <p>Skills content will go here...</p>
          {/* Example Skill Categories */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-[#1e293b]/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Cybersecurity</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Penetration Testing</li>
                <li>Vulnerability Assessment</li>
                <li>Network Security</li>
                <li>Web Application Security</li>
                <li>Incident Response</li>
              </ul>
            </div>
            <div className="bg-[#1e293b]/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Web Development</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>Python / Django</li>
                <li>HTML / CSS / JavaScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
             <div className="bg-[#1e293b]/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Other Tools & Tech</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Linux / Bash</li>
                <li>Docker</li>
                <li>Git / GitHub</li>
                <li>SQL / NoSQL Databases</li>
                 <li>Cloud Platforms (Basic AWS/GCP)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
