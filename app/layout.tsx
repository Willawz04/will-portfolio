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
  title: "Will Lawson | Business Portfolio",
  description:
    "Explore Will Lawson’s professional work, projects, and contact details. Built with passion, styled with purpose.",
  openGraph: {
    title: "Will Lawson | Business Portfolio",
    description:
      "Explore Will Lawson’s professional work, projects, and contact details.",
    url: "https://willawz.com",
    siteName: "Willawz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Will Lawson Portfolio Preview",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon-v2.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

