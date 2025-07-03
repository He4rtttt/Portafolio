// App.js
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-blue-600 mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-smooth bg-gray-900 text-white font-sans">
      <Navbar />
      <main>
        <Home />
        <Experience />
        <Contact />
      </main>
      <footer className="text-center py-10 text-gray-500 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Kevin Caya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;