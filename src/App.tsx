import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import NotFound from './pages/NotFound';
import ChatBot from './components/Chatbot';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

function App() {
  const location = useLocation();

  // Hide navbar/footer on admin routes
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Update title based on current page
  useEffect(() => {
    const pageTitles: { [key: string]: string } = {
      '/': 'Home | Hi-Tech UPVC Windows and Doors',
      '/about': 'About Us | Hi-Tech UPVC Windows and Doors',
      '/products': 'Products | Hi-Tech UPVC Windows and Doors',
      '/gallery': 'Gallery | Hi-Tech UPVC Windows and Doors',
      '/contact': 'Contact Us | Hi-Tech UPVC Windows and Doors',
      '/get-quote': 'Get a Quote | Hi-Tech UPVC Windows and Doors',
      '/admin': 'Admin Login | Hi-Tech UPVC',
      '/admin/dashboard': 'Admin Dashboard | Hi-Tech UPVC',
    };

    const productRegex = /^\/products\/(.+)$/;
    const match = location.pathname.match(productRegex);

    if (match) {
      document.title = `${match[1].replace(/-/g, ' ')} | Hi-Tech UPVC Windows and Doors`;
    } else {
      document.title = pageTitles[location.pathname] || 'Hi-Tech UPVC Windows and Doors';
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    <ChatBot />
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
