import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  title, 
  description, 
  image, 
  price,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="product-card group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {price && (
          <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
            {price}
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <Link 
              to={`/products/${id}`}
              className="w-full flex items-center justify-center bg-white text-primary font-medium py-2 rounded-lg"
            >
              View Details <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-secondary group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          {price && (
            <span className="text-primary font-medium">
              {price}
            </span>
          )}
          <Link 
            to={`/products/${id}`}
            className="text-blue-700 hover:text-blue-800 font-medium flex items-center transition-colors duration-300"
          >
            Details <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;