import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImageSlider from '../ui/ImageSlider';

const images = [
  {
    url: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Safari in East Africa'
  },
  {
    url: 'https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Beautiful landscapes of East Africa'
  },
  {
    url: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Wildlife in East Africa'
  },
  {
    url: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Luxury accommodations'
  }
];

const HeroSection = () => {
  return (
    <div className="relative">
      <ImageSlider images={images} />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Discover the Beauty of <br />
              <span className="text-accent-300">East Africa</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white mb-8 max-w-xl"
            >
              Experience unforgettable journeys with premium tour and hosting services tailored just for you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/details" className="btn btn-primary">
                Explore Our Services
              </Link>
              <Link to="/booking" className="btn btn-outline border-white text-white hover:bg-white hover:bg-opacity-20">
                Book Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;