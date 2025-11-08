import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import {
  ArrowRight,
  Zap,
  Building2
} from 'lucide-react';
import { Button } from '@/ui/button';
import PageTransition from '@/components/PageTransition';
import clientsData from '../../clients.json';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Gallery images data
const galleryImages = [
  {
    src: '/images/Brown Elegant Tender Aesthetic Spring Moodboard Photo Collage Desktop Wallpaper.png',
    alt: 'Professional security and facility management services',
    title: 'Security Operations'
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 10.46.28_841606aa.jpg',
    alt: 'Team performing facility maintenance and housekeeping',
    title: 'Facility Maintenance'
  },
  {
    src: '/images/WhatsApp Image 2025-10-25 at 5.48.04 PM.jpeg',
    alt: 'CCTV surveillance and control room environment',
    title: 'Surveillance Systems'
  },
  {
    src: '/images/Brown Elegant Tender Aesthetic Spring Moodboard Photo Collage Desktop Wallpaper.png',
    alt: 'Vision Technocrates logo',
    title: 'Company Branding'
  },
  {
    src: '/images/IMG-20251008-WA0004.jpg',
    alt: 'Gallery Image 1',
    title: 'Gallery Image 1'
  },
  {
    src: '/images/IMG-20251008-WA0005.jpg',
    alt: 'Gallery Image 2',
    title: 'Gallery Image 2'
  },
  {
    src: '/images/IMG-20251008-WA0006.jpg',
    alt: 'Gallery Image 3',
    title: 'Gallery Image 3'
  },
  {
    src: '/images/IMG-20251008-WA0007.jpg',
    alt: 'Gallery Image 4',
    title: 'Gallery Image 4'
  },
  {
    src: '/images/IMG-20251008-WA0008.jpg',
    alt: 'Gallery Image 5',
    title: 'Gallery Image 5'
  },
  {
    src: '/images/IMG-20251008-WA0009.jpg',
    alt: 'Gallery Image 6',
    title: 'Gallery Image 6'
  },
  {
    src: '/images/IMG-20251008-WA0010.jpg',
    alt: 'Gallery Image 7',
    title: 'Gallery Image 7'
  },
  {
    src: '/images/IMG-20251008-WA0011.jpg',
    alt: 'Gallery Image 8',
    title: 'Gallery Image 8'
  },
  {
    src: '/images/IMG-20251008-WA0012.jpg',
    alt: 'Gallery Image 9',
    title: 'Gallery Image 9'
  },
  {
    src: '/images/IMG-20251010-WA0011.jpg',
    alt: 'Gallery Image 10',
    title: 'Gallery Image 10'
  },
  {
    src: '/images/IMG-20251010-WA0012.jpg',
    alt: 'Gallery Image 11',
    title: 'Gallery Image 11'
  },
  {
    src: '/images/IMG-20251010-WA0013.jpg',
    alt: 'Gallery Image 12',
    title: 'Gallery Image 12'
  },
  {
    src: '/images/IMG-20251010-WA0014.jpg',
    alt: 'Gallery Image 13',
    title: 'Gallery Image 13'
  },
  {
    src: '/images/IMG-20251011-WA0004.jpg',
    alt: 'Gallery Image 14',
    title: 'Gallery Image 14'
  },
  {
    src: '/images/IMG-20251011-WA0009.jpg',
    alt: 'Gallery Image 15',
    title: 'Gallery Image 15'
  },
  {
    src: '/images/IMG-20251011-WA0010.jpg',
    alt: 'Gallery Image 16',
    title: 'Gallery Image 16'
  },
  {
    src: '/images/IMG-20251011-WA0011.jpg',
    alt: 'Gallery Image 17',
    title: 'Gallery Image 17'
  },
  {
    src: '/images/IMG-20251011-WA0012.jpg',
    alt: 'Gallery Image 18',
    title: 'Gallery Image 18'
  },
  {
    src: '/images/IMG-20251011-WA0013.jpg',
    alt: 'Gallery Image 19',
    title: 'Gallery Image 19'
  },
  {
    src: '/images/IMG-20251011-WA0014.jpg',
    alt: 'Gallery Image 20',
    title: 'Gallery Image 20'
  },
  {
    src: '/images/IMG-20251011-WA0015.jpg',
    alt: 'Gallery Image 21',
    title: 'Gallery Image 21'
  },
  {
    src: '/images/IMG-20251011-WA0016.jpg',
    alt: 'Gallery Image 22',
    title: 'Gallery Image 22'
  },
  {
    src: '/images/IMG-20251011-WA0017.jpg',
    alt: 'Gallery Image 23',
    title: 'Gallery Image 23'
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 10.46.28_b12ef0ca.jpg',
    alt: 'Gallery Image 24',
    title: 'Gallery Image 24'
  },
  {
    src: '/images/WhatsApp Image 2025-10-09 at 10.46.29_696330f2.jpg',
    alt: 'Gallery Image 25',
    title: 'Gallery Image 25'
  },
  {
    src: '/images/WhatsApp Image 2025-10-10 at 12.37.12_e7e3df06.jpg',
    alt: 'Gallery Image 26',
    title: 'Gallery Image 26'
  },
  {
    src: '/images/WhatsApp Image 2025-10-10 at 16.11.55_1f76d46d.jpg',
    alt: 'Gallery Image 27',
    title: 'Gallery Image 27'
  },
  {
    src: '/images/WhatsApp Image 2025-10-10 at 16.11.55_8b39979e.jpg',
    alt: 'Gallery Image 28',
    title: 'Gallery Image 28'
  },
  {
    src: '/images/WhatsApp Image 2025-10-10 at 16.11.56_d4ab7831.jpg',
    alt: 'Gallery Image 29',
    title: 'Gallery Image 29'
  },
  {
    src: '/images/WhatsApp Image 2025-10-10 at 20.15.36_71125b14.jpg',
    alt: 'Gallery Image 30',
    title: 'Gallery Image 30'
  },
  {
    src: '/images/WhatsApp Image 2025-10-10 at 20.15.37_cda50982.jpg',
    alt: 'Gallery Image 31',
    title: 'Gallery Image 31'
  }
];

const HomePage = () => {
  const ctaRef = useRef(null);

  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  // Hero slides data - Updated with actual images
  const heroSlides = [
    {
      image: '/images/WhatsApp Image 2025-10-25 at 5.48.04 PM.jpeg',
      tagline: 'Innovating Digital Futures',
      subtitle: 'Securing Tomorrow, Managing Today',
      ctaText: 'Explore Services'
    },
    {
      image: '/images/Brown Elegant Tender Aesthetic Spring Moodboard Photo Collage Desktop Wallpaper.png',
      tagline: 'Excellence in Every Detail',
      subtitle: 'Professional Security & Facility Management',
      ctaText: 'Get Started'
    },
    {
      image: '/images/WhatsApp Image 2025-10-09 at 10.46.28_841606aa.jpg',
      tagline: 'Trusted by Industry Leaders',
      subtitle: 'ISO Certified Quality Services',
      ctaText: 'Learn More'
    }
  ];



  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Home | Vision Technocrates Pvt. Ltd.</title>
        <meta name="description" content="Vision Technocrates - Leading provider of security, facility management, and manpower services. ISO certified excellence since 2012." />
      </Helmet>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Slider - Full Screen */}
        <div className="absolute inset-0 w-full h-full">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            loop={true}
            className="hero-swiper h-full w-full"
          >
            {heroSlides.map((slide, index) => (
              <SwiperSlide key={index} className="h-full w-full">
                <div className="relative h-full w-full">
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-cyan-900/50 z-10"></div>
                  
                  {/* Background Image - Fits to screen */}
                  <img
                    src={slide.image}
                    alt={slide.tagline}
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      e.target.src = `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop`;
                    }}
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 z-20">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="max-w-4xl"
                    >
                      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
                        {slide.tagline}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-lg">
                        {slide.subtitle}
                      </p>
                      <Link to="/services">
                        <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                          {slide.ctaText}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-3 bg-white/70 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Presence Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Presence
            </h2>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <img
                src="/images/MapChart_Map.png"
                alt="Our Presence Map"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <p className="text-xl text-gray-600 mb-4">
                Discover our extensive network and reach across regions, serving clients with excellence and dedication. From bustling urban centers to remote industrial sites, our presence spans multiple states and cities, ensuring comprehensive coverage and rapid response capabilities.
              </p>
              <p className="text-lg text-gray-500">
                With strategically located offices and operational hubs, we maintain proximity to our clients, enabling us to deliver personalized security solutions and facility management services tailored to local needs while maintaining our commitment to quality and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading organizations across various sectors for our quality services and commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={2000}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
              }}
              className="clients-swiper"
            >
              {clientsData.clients.map((client, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100 group">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        loading="lazy"
                        className="w-16 h-16 object-contain mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 rounded-lg"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight">
                      {client.name}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive portfolio of security solutions, facility management services,
              and professional operations that showcase our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={2000}
              navigation={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 }
              }}
              className="gallery-swiper"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback to placeholder if image not found
                          e.target.src = `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop`;
                        }}
                      />
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/gallery">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                View Full Gallery
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section ref={ctaRef} id="contact-section" className="py-8 md:py-16 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-700"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Animated Blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={ctaInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how Vision Technocrates can help secure and manage your facilities with excellence and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Contact Us Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Get a Quote
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100"
            >
              <div className="flex items-center gap-2">
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span>ISO Certified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;

