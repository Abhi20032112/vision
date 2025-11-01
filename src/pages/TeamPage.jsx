import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserCheck, Eye, Shield, Heart, Search, Flame, Users } from 'lucide-react'; // Added Users icon

const TeamPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const teamRoles = [
    { icon: UserCheck, title: 'Security Consultants', description: 'Expert advisors for comprehensive security solutions' },
    { icon: Eye, title: 'Surveillance Experts', description: 'Specialists in monitoring and surveillance systems' },
    { icon: Shield, title: 'Security Supervisors', description: 'Experienced leaders managing security operations' },
    { icon: Heart, title: 'First Aid Experts', description: 'Certified professionals for emergency medical response' },
    { icon: Search, title: 'Security Auditors', description: 'Thorough assessment and compliance specialists' },
    { icon: Flame, title: 'Firefighting Experts', description: 'Trained professionals in fire safety and prevention' }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Our Team | Vision Technocrates Pvt. Ltd.</title>
        <meta name="description" content="Meet the expert team at Vision Technocrates Pvt. Ltd., dedicated professionals ensuring your safety and security." />
      </Helmet>

      <section className="py-20 bg-slate-50" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Users className="w-16 h-16 mx-auto mb-6 text-blue-500"/>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
              Our Expert Team
            </h1>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Highly trained professionals dedicated to your safety and security.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 text-center">
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                      <role.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-3">
                      {role.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default TeamPage;