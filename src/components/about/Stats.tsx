import { motion } from 'framer-motion';

const stats = [
  { value: '3000+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '5', label: 'Countries Covered' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent-300 mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-neutral-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;