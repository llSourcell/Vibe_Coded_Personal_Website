import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siraj Raval | AI Educator & Entrepreneur",
  description: "Personal website of Siraj Raval - AI educator, entrepreneur, and technologist.",
  keywords: ["Siraj Raval", "AI", "Machine Learning", "Education", "Technology"],
  authors: [{ name: "Siraj Raval" }],
  creator: "Siraj Raval",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ai-theme`}
      >
        {children}
      </body>
    </html>
  );
}
