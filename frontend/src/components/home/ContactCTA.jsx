import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, PhoneCall, Mail } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const ContactCTA = () => {
  return (
    <section className="section-py relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute inset-0 bg-[#0a1128] z-0" />
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")`
        }}
      />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="bg-[#111] rounded-[2.5rem] p-8 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden border border-white/5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Decorative glows */}
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-[var(--primary)] rounded-full blur-[100px] opacity-20" />
          <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-[var(--primary)] rounded-full blur-[100px] opacity-10" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                Bạn Có Dự Án <br />
                <span className="text-[var(--primary)]">Điện Công Nghiệp?</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-md">
                Đừng ngần ngại liên hệ với chúng tôi để nhận được giải pháp kỹ thuật tối ưu và báo giá cạnh tranh nhất.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/lien-he" className="btn-primary flex justify-center items-center gap-3 py-4 px-10">
                  Gửi yêu cầu ngay
                  <Send size={18} />
                </Link>
                <div className="flex items-center gap-4 px-6 py-4 rounded-xl border border-white/10 hover:border-white/30 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:scale-110 transition-transform">
                    <PhoneCall size={24} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Hotline 24/7</div>
                    <div className="text-white font-black text-lg">0313 728 397</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="hidden lg:block relative"
            >
              <div className="aspect-square rounded-[3rem] bg-gray-800/50 backdrop-blur-xl border border-white/5 flex flex-col p-12 justify-center">
                <div className="space-y-8">
                  {[
                    { icon: PhoneCall, label: 'Kinh doanh', value: '0313 728 397' },
                    { icon: Send, label: 'Kỹ thuật', value: '0988 777 666' },
                    { icon: Mail, label: 'Email', value: 'info@fixera.vn' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{item.label}</div>
                        <div className="text-white text-xl font-bold tracking-tight">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute -right-6 -bottom-6 bg-[var(--primary)] text-white p-6 rounded-2xl shadow-2xl rotate-3">
                <div className="text-sm font-bold uppercase tracking-widest mb-1">Thời gian phản hồi</div>
                <div className="text-2xl font-black">Dưới 30 phút</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default ContactCTA;
