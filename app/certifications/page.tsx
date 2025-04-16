'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Certifications() {
  const certifications = [
    {
      slug: "oscp",
      title: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "2023",
      image: "/certs/oscp.png",
      description: "Proven ability to identify vulnerabilities, execute controlled attacks, and secure systems against real-world threats.",
      skills: ["Penetration Testing", "Exploit Development", "Privilege Escalation"]
    },
    {
      slug: "ceh",
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      image: "/certs/ceh.png",
      description: "Demonstrated expertise in ethical hacking methodologies, tools, and techniques for securing systems.",
      skills: ["Ethical Hacking", "Security Tools", "Vulnerability Assessment"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-cyan-400">Certifications</h1>
          <p className="text-gray-300 text-lg">
            Professional certifications that validate my expertise in cybersecurity and ethical hacking.
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            {certifications.map((cert, index) => (
              <Link href={`/certifications/${cert.slug}`} key={cert.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 p-6 hover:border-cyan-500/40 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full md:w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h2 className="text-2xl font-semibold text-cyan-300">
                          {cert.title}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300">
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
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 