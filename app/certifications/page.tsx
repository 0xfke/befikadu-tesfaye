'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Certifications() {
  const certifications = [
    {
      slug: "GCSP",
      title: "Google CyberSecurity Certified Professional (GCSP)",
      issuer: "Google",
      date: "2023",
      image: "/certs/Gcsp.png",
      description: "Those who earn the Google Cybersecurity Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for entry-level roles in cybersecurity.",
      skills: ["Network Security", "SIEM tools", "Linux", "Cloud Computing", "Intrusion Detection Systems (IDS)", "Python Programming", "SQL"]
    },

    // Cybertalents Certification

    {
      slug: "CCSOCA",
      title: "Cybertalents Certified SOC Analyst (CCSOCA)",
      issuer: "Cybertalents",
      date: "2025",
      image: "/certs/cybertalents-socA.png",
      description: "The certification validates my ability to understand and operate within a SOC environment, including real-time threat monitoring, incident response, and cyberattack mitigation.",
      skills: ["Security Information and Event Management", "Splunk", "Digital Forensics", "Incident Response", "Web Security Analysis", "Endpoint Security", "Network Security"]
    },

    {
      slug: "CCTH",
      title: "CyberTalents Certified Threat Hunter (CCTH)",
      issuer: "Cybertalents",
      date: "2025",
      image: "/certs/CyberTalents-Certified-Threat-Hunter.png",
      description: "As a Certified Threat Hunter, I have acquired advanced threat detection and response capabilities, specializing in proactively identifying and analyzing cyber threats and ongoing intrusions.",
      skills: ["Cyber Threat Hunting (CTH)", "IoCs, YARA, and Sigma Rules", "STIX/TAXII and Kestrel", "Hunting with Wireshark", "Powershell Hunting Tools"]
    },

    {
      slug: "CCOSINTA",
      title: "CyberTalents Certified OSINT Analyst",
      issuer: "Cybertalents",
      date: "2025",
      image: "/certs/CyberTalents-Certified-OSINT-Analyst.png",
      description: "This certification validates my ability to conduct intelligence-driven operations that support both offensive and defensive cybersecurity strategies.",
      skills: ["OSD, OSIF, and OSINT", "Website Analysis", "SOCMINT", "IMINT"]
    },


    {
      slug: "ICS",
      title: "Introduction to Cybersecurity Bootcamp (ICS)",
      issuer: "Cybertalents",
      date: "2024",
      image: "/certs/cybertalents-cysec-bootcamp.jpg",
      description: "This certification from CyberTalents validates my skills in cybersecurity, including Traffic Analysis, OWASP, Steganography, Burp Suite, and web security. The bootcamp provided hands-on experience in analyzing network traffic, identifying web vulnerabilities, and using advanced tools to enhance security measures.",
      skills: ["Traffic Analysis", "OWASP", "Steganography", "Burp Suite", "web security"]
    },

    

    // New York University Certification
    {
      slug: "ICA",
      title: "Introduction to Cyber Attacks",
      issuer: "New York University",
      date: "2024",
      image: "/certs/NYU1.png",
      description: "Successfully completed a foundational course focused on cybersecurity threats, system vulnerabilities, and risk assessment methodologies. This certification demonstrates a solid understanding of how modern cyberattacks are constructed, executed, and mitigated within real-world systems.",
      skills: ["Risk Assessment", "Security Engineering", "Denial-Of-Service Attack (DOS)", "Information Security (INFOSEC)", "Cyberattacks"]
    },
    {
      slug: "TDM",
      title: "Real-Time Cyber Threat Detection and Mitigation",
      issuer: "New York University",
      date: "2024",
      image: "/certs/NYU2.png",
      description: "Successfully completed a course focused on real-time cybersecurity strategies within the context of TCP/IP protocol suites and enterprise network environments.",
      skills: ["Risk Assessment", "Security Engineering", "Information Security (INFOSEC)", "Cyberattacks"]
    }

    // Add other certifications if any

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