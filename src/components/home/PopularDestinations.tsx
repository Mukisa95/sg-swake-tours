import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const destinations = [
  {
    id: 1,
    name: 'Serengeti National Park',
    location: 'Tanzania',
    image: 'https://images.pexels.com/photos/59989/elephant-herd-of-elephants-african-bush-elephant-africa-59989.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Experience the iconic wildlife and stunning landscapes of the Serengeti.',
  },
  {
    id: 2,
    name: 'Zanzibar Beaches',
    location: 'Tanzania',
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Relax on pristine white sand beaches with crystal clear turquoise waters.',
  },
  {
    id: 3,
    name: 'Maasai Mara',
    location: 'Kenya',
    image: 'https://images.pexels.com/photos/624063/pexels-photo-624063.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Witness the spectacular Great Migration and abundant wildlife.',
  },
  {
    id: 4,
    name: 'Bwindi Impenetrable Forest',
    location: 'Uganda',
    image: 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description: 'Trek to see endangered mountain gorillas in their natural habitat.',
  },
];

const PopularDestinations = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Popular Destinations"
          subtitle="Explore East Africa's most stunning locations, from pristine beaches to epic safaris and mountain adventures."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md h-80"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              
              <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                <p className="flex items-center text-sm mb-2">
                  <span className="bg-accent-500 px-2 py-0.5 rounded text-xs">{destination.location}</span>
                </p>
                <p className="text-neutral-200 mb-4 text-sm">{destination.description}</p>
                <Link 
                  to="/details" 
                  className="inline-block text-sm font-medium text-white border-b border-accent-400 hover:border-accent-300 transition-colors"
                >
                  Explore more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;