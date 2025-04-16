'use client';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';

export default function BlogSection() {
  const posts = [
    {
      title: "Injection Attacks",
      excerpt: "Injection flaws occur when user-controlled input is interpreted as commands or parameters by an application. They are common and can lead to serious security risks, depending on the technologies used and how the input is processed.",
      date: "Jan 26, 2025",
      readTime: "3 min read",
      category: "Security",
      url: "https://0xfke.github.io/posts/injection-attacks/",
      topics: ["SQL Injection", "Command Injection", "XSS"]
    },
    {
      title: "Exploring Windows Sandbox Part 01",
      excerpt: "Windows Sandbox is a temporary, secure environment that allows users to run untrusted applications without affecting their host system. Every time it is launched, it spins up a clean installation of Windows.",
      date: "Apr 9, 2025",
      readTime: "1 min read",
      category: "Lab Setup",
      url: "https://0xfke.github.io/posts/windows-sandbox-part-01/",
      topics: ["Windows", "Sandbox", "Security Testing"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-cyan-400">Latest Posts</h2>
            <a
              href="https://0xfke.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 text-sm"
            >
              View All Posts <FaArrowRight className="text-xs" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-cyan-400/60 font-medium">{post.category}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{post.readTime}</span>
                    <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      Read More <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 