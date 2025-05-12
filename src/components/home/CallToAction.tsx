import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-primary-900 bg-opacity-70" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-neutral-100">
            Contact our team today and start planning your perfect East African
            journey. Whether for business or leisure, we'll create an
            unforgettable experience tailored just for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="btn btn-primary bg-accent-500 hover:bg-accent-600 focus:ring-accent-400"
            >
              Book Your Tour Now
            </Link>
            <Link
              to="/details"
              className="btn btn-outline border-white text-white hover:bg-white hover:bg-opacity-20"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;