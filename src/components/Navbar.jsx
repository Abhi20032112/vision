import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Home, Info, Briefcase, Users, HeartHandshake as Handshake, Award, Phone } from 'lucide-react';
import { Button } from '@/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Clients', href: '/clients', icon: Handshake },
    { name: 'Certifications', href: '/certifications', icon: Award },
    { name: 'Contact Us', href: '/contact', icon: Phone }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-neutral-200'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="w-10 h-10 text-primary-600" />
            </motion.div>
            <div>
              <span className="text-xl font-bold text-gradient">
                Vision Technocrates
              </span>
              <p className="text-xs text-neutral-500">Pvt. Ltd.</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1 bg-neutral-50 p-1 rounded-full border border-neutral-200">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
                  className={`relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group rounded-full ${isActive ? 'bg-white shadow-sm text-primary-600' : ''}`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className={`w-4 h-4 transition-colors ${isActive ? 'text-primary-600' : 'text-neutral-500 group-hover:text-neutral-700'}`} />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden lg:block"
          >
            <Link to="/contact">
              <Button className="bg-gradient-primary text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get a Quote
              </Button>
            </Link>
          </motion.div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-neutral-700 p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-200 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors ${isActive ? 'text-primary-600 font-semibold bg-primary-50' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
              <Link to="/contact" className="w-full">
                <Button onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-gradient-primary text-white mt-4 rounded-lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;