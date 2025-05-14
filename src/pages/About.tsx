import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Target, Heart, User, Users, Sparkles, Award, Shield } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import StatsCounter from '../components/StatsCounter';
import TestimonialSlider from '../components/TestimonialSlider';

const stats = [
  { value: 200, label: 'Projects Completed', suffix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
  { value: 20, label: 'Skilled Professionals', suffix: '+' },
  { value: 5, label: 'Years of Excellence', suffix: '+' },
];

const timeline = [
  {
    year: '2020',
    title: 'Foundation',
    description: 'Hi-Tech UPVC Windows was established with a vision to provide high-quality UPVC windows and doors to customers.',
  },
  {
    year: '2021',
    title: 'Expansion of Product Line',
    description: 'Introduced a wider range of UPVC products to cater to diverse customer needs.',
  },
  {
    year: '2022',
    title: 'Milestone: 200+ Projects',
    description: 'Successfully completed over 200 projects and established a strong client base.',
  },
  {
    year: '2023',
    title: 'Introduction of Advanced Technology',
    description: 'Integrated advanced technology for manufacturing and design to enhance product quality.',
  },
  {
    year: '2024',
    title: 'Celebrating 5 Years',
    description: 'Celebrating 5 years of excellence with over 500 successful projects and continued innovation.',
  },
];

const About: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
  ];

  return (
    <div>
      <PageHeader 
        title="About Us" 
        subtitle="Learn about our journey, vision, and commitment to excellence"
        breadcrumbs={breadcrumbs}
      />
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
             <h2 className="text-3xl font-bold mb-6 relative">
  Our Story
  <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary translate-y-2"></span>
</h2>

<p className="text-gray-600 mb-4 text-justify">
  With a legacy spanning over 24 years, Hi-Tech Builders has been a cornerstone in the construction industry, known for delivering high-quality residential and commercial projects. Our deep-rooted experience in building homes led us to understand the growing demand for better, more durable, and energy-efficient window and door solutions.
</p>

<p className="text-gray-600 mb-4 text-justify">
  In 2020, as a natural extension of our commitment to excellence, we launched Hi-Tech UPVC Windows — a specialized division dedicated to manufacturing and installing premium UPVC windows and doors. This venture is not just a new chapter, but a refined byproduct of our decades-long journey in construction.
</p>

<p className="text-gray-600 text-justify">
  Backed by a skilled team and the values of Hi-Tech Builders, Hi-Tech UPVC Windows has rapidly become a trusted name in the industry. From design to installation, we uphold the same standards of quality and customer satisfaction that have defined our parent company since the beginning.
</p>

            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img 
                src="/IMG-20250225-WA0004.jpg" 
                alt="Our Team at Work" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <StatsCounter stats={stats} />
      
      {/* Vision & Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary"
            >
              <div className="mb-6">
                <div className="inline-block p-3 rounded-full bg-blue-100 text-primary mb-4">
                  <Target size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                To be the leading provider of innovative and sustainable UPVC window and door solutions, transforming living spaces across the region while setting new standards for quality and customer satisfaction.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Become the industry benchmark for quality and innovation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Expand our reach to serve a wider customer base</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Continuously evolve our products to meet changing needs</span>
                </li>
              </ul>
            </motion.div>
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent"
            >
              <div className="mb-6">
                <div className="inline-block p-3 rounded-full bg-yellow-100 text-accent mb-4">
                  <Heart size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                To deliver premium quality UPVC windows and doors that enhance the comfort, security, and energy efficiency of our customers' spaces through innovative design, superior craftsmanship, and exceptional service.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Provide products that exceed customer expectations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Maintain the highest standards of quality and service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-accent mr-2 mt-1 flex-shrink-0" />
                  <span>Build lasting relationships with customers and partners</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-3 rounded-full bg-blue-100 text-primary mb-4">
                <Award size={30} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from product design to customer service.
              </p>
            </motion.div>
            
            {/* Integrity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-3 rounded-full bg-green-100 text-green-600 mb-4">
                <Shield size={30} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of integrity, honesty, and transparency in all our dealings.
              </p>
            </motion.div>
            
            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-3 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Sparkles size={30} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate and improve our products to meet evolving customer needs.
              </p>
            </motion.div>
            
            {/* Customer Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-3 rounded-full bg-yellow-100 text-yellow-600 mb-4">
                <User size={30} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We put our customers at the center of everything we do, ensuring their satisfaction.
              </p>
            </motion.div>
            
            {/* Teamwork */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-3 rounded-full bg-red-100 text-red-600 mb-4">
                <Users size={30} className="text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Teamwork</h3>
              <p className="text-gray-600">
                We value collaboration, respect, and teamwork in achieving our shared goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              A look at our growth and achievements over the years.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            {/* Timeline Events */}
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                {/* Year Marker */}
                <div className="my-4 md:my-0 md:w-2/12 flex justify-center relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                    {event.year}
                  </div>
                </div>
                
                {/* Empty Space (for alternate layout) */}
                <div className="md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience the quality and service that have made us a trusted name in the UPVC windows and doors industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/get-quote" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
                Get a Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;