import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

export default function Education() {
  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'Coimbatore Institute of Technology',
      year: '2024 - 2026',
      grade: 'CGPA: 9.23',
      icon: <GraduationCap size={24} />,
      description: 'Specialized in Software Engineering and Data Structures'
    },
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Bharathidasan University',
      year: '2020 - 2023',
      grade: 'CGPA: 8.7',
      icon: <BookOpen size={24} />,
      description: 'Science stream with Computer Science'
    },
    {
      degree: 'Certifications & Achievements',
      institution: 'Various Platforms',
      year: '2020 - Present',
      grade: '',
      icon: <Award size={24} />,
      description: 'WEB Boot camp - Frontend Development, Hackerrank - Javascript, SQL, Python & Problem solving'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic journey"
        />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-emerald-500" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1" />

                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {edu.icon}
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {edu.degree}
                    </h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-emerald-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  {edu.grade && (
                    <p className="text-gray-600 font-medium mb-2">
                      {edu.grade}
                    </p>
                  )}
                  <p className="text-gray-600">
                    {edu.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
