import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  description?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://www.aiswindows.com/wp-content/uploads/2022/04/windows2.jpg",
    category: "windows",
    title: "Modern Sliding Windows",
    description: "Contemporary sliding windows installed in a luxury apartment",
  },
  {
    id: 2,
    src: "https://5.imimg.com/data5/SELLER/Default/2025/1/484847753/FN/NZ/TM/10738377/sliding-mosquito-net-500x500.jpg",
    category: "windows",
    title: "Sliding with Mosquito Net Windows",
    description: "Contemporary UPVC entry door with glass panels",
  },
  {
    id: 3,
    src: "https://d21xn5q7qjmco5.cloudfront.net/images/a_home_with_stylish_aluminum_sliding_doora_permium-1721310000.png",
    category: "doors",
    title: "Sliding Doors",
    description: "Contemporary UPVC entry door with glass panels",
  },
  {
    id: 4,
    src: "https://5.imimg.com/data5/MK/FB/GLADMIN-14006912/casement-windows-250x250.jpg",
    category: "doors",
    title: "Casement Windows",
    description: "White casement windows in modern home",
  },
  {
    id: 5,
    src: "https://image.made-in-china.com/2f0j00dLDfGQAMJubt/House-Main-Gate-Designs-Aluminum-Door-Casement-Door-Swing-Glass-Door.webp",
    category: "doors",
    title: "Casement Openable Main Door",
    description: "White casement doors in modern home",
  },
  {
    id: 6,
    src: "https://cdn.bestsuppliers.com/seo_products_img/bomeidoors/22bbd44eea2130dc8fa5b4ec5ecc090d.jpg!/rotate/180/sq/400",
    category: "projects",
    title: "Casement Openable Toilet Door",
    description: "Casement doors in modern home",
  },
  {
    id: 7,
    src: "https://creativealuminium.net/wp-content/uploads/2022/06/Tilt-Turn-window-Creative-Aluminium.jpg",
    category: "windows",
    title: "Tilt & Turn Windows",
    description: "Large fixed windows showcasing scenic view",
  },
  {
    id: 8,
    src: "https://www.itplimited.com/wp-content/uploads/2024/10/window-13.jpg",
    category: "windows",
    title: "Fixed Window",
    description: "Large fixed windows showcasing scenic view",
  },
  {
    id: 9,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEMulCvGG-bGN-zIiyUOdQyiVIsu9PhQBvA&s",
    category: "windows",
    title: "Bay Window",
    description: "Elegant French-style UPVC doors",
  },
  {
    id: 10,
    src: "https://glazingcentre.co.uk/wp-content/uploads/2024/04/top-hung-steel-window-outside-view-v1.jpg",
    category: "windows",
    title: "Tophung Windows",
    description: "Space-efficient top hung windows in kitchen area",
  },
  {
    id: 11,
    src: "https://i.ytimg.com/vi/ZJi5LL6rPg0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBw1DIGu7VmsJ3F7Dz2cjvnscLugQ",
    category: "windows",
    title: "Ventilator Windows",
    description: "Space-efficient top hung windows in kitchen area",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/2816323/pexels-photo-2816323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "projects",
    title: "Residential Complex",
    description: "Multi-unit housing project with custom windows",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "projects",
    title: "Modern Home Renovation",
    description: "Complete window replacement for renovated home",
  },
];

const GalleryFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'windows', label: 'Windows' },
    { value: 'doors', label: 'Doors' },
    { value: 'projects', label: 'Projects' },
  ];

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center mb-8">
        {filters.map((filter, index) => (
          <motion.button
            key={filter.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`gallery-filter ${
              activeFilter === filter.value ? 'active' : ''
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </motion.button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500"
              />
              <div className="gallery-item-overlay">
                <div className="p-4 text-center">
                  <Maximize size={30} className="text-white mb-2 mx-auto" />
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white bg-primary p-2 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6L18 18"></path>
                </svg>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold text-secondary">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && (
                  <p className="text-gray-600 mt-1">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryFilter;