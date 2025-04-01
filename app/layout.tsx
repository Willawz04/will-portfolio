import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Components/Navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Will Lawson | Business Portfolio",
  description:
    "Explore Will Lawson's professional work, projects, and contact details. Built with passion, styled with purpose.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#000000',
  icons: {
    icon: '/favicon-v2.ico',
    shortcut: '/favicon-v2.ico',
  },
  openGraph: {
    title: "Will Lawson | Business Portfolio",
    description:
      "Explore Will Lawson's professional work, projects, and contact details.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-v2.ico" />
        <link rel="shortcut icon" href="/favicon-v2.ico" />
      </head>
      <body className={`${poppins.variable} antialiased min-h-screen bg-gradient-to-br from-accent-lightest via-accent-light to-accent-medium transition-colors duration-500 ease-in-out`}>
        <div className="min-h-screen bg-black/90 text-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

