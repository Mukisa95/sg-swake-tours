import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Map } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-neutral-50 flex items-center justify-center"
    >
      <div className="container">
        <div className="max-w-lg mx-auto text-center">
          <Map size={80} className="mx-auto text-primary-600 mb-6" />
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-neutral-700 mb-8">
            It seems you've ventured off the beaten path. This page doesn't exist, but there are many other beautiful destinations to explore on our website.
          </p>
          <Link to="/" className="btn btn-primary">
            Return to Homepage
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;