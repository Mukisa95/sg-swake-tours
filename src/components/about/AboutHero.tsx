import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative h-screen-90 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/5258248/pexels-photo-5258248.jpeg?auto=compress&cs=tinysrgb&w=1600)',
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
            Our Story
          </h1>
          <div className="w-20 h-1 bg-accent-400 mb-6" />
          <p className="text-xl text-white mb-6">
            Dedicated to providing exceptional tour and hosting services across
            East Africa since 2010, creating unforgettable journeys and authentic
            experiences for travelers from around the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;