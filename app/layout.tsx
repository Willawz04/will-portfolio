import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Will Lawson | Business Portfolio",
  description:
    "Explore Will Lawson's professional work, projects, and contact details. Built with passion, styled with purpose.",
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
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

