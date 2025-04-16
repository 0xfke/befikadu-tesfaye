'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from 'react-icons/fa6';

const communityLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/befikadu',
    icon: FaGithub,
    description: 'Open-source contributions and projects',
    stats: '100+ Repositories',
    color: 'from-gray-800 to-gray-900',
    hoverColor: 'hover:from-gray-700 hover:to-gray-800'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/befikadu',
    icon: FaLinkedin,
    description: 'Professional network and achievements',
    stats: '500+ Connections',
    color: 'from-blue-800 to-blue-900',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/bunabyte',
    icon: FaTelegram,
    description: 'Cybersecurity discussions and updates',
    stats: '1000+ Members',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-500 hover:to-blue-600'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@bunabyte',
    icon: FaYoutube,
    description: 'Educational content and tutorials',
    stats: '10K+ Views',
    color: 'from-red-800 to-red-900',
    hoverColor: 'hover:from-red-700 hover:to-red-800'
  }
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Join Our Community</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect with me across various platforms to stay updated with the latest in cybersecurity and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityLinks.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${platform.color} ${platform.hoverColor} transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{platform.name}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{platform.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-cyan-400 text-sm font-medium">{platform.stats}</span>
                    <svg
                      className="w-5 h-5 text-white/60 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            Let's build a safer digital world together
          </p>
        </motion.div>
      </div>
    </section>
  );
} 