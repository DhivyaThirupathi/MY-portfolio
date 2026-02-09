import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import Button from '../ui/Button';

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export default function Hero() {
  const [text, setText] = useState<string>('');
  const fullText = 'Full Stack Developer';
  const [showCursor, setShowCursor] = useState<boolean>(true);

  // Typing animation
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (id: string): void => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = (): void => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/717662222008__Profile DHIVYA T.pdf'; // Your resume file in public folder
    link.download = 'Dhivya_Thirupathi_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Paint brush splash decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Teal/Green paint splash - top right */}
        <div className="absolute top-20 right-10 w-96 h-96 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#10b981"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.8C26.4,84.6,10,87.6,-5.8,87.2C-21.6,86.8,-43.2,82.9,-58.4,73.4C-73.6,63.9,-82.4,48.8,-87.8,32.4C-93.2,16,-95.2,-1.7,-90.9,-17.6C-86.6,-33.5,-76,-47.6,-62.8,-55.2C-49.6,-62.8,-33.8,-63.9,-19.2,-68.6C-4.6,-73.3,8.8,-81.6,22.8,-83.5C36.8,-85.4,51.4,-80.9,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Blue paint splash - left side */}
        <div className="absolute top-40 left-0 w-80 h-80 opacity-15">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#3b82f6"
              d="M41.3,-72.5C54.4,-64.3,66.6,-55.5,74.7,-43.3C82.8,-31.1,86.8,-15.5,86.9,0.1C87,15.7,83.2,31.4,75.3,44.8C67.4,58.2,55.4,69.3,41.5,76.8C27.6,84.3,11.8,88.2,-3.7,86.9C-19.2,85.6,-34.4,79.1,-48.1,70.8C-61.8,62.5,-74,52.4,-81.7,39.4C-89.4,26.4,-92.6,10.5,-91.3,-4.8C-90,-20.1,-84.2,-34.8,-75.4,-47.2C-66.6,-59.6,-54.8,-69.7,-41.5,-77.6C-28.2,-85.5,-14.1,-91.2,-0.4,-91.4C13.3,-91.6,28.2,-80.7,41.3,-72.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Yellow/Orange paint splash - bottom right */}
        <div className="absolute bottom-20 right-20 w-72 h-72 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#f59e0b"
              d="M39.5,-66.3C51.4,-58.5,61.3,-47.7,68.4,-35.3C75.5,-22.9,79.8,-8.9,79.6,5.1C79.4,19.1,74.7,33.1,66.8,45.3C58.9,57.5,47.8,67.9,34.9,74.8C22,81.7,7.3,85.1,-7.1,84.4C-21.5,83.7,-35.7,78.9,-48.3,71.2C-60.9,63.5,-71.9,52.9,-78.4,40.1C-84.9,27.3,-86.9,12.3,-85.3,-2.1C-83.7,-16.5,-78.5,-30.3,-70.1,-42.3C-61.7,-54.3,-50.1,-64.5,-37.3,-71.9C-24.5,-79.3,-10.4,-83.9,2.5,-83.2C15.4,-82.5,27.6,-74.1,39.5,-66.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Pink accent splash */}
        <div className="absolute top-1/2 right-1/3 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ec4899"
              d="M43.3,-76.2C56.4,-68.5,67.7,-57.5,75.4,-44.3C83.1,-31.1,87.2,-15.5,87.1,-0.1C87,14.3,82.7,28.6,75.3,41.5C67.9,54.4,57.4,65.9,44.6,73.8C31.8,81.7,16.6,86,1.8,85.1C-13,84.2,-27.6,78.1,-40.8,70.1C-54,62.1,-65.8,52.2,-73.8,39.5C-81.8,26.8,-86,11.3,-86.1,-4.3C-86.2,-19.9,-82.2,-35.5,-74.1,-48.9C-66,-62.3,-53.8,-73.5,-40.1,-80.8C-26.4,-88.1,-12.2,-91.5,1.5,-90.5C15.2,-89.5,30.2,-83.9,43.3,-76.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>

      {/* Background image if needed - you can remove this if you only want paint splashes */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/girl.jpg')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Intro */}
        <motion.p
          className="text-blue-800 font-medium mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-slate-900 mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Dhivya Thirupathi
        </motion.h1>

        {/* Typing Role */}
        <motion.div className="text-3xl md:text-4xl font-semibold text-blue-800 mb-6 h-12 flex justify-center items-center">
          <span>{text}</span>
          <span
            className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1 border-r-4 border-blue-800 h-8`}
          />
        </motion.div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10">
          Crafting elegant solutions through code and turning ideas into reality
          with modern technologies.
        </p>

        {/* RESUME BUTTON ONLY */}
        <div className="flex justify-center mb-12">
          <Button
            variant="outline"
            size="lg"
            onClick={handleDownloadResume}
            className="
              border-2 border-yellow-500
              bg-yellow-500
              text-slate-900
              font-semibold
              flex items-center gap-2
              hover:bg-yellow-400
              hover:border-yellow-400
              transition-all
              cursor-pointer
            "
          >
            <Download size={20} />
            Download Resume
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center">
          <SocialIcon
            href="https://github.com/DhivyaThirupathi"
            icon={<Github size={24} />}
            label="GitHub"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/dhivya-thirupathi/"
            icon={<Linkedin size={24} />}
            label="LinkedIn"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('#about')}
        >
          <ChevronDown size={32} className="text-slate-600" />
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        w-12 h-12 flex items-center justify-center
        rounded-full
        bg-white
        shadow-lg
        text-slate-700
        hover:shadow-xl
        hover:scale-110
        transition-all
        border border-slate-200
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  );
}