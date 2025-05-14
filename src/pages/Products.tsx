import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
  ];

  const products = [
    {
      id: 'sliding-windows',
      title: 'Sliding Windows',
      description: 'Our sliding windows offer smooth operation, maximum ventilation, and unobstructed views.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/12/372704651/XP/XJ/QS/63097046/upvc-2-track-sliding-window-500x500.jpg',
      price: '₹280-320 per sq ft'
    },
    {
      id: 'sliding-with-mosquito-net-windows',
      title: 'Sliding with Mosquito Net Windows',
      description: 'Sliding windows with integrated mosquito nets for enhanced ventilation and insect protection.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/10/458711603/CQ/CU/UR/24391699/mosquito-net-window-500x500.png',
      price: '₹320-400 per sq ft'
    },
    {
      id: 'sliding-doors',
      title: 'Sliding Doors',
      description: 'Our sliding doors combine elegance with functionality, perfect for patios and balconies.',
      image: 'https://image.made-in-china.com/2f0j00cLRkDFECnNrS/Slimline-Internal-Glass-and-Aluminium-Pocket-Double-Sliding-Doors.jpg',
      price: '₹500-650 per sq ft'
    },
    {
      id: 'casement-openable-windows',
      title: 'Casement Openable Windows',
      description: 'Casement windows provide excellent ventilation and are easy to operate with a crank mechanism.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/335540558/LI/CO/ZD/7479603/40-mm-series-casement-window.png',
      price: '₹400-450 per sq ft'
    },
    {
      id: 'casement-openable-main-door',
      title: 'Casement Openable Main Door',
      description: 'Elegant main doors with a casement design, offering superior security and aesthetic appeal.',
      image: 'https://aparnavenster.com/wp-content/uploads/2024/05/casement-doors-01.webp',
      price: '₹500-580 per sq ft'
    },
    {
      id: 'casement-openable-toilet-door',
      title: 'Casement Openable Toilet Door',
      description: 'Durable and water-resistant toilet doors with a casement design for modern bathrooms.',
      image: 'https://image.made-in-china.com/2f0j00OkWlJsirfuUo/Modern-Waterproof-Toilet-Casement-Doors-Design-Custom-Interior-Bathroom-Decorative-Swing-Frosted-Glass-Aluminium-Door.webp',
      price: '₹475-600 per sq ft'
    },
    {
      id: 'tilt-turn-windows',
      title: 'Tilt & Turn Windows',
      description: 'Versatile windows that can be opened in two ways - tilted for ventilation or turned for full opening.',
      image: 'https://www.justvaluedoors.co.uk/images_new/gallery/alu-tilt/aluminium-tilt-turn-window-3.jpg',
      price: '₹400-450 per sq ft'
    },
    {
      id: 'fixed-windows',
      title: 'Fixed Windows',
      description: 'Non-opening windows that provide maximum light and unobstructed views while ensuring energy efficiency.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/11/467029964/PN/ZE/RW/161197968/upvc-glass-fixed-window-500x500.jpg',
      price: '₹250-285 per sq ft'
    },
    {
      id: 'bay-windows',
      title: 'Bay Windows',
      description: 'Bay windows add elegance and extra space to your home, offering panoramic views and natural light.',
      image: 'https://doorwins.com/wp-content/uploads/2022/06/Upvc-bay-windows1.jpg',
      price: '₹400-500 per sq ft'
    },
    {
      id: 'tophung-windows',
      title: 'Tophung Windows',
      description: 'Tophung windows provide excellent ventilation and are ideal for compact spaces.',
      image: 'https://i.pinimg.com/1200x/30/32/8b/30328bb3b11b7ab5eab7a6ecbf57ce72.jpg',
      price: '₹350-400 per sq ft'
    },
    {
      id: 'ventilator',
      title: 'Ventilator',
      description: 'Ventilators provide excellent airflow and are ideal for compact spaces like bathrooms and kitchens.',
      image: 'https://weatherseal.com/wp-content/uploads/2025/01/uPVC-Ventilator-Window-Weatherseal-by-Asian-Paints-Photoroom.webp',
      price: '₹250-300 per sq ft'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Products" 
        subtitle="Explore our premium UPVC windows and doors solutions"
        breadcrumbs={breadcrumbs}
      />
      
      {/* Products Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Explore Our Premium UPVC Solutions</h2>
            <p className="text-gray-600">
              At Hi-Tech UPVC, we offer a comprehensive range of high-quality UPVC windows and doors designed to enhance the aesthetics, security, and energy efficiency of your home. Each product is crafted with precision and care, using premium materials and advanced technology.
            </p>
          </motion.div>
          
          {/* Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
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
        </div>
      </section>
      
      {/* Why Choose Our Products */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose Our UPVC Products?</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Energy Efficiency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Energy Efficiency</h3>
              <p className="text-gray-600">
                Our UPVC windows and doors provide excellent thermal insulation, helping to maintain a comfortable indoor temperature and reduce energy costs. The multi-chambered profiles minimize heat transfer, keeping your home warm in winter and cool in summer.
              </p>
            </motion.div>
            
            {/* Durability & Low Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Durability & Low Maintenance</h3>
              <p className="text-gray-600">
                UPVC is highly durable and resistant to weathering, corrosion, and fading. Unlike wood, it won't rot, warp, or require regular painting. Our products are designed to maintain their appearance and performance for years with minimal maintenance.
              </p>
            </motion.div>
            
            {/* Enhanced Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Enhanced Security</h3>
              <p className="text-gray-600">
                Security is a top priority in our designs. Our windows and doors feature multi-point locking systems, reinforced frames, and high-quality hardware to provide superior protection for your home and loved ones.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Noise Reduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 10c0-3.9 3.1-7 7-7s7 3.1 7 7v4c0 3.9-3.1 7-7 7s-7-3.1-7-7v-4Z"></path>
                  <path d="M9 10v4"></path>
                  <path d="M19 8v8"></path>
                  <path d="M22 8v8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Noise Reduction</h3>
              <p className="text-gray-600">
                Our UPVC windows and doors provide excellent sound insulation, helping to reduce external noise and create a peaceful home environment. This is particularly beneficial for homes located in busy or noisy areas.
              </p>
            </motion.div>
            
            {/* Customization Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13.1 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-8.1"></path>
                  <path d="M15.8 3.5c.7-.7 1.8-.7 2.5 0 .7.7.7 1.8 0 2.5l-7.8 7.8L7 14l.8-3.5 7.8-7.8Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customization Options</h3>
              <p className="text-gray-600">
                We offer a wide range of customization options to match your specific requirements and aesthetic preferences. Choose from various colors, finishes, glass types, and hardware options to create windows and doors that perfectly complement your home.
              </p>
            </motion.div>
            
            {/* Environmentally Friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2c0 0 10 5 10 13c0 3-2 5-5 5c-5 0-8-8-12-8c-3 0-5 2-5 5c0 8 10 13 10 13"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Environmentally Friendly</h3>
              <p className="text-gray-600">
                UPVC is a sustainable and environmentally friendly material. It's fully recyclable and has a long lifespan, reducing the need for replacements. Additionally, the energy efficiency of our products helps to reduce carbon emissions from heating and cooling systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Home?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote. Our experts are ready to help you find the perfect windows and doors for your home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/get-quote" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Get a Free Quote
              </a>
              <a href="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50">
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;