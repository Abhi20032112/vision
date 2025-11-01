import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';

const CertificationsPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    { name: 'ISO 18788:2015', description: 'Management System for Private Security Operations' },
    { name: 'ISO 14001:2015', description: 'Environmental Management Systems' },
    { name: 'ISO 45001:2018', description: 'Occupational Health and Safety Management' },
    { name: 'ISO/IEC 27001:2013', description: 'Information Security Management' },
    { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
    { name: 'MSME Certificate', description: 'Micro, Small & Medium Enterprises Registration' },
    { name: 'PASARA License', description: 'Private Security Agencies Regulation Act' }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Certifications | Vision Technocrates Pvt. Ltd.</title>
        <meta name="description" content="View the certifications and licenses of Vision Technocrates Pvt. Ltd., showcasing our commitment to quality and industry standards." />
      </Helmet>

      <section className="py-20 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
              Certifications & Licenses
            </h1>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Recognized and certified by leading international standards organizations.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="relative bg-slate-50/70 rounded-xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {cert.name}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
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

export default CertificationsPage;