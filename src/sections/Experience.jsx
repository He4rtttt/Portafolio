// sections/Experience.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

const experiences = [
  {
    company: "Fibertel Networks S.A.C",
    position: "Backend Developer",
    period: "July 08 - August 03 (2024)",
    location: "Arequipa, Peru",
    achievements: [
      "Automated data collection through web scraping and integrated it with Odoo ERP",
      "Developed scheduled scripts for periodic extractions",
      "Improved operational efficiency through backend solutions"
    ]
  },
  {
    company: "Full Chamba Mobile App",
    position: "Full Stack Mobile Developer",
    period: "April - Present (2025)",
    location: "Arequipa, Peru",
    achievements: [
      "React Native app connecting students with companies",
      "Built and deployed API in .NET",
      "Implemented registration and notification systems"
    ]
  },
  {
    company: "Clinic Appointment System",
    position: "Web Developer",
    period: "August - December 2023",
    location: "Arequipa, Peru",
    achievements: [
      "Medical appointment system with Laravel/MySQL",
      "Role-based logic (patient, doctor, admin)",
      "Automated prescription delivery"
    ]
  },
  {
    company: "TecScure Biometric System",
    position: "Embedded Systems Developer",
    period: "March - June 2024",
    location: "Arequipa, Peru",
    achievements: [
      "Fingerprint access control with Arduino",
      "Integrated biometric sensor and electronic lock",
      "Django API for remote monitoring"
    ]
  },
  
];

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (experience) => {
    if (experience.company === "Full Chamba Mobile App") {
      setSelectedProject(experience);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Animation variants for fade-in pattern
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover my journey through innovative projects and professional growth
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-700/50 hover:border-gray-600/50 ${
                exp.company === "Full Chamba Mobile App" 
                  ? "cursor-pointer hover:border-blue-500/50 hover:shadow-blue-500/20" 
                  : "hover:shadow-purple-500/10"
              }`}
              onClick={() => handleProjectClick(exp)}
            >
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                      {exp.company}
                    </h3>
                    {exp.company === "Full Chamba Mobile App" && (
                      <motion.div 
                        className="text-blue-400 text-xs bg-blue-500/20 px-3 py-1 rounded-full border border-blue-500/30 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        View Details
                      </motion.div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.period}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {exp.position}
                  </h4>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h5 className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
                    Key Achievements
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 group-hover/item:scale-125 transition-transform duration-200" />
                        <span className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Interactive indicator for Full Chamba */}
                {exp.company === "Full Chamba Mobile App" && (
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                  >
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Project Modal */}
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          project={selectedProject} 
        />
      </div>
    </section>
  );
};

export default Experience;