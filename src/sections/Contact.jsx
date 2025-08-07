// sections/Contact.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaEnvelope, FaCopy } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const contacts = [
    { 
      icon: <FaLinkedin className="text-3xl" />, 
      text: "LinkedIn", 
      subtitle: "Connect with me",
      url: "https://www.linkedin.com/in/kevin-caya/",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    },
    { 
      icon: <FaGithub className="text-3xl" />, 
      text: "GitHub", 
      subtitle: "View my code",
      url: "https://github.com/He4rtttt",
      color: "from-gray-600 to-gray-800",
      hoverColor: "hover:from-gray-500 hover:to-gray-700"
    },
    { 
      icon: <FaInstagram className="text-3xl" />, 
      text: "Instagram", 
      subtitle: "Follow me",
      url: "https://www.instagram.com/kevin_paradise13/",
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:from-pink-500 hover:to-purple-500"
    },
    { 
      icon: <FaEnvelope className="text-3xl" />, 
      text: "Email", 
      subtitle: "tekimaxtlv@gmail.com",
      copyText: "tekimaxtlv@gmail.com",
      color: "from-green-600 to-emerald-600",
      hoverColor: "hover:from-green-500 hover:to-emerald-500"
    },
    { 
      icon: <FaPhone className="text-3xl" />, 
      text: "Phone", 
      subtitle: "+51 995227869",
      copyText: "+51 995227869",
      color: "from-indigo-600 to-purple-600",
      hoverColor: "hover:from-indigo-500 hover:to-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing. Feel free to reach out through any of these channels!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {contact.url ? (
                <motion.a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block relative bg-gradient-to-br ${contact.color} ${contact.hoverColor} p-6 rounded-2xl text-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-current/20 backdrop-blur-sm border border-white/10`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-white mb-4 flex justify-center">
                      {contact.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{contact.text}</h3>
                    <p className="text-white/80 text-sm">{contact.subtitle}</p>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  onClick={() => handleCopy(contact.copyText, contact.text)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative bg-gradient-to-br ${contact.color} ${contact.hoverColor} p-6 rounded-2xl text-center transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-current/20 backdrop-blur-sm border border-white/10 cursor-pointer group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-white mb-4 flex justify-center">
                      {contact.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{contact.text}</h3>
                    <p className="text-white/80 text-sm break-all">{contact.subtitle}</p>
                    {copiedText === contact.text && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-2 text-green-300 text-xs font-medium"
                      >
                        ✓ Copied!
                      </motion.div>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaCopy className="w-3 h-3 text-white/60" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;