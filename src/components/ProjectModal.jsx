// components/ProjectModal.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Full Chamba app flow images
  const fullChambaImages = [
    {
      src: '/fullChamba/login.jpg',
      title: 'Login Screen',
      description: 'Secure authentication system that allows students and companies to access the platform with their credentials.'
    },
    {
      src: '/fullChamba/home.jpg',
      title: 'Home Screen',
      description: 'Main dashboard showing available job offers, search filters and personalized recommendations.'
    },
    {
      src: '/fullChamba/postular.jpg',
      title: 'Job Details',
      description: 'Screen showing job offer details and allowing the user to apply for the position.'
    },
    {
      src: '/fullChamba/postulando.jpg',
      title: 'Application Process',
      description: 'Interface that guides the user through the application process, showing progress and required steps.'
    },
    {   
      src: '/fullChamba/postulacionEnviada.jpg',
      title: 'Submission Confirmation',
      description: 'Confirmation screen that notifies the user that their application has been successfully submitted.'
    }
  ];

  // Reset index if it's out of bounds
  useEffect(() => {
    if (currentImageIndex >= fullChambaImages.length) {
      setCurrentImageIndex(0);
    }
  }, [currentImageIndex, fullChambaImages.length]);

  const nextImage = () => {
    if (fullChambaImages.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % fullChambaImages.length);
    }
  };

  const prevImage = () => {
    if (fullChambaImages.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + fullChambaImages.length) % fullChambaImages.length);
    }
  };

  const goToImage = (index) => {
    if (index >= 0 && index < fullChambaImages.length) {
      setCurrentImageIndex(index);
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || project?.company !== "Full Chamba Mobile App") return null;

  // Safety check to ensure we have images and valid index
  if (!fullChambaImages || fullChambaImages.length === 0) return null;
  
  const currentImage = fullChambaImages[currentImageIndex];
  if (!currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-white">Full Chamba Mobile App</h2>
              <p className="text-gray-400 mt-1">React Native + Expo | .NET Backend</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Image Carousel */}
            <div className="relative mb-6">
              <div className="relative aspect-[9/16] max-w-sm mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjUzNCIgdmlld0JveD0iMCAwIDMwMCA1MzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNTM0IiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjY3IiBmaWxsPSIjOUM4Mzk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=';
                  }}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {fullChambaImages.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                {fullChambaImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {currentImage.title}
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {currentImage.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-600/30">
                  React Native
                </span>
                <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-600/30">
                  Expo
                </span>
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-600/30">
                  .NET
                </span>
                <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-600/30">
                  C#
                </span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  REST API
                </span>
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/santiagopiscontetecsup/RedSocial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors text-center font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View Frontend
              </a>
              <a
                href="https://github.com/Ribeyro/MiChamba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-center font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View Backend
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
