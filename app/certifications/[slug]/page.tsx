'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const certifications = {
  oscp: {
    title: "Offensive Security Certified Professional (OSCP)",
    issuer: "Offensive Security",
    date: "2023",
    image: "/certs/oscp.png",
    link: "#",
    description: "Proven ability to identify vulnerabilities, execute controlled attacks, and secure systems against real-world threats.",
    skills: ["Penetration Testing", "Exploit Development", "Privilege Escalation"],
    details: [
      "Successfully completed the OSCP certification exam",
      "Demonstrated practical penetration testing skills",
      "Proven ability to identify and exploit vulnerabilities",
      "Hands-on experience with various security tools and techniques"
    ]
  },
  ceh: {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    image: "/certs/ceh.png",
    link: "#",
    description: "Demonstrated expertise in ethical hacking methodologies, tools, and techniques for securing systems.",
    skills: ["Ethical Hacking", "Security Tools", "Vulnerability Assessment"],
    details: [
      "Certified in ethical hacking methodologies",
      "Proficient in security tools and techniques",
      "Expertise in vulnerability assessment",
      "Understanding of security best practices"
    ]
  }
};

export default function CertificationPage({ params }: { params: { slug: string } }) {
  const certification = certifications[params.slug as keyof typeof certifications];
  
  if (!certification) return notFound();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 p-8">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="relative w-full md:w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg overflow-hidden">
              <Image
                src={certification.image}
                alt={certification.title}
                fill
                className="object-contain p-6"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl font-bold text-cyan-300 mb-2">
                  {certification.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>{certification.issuer}</span>
                  <span>•</span>
                  <span>{certification.date}</span>
                </div>
              </div>

              <p className="text-gray-300 text-lg">
                {certification.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-300">Certification Details</h2>
            
            <ul className="space-y-3">
              {certification.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View Certificate
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 