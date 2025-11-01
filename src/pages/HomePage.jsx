import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion, useViewportScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sparkles, Building2, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/ui/button';
import HeroSection from '@/components/HeroSection';

const HomePage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Stats data for the new section
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+", color: "from-blue-500 to-blue-600" },
    { icon: Award, label: "Years Experience", value: "10+", color: "from-cyan-500 to-cyan-600" },
    { icon: Clock, label: "24/7 Support", value: "Always", color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Vision Technocrates Pvt. Ltd. | Home</title>
        <meta name="description" content="Welcome to Vision Technocrates Pvt. Ltd. - Your trusted partner for security and facilities management services in Bihar and across India." />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* Quick Services Overview */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.08,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="p-8 bg-slate-100/50 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-slate-200/80 group cursor-pointer"
            >
              <motion.div
                className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="w-8 h-8"/>
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                Security Services
              </motion.h3>
              <motion.p
                className="text-slate-500 group-hover:text-slate-700 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                End-to-end security solutions for your assets and premises.
              </motion.p>
              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-blue-500/0"
                whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.08,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="p-8 bg-slate-100/50 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 border border-slate-200/80 group cursor-pointer"
            >
              <motion.div
                className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-400 to-cyan-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-8 h-8"/>
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-2 text-slate-800 group-hover:text-cyan-600 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                Housekeeping
              </motion.h3>
              <motion.p
                className="text-slate-500 group-hover:text-slate-700 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                Pristine and hygienic environments through professional cleaning.
              </motion.p>
              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-cyan-500/0"
                whileHover={{ borderColor: "rgba(6, 182, 212, 0.5)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.08,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="p-8 bg-slate-100/50 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 border border-slate-200/80 group cursor-pointer"
            >
              <motion.div
                className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Building2 className="w-8 h-8"/>
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-2 text-slate-800 group-hover:text-indigo-600 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                Manpower Supply
              </motion.h3>
              <motion.p
                className="text-slate-500 group-hover:text-slate-700 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                Skilled and reliable manpower for your organizational needs.
              </motion.p>
              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-indigo-500/0"
                whileHover={{ borderColor: "rgba(99, 102, 241, 0.5)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Vision Technocrates
            </motion.h2>
            <motion.p
              className="text-lg text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Leading provider of comprehensive facility management and security services in Bihar and across India.
              With over a decade of experience, we deliver excellence in security, cleaning, gardening, and valet services.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide unparalleled facility management and security solutions that ensure the safety,
                cleanliness, and operational efficiency of our clients' premises. We are committed to
                delivering services that exceed expectations and build lasting partnerships.
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted and preferred facility management company in India, recognized
                for our commitment to quality, innovation, and customer satisfaction.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="bg-gradient-to-br from-emerald-400 to-blue-500 p-8 rounded-2xl shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                  <h4 className="text-xl font-bold mb-4">Key Strengths</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      10+ Years of Industry Experience
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      500+ Satisfied Clients
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      24/7 Service Availability
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Certified & Trained Personnel
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Facility Management?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today for a free consultation and discover how Vision Technocrates
              can transform your facility operations.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg">
                    Get Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg">
                    View Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;