import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Zap, ArrowRight } from 'lucide-react';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';
import SectionTitle from '../components/common/SectionTitle';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Điện thoại',
      details: ['0313 728 397', '0909 123 456'],
      color: '#f04e23',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@fixera.vn', 'kd@fixera.vn'],
      color: '#f04e23',
    },
    {
      icon: MapPin,
      title: 'Văn phòng',
      details: ['1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM'],
      color: '#f04e23',
    },
    {
      icon: Clock,
      title: 'Làm việc',
      details: ['Thứ 2 - Thứ 7: 07:30 - 17:30', 'Hỗ trợ kỹ thuật 24/7'],
      color: '#f04e23',
    },
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white"
    >
      {/* Hero Header */}
      <section className="bg-[#0a1128] py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#f04e23 1px, transparent 0)', backgroundSize: '30px 30px' }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div variants={fadeInUp}>
            <span className="text-[#f04e23] font-black uppercase tracking-[0.4em] text-[11px] mb-6 block">Kết nối với chúng tôi</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">Yêu Cầu Tư Vấn & Báo Giá</h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Đội ngũ kỹ sư của Fixera luôn sẵn sàng lắng nghe và cung cấp giải pháp kỹ thuật tối ưu nhất cho doanh nghiệp của bạn.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16 xl:gap-24">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1">
              <SectionTitle
                label="Thông tin liên hệ"
                title="Sẵn Sàng Hỗ Trợ 24/7"
                align="left"
              />
              <p className="text-slate-500 mb-12 text-lg leading-relaxed font-medium">
                Quý khách có thể liên hệ trực tiếp qua hotline hoặc gửi email. Chúng tôi cam kết phản hồi trong vòng 30 phút làm việc.
              </p>

              <div className="space-y-10">
                {contactInfo.map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="flex gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0a1128] group-hover:bg-[#f04e23] group-hover:text-white transition-all duration-500 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-[#0a1128] text-lg mb-2">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="text-base text-slate-500 font-medium">{detail}</div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-50 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#f04e23]/5 rounded-full blur-3xl" />
                
                <form className="grid sm:grid-cols-2 gap-x-8 gap-y-6 relative z-10">
                  <div className="form-group">
                    <label className="form-label">Họ tên khách hàng *</label>
                    <input type="text" placeholder="Ví dụ: Nguyễn Văn A" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email liên hệ *</label>
                    <input type="email" placeholder="email@cong-ty.com" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Số điện thoại *</label>
                    <input type="tel" placeholder="03xx xxx xxx" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tên doanh nghiệp</label>
                    <input type="text" placeholder="Công ty TNHH..." className="form-input" />
                  </div>
                  <div className="sm:col-span-2 form-group">
                    <label className="form-label">Dịch vụ quan tâm</label>
                    <div className="relative">
                      <select className="form-select pr-12">
                        <option>Chọn giải pháp phù hợp</option>
                        <option>Thi công điện công nghiệp</option>
                        <option>Gia công & Lắp đặt tủ điện</option>
                        <option>Trạm biến áp trung & hạ thế</option>
                        <option>Hệ thống cơ điện M&E</option>
                        <option>Smart Factory & IoT</option>
                        <option>Khác</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <Zap size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2 form-group">
                    <label className="form-label">Yêu cầu chi tiết *</label>
                    <textarea rows="4" placeholder="Mô tả sơ bộ nhu cầu hoặc dự án của bạn..." className="form-textarea" required></textarea>
                  </div>
                  <div className="sm:col-span-2 pt-4">
                    <button type="submit" className="btn-primary w-full justify-center group py-5 rounded-2xl text-lg shadow-xl shadow-red-500/20">
                      Gửi yêu cầu báo giá
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full bg-slate-50 relative overflow-hidden group">
        <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-1000">
           {/* Placeholder for map */}
           <div className="absolute inset-0 bg-[#0a1128]/5 flex items-center justify-center">
             <div className="text-center p-10 bg-white rounded-[2.5rem] shadow-2xl relative z-10 border border-slate-100">
               <div className="w-20 h-20 rounded-full bg-[#f04e23]/10 flex items-center justify-center text-[#f04e23] mx-auto mb-6 animate-bounce">
                 <MapPin size={40} />
               </div>
               <h3 className="text-2xl font-black text-[#0a1128] mb-2 tracking-tight">Fixera Electric Vietnam</h3>
               <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-6">1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM</p>
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 rel="noreferrer"
                 className="inline-flex items-center gap-2 text-[#f04e23] font-black text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-all"
               >
                 Chỉ đường trên Google Maps
                 <ArrowRight size={14} />
               </a>
             </div>
           </div>
           {/* You can replace the above with a real iframe here */}
        </div>
      </section>
    </motion.div>
  );
};


export default ContactPage;
