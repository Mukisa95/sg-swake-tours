import { motion } from 'framer-motion';
import AboutHero from '../components/about/AboutHero';
import OurMission from '../components/about/OurMission';
import OurTeam from '../components/about/OurTeam';
import Stats from '../components/about/Stats';
import CallToAction from '../components/home/CallToAction';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHero />
      <OurMission />
      <Stats />
      <OurTeam />
      <CallToAction />
    </motion.div>
  );
};

export default AboutPage;