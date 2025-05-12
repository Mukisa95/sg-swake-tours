import { motion } from 'framer-motion';

const BookingHero = () => {
  return (
    <section className="relative h-screen-90 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Book Your East African Journey
          </h1>
          <div className="w-20 h-1 bg-accent-400 mb-6" />
          <p className="text-xl text-white mb-6">
            Ready to embark on the adventure of a lifetime? Complete our booking form and our team will help you create the perfect East African experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingHero;