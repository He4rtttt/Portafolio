// sections/Contact.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    { icon: <FaLinkedin className="text-2xl" />, text: "LinkedIn", url: "https://www.linkedin.com/in/kevin-caya/" },
    { icon: <FaGithub className="text-2xl" />, text: "GitHub", url: "https://github.com/He4rtttt" },
    { icon: <FaInstagram className="text-2xl" />, text: "Instagram", url: "https://www.instagram.com/kevin_paradise13/" },
    { icon: <FaEnvelope className="text-2xl" />, text: "tekimaxtlv@gmail.com"},
    { icon: <FaPhone className="text-2xl" />, text: "+51 995227869" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 border-t border-gray-700">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just to say hello!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-6 rounded-xl flex flex-col items-center text-center hover:bg-gray-700 transition-colors"
            >
              <div className="text-blue-400 mb-3">{contact.icon}</div>
              <span className="text-white font-medium">{contact.text}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;