"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
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
            My Resume
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            View or download my professional resume.
          </p>
        </motion.div>

        {/* TODO: Add resume display (e.g., iframe embed or download link) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#1e293b]/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 shadow-lg text-center text-gray-300"
        >
          <p className="mb-6"></p>
          {/* Example Download Button - update href to your actual resume file */}
          <a 
            href="Resume/Befikadu_Tesfaye_Resume.pdf" // <-- IMPORTANT: Update this path! 
            download
            className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Download Resume (PDF)
          </a>
          {/* You could also embed it using an iframe if preferred */}
        </motion.div>
      </div>
    </div>
  );
}
