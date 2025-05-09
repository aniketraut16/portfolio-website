import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Aniket Raut - Portfolio",
  description: "Aniket Raut's Portfolio - A showcase of skills, projects, and experiences",
  keywords: ["portfolio", "developer", "software engineer", "web development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground relative">
        <div className="relative z-10">
          {children}
        </div>
        <Navbar />
      </body>
    </html>
  );
}
