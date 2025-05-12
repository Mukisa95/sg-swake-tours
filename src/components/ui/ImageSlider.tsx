import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  url: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  className?: string;
}

const ImageSlider = ({
  images,
  autoPlay = true,
  interval = 5000,
  showControls = true,
  className = 'h-screen-90',
}: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let timer: number;
    
    if (autoPlay) {
      timer = window.setInterval(() => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, interval);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoPlay, images.length, interval]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[currentImage].url})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </motion.div>
      </AnimatePresence>

      {showControls && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? 'bg-white w-4' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;