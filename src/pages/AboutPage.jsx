import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Award, Users, TrendingUp, Building } from 'lucide-react';

const AboutPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const timelineEvents = [
    { year: '2012', event: 'Company Founded', icon: Building },
    { year: '2015', event: 'ISO Certification Achieved', icon: Award },
    { year: '2018', event: '100+ Clients Strong', icon: Users },
    { year: '2025', event: 'Expanding to Pan-India', icon: TrendingUp }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>About Us | Vision Technocrates Pvt. Ltd.</title>
        <meta name="description" content="Learn about Vision Technocrates Pvt. Ltd., our mission, journey since 2012, and our commitment to providing top-tier security and facility management services." />
      </Helmet>

      <section className="py-20 bg-slate-50 overflow-hidden" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
              About Vision Technocrates
            </h1>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">A decade of trust, reliability, and excellence in security and facility management.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl blur-2xl opacity-60 animate-pulse"
                style={{ y: imageY }}
              />
              <motion.img
                className="relative rounded-2xl shadow-2xl w-full"
                alt="Team of security professionals in a meeting"
                src="/images/WhatsApp Image 2025-10-25 at 5.48.04 PM.jpeg"
                style={{ y: imageY }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-slate-800">Our Mission</h2>
                  <p className="text-slate-600 leading-relaxed">
                    To provide professional, integrated facilities management and security services that ensure clean, safe, and secure environments where people can thrive.
                  </p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-sm">
                <p className="text-slate-600 leading-relaxed">
                  Founded in <span className="text-blue-600 font-semibold">2012</span>, Vision Technocrates Pvt. Ltd. has grown to become a trusted name in security and manpower services across Bihar and India. We serve both government and private sectors with ISO-certified excellence.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div ref={timelineRef}>
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">Our Journey Through Time</h2>
            <div className="relative">
              <motion.div 
                className="absolute top-5 left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-300 to-cyan-300" 
                style={{ scaleY: timelineInView ? 1 : 0, originY: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              {timelineEvents.map((item, index) => (
                <div key={item.year} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                      className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <p className="text-xl font-bold text-blue-600 mb-2">{item.year}</p>
                      <p className="text-slate-500 text-sm">{item.event}</p>
                    </motion.div>
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={timelineInView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 150, delay: 0.3 + index * 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <item.icon className="w-5 h-5" />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;