import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
  ];

  const contactDetails = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: 'Our Location',
      details: 'Hi Tech UPVC Windoorse, 63A, Chennimalai Road, Rasi Oil Mill Compound, Kangayam - 638 701, Tiruppur District',
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Phone Numbers',
      details: '98427 21415, 94428 21415',
      link: 'tel:+919842721415',
    },
    {
      icon: <Mail size={24} className="text-primary" />,
      title: 'Email Address',
      details: 'hitechupvcwindoorse@gmail.com',
      link: 'mailto:hitechupvcwindoorse@gmail.com',
    },
    {
      icon: <Clock size={24} className="text-primary" />,
      title: 'Working Hours',
      details: 'Monday - Saturday: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team for inquiries, support, or to schedule a consultation"
        breadcrumbs={breadcrumbs}
      />
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6 relative"
              >
                Get In Touch
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary translate-y-2"></span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-8"
              >
                We'd love to hear from you! Whether you have questions about our products, need a quote, or want to schedule a consultation, our team is here to help you find the perfect UPVC windows and doors for your space.
              </motion.p>
              
              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="mr-4 p-3 bg-blue-50 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-gray-600 hover:text-primary transition-colors">
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  
                
                 
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title centered mx-auto">Our Location</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Visit our showroom to explore our range of UPVC windows and doors.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0712359056!2d77.5596!3d11.0056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzIwLjIiTiA3N8KwMzMnMzQuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="iframe-map"
              allowFullScreen={true}
              title="Hi-Tech UPVC Windows Location"
            ></iframe>
          </div>
        </div>
      </section>
      
                
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Contact us today to discuss your project requirements or request a free quote. We're here to help you find the perfect UPVC windows and doors for your home or business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="/get-quote" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Get a Free Quote
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;