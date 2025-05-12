import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import FeaturedServices from '../components/home/FeaturedServices';
import PopularDestinations from '../components/home/PopularDestinations';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeaturedServices />
      <PopularDestinations />
      <Testimonials />
      <CallToAction />
    </motion.div>
  );
};

export default HomePage;