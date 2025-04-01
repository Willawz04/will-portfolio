'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      category: 'Business Software',
      items: [
        { name: 'Microsoft Excel', proficiency: 70 },
        { name: 'Microsoft Word', proficiency: 80 },
        { name: 'Microsoft PowerPoint', proficiency: 75 },
        { name: 'QuickBooks', proficiency: 65 },
        { name: 'Sage 50', proficiency: 60 }
      ]
    },
    {
      category: 'Professional Skills',
      items: [
        { name: 'Financial Analysis', proficiency: 75 },
        { name: 'Data Entry', proficiency: 90 },
        { name: 'Report Generation', proficiency: 85 },
        { name: 'Client Communication', proficiency: 80 },
        { name: 'Team Collaboration', proficiency: 85 }
      ]
    },
    {
      category: 'Industry Knowledge',
      items: [
        { name: 'Accounting Principles', proficiency: 80 },
        { name: 'Property Management', proficiency: 75 },
        { name: 'Business Operations', proficiency: 70 },
        { name: 'Financial Reporting', proficiency: 75 },
        { name: 'Regulatory Compliance', proficiency: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <p className="text-xl text-white/70">
            Professional capabilities and business software proficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">{category.category}</h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-white/70">{skill.proficiency}%</span>
                    </div>
                    <div className="relative h-2">
                      {/* Background bar */}
                      <div className="absolute inset-0 bg-white/10 rounded-full" />
                      {/* Animated progress bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-accent-medium to-accent-light rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 