'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Lanyard from '@/components/Components/Lanyard/Lanyard';
import Navbar from '@/components/Components/Navbar/Navbar';
import Skills from '@/components/Components/Skills/Skills';
import Link from 'next/link';

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -800]);

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-poppins">
      <Navbar />
      
      {/* ⚠️ Under Construction Banner */}
      {showBanner && (
        <div className="relative w-full overflow-hidden bg-yellow-400 text-black text-center py-2 font-bold text-sm uppercase border-b-4 border-black animate-pulse z-50">
          <div
            className="absolute inset-0 bg-[repeating-linear-gradient(135deg,_black_0,_black_10px,_yellow_10px,_yellow_20px)] opacity-20 pointer-events-none"
            aria-hidden="true"
          />
          <div className="relative z-10 flex justify-center items-center gap-4 px-4">
            🚧 Website Under Construction – More Coming Soon!
            <button
              onClick={() => setShowBanner(false)}
              className="ml-4 px-2 text-black hover:text-red-600 text-lg font-bold transition"
              aria-label="Dismiss banner"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-accent-dark/20" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-accent-light to-accent-medium bg-clip-text text-transparent">
                Will
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-accent-slate max-w-2xl mx-auto mb-8">
              A business professional with expertise in accounting and property management
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/about"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-medium to-accent-light text-white font-semibold hover:opacity-90 transition-opacity"
              >
                About Me
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 rounded-full border border-accent-medium/30 text-accent-light hover:border-accent-medium/60 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* My Work Section */}
      <section className="p-8">
        <h2 className="text-4xl font-semibold text-center mb-8">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <Card key={n} className="bg-neutral-900 border border-neutral-700 hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <h3 className="text-xl font-medium mb-2">Project Title {n}</h3>
                <p className="text-neutral-400 text-sm">
                  Short description of what this project involved – key outcomes and skills.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="p-8">
        <h2 className="text-4xl font-semibold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="bg-neutral-800 h-48 rounded-lg shadow-inner"
            >
              <div className="w-full h-full flex items-center justify-center text-neutral-500">
                Image {i}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 text-neutral-500 text-sm text-center py-6 px-4 mt-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <span>© {new Date().getFullYear()} Will Lawson</span>
          <span className="hidden md:inline">✦</span>
          <span>Built with Next.js + Tailwind</span>
          <a
            href="mailto:will.lawson.is@gmail.com"
            className="text-blue-400 hover:underline ml-2"
          >
            Connect
          </a>
        </div>
      </footer>
    </div>
  );
}
