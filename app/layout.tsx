import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Befikadu Tesfaye",
  description: "Portfolio of Befikadu Tesfaye (0xfke) - Cybersecurity Researcher, Ethical Hacker, and Founder of Buna Byte. Building a safer digital Ethiopia.",
  keywords: ["cybersecurity", "ethical hacker", "penetration testing", "Buna Byte", "Ethiopia", "security researcher"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
