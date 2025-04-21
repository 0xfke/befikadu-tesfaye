import React from 'react';
// Import the icons
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-6 mt-12 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 text-center">
        {/* Social Icons Section */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/befikadu-tesfaye/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/0xfke" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-cyan-400 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.youtube.com/@bunabyte?sub_confirmation=1" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-cyan-400 transition-colors">
            <FaYoutube size={24} />
          </a>
          <a href="https://github.com/0xfke" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://t.me/bunabytecs" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-cyan-400 transition-colors">
            <FaTelegram size={24} />
          </a>
        </div>

        {/* Copyright Notice */}
        {/* Temporarily using a static year to debug hydration */} 
        <p>&copy; 2025 Befikadu Tesfaye. All rights reserved.</p> 
      </div>
    </footer>
  );
};

export default Footer;
