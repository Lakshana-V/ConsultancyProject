import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialProps {
  content: string;
  name: string;
  title: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "The UPVC windows from Hi-Tech have transformed our home. They've improved insulation, reduced noise, and the sliding mechanism is incredibly smooth. Excellent craftsmanship!",
    name: "Rajesh Kumar",
    title: "Homeowner",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    content: "As an architect, I've worked with several window suppliers, but Hi-Tech UPVC stands out for their quality and attention to detail. Their products have exceeded my clients' expectations.",
    name: "Priya Sharma",
    title: "Architect",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    content: "The casement windows we installed last year have made a huge difference in our energy bills. The installation team was professional and efficient. Highly recommended!",
    name: "Vikram Singh",
    title: "Property Developer",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    content: "The bay windows from Hi-Tech UPVC have become the highlight of our living room. The quality is exceptional, and they've added so much character to our home.",
    name: "Anita Desai",
    title: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

const TestimonialSlider: React.FC = () => {
  return (
    <section className="py-16 bg-lightGray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">What Our Clients Say</h2>
        </motion.div>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md relative"
              >
                <div className="absolute -top-5 left-5 text-primary">
                  <Quote size={40} />
                </div>
                <div className="pt-4">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    {testimonial.image && (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;