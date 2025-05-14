import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      setFormStatus('submitting');
      setFormError(null);

      const response = await fetch('http://localhost:5000/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        try {
          await response.json(); // Attempt to parse (if any)
        } catch (jsonErr) {
          // It's fine if there's no JSON
        }

        setFormStatus('success');
        formRef.current.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        let errorMessage = 'Submission failed. Try again.';
        try {
          const errorData = await response.json();
          errorMessage = errorData?.error || errorMessage;
        } catch {}
        setFormStatus('error');
        setFormError(errorMessage);
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      setFormStatus('error');
      setFormError('Something went wrong. Please try again.');
    }
  };

  const handleInputChange = () => {
    setFormError(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6 text-secondary">Send Us a Message</h3>

      {formStatus === 'success' ? (
        <div className="bg-green-50 p-6 rounded-lg flex items-center">
          <Check size={24} className="text-success mr-3" />
          <p className="text-green-800">Thank you for your message! We'll get back to you shortly.</p>
        </div>
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
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="John Doe"
                required
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              placeholder="+91 98765 43210"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="form-input"
              placeholder="How can we help you?"
              required
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className={`btn-primary w-full flex items-center justify-center ${
              formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {formStatus === 'submitting' ? (
              <>Sending Message...</>
            ) : (
              <>
                Send Message
                <Send size={1} className="ml-2" />
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
