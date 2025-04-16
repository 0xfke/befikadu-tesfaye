'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CertificationsSection() {
  const certifications = [
    {
      slug: "oscp",
      title: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "2023",
      image: "/certs/oscp.png",
      link: "#",
      description: "Proven ability to identify vulnerabilities, execute controlled attacks, and secure systems against real-world threats.",
      skills: ["Penetration Testing", "Exploit Development", "Privilege Escalation"]
    },
    {
      slug: "ceh",
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      image: "/certs/ceh.png",
      link: "#",
      description: "Demonstrated expertise in ethical hacking methodologies, tools, and techniques for securing systems.",
      skills: ["Ethical Hacking", "Security Tools", "Vulnerability Assessment"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in cybersecurity and ethical hacking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Link href={`/certifications/${cert.slug}`} key={cert.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all group cursor-pointer"
              >
                <div className="relative h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 