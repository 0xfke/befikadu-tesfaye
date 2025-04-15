import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "BOSS - Befikadu Tesfaye | Cybersecurity Researcher",
  description: "Portfolio of Befikadu Tesfaye (BOSS) - Cybersecurity Researcher, Ethical Hacker, and Founder of Buna Byte. Building a safer digital Ethiopia.",
  keywords: ["cybersecurity", "ethical hacker", "penetration testing", "Buna Byte", "Ethiopia", "security researcher"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono antialiased min-h-screen bg-[#0f172a] text-gray-100`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
