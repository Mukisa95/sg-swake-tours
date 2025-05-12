import { motion } from 'framer-motion';
import ServicesHero from '../components/details/ServicesHero';
import ServicesTabs from '../components/details/ServicesTabs';
import PackageCards from '../components/details/PackageCards';
import Gallery from '../components/details/Gallery';
import CallToAction from '../components/home/CallToAction';

const DetailsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ServicesHero />
      <ServicesTabs />
      <PackageCards />
      <Gallery />
      <CallToAction />
    </motion.div>
  );
};

export default DetailsPage;