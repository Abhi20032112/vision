import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Sparkles, Trees, Car, Users, Camera, Flame, Briefcase, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/ui/button';

const ServicesPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [expandedServices, setExpandedServices] = useState({});

  const services = [
    {
      icon: Shield,
      title: 'Security Services',
      description: 'Professional security personnel for complete protection of your premises and assets.',
      details: 'Our comprehensive security services include 24/7 armed and unarmed guards, access control systems, patrol services, and emergency response teams. We provide trained professionals who undergo rigorous background checks and continuous training to ensure the highest standards of safety and security for residential, commercial, and industrial properties.'
    },
    {
      icon: Sparkles,
      title: 'Housekeeping & Cleaning',
      description: 'Comprehensive cleaning and housekeeping services for pristine environments.',
      details: 'From daily office cleaning to deep sanitization services, our housekeeping team delivers exceptional cleanliness standards. We use eco-friendly products and advanced equipment to maintain hygienic spaces, including carpet cleaning, window washing, waste management, and specialized cleaning for healthcare and industrial facilities.'
    },
    {
      icon: Trees,
      title: 'Gardening',
      description: 'Expert landscaping and garden maintenance for beautiful outdoor spaces.',
      details: 'Our gardening services encompass lawn maintenance, tree trimming, seasonal planting, irrigation system installation, and landscape design. We create and maintain beautiful outdoor environments that enhance property value and provide peaceful spaces for relaxation and recreation.'
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Professional valet parking services for events and establishments.',
      details: 'Professional valet services for hotels, restaurants, events, and corporate offices. Our trained valets ensure safe vehicle handling, traffic management, and premium customer service. We maintain detailed vehicle logs and provide comprehensive insurance coverage for peace of mind.'
    },
    {
      icon: Users,
      title: 'Bouncer & Event Security',
      description: 'Trained bouncers and event security for safe gatherings and functions.',
      details: 'Specialized event security personnel trained in crowd management, conflict resolution, and emergency response. We provide security for concerts, weddings, corporate events, and public gatherings, ensuring safe and enjoyable experiences for all attendees.'
    },
    {
      icon: Camera,
      title: 'Celebrity & Escort Security',
      description: 'Specialized protection services for VIPs and high-profile individuals.',
      details: 'High-level protection for celebrities, executives, and dignitaries. Our elite security teams provide discreet, professional escort services, threat assessment, secure transportation, and personal protection in various environments including red carpet events and private engagements.'
    },
    {
      icon: Flame,
      title: 'Firefighting & Safety',
      description: 'Certified firefighting experts and comprehensive safety solutions.',
      details: 'Professional firefighting services with certified personnel trained in fire prevention, suppression, and emergency response. We conduct fire safety audits, install and maintain fire suppression systems, provide fire safety training, and ensure compliance with all safety regulations.'
    },
    {
      icon: Briefcase,
      title: 'Manpower Supply',
      description: 'Skilled and unskilled manpower for various industries and sectors.',
      details: 'Comprehensive manpower solutions for construction, manufacturing, hospitality, and service industries. We provide temporary and permanent staffing, skilled tradespeople, administrative support, and specialized labor for projects of all sizes with full compliance and background verification.'
    },
    {
      icon: Search,
      title: 'Surveillance & Audit',
      description: 'Advanced surveillance systems and security audit services.',
      details: 'State-of-the-art surveillance solutions including CCTV installation, monitoring services, and security audits. We conduct comprehensive vulnerability assessments, recommend security enhancements, and provide ongoing monitoring to detect and prevent security threats.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
  };

  const toggleServiceDetails = (serviceTitle) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle]
    }));
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Our Services | Vision Technocrates Pvt. Ltd.</title>
        <meta name="description" content="Explore the wide range of professional services offered by Vision Technocrates, including security, housekeeping, manpower supply, and more." />
      </Helmet>

      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
              Our Comprehensive Services
            </h1>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Integrated security and facilities management solutions, tailored precisely to your needs.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group [perspective:1000px]"
              >
                <div className="relative h-full bg-slate-50 rounded-2xl p-8 border border-slate-200 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10 [transform-style:preserve-3d] group-hover:[transform:rotateY(10deg)_rotateX(5deg)]">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 [transform:translateZ(20px)]">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      onClick={() => toggleServiceDetails(service.title)}
                      className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                    >
                      View Details
                      {expandedServices[service.title] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                    {expandedServices[service.title] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 p-4 bg-slate-100 rounded-lg"
                      >
                        <p className="text-slate-600 leading-relaxed">
                          {service.details}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesPage;