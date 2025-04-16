'use client';
import Navigation from './Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
} 