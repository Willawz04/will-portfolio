'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Components/Navbar/Navbar';

export default function About() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-poppins">
      <Navbar />
      
      <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-white">About </span>
                <span className="bg-gradient-to-r from-accent-light to-accent-medium bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
              <p className="text-xl text-accent-slate max-w-3xl mx-auto">
                A dedicated business professional with expertise in accounting and property management
              </p>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/50 backdrop-blur-sm border border-accent-medium/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-8 text-accent-lightest">Experience</h2>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-accent-medium/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-medium rounded-full" />
                  <h3 className="text-xl font-semibold text-accent-light">Assistant to Regional Manager</h3>
                  <p className="text-accent-slate">DMS Property Group</p>
                  <p className="text-sm text-accent-slate/70 mb-4">2022 - 2023</p>
                  <ul className="list-disc list-inside text-white space-y-2">
                    <li>Managed property operations and tenant relations</li>
                    <li>Handled financial reporting and documentation</li>
                    <li>Coordinated maintenance and property improvements</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-accent-medium/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-medium rounded-full" />
                  <h3 className="text-xl font-semibold text-accent-light">Summer Position</h3>
                  <p className="text-accent-slate">Konstant Manufacturing</p>
                  <p className="text-sm text-accent-slate/70 mb-4">2024</p>
                  <ul className="list-disc list-inside text-white space-y-2">
                    <li>Gained valuable manufacturing industry experience</li>
                    <li>Contributed to operational efficiency</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-accent-medium/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-medium rounded-full" />
                  <h3 className="text-xl font-semibold text-accent-light">Junior Accountant</h3>
                  <p className="text-accent-slate">LJS&Associates Consulting</p>
                  <p className="text-sm text-accent-slate/70 mb-4">2021 - 2022</p>
                  <ul className="list-disc list-inside text-white space-y-2">
                    <li>Managed client accounts and financial records</li>
                    <li>Prepared financial statements and reports</li>
                    <li>Assisted with tax preparation and compliance</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Education Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/50 backdrop-blur-sm border border-accent-medium/20 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-8 text-accent-lightest">Education</h2>
              <div className="relative pl-8 border-l-2 border-accent-medium/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-medium rounded-full" />
                <h3 className="text-xl font-semibold text-accent-light">Business Degree</h3>
                <p className="text-accent-slate">Conestoga College</p>
                <p className="text-sm text-accent-slate/70 mb-4">2023 - 2025</p>
                <p className="text-white">
                  Successfully completing Business Administration program while gaining practical experience through work placements.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

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