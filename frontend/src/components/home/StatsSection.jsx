import { motion } from 'framer-motion';
import Counter from '../common/Counter';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const stats = [
  { label: 'Dự án thành công', value: 500, suffix: '+' },
  { label: 'Năm kinh nghiệm', value: 15, suffix: '+' },
  { label: 'Nhân sự kỹ thuật', value: 200, suffix: '+' },
  { label: 'Khách hàng FDI', value: 120, suffix: '+' },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dark background image placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a1128] opacity-95" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              variants={fadeInUp}
            >
              <div className="mb-4 inline-block">
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  className="text-5xl lg:text-6xl font-black text-white tracking-tight"
                />
              </div>
              <div className="text-[var(--primary)] text-sm lg:text-base font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

  );
};

export default StatsSection;
