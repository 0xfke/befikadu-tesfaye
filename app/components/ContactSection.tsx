'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/befikadu',
    icon: FaGithub,
    hoverColor: 'hover:text-gray-100'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/befikadu',
    icon: FaLinkedin,
    hoverColor: 'hover:text-blue-400'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/bunabyte',
    icon: FaTelegram,
    hoverColor: 'hover:text-blue-400'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@bunabyte',
    icon: FaYoutube,
    hoverColor: 'hover:text-red-500'
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-cyan-400 mb-12"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg bg-[#1e293b] border-gray-600 text-gray-100 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg bg-[#1e293b] border-gray-600 text-gray-100 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-lg bg-[#1e293b] border-gray-600 text-gray-100 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-semibold text-gray-900 bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Connect With Me</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out for collaborations, speaking engagements, or just to say hi!
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.hoverColor} transition-colors`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="text-gray-300 italic">
                  "Let's work together to make the digital world a safer place."
                </p>
                <p className="text-gray-400 mt-2">- Befikadu Tesfaye (BOSS)</p>
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