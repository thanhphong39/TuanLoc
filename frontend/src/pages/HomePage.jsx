import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ProcessSection from '../components/home/ProcessSection';
import PartnersCarousel from '../components/home/PartnersCarousel';
import NewsSection from '../components/home/NewsSection';
import ContactCTA from '../components/home/ContactCTA';
import { pageTransition } from '../animations/variants';

const HomePage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <StatsSection />
      <PartnersCarousel />
      <NewsSection />
      <ContactCTA />
    </motion.div>
  );
};

export default HomePage;
