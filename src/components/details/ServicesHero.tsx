import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="relative h-screen-90 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1600)',
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
            Our Services
          </h1>
          <div className="w-20 h-1 bg-accent-400 mb-6" />
          <p className="text-xl text-white mb-6">
            Discover our comprehensive range of tour and hosting services designed to make your East African journey unforgettable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;