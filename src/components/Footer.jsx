import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ChevronsRight, Send, ArrowUp } from 'lucide-react';
import logo from '../../logo.jpeg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/team' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-800 text-slate-300 border-t border-slate-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-50"></div>
       <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute -bottom-20 -right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
         <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Branding and Contact - Primary Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src={logo}
                  alt="Vision Technocrates Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Vision Technocrates
                </span>
                <p className="text-sm text-slate-400">Pvt. Ltd.</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your Safety, Our Responsibility. Professional security and facilities management since 2012.
            </p>

            <div className="mb-6">
              <h3 className="text-base font-semibold text-white mb-3">Get In Touch</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3 text-slate-400 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Shop No-13, SBI Building, Kankarbagh, Patna – 800020</span>
                </div>
                <a href="mailto:vtechnocrates@yahoo.com" className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>vtechnocrates@yahoo.com</span>
                </a>
                <a href="http://www.vtplbihar.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>www.vtplbihar.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <motion.a href="#" whileHover={{ scale: 1.2, y: -3 }} className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2, y: -3 }} className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.2, y: -3 }} className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Links and Services - Secondary Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-8">
              <h3 className="text-base font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-slate-400 hover:text-blue-300 transition-colors text-sm flex items-center group">
                      <ChevronsRight className="w-4 h-4 mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0"/>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-3">Our Services</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2"><Shield size={14} className="text-blue-400"/>Security Services</li>
                <li className="flex items-center gap-2"><ChevronsRight size={14} className="text-cyan-400"/>Housekeeping</li>
                <li className="flex items-center gap-2"><ChevronsRight size={14} className="text-cyan-400"/>Gardening</li>
                <li className="flex items-center gap-2"><ChevronsRight size={14} className="text-cyan-400"/>Valet Parking</li>
                <li className="flex items-center gap-2"><ChevronsRight size={14} className="text-cyan-400"/>Manpower Supply</li>
              </ul>
            </div>
          </motion.div>

          {/* Newsletter - Tertiary Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-8">
              <h3 className="text-base font-semibold text-white mb-3">Stay Updated</h3>
              <p className="text-slate-400 text-sm mb-4">Subscribe to our newsletter for the latest updates and security insights.</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md hover:from-blue-600 hover:to-cyan-600 transition-all"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Certifications and Back to Top - Quaternary Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-8">
              <h3 className="text-base font-semibold text-white mb-3">Certifications</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-green-400"/>
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronsRight size={14} className="text-blue-400"/>
                  <span>MSME Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronsRight size={14} className="text-purple-400"/>
                  <span>PASARA Licensed</span>
                </div>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm space-y-2 md:space-y-0">
            <div className="text-left">
              Copyright © 2025 Vision Technocrates Pvt. Ltd. | All Rights Reserved
            </div>
            <div className="text-center">
              Managed by <a href="https://ards.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Alpenrose digital solutions</a>
            </div>
            <div className="text-right">
              ISO Certified | MSME Registered | PASARA Licensed
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;