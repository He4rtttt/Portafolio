// sections/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Fibertel Networks S.A.C",
    position: "Backend Developer Intern",
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
  return (
    <section id="experience" className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-blue-400">{exp.company}</h3>
                <div className="text-gray-400 text-sm mt-1">{exp.period}</div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white">{exp.position}</h4>
                <div className="text-gray-300 text-sm">{exp.location}</div>
              </div>
              
              <ul className="space-y-2 mt-auto">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2 text-xs mt-1">•</span>
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;