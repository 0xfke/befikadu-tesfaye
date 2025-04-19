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
    description: "Proven ability to identify vulnerabilities, execute controlled attacks, and secure systems against real-world threats.",
    skills: ["Penetration Testing", "Exploit Development", "Privilege Escalation"],
    details: [
      "Successfully completed the GCSP certification exam",
      "Demonstrated practical penetration testing skills",
      "Proven ability to identify and exploit vulnerabilities",
      "Hands-on experience with various security tools and techniques"
    ]
  },
  CCSOCA: {
    title: "Cybertalents Certified SOC Analyst (CCSOCA)",
    issuer: "Cybertalents",
    date: "2023",
    image: "/certs/cybertalents-socA.png",
    link: "https://cybertalents.com/certifications/70932921-de48-4721-99cc-6727e2a117d3", // Replace with actual link if available
    description: "Comprehensive understanding of ethical hacking methodologies, tools, and techniques used to assess and secure network infrastructures.",
    skills: ["Network Scanning", "Vulnerability Analysis", "System Hacking", "Web Application Security"],
    details: [
        "Mastered ethical hacking concepts and phases.",
        "Gained proficiency in using modern security tools.",
        "Understood attack vectors and countermeasures."
    ]
  },
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
