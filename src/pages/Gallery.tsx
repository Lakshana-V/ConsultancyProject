import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import GalleryFilter from '../components/GalleryFilter';

const Gallery: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
  ];

  return (
    <div>
      <PageHeader 
        title="Our Gallery" 
        subtitle="Explore our completed projects and premium products"
        breadcrumbs={breadcrumbs}
      />
      
      {/* Gallery Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Explore Our Work</h2>
            <p className="text-gray-600">
              Browse through our gallery to see the quality and craftsmanship of our UPVC windows and doors. We take pride in our completed projects that have transformed homes and commercial spaces.
            </p>
          </motion.div>
          
          {/* Gallery Filter Component */}
          <GalleryFilter />
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Featured Projects</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Featured Project 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/5825578/pexels-photo-5825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Modern Villa Project" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Modern Villa Project</h3>
                <p className="text-gray-600 mb-4">
                  A complete window and door installation for a luxury villa in Chennai. This project included sliding windows, casement windows, and sliding doors with premium fittings and hardware.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">Sliding Windows</span>
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">Casement Windows</span>
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">Sliding Doors</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Completed: March 2023</span>
                  <span className="text-primary font-medium">Chennai, Tamil Nadu</span>
                </div>
              </div>
            </motion.div>
            
            {/* Featured Project 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Contemporary Office Building" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Corporate Office Project</h3>
                <p className="text-gray-600 mb-4">
                  A large-scale installation for a modern corporate office building in Bangalore. The project featured fixed windows, ventilators, and casement windows with soundproof glass.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">Fixed Windows</span>
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">Ventilators</span>
                  <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">Soundproof Glass</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Completed: November 2023</span>
                  <span className="text-primary font-medium">Bangalore, Karnataka</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Contact us today for a free consultation and quote. Our experts are ready to help you transform your space with our premium UPVC windows and doors.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/get-quote" className="btn-primary">
              Get a Free Quote
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;