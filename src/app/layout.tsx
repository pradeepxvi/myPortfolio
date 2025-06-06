import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import FloatingMenu from "@/components/layout/floating-menu";
import AnimatedLogo from "@/components/layout/animated-logo";
import ResumeButton from "@/components/layout/resume-button"; // Added import
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pradeep",
  description: "Portfolio showcasing web development expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased font-sans min-h-screen flex flex-col"
        )}
      >
        <AnimatedLogo />
        <ResumeButton /> {/* Added component */}
        <div className="flex-grow">{children}</div>
        <FloatingMenu />
        <Toaster />
      </body>
    </html>
  );
}
