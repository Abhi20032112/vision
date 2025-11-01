import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Sparkles, Trees, Car, Users, Camera, Flame, Briefcase, Search } from 'lucide-react';

const ServicesPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const services = [
    { icon: Shield, title: 'Security Services', description: 'Professional security personnel for complete protection of your premises and assets.' },
    { icon: Sparkles, title: 'Housekeeping & Cleaning', description: 'Comprehensive cleaning and housekeeping services for pristine environments.' },
    { icon: Trees, title: 'Gardening', description: 'Expert landscaping and garden maintenance for beautiful outdoor spaces.' },
    { icon: Car, title: 'Valet Parking', description: 'Professional valet parking services for events and establishments.' },
    { icon: Users, title: 'Bouncer & Event Security', description: 'Trained bouncers and event security for safe gatherings and functions.' },
    { icon: Camera, title: 'Celebrity & Escort Security', description: 'Specialized protection services for VIPs and high-profile individuals.' },
    { icon: Flame, title: 'Firefighting & Safety', description: 'Certified firefighting experts and comprehensive safety solutions.' },
    { icon: Briefcase, title: 'Manpower Supply', description: 'Skilled and unskilled manpower for various industries and sectors.' },
    { icon: Search, title: 'Surveillance & Audit', description: 'Advanced surveillance systems and security audit services.' }
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