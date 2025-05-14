import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronRight, Shield, Zap, PenTool as Tool, Clock, Award, HeadphonesIcon } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import StatsCounter from '../components/StatsCounter';
import ProductCard from '../components/ProductCard';
import FeatureBox from '../components/FeatureBox';
import TestimonialSlider from '../components/TestimonialSlider';
import ThreeDWindow from '../components/ThreeDWindow';

const stats = [
  { value: 200, label: 'Projects Completed', suffix: '+' },
  { value: 98, label: 'Satisfied Clients', suffix: '%' },
  { value: 5, label: 'Years of Excellence', suffix: '+' },
  { value: 10, label: 'Skilled Professionals', suffix: '+' },
];

const productPreview = [
  {
    id: 'sliding-windows',
    title: 'Sliding Windows',
    description: 'Our sliding windows offer smooth operation, maximum ventilation, and unobstructed views.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/12/372704651/XP/XJ/QS/63097046/upvc-2-track-sliding-window-500x500.jpg',
    price: '₹280-320 per sq ft'
  },
  {
    id: 'casement-openable-windows',
    title: 'Casement Windows',
    description: 'Casement windows provide excellent ventilation and are easy to operate with a crank mechanism.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/335540558/LI/CO/ZD/7479603/40-mm-series-casement-window.png',
    price: '₹400-450 per sq ft'
  },
  {
    id: 'sliding-doors',
    title: 'Sliding Doors',
    description: 'Our sliding doors combine elegance with functionality, perfect for patios and balconies.',
    image: 'https://image.made-in-china.com/2f0j00cLRkDFECnNrS/Slimline-Internal-Glass-and-Aluminium-Pocket-Double-Sliding-Doors.jpg',
    price: '₹500-650 per sq ft'
  }
];

const features = [
  {
    icon: <Shield size={40} />,
    title: 'Enhanced Security',
    description: 'Multi-point locking systems and reinforced frames provide superior security for your home.'
  },
  {
    icon: <Zap size={40} />,
    title: 'Energy Efficient',
    description: 'Our UPVC windows and doors offer excellent thermal insulation, reducing energy costs.'
  },
  {
    icon: <Tool size={40} />,
    title: 'Low Maintenance',
    description: 'UPVC requires minimal maintenance and won\'t rot, rust, or fade over time.'
  },
  {
    icon: <Clock size={40} />,
    title: 'Durable & Long-lasting',
    description: 'Built to withstand harsh weather conditions and maintain performance for years.'
  },
  {
    icon: <Award size={40} />,
    title: 'Quality Assured',
    description: 'All our products meet international quality standards and come with warranty.'
  },
  {
    icon: <HeadphonesIcon size={40} />,
    title: 'Expert Support',
    description: 'Our team provides professional advice and support throughout your project.'
  }
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Stats Counter */}
      <StatsCounter stats={stats} />
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                5 Years of Excellence in UPVC Windows & Doors
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary translate-y-2"></span>
              </h2>
              <p className="text-gray-600 mb-6">
                Hi-Tech UPVC Windows has been a trusted name in the industry for 5 years, delivering premium quality UPVC windows and doors that enhance the beauty, security, and energy efficiency of homes and commercial spaces.
              </p>
              <p className="text-gray-600 mb-8">
                Our commitment to quality, innovation, and customer satisfaction has made us a preferred choice for homeowners, architects, and builders across the region.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More About Us <ChevronRight size={18} className="ml-1 inline-block" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ThreeDWindow />
              
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-accent text-white p-4 rounded-lg shadow-lg z-10 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-lg mb-2">Interactive Experience</h3>
                <p className="text-sm">
                  Explore our products in 3D. Drag to rotate and see the quality and design from all angles.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Premium Products</h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Discover our range of high-quality UPVC windows and doors designed to enhance the beauty, comfort, and security of your home.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productPreview.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/products" className="btn-primary">
              View All Products <ChevronRight size={18} className="ml-1 inline-block" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Choose Our UPVC Windows & Doors</h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Our products offer numerous benefits that make them the perfect choice for modern homes and buildings.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureBox
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
    
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get in touch with our experts for a free consultation and quote. We'll help you find the perfect windows and doors for your home.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/get-quote" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                    Get a Quote
                  </Link>
                  <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-80"
              >
                <ThreeDWindow type="door" showControls={false} />
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-lg shadow-lg z-10"
                >
                  <p className="text-sm">
                    Premium UPVC Doors <br />
                    <span className="font-semibold">Starting from ₹500 per sq ft</span>
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;