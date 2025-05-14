import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare, MinusCircle, CreditCard, QrCode } from 'lucide-react';

// Import product data from the original ProductDetail component
const productsData = {
  'sliding-windows': {
    id: 'sliding-windows',
    title: 'Sliding Windows',
    Amount: '₹280-320 per sq ft',
    description: 'Our sliding windows offer smooth operation, maximum ventilation, and unobstructed views.',
    longDescription: 'Hi-Tech UPVC Sliding Windows are designed for modern homes, offering a perfect blend of aesthetics and functionality. These windows slide horizontally, making them ideal for spaces where outward opening windows are impractical. With their sleek design and smooth operation, our sliding windows provide maximum ventilation and unobstructed views while ensuring energy efficiency and security.',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹280-320 per sq ft',
    },
  },
  'sliding-with-mosquito-net-windows': {
    id: 'sliding-with-mosquito-net-windows',
    title: 'Sliding with Mosquito Net Windows',
    description: 'Sliding windows with integrated mosquito nets for enhanced ventilation and insect protection.',
    Amount: '₹320-400 per sq ft',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹320-400 per sq ft',
    },
  },
  'sliding-doors': {
    id: 'sliding-doors',
    title: 'Sliding Doors',
    Amount: '₹500-650 per sq ft',
    description: 'Our sliding doors combine elegance with functionality, perfect for patios and balconies.',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹500-650 per sq ft',
    },
  },
  'casement-openable-windows': {
    id: 'casement-openable-windows',
    title: 'Casement Openable Windows',
    description: 'Casement windows provide excellent ventilation and are easy to operate with a crank mechanism.',
    Amount: '₹400-450 per sq ft',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹400-450 per sq ft',
    },
  },
  'casement-openable-main-door': {
    id: 'casement-openable-main-door',
    title: 'Casement Openable Main Door',
    description: 'Elegant main doors with a casement design, offering superior security and aesthetic appeal.',
    Amount: '₹500-580 per sq ft',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹500-580 per sq ft',
    },
  },
  'casement-openable-toilet-door': {
    id: 'casement-openable-toilet-door',
    title: 'Casement Openable Toilet Door',
    description: 'Durable and water-resistant toilet doors with a casement design for modern bathrooms.',
    Amount: '₹475-600 per sq ft',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹475-600 per sq ft',
    },
  },
  'tilt-turn-windows': {
    id: 'tilt-turn-windows',
    title: 'Tilt & Turn Windows',
    description: 'Versatile windows that can be opened in two ways - tilted for ventilation or turned for full opening.',
    Amount: '₹400-450 per sq ft',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹400-450 per sq ft',
    },
  },
  'fixed-windows': {
    id: 'fixed-windows',
    title: 'Fixed Windows',
    description: 'Non-opening windows that provide maximum light and unobstructed views while ensuring energy efficiency.',
    Amount: '₹250-285 per sq ft',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹250-285 per sq ft',
    },
  },
  'bay-windows': {
    id: 'bay-windows',
    title: 'Bay Windows',
    description: 'Bay windows add elegance and extra space to your home, offering panoramic views and natural light.',
    Amount: '₹400-500 per sq ft',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹400-500 per sq ft',
    },
  },
  'tophung-windows': {
    id: 'tophung-windows',
    title: 'Tophung Windows',
    description: 'Tophung windows provide excellent ventilation and are ideal for compact spaces.',
    Amount: '₹350-400 per sq ft',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹400-450 per sq ft',
    },
  },
  'ventilator': {
    id: 'ventilator',
    title: 'Ventilator',
    description: 'Ventilators provide excellent airflow and are ideal for compact spaces like bathrooms and kitchens.',
    Amount: '₹250-300 per sq ft',
    specifications: {
      'Warranty': '5 Years',
      'Price': '₹250-300 per sq ft',
    },
  },
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm HiTech Assistant. How can I help you with our UPVC windows and doors today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const messagesEndRef = useRef(null);

  // Enhanced responses with product information, warranty, guarantee, and price details
  const demoResponses = {
    "hello": "Hello! How can I help you with our UPVC windows and doors today?",
    "hi": "Hi there! How can I assist you with our UPVC windows and doors today?",
    "help": "I'm here to help you with information about our UPVC windows and doors. You can ask about product details, pricing, warranty, or installation services.",
    
    "price": "Our pricing varies based on product type, size, and features:\n- Sliding Windows: ₹280-320 per sq ft\n- Fixed Windows: ₹250-285 per sq ft\n- Casement Windows: ₹400-450 per sq ft\n- Sliding Doors: ₹500-650 per sq ft\n\nFor a personalized quote, please visit our 'Get Quote' page or call us at 98427 21415.",
    
    "cost": "Our pricing varies based on product type, size, and features:\n- Sliding Windows: ₹280-320 per sq ft\n- Fixed Windows: ₹250-285 per sq ft\n- Casement Windows: ₹400-450 per sq ft\n- Sliding Doors: ₹500-650 per sq ft\n\nFor a personalized quote, please visit our 'Get Quote' page or call us at 98427 21415.",
    
    "warranty": "All our UPVC windows and doors come with a comprehensive 5-year warranty that covers:\n- Frame and sash performance\n- Hardware functionality\n- Weather sealing\n- Surface finish\n\nThe warranty ensures replacement of defective parts and repair services for manufacturing defects.",
    
    "guarantee": "We guarantee the quality and durability of all our products. Our 5-year warranty covers manufacturing defects, and we ensure professional installation by our trained technicians. We also provide after-sales service to address any concerns you might have with your UPVC products.",
    
    "contact": "You can contact us at 98427 21415 or 94428 21415, email us at hitechupvcwindoorse@gmail.com, or visit our showroom in Kangayam, Tamil Nadu.",
    
    "products": "We offer a wide range of UPVC products including sliding windows, casement windows, fixed windows, sliding doors, and bay windows. Which one interests you?",
    
    "sliding window": "Our sliding windows (₹280-320 per sq ft) offer smooth operation and energy efficiency. Features include:\n- Durable UPVC frames that won't rot or fade\n- Multi-point locking system for security\n- Double glazing option for better insulation\n- 5-year warranty\n\nThey're perfect for modern homes and spaces where outward opening isn't practical.",
    
    "casement window": "Our casement windows (₹400-450 per sq ft) provide excellent ventilation with outward opening design. Features include:\n- Easy operation with crank mechanism\n- Multi-point locking for enhanced security\n- Double glazing option for insulation\n- 5-year warranty\n\nThey're ideal for areas where maximum airflow is desired.",
    
    "fixed window": "Our fixed windows (₹250-285 per sq ft) are non-opening windows that provide maximum light and views. Features include:\n- Excellent thermal insulation\n- Durable UPVC frames\n- Available in various designs\n- 5-year warranty\n\nThey're perfect for areas where ventilation isn't required but natural light is desired.",
    
    "sliding door": "Our sliding doors (₹500-650 per sq ft) combine elegance with functionality. Features include:\n- Smooth horizontal sliding operation\n- Multi-point locking for security\n- Double glazing option for insulation\n- 5-year warranty\n\nThey're ideal for patios, balconies, and connecting indoor-outdoor spaces.",
    
    "payment": "We offer several payment methods for your convenience:\n- Bank transfer\n- Cash payment\n- Credit/debit cards\n- Online payment options\n\nWould you like to see our payment QR code?",
    
    "qr": "Here's our payment QR code. You can scan it using any UPI app like GPay, PhonePe, or Paytm to make a payment. Please mention your name and product in the description.",
    
    "installation": "We provide professional installation services by our trained technicians. Installation is typically completed within 1-3 days depending on the project size. We ensure proper fitting and finishing to maximize your product's performance and longevity.",
    
    "maintenance": "Our UPVC products require minimal maintenance. Simply clean frames with mild soap and water periodically. Lubricate hardware once every six months. Avoid harsh chemicals that might damage the surface finish. With proper care, our products will maintain their appearance and functionality for many years."
  };

  // Function to identify product in user query
  const identifyProduct = (text) => {
    const lowerText = text.toLowerCase();
    
    if (lowerText.includes("sliding window")) return "sliding window";
    if (lowerText.includes("mosquito net")) return "sliding-with-mosquito-net-windows";
    if (lowerText.includes("casement window") || lowerText.includes("openable window")) return "casement window";
    if (lowerText.includes("fixed window")) return "fixed window";
    if (lowerText.includes("sliding door")) return "sliding door";
    if (lowerText.includes("casement door") || lowerText.includes("main door")) return "casement-openable-main-door";
    if (lowerText.includes("toilet door") || lowerText.includes("bathroom door")) return "casement-openable-toilet-door";
    if (lowerText.includes("tilt") || lowerText.includes("turn")) return "tilt-turn-windows";
    if (lowerText.includes("bay window")) return "bay-windows";
    if (lowerText.includes("tophung")) return "tophung-windows";
    if (lowerText.includes("ventilator")) return "ventilator";
    
    return null;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    const userMessage = {
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Default response
    let response = "I'm not sure I understand. Would you like information about our products, pricing, warranty, or contact details?";
    
    // Check for payment QR code request specifically
    if (inputText.toLowerCase().includes("payment") && 
        (inputText.toLowerCase().includes("qr") || inputText.toLowerCase().includes("code"))) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Here's our payment QR code. You can scan it using any UPI app like GPay, PhonePe, or Paytm to make a payment. Please mention your name and product in the description.",
          isBot: true,
          timestamp: new Date(),
          showQR: true
        }]);
        setIsTyping(false);
      }, 1000);
      return;
    }
    
    // Look for product-specific queries
    const productId = identifyProduct(inputText);
    if (productId && inputText.toLowerCase().includes("price") || inputText.toLowerCase().includes("cost")) {
      const product = productsData[productId] || demoResponses[productId];
      if (product) {
        const price = product.Amount || product.specifications?.Price || "pricing available on request";
        response = `The price for our ${product.title || productId.replace("-", " ")} is ${price}. This may vary based on size and specific features. Would you like more details about this product?`;
      }
    } 
    else if (productId && (inputText.toLowerCase().includes("warranty") || inputText.toLowerCase().includes("guarantee"))) {
      response = `All our products, including ${productId.replace("-", " ")}, come with a comprehensive 5-year warranty. This covers frame performance, hardware functionality, weather sealing, and surface finish. We guarantee quality installation and after-sales service.`;
    }
    else if (productId && (inputText.toLowerCase().includes("describe") || inputText.toLowerCase().includes("tell me about") || inputText.toLowerCase().includes("what is"))) {
      const product = productsData[productId] || demoResponses[productId];
      if (product) {
        response = product.longDescription || product.description || demoResponses[productId] || `Our ${productId.replace("-", " ")} combines quality materials with expert craftsmanship. Please visit our product page for more details.`;
      }
    }
    // Check for keywords in general responses
    else {
      Object.entries(demoResponses).forEach(([keyword, reply]) => {
        if (inputText.toLowerCase().includes(keyword)) {
          response = reply;
        }
      });
    }

    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: response,
        isBot: true,
        timestamp: new Date(),
        showQR: inputText.toLowerCase().includes("qr") || inputText.toLowerCase().includes("payment code")
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            height: isMinimized ? '60px' : '400px',
            transition: 'height 0.3s ease'
          }}
        >
          {/* Header */}
          <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare size={20} className="mr-2" />
              <h3 className="font-medium">Hi-Tech UPVC Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              {!isMinimized && (
                <button onClick={() => setIsMinimized(true)} className="text-white/80 hover:text-white">
                  <MinusCircle size={18} />
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-4 flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot ? 'bg-blue-100 text-gray-800' : 'bg-blue-700 text-white'
                    }`}
                  >
                    <div>{msg.text}</div>
                    {msg.showQR && (
                      <div className="mt-2 flex justify-center">
                        <div className="bg-white p-2 rounded-md">
                          <img 
                            src="/hitech-payment-qr.png" 
                            alt="Payment QR Code" 
                            className="w-32 h-32"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "../QRcode.jpg";
                            }}
                          />
                          <div className="text-xs text-center mt-1 text-gray-600">Scan to pay</div>
                        </div>
                      </div>
                    )}
                    <div className="text-xs text-gray-500 mt-1 text-right">{formatTime(msg.timestamp)}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="bg-blue-100 text-gray-800 p-3 rounded-lg max-w-[80%]">Typing...</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input Area */}
          {!isMinimized && (
            <form onSubmit={handleSendMessage} className="p-3 border-t bg-white flex items-center">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Type a message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-700 text-white p-2 rounded-r-lg hover:bg-blue-800 transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;