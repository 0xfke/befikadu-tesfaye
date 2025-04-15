'use client';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

function BinaryMatrix() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
      <svg width="100%" height="100%" className="w-full h-full">
        <defs>
          <linearGradient id="matrix" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00ffe7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00ffe7" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <g>
          {[...Array(40)].map((_, i) => (
            <text
              key={i}
              x={Math.random() * 100 + "%"}
              y={Math.random() * 100 + "%"}
              fontSize="1.5rem"
              fill="url(#matrix)"
              fontFamily="var(--font-jetbrains)"
              opacity={Math.random() * 0.7 + 0.2}
            >
              {"01".charAt(Math.floor(Math.random() * 2))}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}

function TypingEffect({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="text-cyan-400">{displayed}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white overflow-hidden">
      <BinaryMatrix />
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Befikadu Tesfaye
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-2xl font-semibold text-cyan-300"
        >
          Cybersecurity Researcher | Ethical Hacker | Educator
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-base md:text-xl font-mono min-h-[2.5em]"
        >
          <TypingEffect text="Building a safer digital Ethiopia, one byte at a time." />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex gap-4 mt-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-colors duration-200 border border-cyan-400/30"
          >
            Explore My Work <FaArrowRight />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-transparent border border-cyan-400 text-cyan-300 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-cyan-900/30 transition-colors duration-200"
          >
            Contact Me
          </motion.a>
        </motion.div>
        <div className="mt-8 text-xs text-gray-500 opacity-60">
          aka "BOSS" — Founder of Buna Byte
        </div>
      </div>
    </section>
  );
} 