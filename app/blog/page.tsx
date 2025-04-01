'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Components/Navbar/Navbar';
import { Card, CardContent } from '@/components/ui/card';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with Next.js',
      excerpt: 'Learn about the benefits of using Next.js for building modern web applications and how it can improve your development workflow.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'The Future of Frontend Development',
      excerpt: 'Exploring the latest trends and technologies shaping the future of frontend development, from AI integration to advanced frameworks.',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Best Practices for Responsive Design',
      excerpt: 'A comprehensive guide to creating responsive designs that work seamlessly across all devices and screen sizes.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'UI/UX'
    }
  ];

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
              Thoughts, tutorials, and insights about web development
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-neutral-400">{post.date}</span>
                      <span className="text-sm text-neutral-500">•</span>
                      <span className="text-sm text-neutral-400">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-semibold mb-3 hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-neutral-400 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-400">{post.category}</span>
                      <button className="text-sm text-neutral-400 hover:text-white transition-colors">
                        Read more →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-neutral-900 rounded-lg p-8 border border-neutral-800"
          >
            <h2 className="text-2xl font-semibold mb-4">Subscribe to the Newsletter</h2>
            <p className="text-neutral-400 mb-6">
              Get the latest posts delivered right to your inbox.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
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