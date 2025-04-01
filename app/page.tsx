'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Lanyard from '@/components/ui/lanyard';

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    document.title = 'Will Lawson | Business Portfolio';
  }, []);

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans">
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
      <section className="flex flex-col items-center justify-center text-center h-screen p-8 space-y-6 relative">
        <div className="absolute top-8 right-8 z-10 w-64 h-64">
          <Lanyard position={[0, 0, 5]} gravity={[0, -9.81, 0]} />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-wide text-neutral-300"
        >
          Will Lawson
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-xl md:text-2xl font-medium text-neutral-500"
        >
          Business Portfolio
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Button
            asChild
            className="bg-white text-black hover:bg-neutral-200 mt-4"
          >
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </motion.div>
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

      {/* Contact Section */}
      <section className="flex justify-center p-8">
        <motion.div
          whileHover={{ rotateY: 5, scale: 1.02 }}
          className="bg-neutral-900 rounded-2xl p-6 w-full max-w-xl border border-neutral-700 shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <form
            action="https://formspree.io/f/xblgkygw"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-xl text-white placeholder-neutral-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-xl text-white placeholder-neutral-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full p-2 bg-neutral-800 border border-neutral-600 rounded-xl text-white placeholder-neutral-500"
              rows={4}
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://willawz.com/thank-you.html"
            />
            <Button className="w-full bg-white text-black hover:bg-neutral-200">
              Send Message
            </Button>
          </form>
        </motion.div>
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
