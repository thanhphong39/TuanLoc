import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Box, Activity, Settings, Wrench, Cpu, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const services = [
  {
    name: 'Thi công hệ thống điện',
    slug: 'thi-cong-he-thong-dien-cong-nghiep',
    description: 'Thiết kế, lắp đặt và vận hành hệ thống điện công nghiệp hiện đại, an toàn cho nhà xưởng.',
    icon: Zap,
    color: '#f04e23',
    bgColor: 'rgba(240, 78, 35, 0.08)'
  },
  {
    name: 'Gia công tủ điện',
    slug: 'gia-cong-tu-dien',
    description: 'Sản xuất tủ điện MCC, MDB, PLC theo tiêu chuẩn quốc tế IEC cho mọi công trình.',
    icon: Box,
    color: '#0a1128',
    bgColor: 'rgba(10, 17, 40, 0.05)'
  },
  {
    name: 'Trạm biến áp',
    slug: 'thi-cong-tram-bien-ap',
    description: 'Thi công trọn gói trạm biến áp trung thế và hạ thế công suất lớn, độ bền cao.',
    icon: Activity,
    color: '#0a1128',
    bgColor: 'rgba(10, 17, 40, 0.05)'
  },
  {
    name: 'Hệ thống M&E',
    slug: 'he-thong-me',
    description: 'Giải pháp cơ điện toàn diện cho nhà xưởng, tòa nhà và các khu công nghiệp trọng điểm.',
    icon: Settings,
    color: '#0a1128',
    bgColor: 'rgba(10, 17, 40, 0.05)'
  },
  {
    name: 'Bảo trì nhà máy',
    slug: 'bao-tri-dien-nha-may',
    description: 'Dịch vụ bảo trì, ứng cứu sự cố điện 24/7 giúp quy trình sản xuất luôn liên tục.',
    icon: Wrench,
    color: '#0a1128',
    bgColor: 'rgba(10, 17, 40, 0.05)'
  },
  {
    name: 'Smart Factory',
    slug: 'smart-factory-solutions',
    description: 'Chuyển đổi số nhà máy với hệ thống IoT, SCADA và giải pháp MES thông minh nhất.',
    icon: Cpu,
    color: '#f04e23',
    bgColor: 'rgba(240, 78, 35, 0.08)'
  },
];

const ServicesSection = () => {
  return (
    <section className="section-py bg-slate-50/50">
      <div className="container-custom">
        <SectionTitle
          label="Dịch vụ tiêu biểu"
          title="Giải Pháp Kỹ Thuật Toàn Diện"
          subtitle="Chúng tôi cung cấp hệ sinh thái dịch vụ điện công nghiệp đa dạng, đáp ứng mọi nhu cầu kỹ thuật khắt khe."
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={fadeInUp}
              className="group flex flex-col bg-white p-12 rounded-[2.5rem] border border-slate-50 hover:border-red-50 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-700"
            >
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
                style={{ backgroundColor: service.bgColor }}
              >
                <service.icon
                  size={36}
                  className="transition-colors duration-700"
                  style={{ color: service.color }}
                />
              </div>

              <h3 className="text-2xl font-black text-[#0a1128] mb-6 group-hover:text-[#f04e23] transition-colors tracking-tight">
                {service.name}
              </h3>

              <p className="text-slate-500 text-base leading-loose mb-12 line-clamp-3 font-medium">
                {service.description}
              </p>

              <div className="mt-auto">
                <Link
                  to={`/dich-vu/${service.slug}`}
                  className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-[#0a1128] hover:text-[#f04e23] transition-all group/link"
                >
                  Khám phá ngay
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover/link:bg-[#f04e23] group-hover/link:text-white transition-all duration-500 shadow-sm">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
