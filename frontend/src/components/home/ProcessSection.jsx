import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../animations/variants';
import SectionTitle from '../common/SectionTitle';

const steps = [
  {
    number: '01',
    title: 'Khảo sát & Tư vấn',
    description: 'Đội ngũ kỹ sư đến tận nơi khảo sát hiện trạng và lắng nghe nhu cầu của khách hàng.'
  },
  {
    number: '02',
    title: 'Thiết kế giải pháp',
    description: 'Lập bản vẽ kỹ thuật chi tiết, tối ưu hóa chi phí và công năng cho hệ thống.'
  },
  {
    number: '03',
    title: 'Thi công lắp đặt',
    description: 'Triển khai công việc nhanh chóng, an toàn và đúng tiêu chuẩn kỹ thuật quốc tế.'
  },
  {
    number: '04',
    title: 'Bàn giao & Bảo trì',
    description: 'Nghiệm thu, hướng dẫn vận hành và cam kết bảo trì hệ thống định kỳ.'
  }
];

const ProcessSection = () => {
  return (
    <section className="section-py bg-white">
      <div className="container-custom">
        <SectionTitle
          label="Quy trình làm việc"
          title="Cách Chúng Tôi Triển Khai Dự Án"
          subtitle="Quy trình chuyên nghiệp giúp đảm bảo chất lượng và tiến độ cho mọi công trình lớn nhỏ."
          align="center"
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              {/* Connector line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px border-t-2 border-dashed border-gray-100 -z-10" />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-[2rem] bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#f04e23] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-red-500/20 group-hover:-translate-y-2">
                  <span className="text-3xl font-black">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a1128] mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
