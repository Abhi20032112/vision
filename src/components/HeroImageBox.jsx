import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    src: '/brown-elegant-spring-moodboard.png',
    alt: 'Professional security guards at work',
    title: 'Advanced Security Solutions',
    subtitle: 'Protecting what matters most with cutting-edge technology and expertise.'
  },
  {
    src: '/travel-photo-collage.png',
    alt: 'Team performing facility maintenance and housekeeping',
    title: 'Comprehensive Facility Management',
    subtitle: 'Expert housekeeping, maintenance & operational support services.'
  },
  {
    src: '/whatsapp-image-2025.jpg',
    alt: 'CCTV surveillance and control room environment',
    title: 'State-of-the-Art Surveillance',
    subtitle: 'Advanced CCTV systems & 24/7 monitoring for complete security coverage.'
  }
];

const HeroImageBox = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        {heroSlides.map((slide, index) => (
          <motion.img
            key={index}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-20 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-20 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      {/* Central Image Box */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        key={currentSlide} // Force re-render on slide change
      >
        <div className="relative">
          {/* Glowing pulsing border */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 blur-sm"
            animate={{
              boxShadow: [
                "0 0 20px rgba(34, 211, 238, 0.5)",
                "0 0 40px rgba(34, 211, 238, 0.8)",
                "0 0 20px rgba(34, 211, 238, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Soft shadows and rounded corners */}
          <motion.div
            className="relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].alt}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
            {/* Text Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                key={`title-${currentSlide}`}
              >
                {heroSlides[currentSlide].title}
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                key={`subtitle-${currentSlide}`}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Additional floating elements for high-tech look */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </section>
  );
};

export default HeroImageBox;
