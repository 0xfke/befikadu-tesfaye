'use client';
import { motion } from 'framer-motion';

export default function BlogSection() {
  const posts = [
    {
      title: "Advanced Web Application Penetration Testing",
      excerpt: "A deep dive into modern web application security testing techniques...",
      date: "March 15, 2024",
      readTime: "10 min read",
      category: "Web Security"
    },
    {
      title: "Reverse Engineering Malware",
      excerpt: "Understanding malware behavior through static and dynamic analysis...",
      date: "March 10, 2024",
      readTime: "15 min read",
      category: "Malware Analysis"
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
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-pointer group"
              >
                <div className="space-y-3">
                  <span className="text-xs text-cyan-400/60 font-medium">{post.category}</span>
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 