import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';

const productCategories = [
  'Sliding Windows',
  'Casement Windows',
  'Fixed Windows',
  'Sliding Doors',
  'Casement Doors',
  'Bay Windows',
  'Tilt & Turn Windows',
  'Top Hung Windows',
  'Ventilators',
  'Other'
];

const budgetRanges = [
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,00,000',
  'Above ₹2,00,000'
];

const QuoteForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setFormStatus('submitting');
      setFormError(null);

      // EmailJS configuration
      const serviceId = 'service_z8aem8e'; // Replace with your EmailJS Service ID
      const templateId = 'template_mtfrsn8'; // Replace with your EmailJS Template ID
      const publicKey = 'gUOzEAXjFOYWvQxz1'; // Replace with your EmailJS Public Key

      // Send form data using EmailJS
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setFormStatus('success');
      formRef.current.reset();

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      setFormError('There was an error sending your request. Please try again.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-6">
        <FileText size={24} className="text-primary mr-3" />
        <h3 className="text-2xl font-bold text-secondary">Request a Quote</h3>
      </div>

      {formStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 p-6 rounded-lg"
        >
          <div className="flex items-center mb-4">
            <div className="bg-success rounded-full p-2 mr-4">
              <Check size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-green-800">Quote Request Received!</h3>
          </div>
          <p className="text-green-700 mb-4">
            Thank you for your interest in Hi-Tech UPVC products. Our team will review your requirements and get back to you within 24-48 hours with a customized quote.
          </p>
          <p className="text-green-600 text-sm">
            A confirmation email has been sent to your email address.
          </p>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit}>
          {formStatus === 'error' && (
            <div className="bg-red-50 p-4 rounded-lg mb-6 flex items-center">
              <AlertCircle size={24} className="text-error mr-3" />
              <p className="text-red-800">{formError}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="johndoe@example.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div>
              <label htmlFor="address" className="form-label">Location/Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-input"
                placeholder="Chennai, Tamil Nadu"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="product_category" className="form-label">Product Category</label>
              <select
                id="product_category"
                name="product_category"
                className="form-input"
                required
              >
                <option value="">Select a category</option>
                {productCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="form-label">Budget Range</label>
              <select
                id="budget"
                name="budget"
                className="form-input"
                required
              >
                <option value="">Select a budget range</option>
                {budgetRanges.map((range, index) => (
                  <option key={index} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="project_details" className="form-label">Project Details</label>
            <textarea
              id="project_details"
              name="project_details"
              rows={5}
              className="form-input"
              placeholder="Please provide details about your project requirements, dimensions, or any specific features you're looking for."
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="terms" 
                className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                required
              />
              <span className="text-gray-700 text-sm">
                I agree to receive communications about my quote request.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className={`btn-primary w-full flex items-center justify-center ${
              formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {formStatus === 'submitting' ? (
              <>Processing Request...</>
            ) : (
              <>
                Submit Quote Request
                <Send size={1} className="ml-2" />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default QuoteForm;