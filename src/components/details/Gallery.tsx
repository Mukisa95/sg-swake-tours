import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const images = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1654743/pexels-photo-1654743.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Serengeti Plains',
    category: 'landscape',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/2550774/pexels-photo-2550774.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Lion pride',
    category: 'wildlife',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1580583/pexels-photo-1580583.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Beachfront villa',
    category: 'accommodation',
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3519996/pexels-photo-3519996.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Masai dancers',
    category: 'culture',
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/6694870/pexels-photo-6694870.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Safari vehicle',
    category: 'experience',
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/3422053/pexels-photo-3422053.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Mountain gorilla',
    category: 'wildlife',
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/13722002/pexels-photo-13722002.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Luxury safari tent',
    category: 'accommodation',
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/19773502/pexels-photo-19773502/free-photo-of-flamingos-at-lake-nakuru-national-park-kenya.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Flamingos at Lake Nakuru',
    category: 'wildlife',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'landscape', label: 'Landscapes' },
    { value: 'wildlife', label: 'Wildlife' },
    { value: 'accommodation', label: 'Accommodations' },
    { value: 'culture', label: 'Culture' },
    { value: 'experience', label: 'Experiences' },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Gallery"
          subtitle="Browse through our gallery showcasing the stunning landscapes, wildlife, accommodations, and experiences we offer."
          centered
        />

        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-4 py-2 m-1 rounded-full text-sm font-medium transition-colors ${
                filter === category.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={image.id}
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => handleImageClick(image.id)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={closeModal}
              >
                <X size={24} />
              </button>
              <div className="max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <img
                  src={images.find((img) => img.id === selectedImage)?.src}
                  alt={images.find((img) => img.id === selectedImage)?.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;