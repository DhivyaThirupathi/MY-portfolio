import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

export default function Experience() {
  const experiences = [
    {
      role: 'Full stack Developer Intern',
      company: 'Stragetic Knights',
      location: 'Remote',
      duration: 'Dec 2025 - Present',
      responsibilities: [
        'Developed and maintained responsive web applications using React.js and TypeScript',
        'Collaborated with senior developers to implement new features and fix bugs',
        'Integrated RESTful APIs and optimized application performance by 30%',
        'Participated in code reviews and agile development processes'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Git','Python','Flask','NLP libraries']
    },
   
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold mb-2">
                      <Briefcase size={20} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:text-right">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-gray-700 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
