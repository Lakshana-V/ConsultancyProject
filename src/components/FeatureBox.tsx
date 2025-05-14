import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ 
  icon, 
  title, 
  description,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="feature-box group"
    >
      <div className="mb-4 text-primary group-hover:text-accent transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureBox;