'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    slug: "0xfke.github.io/posts/Try-Hack-Me-Wgel-ctf",
    title: "TryHackMe | Wgel CTF Write Up 01",
    excerpt: "This CTF (Capture The Flag) challenge is a Easy level Linux box focused on privilege escalation and enumeration. The goal is to gain access to the system, escalate privileges to root, and retrieve the necessary flags.",
    date: "April 1, 2025",
    readTime: "5 min read",
    image: "/images/blog/wglectf.webp",
    category: "CTF Writeups"
  },
  {
    slug: "0xfke.github.io/posts/injection-attacks",
    title: "Injection Attacks",
    excerpt: "Injection flaws occur when user-controlled input is interpreted as commands or parameters by an application. They are common and can lead to serious security risks, depending on the technologies used and how the input is processed.",
    date: "Jan 26, 2025",
    readTime: "3 min read",
    image: "/images/blog/injection_attacks.png",
    category: "Ethical Hacking"
  },
  {
    slug: "0xfke.github.io/posts/Write-Up-on-TryHackMe-Rooms",
    title: "Write Up on TryHackMe CTF Challenges",
    excerpt: "Welcome to my latest cybersecurity journey! I am launching a comprehensive TryHackMe walkthrough series, covering different rooms across various cybersecurity fields. This walkthrough aims to guide both beginners",
    date: "Mar 28, 2025",
    readTime: "6 min read",
    image: "/images/blog/bbcswritup.png",
    category: "Cybersecurity"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">Blog</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on cybersecurity, ethical hacking, and technology.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`https://${post.slug}`}>
                  <div className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-colors h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-0 left-0 bg-cyan-500/90 text-white px-3 py-1 rounded-tl-lg">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-300">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        Read more
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to my newsletter for the latest insights and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-[#1e293b] border border-cyan-500/20 focus:border-cyan-500/40 focus:outline-none text-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 