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
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' }
    ],
    apple: { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
  },
  manifest: '/manifest.json',
  themeColor: '#050510',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta name="theme-color" content="#050510" />
        <style>{`
          body {
            background-color: #050510;
          }
        `}</style>
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ai-theme`}
        style={{ backgroundColor: '#050510' }}
      >
        {children}
      </body>
    </html>
  );
}
