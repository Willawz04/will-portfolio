'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Components/Navbar/Navbar';

export default function Blog() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-poppins">
      <Navbar />
      
      <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-white">Business </span>
              <span className="bg-gradient-to-r from-accent-light to-accent-medium bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-accent-slate max-w-2xl mx-auto">
              Exploring the parallels between business strategy and chess mastery
            </p>
          </motion.div>

          {/* Article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black/50 backdrop-blur-sm border border-accent-medium/20 rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-6 text-accent-lightest">
              The Strategic Mind: Business Lessons from Chess
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-accent-slate mb-6">
                The parallels between chess and business strategy are striking and insightful. Both domains require strategic thinking, careful planning, and the ability to anticipate multiple moves ahead.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-accent-light">Strategic Thinking</h3>
              <p className="text-white mb-6">
                In both chess and business, success depends on the ability to think strategically. Just as a chess player must consider multiple possible moves and their consequences, business leaders must evaluate various options and their potential outcomes.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-accent-light">Planning and Preparation</h3>
              <p className="text-white mb-6">
                Chess masters spend countless hours studying different scenarios and preparing for various situations. Similarly, successful business leaders invest significant time in market research, competitor analysis, and strategic planning.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-accent-light">Decision Making</h3>
              <p className="text-white mb-6">
                Every move in chess, like every business decision, carries consequences. The ability to make sound decisions under pressure is crucial in both arenas. Sometimes, sacrificing a piece in chess, like making a calculated risk in business, is necessary for long-term success.
              </p>

              <div className="bg-accent-dark/10 border border-accent-medium/20 rounded-lg p-6 my-8">
                <h4 className="text-xl font-semibold mb-4 text-accent-light">Key Takeaways</h4>
                <ul className="list-disc list-inside text-white space-y-2">
                  <li>Strategic thinking is essential in both chess and business</li>
                  <li>Preparation and planning are key to success</li>
                  <li>Decision-making under pressure is a crucial skill</li>
                  <li>Sometimes sacrifices are necessary for long-term gains</li>
                </ul>
              </div>

              <p className="text-accent-slate italic">
                Whether you're moving pieces on a chessboard or making business decisions, the principles of strategy, foresight, and calculated risk-taking remain constant.
              </p>
            </div>
          </motion.article>
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