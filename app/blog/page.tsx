'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Components/Navbar/Navbar';

export default function Blog() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-neutral-400">
              Insights on Business Strategy and Leadership
            </p>
          </motion.div>

          {/* Article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-invert max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6">The Strategic Parallels Between Chess and Business</h2>
            <div className="text-neutral-300 space-y-6">
              <p>
                Business and chess may seem like two unrelated fields, but they have more in common than one may think. 
                Both require strategic thinking, planning, and decision-making skills. The lessons that can be learned 
                from playing chess can be applied to business and vice versa. A business leader can make an unlimited 
                number of moves. The goal of the game chess and business alike is to use your resources, make great 
                decisions, and successfully outsmart your competition.
              </p>
              <p>
                As a great chess player would, a great business leader must make plans before making any moves and 
                think many steps ahead in the game. This way, they can manage their resources, and identify their 
                strengths and weaknesses. Chess players and business leaders are constrained by time and must make 
                decisions on the spot while remaining calm and focused in high-stress situations.
              </p>
              <p>
                Sometimes sacrifices must be made by the leader or player to move forward. A sacrifice may be viewed 
                as a loss in the present, but it can prove to gain an advantage in the future. This can be viewed in 
                business as a form of investment in advanced technology, employee training or market research. 
                Investments deplete current time and resources but can help realize profits in the future. Similarly, 
                in chess, a player may sacrifice a piece in order to put their opponent at a disadvantage or to expose 
                his materials.
              </p>
              <p>
                In both Business and Chess, success is often the result of making the right strategic decisions, 
                effectively managing your resources, identifying core strengths as well as making sacrifices. Those 
                who are able to calculate their moves in a strategic manner are more likely to achieve their goals 
                and succeed in the long run.
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