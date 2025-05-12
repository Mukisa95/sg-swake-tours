import { motion } from 'framer-motion';
import { Target, Users, Star } from 'lucide-react';

const values = [
  {
    icon: <Target size={40} className="text-primary-600" />,
    title: 'Excellence',
    description:
      `We strive for excellence in every aspect of our service, ensuring high-quality experiences for all our clients.`,
  },
  {
    icon: <Users size={40} className="text-primary-600" />,
    title: 'Cultural Respect',
    description:
      `We honor and respect local cultures, communities, and environments, promoting sustainable and responsible tourism.`,
  },
  {
    icon: <Star size={40} className="text-primary-600" />,
    title: 'Client Satisfaction',
    description:
      `We are dedicated to exceeding our clients' expectations, creating personalized experiences that fulfill their dreams.`,
  },
];

const OurMission = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="mb-6 text-lg text-neutral-700">
              At SG Swake LTD, our mission is to showcase the beauty and
              diversity of East Africa while providing exceptional, personalized
              services to our clients. We aim to create meaningful connections
              between travelers and the region's landscapes, wildlife, and
              cultures.
            </p>
            <p className="mb-10 text-lg text-neutral-700">
              We believe in sustainable tourism that benefits local communities
              and preserves the natural environment for future generations to
              enjoy. Our dedicated team works tirelessly to ensure every journey
              with us is seamless, memorable, and authentic.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-4">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Our team in action"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-lg overflow-hidden shadow-xl border-8 border-white hidden md:block">
              <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="East African landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;