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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-neutral-400">
            Professional capabilities and business software proficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/50 backdrop-blur-sm border border-accent-medium/20 rounded-lg p-6 hover:border-accent-medium/40 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent-light">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-accent-slate">{skill.name}</span>
                      <span className="text-accent-medium">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-accent-medium to-accent-light rounded-full"
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