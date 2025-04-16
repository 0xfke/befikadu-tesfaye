'use client';
import Navigation from './Navigation';
import Footer from './Footer'; // Import the Footer component

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
} 