import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../../animations/variants';

const AboutSection = () => {
  const highlights = [
    'Hơn 15 năm kinh nghiệm trong lĩnh vực điện công nghiệp',
    'Đội ngũ 200+ kỹ sư và kỹ thuật viên lành nghề',
    'Đối tác chiến lược của Siemens, ABB, Schneider Electric',
    'Đáp ứng tiêu chuẩn quốc tế IEC, ISO 9001:2015',
    'Hỗ trợ kỹ thuật 24/7, bảo hành lên đến 5 năm',
  ];

  return (
    <section className="section-py bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <motion.div
            className="relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Main image placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-[500px] bg-gray-900">
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #111 0%, #1f1f1f 50%, #2d2d2d 100%)',
                }}
              >
                {/* Industrial SVG illustration */}
                <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
                  <rect x="20" y="120" width="60" height="140" rx="4" fill="var(--primary)" fillOpacity="0.8" />
                  <rect x="90" y="80" width="60" height="180" rx="4" fill="var(--primary)" fillOpacity="0.6" />
                  <rect x="160" y="60" width="60" height="200" rx="4" fill="var(--primary)" fillOpacity="0.9" />
                  <rect x="230" y="100" width="30" height="160" rx="4" fill="var(--primary)" fillOpacity="0.5" />
                  <line x1="0" y1="260" x2="280" y2="260" stroke="#333" strokeWidth="2" />
                  <circle cx="50" cy="60" r="25" stroke="var(--primary)" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="60" r="10" fill="var(--primary)" fillOpacity="0.6" />
                  <path d="M50 35 L50 15 M50 85 L50 105 M25 60 L5 60 M75 60 L95 60" stroke="var(--primary)" strokeWidth="1.5" strokeOpacity="0.5" />
                </svg>
              </div>

              {/* Experience badge */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-black text-[var(--primary)]">15+</div>
                <div className="text-sm font-semibold text-gray-600">Năm kinh nghiệm</div>
              </motion.div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -right-6 top-10 bg-[var(--primary)] rounded-xl p-5 text-white shadow-2xl w-44"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-3xl font-black mb-1">500+</div>
              <div className="text-white/80 text-xs">Dự án đã hoàn thành</div>
            </motion.div>

          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[var(--primary)]" />
              <span className="text-[var(--primary)] text-xs font-bold uppercase tracking-[0.2em]">
                Về chúng tôi
              </span>
            </div>

            <h2
              className="font-black text-4xl lg:text-5xl text-[#0a1128] leading-tight mb-6"
              style={{ letterSpacing: '-0.02em' }}
            >
              Tập Đoàn Điện
              <span className="text-[var(--primary)] block">Công Nghiệp</span>
              Hàng Đầu Việt Nam
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Fixera Electric là đơn vị tiên phong trong lĩnh vực thiết kế, thi công và cung cấp thiết bị điện công nghiệp tại Việt Nam. Chúng tôi tự hào là đối tác tin cậy của hàng trăm doanh nghiệp FDI và tập đoàn lớn trong nước.
            </p>

            <motion.ul
              className="space-y-4 mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                  variants={fadeInUp}
                >
                  <CheckCircle size={20} className="text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.li>
              ))}
            </motion.ul>


            <Link to="/gioi-thieu" className="btn-primary inline-flex">
              Tìm hiểu thêm
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
