import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/ui/button';

// Custom wave divider component
const WaveDivider = () => (
  <motion.div
    className="absolute bottom-0 left-0 w-full overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
  >
    <svg
      className="w-full h-12"
      viewBox="0 0 1440 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 27L48 22.3C96 18 192 8 288 13.3C384 18 480 38 576 40.3C672 43 768 27 864 24.7C960 22 1056 32 1152 37.3C1248 43 1344 43 1392 43.3L1440 43V54H0V27Z"
        fill="#00CC66"
        fillOpacity="0.1"
      />
    </svg>
  </motion.div>
);

const heroImages = [
  {
    src: '/brown-elegant-spring-moodboard.png',
    alt: 'Professional security and facility management services',
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

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* 16:9 Aspect Ratio Box Container */}
      <motion.div
        className="relative z-10 w-[80%] md:w-[85%] lg:w-[90%] aspect-video rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-black/20 to-gray-900/20 backdrop-blur-sm border border-white/10"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Image Slider */}
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />

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

          {/* Main Content */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center px-8"
            style={{ y, opacity }}
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Heading */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
                key={`heading-${currentSlide}`}
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight tracking-tight"
                  style={{
                    textShadow: "0 0 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 204, 102, 0.3)"
                  }}
                >
                  {heroImages[currentSlide].title}
                </motion.h1>
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.6 }}
                key={`subtitle-${currentSlide}`}
              >
                <motion.p
                  className="text-lg md:text-xl text-white/90 mb-8 font-light max-w-3xl mx-auto leading-relaxed"
                  style={{
                    textShadow: "0 0 20px rgba(0, 0, 0, 0.8), 0 0 10px rgba(255, 255, 255, 0.3)"
                  }}
                >
                  {heroImages[currentSlide].subtitle}
                </motion.p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Link to="/services">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500 group"
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[#C0C0C0]/20 to-transparent"
                        animate={{
                          x: ["100%", "-100%"]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <span className="relative flex items-center justify-center">
                        Explore Our Services
                        <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Wave Divider */}
      <WaveDivider />

      {/* Scroll Down Animation Icon */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center items-start p-2 backdrop-blur-sm bg-white/5"
          whileHover={{ borderColor: "#00CC66", scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-1.5 h-3 bg-[#00CC66] rounded-full"
            animate={{
              y: [0, 18, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <motion.p
          className="text-white/60 text-sm mt-3 font-light tracking-wider uppercase text-center"
          animate={{
            opacity: [0.6, 1, 0.6],
            y: [0, -2, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Scroll Down
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
