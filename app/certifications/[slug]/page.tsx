'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react'; // Import the 'use' hook from React

// Keep your static certifications data object here
const certifications = {
  GCSP: {
    title: "Google CyberSecurity Certified Professional (GCSP)",
    issuer: "Google",
    date: "2023",
    image: "/certs/Gcsp.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/KWWYT3V2V5VM", // Replace with actual link if available
    description: "Those who earn the Google Cybersecurity Certificate have completed eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for entry-level roles in cybersecurity. They are competent in beginner-level Python, Linux, SQL, Security Information and Event Management (SIEM) tools, and Intrusion Detection Systems (IDS). They know how to identify common cybersecurity risks, threats, and vulnerabilities, as well as the techniques to mitigate.",
    skills: ["Network Security", "SIEM tools", "Linux", "Cloud Computing", "Intrusion Detection Systems (IDS)", "Python Programming", "SQL"],
    details: [
      "Understand the importance of cybersecurity practices and their impact for organizations.",
      "Protect networks, devices, people, and data from unauthorized access and cyberattacks using Security Information and Event Management (SIEM) tools.",
      "Identify common risks, threats, and vulnerabilities, as well as techniques to mitigate them.",
      "Gain hands-on experience with Python, Linux, and SQL."
    ]
  },
  CCSOCA: {
    title: "Cybertalents Certified SOC Analyst (CCSOCA)",
    issuer: "Cybertalents",
    date: "2025",
    image: "/certs/cybertalents-socA.png",
    link: "https://cybertalents.com/certifications/70932921-de48-4721-99cc-6727e2a117d3", // Replace with actual link if available
    description: "The certification validates my ability to understand and operate within a SOC environment, including real-time threat monitoring, incident response, and cyberattack mitigation.",
    skills: ["Security Information and Event Management", "Splunk", "Digital Forensics", "Incident Response", "Web Security Analysis", "Endpoint Security", "Network Security"],
    details: [
        "Understand core SOC operations, roles, and responsibilities",
        "Perform real-time threat detection, monitoring, and incident response",
        "Analyze cybersecurity incidents and apply remediation techniques",
        "Work with SOC tools and technologies in simulated attack environments"
    ]
  },
  ICS: {
    title: "Introduction to Cybersecurity Bootcamp (ICS)",
    issuer: "Cybertalents",
    date: "2024",
    image: "/certs/cybertalents-cysec-bootcamp.jpg",
    link: "https://cybertalents.com/certifications/08064a70-a038-4daa-980e-dd7c1349e9de", // Replace with actual link if available
    description: "This certification from CyberTalents validates my skills in cybersecurity, including Traffic Analysis, OWASP, Steganography, Burp Suite, and web security. The bootcamp provided hands-on experience in analyzing network traffic, identifying web vulnerabilities, and using advanced tools to enhance security measures.",
    skills: ["Traffic Analysis", "OWASP", "Steganography", "Burp Suite", "web security"],
    details: [
        "Understanding key domains in cybersecurity including Web Exploitation, Reverse Engineering, Cryptography, and Digital Forensics",
        "Applying theoretical knowledge through real-world examples taken from past international CTF challenges",
        "Analyzing and solving cybersecurity problems using a hands-on, challenge-driven approach",
        "Gaining exposure to offensive security concepts and methodologies used by ethical hackers and security professionals"
    ]
  },

  ICA: {
    title: "Introduction to Cyber Attacks",
    issuer: "New York University",
    date: "2024",
    image: "/certs/NYU1.png",
    link: "https://www.coursera.org/account/accomplishments/verify/THK6R35US4XC", // Replace with actual link if available
    description: "Successfully completed a foundational course focused on cybersecurity threats, system vulnerabilities, and risk assessment methodologies. This certification demonstrates a solid understanding of how modern cyberattacks are constructed, executed, and mitigated within real-world systems.",
    skills: ["Risk Assessment", "Security Engineering", "Denial-Of-Service Attack (DOS)", "Information Security (INFOSEC)", "Cyberattacks"],
    details: [
        "Identifying and analyzing common cybersecurity threats and vulnerabilities",
        "Applying security models such as the CIA (Confidentiality, Integrity, Availability) triad to real-world threat scenarios",
        "Conducting basic cybersecurity risk analysis using threat-asset matrices and prioritization techniques",
        "Mapping cyber threats and vulnerabilities in the context of secure system engineering practices"
    ]
  },

  TDM: {
    title: "Real-Time Cyber Threat Detection and Mitigation",
    issuer: "New York University",
    date: "2024",
    image: "/certs/NYU2.png",
    link: "https://www.coursera.org/account/accomplishments/verify/CX7MBN4P7FS4", // Replace with actual link if available
    description: "Successfully completed a course focused on real-time cybersecurity strategies within the context of TCP/IP protocol suites and enterprise network environments.",
    skills: ["Risk Assessment", "Security Engineering", "Information Security (INFOSEC)", "Cyberattacks"],
    details: [
        "Understanding fundamental TCP/IP security vulnerabilities and common network-based attacks",
        "Gaining insight into Advanced Persistent Threats (APTs), Distributed Denial of Service (DDoS) attacks, and third-party risks targeting enterprise systems",
        "Exploring the necessity for network security through real-world examples of TCP/IP exploits"
    ]
  }
  
  

  // Add other certifications if any
};

// Correctly type 'params' as the Promise 'use()' expects
export default function CertificationPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params object using React.use()
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Use a type assertion for safer lookup
  const certification = certifications[slug as keyof typeof certifications];

  // Check if the certification exists for the given slug
  if (!certification) {
    notFound(); // Trigger a 404 page if not found
  }

  // --- Your existing JSX to render the certification details ---
  // Make sure to use the 'certification' object derived above
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl mt-20"> {/* Added mt-20 for spacing below navbar */} 
      <Link href="/certifications" className="text-cyan-400 hover:text-cyan-300 mb-6 inline-block">
        &larr; Back to Certifications
      </Link>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-xl overflow-hidden p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6 flex justify-center">
             {certification.image && (
               <Image
                 src={certification.image}
                 alt={`${certification.title} Certificate`}
                 width={200} // Adjust size as needed
                 height={140} // Adjust size as needed
                 className="rounded-md object-contain shadow-md"
               />
             )}
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-cyan-400 mb-2">{certification.title}</h1>
            <p className="text-lg text-gray-300 mb-1"><span className="font-semibold">Issuer:</span> {certification.issuer}</p>
            <p className="text-lg text-gray-300"><span className="font-semibold">Date:</span> {certification.date}</p>
             {certification.link && certification.link !== "#" && (
               <a
                 href={certification.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-cyan-500 hover:text-cyan-300 transition-colors mt-2 inline-block"
               >
                 Verify Credential &rarr;
               </a>
             )}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-cyan-500 mb-3 border-b border-cyan-500/30 pb-1">Description</h2>
          <p className="text-gray-300 leading-relaxed">{certification.description}</p>
        </div>

        {certification.skills && certification.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-cyan-500 mb-3 border-b border-cyan-500/30 pb-1">Skills Demonstrated</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {certification.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {certification.details && certification.details.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-cyan-500 mb-3 border-b border-cyan-500/30 pb-1">Details</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {certification.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
