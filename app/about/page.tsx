'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const summaryText = "I am a self-taught cybersecurity researcher, penetration tester, and ethical hacker with a strong passion for security and innovation. I thrive on exploring cybersecurity challenges, breaking things ethically to make them safe, and sharing knowledge with others.";

export default function About() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (typedText.length < summaryText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(summaryText.substring(0, typedText.length + 1));
      }, 50); // Adjust typing speed here (milliseconds)
      return () => clearTimeout(timeoutId);
    } else {
      // Start blinking cursor after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500); // Cursor blink speed
      return () => clearInterval(cursorInterval);
    }
  }, [typedText]);

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
          
          <div className="space-y-6 font-mono"> {/* Added font-mono for typing effect consistency */}
            <p className="text-gray-300 text-lg min-h-[100px]"> {/* Added min-height to prevent layout shift */}
              {typedText}
              {/* Show blinking cursor only after text is fully typed */}
              {typedText.length === summaryText.length && showCursor && 
                <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse ml-1"></span>
              }
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}