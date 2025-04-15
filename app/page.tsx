"use client";
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import BlogSection from './components/BlogSection';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <BlogSection />
      <CommunitySection />
      <ContactSection />
    </main>
  );
}
