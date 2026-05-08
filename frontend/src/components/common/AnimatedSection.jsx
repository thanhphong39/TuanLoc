import { motion } from 'framer-motion';
import { staggerContainer } from '../../animations/variants';

/**
 * Wrapper component với scroll-triggered animation
 * fadeInUp, fadeInLeft, fadeInRight, stagger children
 */
const AnimatedSection = ({ children, className = '', delay = 0, threshold = 0.1 }) => {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
