import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Chen',
    role: 'Business Executive',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content:
      'SG Swake organized a flawless business trip for our executive team. From airport transfers to accommodations and local meetings, every detail was handled professionally. Their knowledge of East Africa made our business venture successful and enjoyable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Adventure Traveler',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content:
      'My safari experience with SG Swake was nothing short of magical. Our guide was incredibly knowledgeable about wildlife and took us to the perfect spots for animal sightings. The accommodations were luxurious yet authentic. Truly the trip of a lifetime!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Family Traveler',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
    content:
      'Traveling with children can be challenging, but SG Swake made our family trip to East Africa seamless and enjoyable. They created the perfect balance of adventure and relaxation, with child-friendly activities and comfortable accommodations.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-primary-50">
      <div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from travelers who have experienced our exceptional services and adventures across East Africa."
          centered
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-lg shadow-md"
            >
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-neutral-600 text-center mb-2">
                  {testimonials[currentIndex].role}
                </p>
                <div className="flex text-accent-500 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#EAB308" />
                  ))}
                </div>
              </div>

              <div className="md:w-2/3">
                <blockquote className="italic text-neutral-700 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-white p-2 rounded-full shadow-md text-primary-700 hover:text-primary-900 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-white p-2 rounded-full shadow-md text-primary-700 hover:text-primary-900 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-600 w-6'
                    : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;