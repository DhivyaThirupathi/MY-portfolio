import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Sparkles } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code2 size={32} />,
      color: 'from-blue-500 to-blue-600',
      items: ['React.js', 'TypeScript', 'HTML5', 'CSS3','JavaScript']
    },
    {
      category: 'Backend',
      icon: <Database size={32} />,
      color: 'from-emerald-500 to-emerald-600',
      items: ['Node.js', 'Express.js', 'Python', 'REST APIs','SQl']
    },
    {
      category: 'Tools & Tech',
      icon: <Wrench size={32} />,
      color: 'from-orange-500 to-orange-600',
      items: ['Git', 'Docker', 'AWS', 'MongoDB', 'Firebase']
    },
    {
      category: 'Design & Others',
      icon: <Sparkles size={32} />,
      color: 'from-pink-500 to-pink-600',
      items: ['Figma', 'Agile', 'CI/CD', 'Testing', 'Problem Solving']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-2xl transform rotate-6" />
              <div className="relative bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl p-1">
                <div className="bg-white rounded-xl p-8">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <Code2 size={80} className="text-blue-600" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Passionate Full stack Developer
            </h3>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Full Stack Developer with hands-on experience in frontend and backend development, creating scalable and efficient applications.
Strong problem-solving skills with a focus on performance optimization, maintainability, and user experience.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              I thrive on solving complex problems and learning new technologies. My approach combines technical
              expertise with creative thinking to deliver solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-3">
              <motion.span
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.1 }}
              >
                Problem Solver
              </motion.span>
              <motion.span
                className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.1 }}
              >
                Quick Learner
              </motion.span>
              <motion.span
                className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.1 }}
              >
                Team Player
              </motion.span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
