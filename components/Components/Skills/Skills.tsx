'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900 rounded-xl p-6 border border-neutral-800"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-neutral-300">{skill.name}</span>
                      <span className="text-neutral-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-neutral-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-white h-2 rounded-full"
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