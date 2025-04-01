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
              A passionate developer focused on creating exceptional digital experiences
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
                I'm a software developer with a passion for creating elegant solutions to complex problems. 
                My journey in technology began with a fascination for how things work on the internet, 
                which led me to pursue a career in web development.
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                With experience in both frontend and backend development, I specialize in building 
                responsive, user-friendly applications that deliver real value. I'm constantly 
                learning and exploring new technologies to stay at the forefront of web development.
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
                  title: 'Senior Developer',
                  company: 'Tech Company',
                  description: 'Leading development of key features and mentoring junior developers.'
                },
                {
                  year: '2021 - 2023',
                  title: 'Full Stack Developer',
                  company: 'Digital Agency',
                  description: 'Developed and maintained multiple client projects using modern web technologies.'
                },
                {
                  year: '2019 - 2021',
                  title: 'Junior Developer',
                  company: 'Startup',
                  description: 'Started my professional journey in web development.'
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
                <h3 className="text-xl font-semibold mb-2">Computer Science Degree</h3>
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