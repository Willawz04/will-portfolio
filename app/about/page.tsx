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
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium">Assistant to Regional Manager</h4>
                    <p className="text-neutral-400">DMS Property Group</p>
                    <p className="text-sm text-neutral-500">2022 - 2023</p>
                    <ul className="list-disc list-inside text-neutral-400 mt-2 space-y-1">
                      <li>Managed property operations and tenant relations</li>
                      <li>Handled financial reporting and documentation</li>
                      <li>Coordinated maintenance and property improvements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Summer Position</h4>
                    <p className="text-neutral-400">Konstant Manufacturing</p>
                    <p className="text-sm text-neutral-500">2024</p>
                    <ul className="list-disc list-inside text-neutral-400 mt-2 space-y-1">
                      <li>Gained valuable manufacturing industry experience</li>
                      <li>Contributed to operational efficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Junior Accountant</h4>
                    <p className="text-neutral-400">LJS&Associates Consulting</p>
                    <p className="text-sm text-neutral-500">2021 - 2022</p>
                    <ul className="list-disc list-inside text-neutral-400 mt-2 space-y-1">
                      <li>Managed client accounts and financial records</li>
                      <li>Prepared financial statements and reports</li>
                      <li>Assisted with tax preparation and compliance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div>
                  <h4 className="font-medium">Business Degree</h4>
                  <p className="text-neutral-400">Conestoga College</p>
                  <p className="text-sm text-neutral-500">2023 - 2025</p>
                  <p className="text-neutral-400 mt-2">
                    Successfully completed Business Administration program while gaining practical experience through work placements.
                  </p>
                </div>
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