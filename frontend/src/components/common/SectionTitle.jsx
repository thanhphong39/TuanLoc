import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

const SectionTitle = ({ label, title, subtitle, align = 'center', className = '' }) => {
  const alignmentClass = align === 'left' ? 'text-left' : 'text-center items-center';
  const flexClass = align === 'left' ? 'flex flex-col' : 'flex flex-col items-center';

  return (
    <div className={`${flexClass} ${alignmentClass} mb-16 md:mb-24 ${className}`}>
      {label && (
        <motion.span
          variants={fadeInUp}
          className="badge-primary"
        >
          {label}
        </motion.span>
      )}
      
      <motion.h2
        variants={fadeInUp}
        className="max-w-4xl"
      >
        {title}
      </motion.h2>

      {/* Underline accent */}
      <motion.div 
        variants={fadeInUp}
        className={`flex mt-6 mb-8 ${align === 'center' ? 'justify-center' : 'justify-start'}`}
      >
        <div className="h-1.5 w-16 rounded-full bg-[#f04e23]" />
        <div className="h-1.5 w-4 rounded-full bg-[#f04e23]/20 ml-2" />
      </motion.div>

      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl text-slate-500 font-medium"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
