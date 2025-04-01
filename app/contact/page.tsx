'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
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
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-accent-light to-accent-medium bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-accent-slate max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Contact Details */}
          <div className="bg-black/50 backdrop-blur-sm border border-accent-medium/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-accent-lightest">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-accent-medium text-xl" />
                <div>
                  <h3 className="text-accent-light font-semibold">Location</h3>
                  <p className="text-white">Brantford, Ontario, Canada</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-accent-medium text-xl" />
                <div>
                  <h3 className="text-accent-light font-semibold">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-white hover:text-accent-light transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-accent-medium text-xl" />
                <div>
                  <h3 className="text-accent-light font-semibold">LinkedIn</h3>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-light transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-sm border border-accent-medium/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-accent-lightest">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-accent-light font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black/30 border border-accent-medium/20 rounded-lg focus:outline-none focus:border-accent-medium/40 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-accent-light font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black/30 border border-accent-medium/20 rounded-lg focus:outline-none focus:border-accent-medium/40 text-white"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-accent-light font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black/30 border border-accent-medium/20 rounded-lg focus:outline-none focus:border-accent-medium/40 text-white resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-accent-medium to-accent-light text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 