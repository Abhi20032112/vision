import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Hero images for the slider
const heroImages = [
  '/brown-elegant-spring-moodboard.png',
  '/travel-photo-collage.png',
  '/whatsapp-image-2025.jpg'
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const sliderRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Scroll transforms for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Smooth mouse tracking for parallax
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Auto-play slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  // Swipe gesture handling for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background with Moving Gradient Orbs and Particles */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: useTransform(smoothMouseX, [0, 1], [-20, 20]),
          y: useTransform(smoothMouseY, [0, 1], [-20, 20]),
        }}
      >
        {/* Moving gradient orbs for depth */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#00cc88]/20 to-[#0077ff]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-[#0077ff]/20 to-[#00cc88]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-[#00cc88]/30 to-[#0077ff]/30 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.3, 0.8],
            rotate: [0, 180, 360],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Additional floating light effects */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-white/10 to-[#0077ff]/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-[#00cc88]/10 to-white/10 rounded-full blur-xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating particles for depth */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y, opacity, scale }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Modern Image Slider with Glass Effect */}
        <div
          ref={sliderRef}
          className="relative w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/5 border border-white/10"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          }}
        >
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ x: 0 }}
              animate={{
                x: index === currentSlide ? 0 : index < currentSlide ? '-100%' : '100%',
                opacity: index === currentSlide ? 1 : 0
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={image}
                alt={`Hero image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
              />
              {/* Dark gradient overlay for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </motion.div>
          ))}

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 top-1/2 z-20 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 top-1/2 z-20 -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Main Content Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-6 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Animated Headline */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-white leading-tight tracking-tight"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                style={{
                  textShadow: "0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3), 0 0 10px rgba(0,204,136,0.3)"
                }}
              >
                Comprehensive Facility Management
              </motion.h1>

              {/* Animated Subtext */}
              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 md:mb-12 font-light max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                style={{
                  textShadow: "0 0 20px rgba(0,0,0,0.6)"
                }}
              >
                Expert housekeeping, maintenance & operational support services.
              </motion.p>

              {/* Animated CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
              >
                <Link to="/gallery">
                  <motion.button
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00cc88] to-[#0077ff] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(0,204,136,0.5)] transition-all duration-300 transform hover:scale-105"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(0,204,136,0.5), 0 0 60px rgba(0,119,255,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Our Work →
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
