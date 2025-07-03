// sections/Home.jsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import backgroundImage from "../assets/profile2.png"; // Replace with your image

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-screen transparent background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-50" // Adjust opacity as needed (0.2 = 20%)
        />
      </div>

      {/* Gradient overlay (optional) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90 z-1"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl font-bold mb-8 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <TypeAnimation
              sequence={["Welcome", 1000, "Welcome to My Portfolio", 1000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </motion.h1>

          <motion.h2
            className="text-3xl font-semibold mb-6 text-blue-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Kevin Caya - Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            I create efficient, scalable solutions with modern technologies and
            a focus on user experience.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#experience"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="/CV-Kevin-Caya-Frontend-Dev.pdf"
            download="CV-Kevin-Caya-Frontend-Dev.pdf"
            className="download-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
