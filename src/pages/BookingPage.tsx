import { motion } from 'framer-motion';
import BookingHero from '../components/booking/BookingHero';
import BookingForm from '../components/booking/BookingForm';
import FAQ from '../components/booking/FAQ';

const BookingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BookingHero />
      <BookingForm />
      <FAQ />
    </motion.div>
  );
};

export default BookingPage;