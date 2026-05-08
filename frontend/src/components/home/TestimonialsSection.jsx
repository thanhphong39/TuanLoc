import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const testimonials = [
  {
    content: "TuanLoc Electric đã thực hiện dự án hệ thống điện cho nhà máy của chúng tôi một cách chuyên nghiệp. Tiến độ thi công nhanh và chất lượng thiết bị rất đảm bảo.",
    author: "Mr. Kang Ji-won",
    position: "Giám đốc kỹ thuật, Samsung Electronics",
    avatar: "https://i.pravatar.cc/150?u=kang",
  },
  {
    content: "Chúng tôi hoàn toàn tin tưởng khi lựa chọn TuanLoc cho các giải pháp Smart Factory. Đội ngũ kỹ sư của họ rất am hiểu về công nghệ và hỗ trợ nhiệt tình.",
    author: "Nguyễn Văn Hùng",
    position: "Quản lý dự án, VinFast Hải Phòng",
    avatar: "https://i.pravatar.cc/150?u=hung",
  },
  {
    content: "Dịch vụ bảo trì 24/7 của TuanLoc thực sự ấn tượng. Họ luôn có mặt kịp thời khi chúng tôi cần xử lý các sự cố khẩn cấp về điện.",
    author: "Lê Minh Tuấn",
    position: "Giám đốc vận hành, KCN VSIP II",
    avatar: "https://i.pravatar.cc/150?u=tuan",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          label="Khách hàng nói gì"
          title="Sự Tin Tưởng Của Đối Tác"
          subtitle="Chúng tôi tự hào là người đồng hành đáng tin cậy cùng sự phát triển của các doanh nghiệp lớn tại Việt Nam."
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((item, index) => (
            <motion.div 
              key={item.author}
              variants={fadeInUp}
              className="p-10 rounded-[2rem] bg-[#f8f8f8] relative group hover:bg-[#111] transition-all duration-500"
            >
              <div className="absolute top-10 right-10 text-[#c1121f] opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center gap-1 mb-6 text-[#c1121f]">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10 group-hover:text-gray-300 transition-colors">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-200 group-hover:border-white/10 pt-8 transition-colors">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-white transition-colors">{item.author}</div>
                  <div className="text-sm text-[#c1121f] font-medium">{item.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
