// components/Navbar.jsx
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 py-4 border-b border-gray-800">
      <ul className="container mx-auto flex justify-center space-x-8">
        {['Home', 'Experience', 'Contact'].map((id) => {
          const sectionId = id.toLowerCase();
          return (
            <li key={sectionId}>
              <a
                href={`#${sectionId}`}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeSection === sectionId
                    ? 'text-white bg-blue-600'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {id}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}