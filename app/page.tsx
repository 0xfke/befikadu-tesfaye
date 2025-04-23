"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6">
              Hi, I'm <span className="text-white">Befikadu Tesfaye</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Cybersecurity Researcher and Ethical Hacker
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/about"
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse" />
              
              {/* Image container with gradient border */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-cyan-500 to-purple-500">
                <div className="relative h-full w-full rounded-full overflow-hidden">
                  <Image
                    src="/images/hero-image.png"
                    alt="Befikadu Tesfaye"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30"
              />
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
