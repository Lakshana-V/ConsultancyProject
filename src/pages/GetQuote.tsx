import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';

const GetQuote: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Get Quote', path: '/get-quote' },
  ];

  const benefits = [
    "Personalized solutions tailored to your specific needs",
    "Detailed cost breakdown for complete transparency",
    "Expert recommendations from our experienced team",
    "Multiple design and material options to choose from",
    "No-obligation, free consultation",
    "Fast response within 24-48 hours"
  ];

  return (
    <div>
      <PageHeader 
        title="Get a Quote" 
        subtitle="Request a personalized quote for your UPVC windows and doors"
        breadcrumbs={breadcrumbs}
      />
      
      {/* Quote Request Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Quote Form */}
            <QuoteForm />
            
            {/* Info Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 relative">
                  Request Your Free Quote
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary translate-y-2"></span>
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Fill out the form to receive a customized quote for your UPVC windows and doors project. Our team will review your requirements and get back to you with a detailed proposal.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Benefits of Our Quote Service</h3>
                
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg font-semibold mb-2">What Happens Next?</h3>
                  <ol className="list-decimal ml-5 space-y-2">
                    <li>We'll review your requirements within 24-48 hours.</li>
                    <li>Our experts will prepare a detailed quote based on your needs.</li>
                    <li>We'll contact you to discuss the quote and answer any questions.</li>
                    <li>If you're satisfied, we'll schedule a site visit or proceed with the order.</li>
                  </ol>
                </div>
                
                <div className="mt-8 p-5 bg-lightGray rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Have Questions?</h3>
                  <p className="mb-4">
                    If you have any questions or need immediate assistance, feel free to contact us directly:
                  </p>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="tel:+919842721415" className="text-primary hover:underline">+91 9842721415</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Process</h2>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              From initial consultation to final installation, we ensure a smooth and hassle-free experience for our customers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation & Quote",
                description: "We discuss your requirements and provide a detailed quote based on your needs."
              },
              {
                number: "02",
                title: "Measurement & Design",
                description: "Our experts visit your site for precise measurements and finalize the design details."
              },
              {
                number: "03",
                title: "Manufacturing",
                description: "Your windows and doors are manufactured with precision using high-quality materials."
              },
              {
                number: "04",
                title: "Installation",
                description: "Our skilled team ensures proper installation with minimal disruption to your space."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md relative"
              >
                <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team is ready to assist you with any queries or concerns. Feel free to reach out to us directly.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;