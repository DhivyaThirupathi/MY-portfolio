import { motion } from 'framer-motion';
import { Github, ExternalLink} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Builder',
      description: ' Developed a full-stack CRUD application with real-time updates and a responsive UI using RESTful APIs.Implemented secure data handling and optimized performance through efficient backend workflows and monitoring.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'CSS'],
      github: 'https://github.com/DhivyaThirupathi/Skill-portfolio-builder?tab=readme-ov-file',
      live: 'https://DhivyaThirupathi.github.io/Skill-portfolio-builder/',
      image: '/Screenshot 2025-09-01 091749.png'
    },
    {
      title: 'SEFI',
      description: 'Built an AI-powered women’s safety system with real-time risk prediction, SOS alerts, and live location tracking, supported by a secure backend and interactive dashboard.',
      technologies: ['Streamlit', 'Python', 'Flask', 'XG Boost','Google Maps API','SQL'],
      github: 'https://github.com/DhivyaThirupathi/women_safety',
      live: 'https://demo.com',
      image: '/Screenshot 2025-05-14 124623.png'
    },
    {
      title: 'VoxHand',
      description: 'Developed a real-time sign language translation web application using NLP, CNN, and LSTM models, with a 3D avatar to enhance accessibility, accuracy, and inclusive user interaction.',
      technologies: ['React', 'Open CV', 'Three.js', 'Blender','Tensorflow','Web speech API','MongoDB'],
      github: 'https://github.com/DhivyaThirupathi?tab=repositories',
      live: 'https://demo.com',
      image: '/Screenshot 2026-02-09 145920.png'
    },
    {
      title: 'Vivid Color Play',
      description: 'A smooth color-transition animation that adds visual depth and dynamic interaction to the interface.',
      technologies: ['Next.js', 'PostgreSQL', 'D3.js', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      image: '/Screenshot 2025-02-28 210331.png'
    },
    {
      title: 'Social Media Analytics Dashboard',
      description: 'A scalable social media analytics dashboard built using big data technologies to process, analyze, and visualize real-time social media trends and insights.',
      technologies: ['Apache Spark', 'Hadoop (HDFS)', 'Python', 'SQL','Docker'],
      github: 'https://github.com/DhivyaThirupathi',
      live: 'https://demo.com',
      image: '/Screenshot 2025-10-15 181254.png'
    },
    {
      title: 'Dhivya | Portfolio',
      description: 'A modern and responsive personal portfolio website showcasing projects, skills, experience, and achievements with a clean UI and smooth animations.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'GitHub', 'Vite'],
      github: 'https://github.com/DhivyaThirupathi/DHIVYA-portfolio',
      live: 'https://steady-alfajores-ebb796.netlify.app/',
      image: '/dhivya.png'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Projects"
          subtitle="Showcasing my work and creativity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative overflow-hidden rounded-lg mb-4 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-emerald-500 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gradient-to-r from-blue-100 to-emerald-100 text-gray-700 rounded-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button href="https://github.com/DhivyaThirupathi" variant="primary" size="lg">
            <Github size={20} />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
