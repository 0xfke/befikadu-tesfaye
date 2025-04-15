'use client';
import { motion } from 'framer-motion';

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "2023",
      image: "/certs/oscp.png",
      link: "#"
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      image: "/certs/ceh.png",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full" />
                    {/* Add your certification badge images here */}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">{cert.title}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <p className="text-cyan-400/60 text-sm">{cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 