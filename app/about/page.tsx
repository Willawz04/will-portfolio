'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Components/Navbar/Navbar';

export default function About() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-poppins">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-neutral-400">
              A dedicated business professional with expertise in accounting and property management
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6">Background</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed">
                I'm a business professional with a strong foundation in accounting and property management. 
                My journey in business began with a focus on financial operations and has evolved to include 
                comprehensive property management responsibilities.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                With experience in both accounting and property management, I specialize in financial analysis, 
                client communication, and operational efficiency. I'm committed to delivering exceptional service 
                and maintaining high standards in all business operations.
              </p>
            </div>
          </motion.section>

          {/* Experience Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold mb-6">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  year: '2023 - Present',
                  title: 'Assistant to Regional Manager',
                  company: 'DMS Property Group',
                  description: 'Supporting regional operations, managing property documentation, and coordinating with property managers to ensure efficient operations.'
                },
                {
                  year: '2021 - 2023',
                  title: 'Junior Accountant',
                  company: 'LJS&Associates Consulting',
                  description: 'Handled financial records, prepared reports, and assisted with client account management.'
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="relative pl-8 border-l-2 border-neutral-800"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neutral-800 rounded-full" />
                  <div className="mb-2">
                    <span className="text-neutral-400">{exp.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-neutral-400 mb-2">{exp.company}</p>
                  <p className="text-neutral-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="space-y-4">
              <div className="bg-neutral-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Business Administration</h3>
                <p className="text-neutral-400">University Name</p>
                <p className="text-neutral-500">2015 - 2019</p>
              </div>
            </div>
          </motion.section>
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