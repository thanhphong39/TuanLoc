import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Clock, Award, HeadphonesIcon } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const reasons = [
  {
    title: 'Chất lượng hàng đầu',
    description: 'Sử dụng linh kiện chính hãng từ Siemens, ABB, Schneider. Quy trình kiểm định nghiêm ngặt.',
    icon: ShieldCheck,
  },
  {
    title: 'Công nghệ hiện đại',
    description: 'Tiên phong ứng dụng giải pháp Industry 4.0, Smart Factory và Automation vào hệ thống điện.',
    icon: Zap,
  },
  {
    title: 'Đội ngũ chuyên nghiệp',
    description: 'Kỹ sư giàu kinh nghiệm, được đào tạo chuyên sâu về kỹ thuật điện và an toàn lao động.',
    icon: Users,
  },
  {
    title: 'Tiến độ thần tốc',
    description: 'Cam kết bàn giao đúng tiến độ đề ra, giúp doanh nghiệp sớm đi vào vận hành sản xuất.',
    icon: Clock,
  },
  {
    title: 'Chứng nhận quốc tế',
    description: 'Đạt chuẩn ISO 9001:2015 và các tiêu chuẩn IEC khắt khe nhất trong ngành điện.',
    icon: Award,
  },
  {
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ kỹ thuật trực chiến 24/7, sẵn sàng xử lý sự cố trong vòng 2h kể từ khi tiếp nhận.',
    icon: HeadphonesIcon,
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Left: Content */}
          <div className="lg:sticky lg:top-32">
            <SectionTitle
              label="Tại sao chọn chúng tôi"
              title="Đối Tác Tin Cậy Của Mọi Công Trình"
              align="left"
              className="mb-0"
            />
            <p className="mt-8 text-gray-500 leading-relaxed text-lg">
              Với phương châm "Uy tín tạo nên thương hiệu", chúng tôi luôn nỗ lực mang đến giải pháp tối ưu nhất cho khách hàng, đảm bảo tính an toàn, bền bỉ và hiệu quả kinh tế cao nhất.
            </p>
            
            <div className="mt-12 p-8 bg-[#111] rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#c1121f] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <h4 className="text-xl font-bold mb-4">Bạn cần tư vấn?</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Liên hệ ngay với đội ngũ chuyên gia của chúng tôi để được tư vấn giải pháp phù hợp nhất.
              </p>
              <a href="tel:0909123456" className="inline-flex items-center gap-2 text-[#c1121f] font-bold hover:gap-4 transition-all">
                Hotline: 0909 123 456
                <Zap size={16} />
              </a>
            </div>
          </div>

          {/* Right: Grid reasons */}
          <motion.div 
            className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {reasons.map((item, index) => (
              <motion.div 
                key={item.title}
                className="flex gap-6"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#f8f8f8] flex items-center justify-center text-[#c1121f] border border-gray-100 group hover:bg-[#c1121f] hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
