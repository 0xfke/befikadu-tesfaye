'use client';
import { motion } from 'framer-motion';
import { FaTelegram, FaYoutube } from 'react-icons/fa6';

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-cyan-400 mb-12"
        >
          Join Our Community
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* YouTube Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1e293b] rounded-lg p-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaYoutube className="text-4xl text-red-500" />
              <div>
                <h3 className="text-xl font-semibold text-gray-100">Buna Byte on YouTube</h3>
                <p className="text-gray-400 text-sm">Cybersecurity tutorials and CTF walkthroughs</p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                src="https://www.youtube.com/embed/FEATURED_VIDEO_ID"
                title="Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-gray-400 text-sm">
                <span className="font-semibold text-cyan-400">1.2K</span> Subscribers
              </div>
              <a
                href="https://youtube.com/@bunabyte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors text-sm inline-flex items-center gap-2"
              >
                Subscribe <FaYoutube />
              </a>
            </div>
          </motion.div>

          {/* Telegram Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1e293b] rounded-lg p-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaTelegram className="text-4xl text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold text-gray-100">Buna Byte Academy</h3>
                <p className="text-gray-400 text-sm">Join our Telegram community for discussions and updates</p>
              </div>
            </div>
            <div className="bg-[#0f172a] rounded-lg p-6 mb-6">
              <blockquote className="text-gray-300 italic mb-4">
                "Cybersecurity is stronger when we build it together."
              </blockquote>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Daily cybersecurity tips and news
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Exclusive tutorials and resources
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Connect with fellow security enthusiasts
                </li>
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-gray-400 text-sm">
                <span className="font-semibold text-cyan-400">500+</span> Members
              </div>
              <a
                href="https://t.me/bunabyte"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm inline-flex items-center gap-2"
              >
                Join Channel <FaTelegram />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 