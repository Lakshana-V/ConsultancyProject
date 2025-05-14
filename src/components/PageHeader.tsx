import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  path: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="relative bg-primary-dark py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      
      {/* 3D Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute right-10 top-10 w-16 h-16 bg-blue-500 rounded-full opacity-20"
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
        className="absolute left-1/4 bottom-10 w-24 h-24 bg-accent rounded-full opacity-20"
      ></motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.3 }}
        className="absolute right-1/3 top-1/3 w-32 h-32 border-4 border-blue-400 rounded-lg opacity-20 transform rotate-12"
      ></motion.div>
      
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        
        {breadcrumbs && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex justify-center items-center text-sm"
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight size={16} className="mx-2 text-gray-400" />}
                
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-accent font-medium">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="text-gray-300 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;