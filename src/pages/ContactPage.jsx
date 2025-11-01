import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/ui/button';
import { useToast } from '@/ui/use-toast';

const ContactPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isFocused, setIsFocused] = useState({});

  const handleFocus = (e) => setIsFocused({ ...isFocused, [e.target.name]: true });
  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsFocused({ ...isFocused, [e.target.name]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for contacting us. We'll get back to you soon!",
      className: "bg-green-100 border-green-300 text-green-800",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsFocused({});
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    { icon: MapPin, title: "Registered Office", content: "Shop No-13, SBI Building, Main Road,<br />Kankarbagh, Patna – 800020, Bihar, India" },
    { icon: Mail, title: "Email", content: '<a href="mailto:vtechnocrates@yahoo.com" class="text-blue-600 hover:text-blue-500 transition-colors">vtechnocrates@yahoo.com</a>' },
    { icon: Phone, title: "Website", content: '<a href="http://www.vtplbihar.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-500 transition-colors">www.vtplbihar.com</a>' }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | Vision Technocrates Pvt. Ltd.</title>
        <meta name="description" content="Get in touch with Vision Technocrates for a free consultation. Contact us for security, facility management, and manpower services." />
      </Helmet>

      <section className="py-20 bg-slate-50 overflow-hidden" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Mail className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Ready to secure your premises? Contact us today for a free consultation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 space-y-8 shadow-lg">
                {[
                  { name: 'name', label: 'Full Name *', type: 'text', placeholder: 'Enter your name' },
                  { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'your.email@example.com' },
                  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <motion.label
                      htmlFor={field.name}
                      className="absolute left-4 text-slate-500 pointer-events-none transition-all duration-300"
                      animate={{
                        y: isFocused[field.name] || formData[field.name] ? -28 : 0,
                        scale: isFocused[field.name] || formData[field.name] ? 0.85 : 1,
                        color: isFocused[field.name] ? '#2563eb' : '#64748b',
                      }}
                    >
                      {field.label}
                    </motion.label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      required={field.label.includes('*')}
                      className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-300 rounded-t-lg text-slate-800 placeholder-transparent focus:outline-none focus:border-blue-500 transition"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className="relative">
                  <motion.label
                    htmlFor="message"
                    className="absolute left-4 text-slate-500 pointer-events-none transition-all duration-300"
                    animate={{
                      y: isFocused.message || formData.message ? -28 : 0,
                      scale: isFocused.message || formData.message ? 0.85 : 1,
                      color: isFocused.message ? '#2563eb' : '#64748b',
                    }}
                  >
                    Message *
                  </motion.label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-300 rounded-t-lg text-slate-800 placeholder-transparent focus:outline-none focus:border-blue-500 transition resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 group hover:scale-105">
                  Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 mb-1">{info.title}</p>
                      <p className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: info.content }} />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="bg-white rounded-xl p-2 border border-slate-200 shadow-md"
              >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.0!2d85.1376!3d25.5941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM1JzM4LjgiTiA4NcKwMDgnMTUuNCJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="250" style={{ border: 0, borderRadius: '0.5rem' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Vision Technocrates Location" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;