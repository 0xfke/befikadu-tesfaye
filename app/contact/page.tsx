'use client';

import React, { useState, useEffect } from 'react'; // Import useEffect
import { motion } from 'framer-motion';
import Link from 'next/link';

// --- SVG Icons remain the same --- 
const LinkedInIcon = () => (
  <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const YouTubeIcon = () => (
    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const GithubIcon = () => (
    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.397.098 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
);

const TelegramIcon = () => (
    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.015 8.416l-1.75 8.11c-.136.615-.488.767-.98.47l-2.864-2.105-1.38 1.324c-.153.153-.28.283-.518.283l.19-2.93L16.96 7.03c.38-.34-.078-.53-.576-.19l-7.11 4.45-2.787-.864c-.604-.19-.61-.59.138-.876l11.104-4.11c.51-.19.95.14.79.81z"/>
    </svg>
);
// --- End SVG Icons --- 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
  const [isMounted, setIsMounted] = useState(false); // Add mounted state

  // Set mounted to true only on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        console.error('Failed to send message:', errorData);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question, project idea, or just want to chat? Drop me a line! I'm always open to discussing new opportunities and collaborations.
          </p>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1e293b]/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 shadow-lg"
          >
             <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-400 mb-6">
              You can reach me through the following channels. I typically respond within 24-48 hours.
            </p>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:mustafa.a.ghonim.dev@gmail.com" className="text-gray-300 hover:text-cyan-300 transition-colors">befikadu2316@gmail.com</a>
              </div>
              
              {/* Social Links Title */}
              <h3 className="text-xl font-semibold text-white pt-4">Find me on</h3>

              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/in/befikadu-tesfaye" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                  <LinkedInIcon />
                  <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">LinkedIn</span>
              </Link>

              {/* Twitter */}
              <Link href="https://x.com/0xfke" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                  <TwitterIcon />
                  <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">Twitter</span>
              </Link>

              {/* YouTube */}
              <Link href="https://www.youtube.com/@bunabyte?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                  <YouTubeIcon />
                  <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">YouTube</span>
              </Link>
              
              {/* GitHub */}
              <Link href="https://github.com/0xfke" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                  <GithubIcon />
                  <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">GitHub</span>
              </Link>

              {/* Telegram */}
              <Link href="https://t.me/bunabytecs" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                  <TelegramIcon />
                  <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">Telegram</span>
              </Link>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1e293b]/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields ... */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1e293b]/30 border border-cyan-500/20 rounded-lg text-gray-300 focus:outline-none focus:border-cyan-500/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1e293b]/30 border border-cyan-500/20 rounded-lg text-gray-300 focus:outline-none focus:border-cyan-500/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1e293b]/30 border border-cyan-500/20 rounded-lg text-gray-300 focus:outline-none focus:border-cyan-500/40"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {/* Only render status messages after mounting */}
              {isMounted && status === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {isMounted && status === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
