


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ThreeDWindow from '../components/ThreeDWindow';
import ProductCard from '../components/ProductCard';

interface Product {
  id: string;
  title: string;
  description: string;
  Amount: string;
  longDescription: string;
  features: string[];
  specifications: { [key: string]: string };
  images: string[];
  relatedProducts: string[];
}

const productsData: { [key: string]: Product } = {
  'sliding-windows': {
    id: 'sliding-windows',
    title: 'Sliding Windows',
    Amount: '₹280-320 per sq ft',
    description: 'Our sliding windows offer smooth operation, maximum ventilation, and unobstructed views.',
    longDescription: 'Hi-Tech UPVC Sliding Windows are designed for modern homes, offering a perfect blend of aesthetics and functionality. These windows slide horizontally, making them ideal for spaces where outward opening windows are impractical. With their sleek design and smooth operation, our sliding windows provide maximum ventilation and unobstructed views while ensuring energy efficiency and security.',
    features: [
      'Smooth horizontal sliding operation',
      'Multi-point locking system for enhanced security',
      'Double glazing option for improved thermal and acoustic insulation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Easy to clean and maintain',
      'Available in various colors and finishes',
      'Weather-resistant seals to prevent air and water infiltration',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '4mm to 24mm',
      'Frame Thickness': '60mm to 70mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Warranty': '5 Years',
      'Price': '₹280-320 per sq ft',
    },
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/12/372704651/XP/XJ/QS/63097046/upvc-2-track-sliding-window-500x500.jpg',
      'https://5.imimg.com/data5/YA/NP/DB/SELLER-3132614/upvc-sliding-window-500x500.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2022/8/OI/FQ/AC/11258435/upvc-sliding-mesh-window-500x500.jpg',
    ],
    relatedProducts: ['sliding-with-mosquito-net-windows', 'fixed-windows'],
  },
  'sliding-with-mosquito-net-windows': {
    id: 'sliding-with-mosquito-net-windows',
    title: 'Sliding with Mosquito Net Windows',
    description: 'Sliding windows with integrated mosquito nets for enhanced ventilation and insect protection.',
    Amount: '₹320-400 per sq ft',
    longDescription: 'Hi-Tech UPVC Sliding with Mosquito Net Windows are designed to provide maximum ventilation while keeping insects out. These windows feature an integrated mosquito net that slides seamlessly along with the window, ensuring convenience and functionality. Perfect for modern homes, these windows combine style, durability, and practicality.',
    features: [
      'Integrated mosquito net for insect protection',
      'Smooth horizontal sliding operation',
      'Multi-point locking system for enhanced security',
      'Double glazing option for improved thermal and acoustic insulation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Easy to clean and maintain',
      'Available in various colors and finishes',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '4mm to 24mm',
      'Frame Thickness': '60mm to 70mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Mosquito Net Material': 'Fiberglass or Stainless Steel',
      'Warranty': '5 Years',
      'Price': '₹320-400 per sq ft',
    },
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2024/10/458711603/CQ/CU/UR/24391699/mosquito-net-window-500x500.png',
      'https://5.imimg.com/data5/SELLER/Default/2023/4/300623348/YJ/NC/PM/43791357/sliding-mosquito-net-window-500x500.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2025/2/490897901/KV/TY/HD/3710168/sliding-mosquito-net-500x500.jpg',
    ],
    relatedProducts: ['sliding-windows', 'casement-openable-windows'],
  },
  'sliding-doors': {
    id: 'sliding-doors',
    title: 'Sliding Doors',
    Amount: '₹500-650 per sq ft',
    description: 'Our sliding doors combine elegance with functionality, perfect for patios and balconies.',
    longDescription: 'Hi-Tech UPVC Sliding Doors are designed to provide a seamless connection between indoor and outdoor spaces. These doors slide horizontally, making them ideal for patios, balconies, and areas where space is limited. Our sliding doors combine elegance with functionality, offering smooth operation, maximum light, and unobstructed views while ensuring energy efficiency and security.',
    features: [
      'Smooth horizontal sliding operation',
      'Multi-point locking system for enhanced security',
      'Double glazing option for improved thermal and acoustic insulation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Easy to clean and maintain',
      'Available in various colors and finishes',
      'Weather-resistant seals to prevent air and water infiltration',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '6mm to 28mm',
      'Frame Thickness': '70mm to 80mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Warranty': '5 Years',
      'Price': '₹500-650 per sq ft',
    },
    images: [
      'https://image.made-in-china.com/2f0j00cLRkDFECnNrS/Slimline-Internal-Glass-and-Aluminium-Pocket-Double-Sliding-Doors.jpg',
      'https://www.atrium.com/wp-content/uploads/2018/08/wsp-patio-door-2lite-311-img-1.jpg',
      'https://m.media-amazon.com/images/I/71cAqwk9YEL.AC_UF1000,1000_QL80.jpg',
    ],
    relatedProducts: ['casement-openable-main-door', 'sliding-windows'],
  },
  'casement-openable-windows': {
    id: 'casement-openable-windows',
    title: 'Casement Openable Windows',
    description: 'Casement windows provide excellent ventilation and are easy to operate with a crank mechanism.',
    Amount: '₹400-450 per sq ft',
    longDescription: 'Hi-Tech UPVC Casement Openable Windows are designed to provide maximum ventilation and unobstructed views. These windows are hinged on one side and open outward like a door, making them ideal for modern homes. With their sleek design and advanced functionality, our casement openable windows ensure energy efficiency, security, and ease of use.',
    features: [
      'Outward opening for maximum ventilation',
      'Easy operation with a crank mechanism',
      'Multi-point locking system for enhanced security',
      'Double glazing option for improved thermal and acoustic insulation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Easy to clean and maintain',
      'Available in various colors and finishes',
      'Weather-resistant seals to prevent air and water infiltration',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '4mm to 24mm',
      'Frame Thickness': '60mm to 70mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Warranty': '5 Years',
      'Price': '₹400-450 per sq ft',
    },
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2023/8/335540558/LI/CO/ZD/7479603/40-mm-series-casement-window.png',
      'https://5.imimg.com/data5/SELLER/Default/2023/7/323555067/IZ/BN/OA/154264222/aluminum-casement-windows-250x250.jpg',
      'https://images.jdmagicbox.com/rep/b2b/casement-windows/casement-windows-3.jpg',
    ],
    relatedProducts: ['tilt-turn-windows', 'tophung-windows'],
  },
  'casement-openable-main-door': {
    id: 'casement-openable-main-door',
    title: 'Casement Openable Main Door',
    description: 'Elegant main doors with a casement design, offering superior security and aesthetic appeal.',
    Amount: '₹500-580 per sq ft',
    longDescription: 'Hi-Tech UPVC Casement Openable Main Doors are designed to provide a grand entrance to your home. These doors are hinged on one side and open outward or inward, offering a wide opening for easy access. With their elegant design and advanced UPVC technology, our casement openable main doors provide superior security, energy efficiency, and noise reduction.',
    features: [
      'Outward or inward opening for maximum accessibility',
      'Multi-point locking system for enhanced security',
      'Double glazing option for improved thermal and acoustic insulation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Easy to clean and maintain',
      'Available in various colors and finishes',
      'Weather-resistant seals to prevent air and water infiltration',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '6mm to 28mm',
      'Frame Thickness': '70mm to 80mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Warranty': '5 Years',
      'Price': '₹500-580 per sq ft',
    },
    images: [
      'https://aparnavenster.com/wp-content/uploads/2024/05/casement-doors-01.webp',
      'https://tiimg.tistatic.com/fp/1/007/453/durable-light-weight-and-strong-casement-upvc-open-door-423.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2025/3/498633258/JU/FH/IE/208222028/8222-250x250.webp',
    ],
    relatedProducts: ['sliding-doors', 'casement-openable-toilet-door'],
  },
  'casement-openable-toilet-door': {
    id: 'casement-openable-toilet-door',
    title: 'Casement Openable Toilet Door',
    description: 'Durable and water-resistant toilet doors with a casement design for modern bathrooms.',
    Amount: '₹475-600 per sq ft',
    longDescription: 'Hi-Tech UPVC Casement Openable Toilet Doors are designed for modern bathrooms, offering durability, water resistance, and a sleek design. These doors are hinged on one side and open outward or inward, making them ideal for compact spaces. With their advanced UPVC technology, our toilet doors ensure long-lasting performance and easy maintenance.',
    features: [
      'Water-resistant and durable design',
      'Outward or inward opening for compact spaces',
      'Multi-point locking system for enhanced security',
      'Available in various colors and finishes',
      'Easy to clean and maintain',
      'Weather-resistant seals to prevent moisture infiltration',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '4mm to 24mm',
      'Frame Thickness': '60mm to 70mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Warranty': '5 Years',
      'Price': '₹475-600 per sq ft',
    },
    images: [
      'https://image.made-in-china.com/2f0j00OkWlJsirfuUo/Modern-Waterproof-Toilet-Casement-Doors-Design-Custom-Interior-Bathroom-Decorative-Swing-Frosted-Glass-Aluminium-Door.webp',
      'https://image.made-in-china.com/202f0j00yGmbQuAEZTqF/Aluminium-Toilet-Door-Single-Swing-Opening-Casement-Push-out-Inward-Bathroom-Door-with-Frosted-Glass.webp',
      'https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/ExtraLarge/20230123090338-5d799fbf-5e72-42c3-ad41-948ed89bb630.jpg',
    ],
    relatedProducts: ['casement-openable-main-door', 'sliding-doors'],
  },
  'tilt-turn-windows': {
    id: 'tilt-turn-windows',
    title: 'Tilt & Turn Windows',
    description: 'Versatile windows that can be opened in two ways - tilted for ventilation or turned for full opening.',
    Amount: '₹400-450 per sq ft',
    longDescription: 'Hi-Tech UPVC Tilt & Turn Windows offer versatility and convenience with their dual-function operation. These windows can be tilted inward from the top for secure ventilation or turned inward from the side for full opening and easy cleaning. Our tilt & turn windows combine modern design with advanced functionality, providing excellent security, energy efficiency, and ease of use.',
    features: [
      'Dual-function operation - tilt for ventilation or turn for full opening',
      'Multi-point locking system for enhanced security',
      'Double glazing option for improved thermal and acoustic insulation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Easy to clean and maintain',
      'Available in various colors and finishes',
      'Weather-resistant seals to prevent air and water infiltration',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '4mm to 24mm',
      'Frame Thickness': '60mm to 70mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Warranty': '5 Years',
      'Price': '₹400-450 per sq ft',
    },
    images: [
      'https://www.justvaluedoors.co.uk/images_new/gallery/alu-tilt/aluminium-tilt-turn-window-3.jpg',
      'https://shreewindows.com/uploads/product/1584698398-upvc-tilt-turn-window-500x500.jpg',
      'https://5.imimg.com/data5/AP/CT/MY-37176000/tilt-turn-windows.jpg',
    ],
    relatedProducts: ['casement-openable-windows', 'fixed-windows'],
  },
  'fixed-windows': {
    id: 'fixed-windows',
    title: 'Fixed Windows',
    description: 'Non-opening windows that provide maximum light and unobstructed views while ensuring energy efficiency.',
    Amount: '₹250-285 per sq ft',
    longDescription: 'Hi-Tech UPVC Fixed Windows are designed to provide maximum light and unobstructed views. These non-opening windows are perfect for areas where ventilation is not required but natural light and views are desired. Our fixed windows offer excellent energy efficiency, noise reduction, and security while enhancing the aesthetics of your home.',
    features: [
      'Non-opening design for maximum light and views',
      'Excellent thermal and acoustic insulation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Easy to clean and maintain',
      'Available in various colors and finishes',
      'Weather-resistant seals to prevent air and water infiltration',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '4mm to 24mm',
      'Frame Thickness': '60mm to 70mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Warranty': '5 Years',
      'Price': '₹250-285 per sq ft',
    },
    images: [
      'https://5.imimg.com/data5/SELLER/Default/2024/11/467029964/PN/ZE/RW/161197968/upvc-glass-fixed-window-500x500.jpg',
      'https://buildmart.ca/wp-content/uploads/2023/08/fixed-picture-window-white-colour.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2024/11/465655956/NH/NY/XI/83055679/upvc-fixed-window-500x500.jpeg',
    ],
    relatedProducts: ['sliding-windows', 'bay-windows'],
  },
  'bay-windows': {
    id: 'bay-windows',
    title: 'Bay Windows',
    description: 'Bay windows add elegance and extra space to your home, offering panoramic views and natural light.',
    Amount: '₹400-500 per sq ft',
    longDescription: 'Hi-Tech UPVC Bay Windows are designed to enhance the aesthetics of your home while providing additional space and natural light. These windows project outward from the main walls, creating a cozy nook or seating area. With their elegant design and advanced UPVC technology, our bay windows offer superior energy efficiency, security, and noise reduction.',
    features: [
      'Elegant design that enhances home aesthetics',
      'Creates additional space and seating area',
      'Panoramic views with maximum natural light',
      'Multi-point locking system for enhanced security',
      'Double glazing option for improved thermal and acoustic insulation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Available in various colors and finishes',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '6mm to 28mm',
      'Frame Thickness': '70mm to 80mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Warranty': '5 Years',
      'Price': '₹400-500 per sq ft',
    },
    images: [
      'https://doorwins.com/wp-content/uploads/2022/06/Upvc-bay-windows1.jpg',
      'https://www.suresealwindows.org/wp-content/uploads/2018/02/bow7-1024x1024.jpg',
      'https://image.made-in-china.com/202f0j00bjQiZkICCVpH/New-Design-Triple-Panel-Bay-Window-with-Casement-Sides-Tempered-Glass-Bay-Window.webp',
    ],
    relatedProducts: ['fixed-windows', 'casement-openable-windows'],
  },
  'tophung-windows': {
    id: 'tophung-windows',
    title: 'Tophung Windows',
    description: 'Tophung windows provide excellent ventilation and are ideal for compact spaces.',
    Amount: '₹350-400 per sq ft',
    longDescription: 'Hi-Tech UPVC Tophung Windows are designed for compact spaces, offering excellent ventilation and a sleek design. These windows open outward from the top, making them perfect for bathrooms, kitchens, and other areas where space is limited. With their durable UPVC frames and advanced functionality, our tophung windows ensure energy efficiency, security, and ease of use.',
    features: [
      'Outward opening from the top for compact spaces',
      'Multi-point locking system for enhanced security',
      'Double glazing option for improved thermal and acoustic insulation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Easy to clean and maintain',
      'Available in various colors and finishes',
      'Weather-resistant seals to prevent air and water infiltration',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '4mm to 24mm',
      'Frame Thickness': '60mm to 70mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Warranty': '5 Years',
      'Price': '₹400-450 per sq ft',
    },
    images: [
      'https://i.pinimg.com/1200x/30/32/8b/30328bb3b11b7ab5eab7a6ecbf57ce72.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2025/1/483802480/EH/IT/OM/123285356/upvc-top-hung-windows-500x500.png',
      'https://5.imimg.com/data5/SELLER/Default/2022/12/IL/ZE/GN/56126307/aluminium-top-hung-window.jpg',
    ],
    relatedProducts: ['casement-openable-windows', 'ventilator'],
  },
  'ventilator': {
    id: 'ventilator',
    title: 'Ventilator',
    description: 'Ventilators provide excellent airflow and are ideal for compact spaces like bathrooms and kitchens.',
    Amount: '₹250-300 per sq ft',
    longDescription: 'Hi-Tech UPVC Ventilators are designed to provide optimal airflow in compact spaces such as bathrooms and kitchens. These ventilators are durable, easy to maintain, and ensure proper ventilation while maintaining energy efficiency.',
    features: [
      'Compact design for small spaces',
      'Provides excellent airflow and ventilation',
      'Durable UPVC frames that won\'t rot, rust, or fade',
      'Easy to clean and maintain',
      'Available in various colors and finishes',
      'Weather-resistant seals to prevent air and water infiltration',
      'Customizable sizes to fit your specific requirements',
    ],
    specifications: {
      'Frame Material': 'UPVC (Unplasticized Polyvinyl Chloride)',
      'Glass Options': 'Single or Double Glazed',
      'Glass Thickness': '4mm to 24mm',
      'Frame Thickness': '60mm to 70mm',
      'Color Options': 'White, Woodgrain, and Custom Colors',
      'Hardware': 'High-quality stainless steel',
      'Warranty': '5 Years',
      'Price': '₹250-300 per sq ft',
    },
    images: [
      'https://weatherseal.com/wp-content/uploads/2025/01/uPVC-Ventilator-Window-Weatherseal-by-Asian-Paints-Photoroom.webp',
      'https://5.imimg.com/data5/SELLER/Default/2023/8/332173834/ZA/DX/EE/36393243/exhaust-fan-upvc-ventilator-window.jpg',
      'https://5.imimg.com/data5/SELLER/Default/2023/1/YE/WR/NH/181230636/upvc-air-ventilator-250x250.png',
    ],
    relatedProducts: ['tophung-windows', 'fixed-windows'],
  },
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productsData[id] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you are looking for does not exist.</p>
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: product.title, path: `/products/${product.id}` },
  ];

  const relatedProductsData = product.relatedProducts
    .map((relatedId) => productsData[relatedId])
    .filter(Boolean);

  return (
    <div>
      <PageHeader 
        title={product.title} 
        breadcrumbs={breadcrumbs}
      />

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                <img 
                  src={product.images[0]} 
                  alt={product.title} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-white p-2 rounded-lg shadow-md overflow-hidden group cursor-pointer"
                  >
                    <img 
                      src={image} 
                      alt={`${product.title} ${index + 2}`} 
                      className="w-full h-auto rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>

              
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
              
              <div className="bg-blue-50 px-4 py-3 rounded-md mb-6 inline-block">
                <span className="text-lg font-semibold text-primary">{product.Amount}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{product.longDescription}</p>
              
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.07 }}
                    className="flex items-start"
                  >
                    <CheckCircle size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/get-quote" className="btn-primary">
                  Request a Quote
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-lightGray">
        <div className="container mx-auto px-4">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="section-title mb-12"
          >
            Technical Specifications
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <td className="py-4 px-6 font-medium border-b border-gray-100">{key}</td>
                    <td className="py-4 px-6 border-b border-gray-100">{value}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProductsData.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="section-title mb-12"
            >
              Related Products
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProductsData.map((relatedProduct, index) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  title={relatedProduct.title}
                  description={relatedProduct.description}
                  image={relatedProduct.images[0]}
                  price={relatedProduct.Amount}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Interested in {product.title}?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            Contact us today for a free consultation and quote. Our experts are ready to help you find the perfect solution for your home.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/get-quote" className="btn-primary">
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Products */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to All Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;