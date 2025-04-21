"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define the type for a badge
interface Badge {
  id: number;
  name: string;
  issuer: string;
  imageUrl: string;
  link?: string; // Optional link
}

// Sample badge data (replace with your actual data)
const sampleBadges: Badge[] = [
  {
    id: 1,
    name: 'CyberTalents SOC Analyst',
    issuer: 'CyberTalents',
    imageUrl: '/certs/cybertalents-socA.png',
    link: '#',
  },
  {
    id: 2,
    name: 'Cybersecurity Bootcamp',
    issuer: 'CyberTalents',
    imageUrl: '/certs/cybertalents-cysec-bootcamp.jpg',
    link: '#',
  },
  {
    id: 3,
    name: 'Google Cybersecurity Professional',
    issuer: 'Coursera / Google',
    imageUrl: '/certs/Gcsp.png',
    link: '#',
  },
   {
    id: 4,
    name: 'Intro to Cybersecurity',
    issuer: 'NYU / Coursera',
    imageUrl: '/certs/NYU1.png',
    link: '#',
  },
   {
    id: 5,
    name: 'Cyber Attack Countermeasures',
    issuer: 'NYU / Coursera',
    imageUrl: '/certs/NYU2.png',
    link: '#',
  },
  // Add more badges as needed
];

// Helper function to group badges by issuer
const groupBadgesByIssuer = (badges: Badge[]): { [issuer: string]: Badge[] } => {
  return badges.reduce((acc, badge) => {
    const issuer = badge.issuer;
    if (!acc[issuer]) {
      acc[issuer] = [];
    }
    acc[issuer].push(badge);
    return acc;
  }, {} as { [issuer: string]: Badge[] });
};

export default function Badges() {
  const groupedBadges = groupBadgesByIssuer(sampleBadges);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16" // Increased bottom margin
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-4">
            Achievements & Badges
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Recognitions, certifications, and badges earned, grouped by issuer.
          </p>
        </motion.div>

        {/* Grouped Badges Sections */}
        <div className="space-y-12"> {/* Add space between issuer sections */}
          {Object.entries(groupedBadges).map(([issuer, badges]) => (
            <motion.section // Use section for semantic grouping
              key={issuer}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-6 pb-2 border-b border-teal-500/30 text-center sm:text-left">
                {issuer}
              </h2>
              <motion.div
                 initial="hidden" // Optional: for staggering animations within the group
                 animate="visible"
                 variants={{
                   visible: { transition: { staggerChildren: 0.1 } }
                 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" // Grid layout for badges within the group
              >
                {badges.map((badge) => (
                  <motion.div
                    key={badge.id}
                     variants={{ // Variants for staggering animation
                       hidden: { opacity: 0, scale: 0.8 },
                       visible: { opacity: 1, scale: 1 }
                     }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="bg-[#1e293b]/40 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4 shadow-lg flex flex-col items-center text-center cursor-pointer h-full" // Added h-full for consistent height if needed
                  >
                    {/* Use next/image for optimized images */}
                    <div className="relative w-24 h-24 mb-3 flex-shrink-0"> {/* Added flex-shrink-0 */}
                      <Image
                        src={badge.imageUrl}
                        alt={`${badge.name} badge from ${badge.issuer}`}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-full" // Optional: Make images circular
                      />
                    </div>
                    <div className="flex flex-col flex-grow justify-between"> {/* Allow text to grow and space out */}
                      <div>
                        <h3 className="text-md font-semibold text-cyan-400 mb-1">{badge.name}</h3>
                        {/* <p className="text-sm text-gray-400 mb-2">{badge.issuer}</p>  Issuer is now the section title */}
                      </div>
                      {badge.link && badge.link !== '#' && ( // Conditionally render link if available
                        <a
                          href={badge.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-teal-500 hover:text-teal-400 mt-2 underline self-center" // Center the link
                        >
                          Verify
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
