import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PresentationControls, Float, MeshDistortMaterial } from '@react-three/drei';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 3D Window Model
const WindowModel = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={mesh} scale={1.5}>
      <boxGeometry args={[1, 1.5, 0.1]} />
      <MeshDistortMaterial 
        color={'#ffffff'} 
        speed={2} 
        distort={0.2} 
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

// 3D Door Model
const DoorModel = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={mesh} scale={1.8}>
      <boxGeometry args={[1, 2, 0.1]} />
      <MeshDistortMaterial 
        color={'#f8f8f8'} 
        speed={1.5} 
        distort={0.1} 
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

// Slider Component
const HeroSlider: React.FC = () => {
  const sliderContent = [
    {
      title: "Premium UPVC Windows & Doors",
      subtitle: "Enhance Your Home with Quality, Style & Efficiency",
      image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      model: "window"
    },
    {
      title: "5 Years of Excellence",
      subtitle: "Trusted by Homeowners & Builders Across the Region",
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      model: "door"
    },
    {
      title: "Elegant & Durable Solutions",
      subtitle: "Modern Designs That Stand the Test of Time",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      model: "window"
    }
  ];

  return (
    <div className="hero-slider">
      <Swiper
        effect={'fade'}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="h-full"
      >
        {sliderContent.map((slide, index) => (
          <SwiperSlide key={index} className="hero-slide">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            
            {/* Overlay */}
            <div className="hero-overlay"></div>
            
            <div className="container mx-auto px-4 flex h-full">
              {/* Text Content */}
              <div className="max-w-2xl z-10 my-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-xl md:text-2xl mb-8 text-gray-200"
                >
                  {slide.subtitle}
                </motion.p>
                
             
              </div>
              
              {/* 3D Content */}
              <div className="hidden md:block h-full flex-1 z-10 relative">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="h-full w-full custom-cursor">
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                      <ambientLight intensity={0.5} />
                      <directionalLight position={[10, 10, 5]} intensity={1} />
                      <pointLight position={[-10, -10, -5]} intensity={0.5} />
                      <PresentationControls
                        global
                        config={{ mass: 2, tension: 400 }}
                        snap={{ mass: 4, tension: 300 }}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
                      >
                        <Float
                          speed={4}
                          rotationIntensity={0.5}
                          floatIntensity={0.5}
                        >
                          {slide.model === "window" ? <WindowModel /> : <DoorModel />}
                        </Float>
                      </PresentationControls>
                    </Canvas>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;