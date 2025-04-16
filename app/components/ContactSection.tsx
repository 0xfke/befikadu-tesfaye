'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Import the specific icons needed
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaUser, FaMessage } from 'react-icons/fa6';
import { SiTryhackme } from 'react-icons/si'; // Import TryHackMe icon

// Updated socialLinks array
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/0xfke', // Updated URL
    icon: FaGithub,
    hoverColor: 'hover:text-gray-100',
    bgColor: 'bg-gray-800/50'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/befikadu-tesfaye', // Updated URL
    icon: FaLinkedin,
    hoverColor: 'hover:text-blue-400',
    bgColor: 'bg-blue-800/50'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@bunabyte', // Kept URL
    icon: FaYoutube,
    hoverColor: 'hover:text-red-500',
    bgColor: 'bg-red-800/50'
  },
  {
    name: 'TryHackMe',
    url: 'https://tryhackme.com/p/0xfke', // Added URL
    icon: SiTryhackme, // Added Icon
    hoverColor: 'hover:text-red-400', // Added styling
    bgColor: 'bg-red-900/50' // Added styling
  }
];

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual form submission logic here (e.g., API call)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20"
          >
            {mounted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form fields remain unchanged */}
                 <div className="relative">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f172a]/50 border border-gray-700 text-gray-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f172a]/50 border border-gray-700 text-gray-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <FaMessage className="absolute left-3 top-4 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0f172a]/50 border border-gray-700 text-gray-100 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg text-sm font-semibold text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all shadow-lg shadow-cyan-500/20"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">Connect With Me</h3>
              {/* The mapping logic remains the same, it will now use the updated socialLinks */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${social.bgColor} p-4 rounded-xl flex items-center gap-3 text-gray-300 ${social.hoverColor} transition-all`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="space-y-4">
                <p className="text-gray-300 italic text-lg">
                  "Let's work together to make the digital world a safer place."
                </p>
                <p className="text-cyan-400 font-medium">- Befikadu Tesfaye (BOSS)</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            Made with passion by BOSS | Powered by Buna Byte
          </p>
        </motion.div>
      </div>
    </section>
  );
}
