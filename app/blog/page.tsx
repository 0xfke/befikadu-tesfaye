'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    slug: "understanding-cyber-threats",
    title: "Understanding Modern Cyber Threats",
    excerpt: "An in-depth analysis of current cybersecurity threats and how to protect against them.",
    date: "April 15, 2024",
    readTime: "5 min read",
    image: "/images/blog/cyber-threats.jpg",
    category: "Cybersecurity"
  },
  {
    slug: "ethical-hacking-guide",
    title: "Getting Started with Ethical Hacking",
    excerpt: "A comprehensive guide for beginners interested in ethical hacking and penetration testing.",
    date: "April 10, 2024",
    readTime: "8 min read",
    image: "/images/blog/ethical-hacking.jpg",
    category: "Ethical Hacking"
  },
  {
    slug: "secure-coding-practices",
    title: "Secure Coding Best Practices",
    excerpt: "Essential security practices every developer should follow to write secure code.",
    date: "April 5, 2024",
    readTime: "6 min read",
    image: "/images/blog/secure-coding.jpg",
    category: "Development"
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
                <Link href={`/blog/${post.slug}`}>
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