import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, GraduationCap, Zap, Scale, Award as AwardIcon, HeartHandshake as Handshake } from 'lucide-react';

const ClientsPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const clients = [
    { icon: Building2, name: 'Nalanda Medical College', location: 'Patna', service: 'Security & Housekeeping' },
    { icon: Building2, name: 'District Health Society', location: 'Kishanganj, Gopalganj, Kaimur', service: 'Comprehensive Facility Management' },
    { icon: GraduationCap, name: 'Kendriya Vidyalayas', location: 'Across Bihar', service: 'Security & Maintenance' },
    { icon: Zap, name: 'Power Grid Corporation', location: 'Multiple Locations', service: 'Security & Safety Services' },
    { icon: Scale, name: 'Competition Commission of India', location: 'New Delhi', service: 'Corporate Security' },
    { icon: AwardIcon, name: 'Bureau of Indian Standards', location: 'National', service: 'Facility Management' },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Our Clients | Vision Technocrates Pvt. Ltd.</title>
        <meta name="description" content="A showcase of our prestigious clients from government and private sectors who trust Vision Technocrates for their security and facility management needs." />
      </Helmet>

      <section className="py-20 bg-slate-50" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Handshake className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
              Our Prestigious Clients
            </h1>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Trusted by leading government and private organizations across India.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <client.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {client.name}
                  </h2>
                  <p className="text-sm text-slate-500 mb-2">📍 {client.location}</p>
                  <p className="text-sm text-slate-400">{client.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ClientsPage;