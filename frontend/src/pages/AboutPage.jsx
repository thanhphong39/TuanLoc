import { motion } from 'framer-motion';
import { 
  Target, Eye, Gem, Award, Users, 
  CheckCircle2, HardHat, FileCheck, Lightbulb, 
  Settings2, ArrowRight, Zap 
} from 'lucide-react';
import { pageTransition, fadeInUp, fadeInLeft, fadeInRight } from '../animations/variants';
import SectionTitle from '../components/common/SectionTitle';
import Counter from '../components/common/Counter';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      title: 'Chất lượng',
      desc: 'Cam kết mang đến những sản phẩm và dịch vụ đạt tiêu chuẩn kỹ thuật cao nhất.',
      icon: Award,
    },
    {
      title: 'Chuyên nghiệp',
      desc: 'Quy trình làm việc bài bản, đội ngũ kỹ sư được đào tạo chuyên sâu.',
      icon: Users,
    },
    {
      title: 'Sáng tạo',
      desc: 'Luôn tìm kiếm và ứng dụng những công nghệ mới nhất vào giải pháp cho khách hàng.',
      icon: Gem,
    },
  ];

  const milestones = [
    { year: '2010', title: 'Thành lập', desc: 'Khởi đầu từ một xưởng gia công cơ điện nhỏ tại TP.HCM.' },
    { year: '2015', title: 'Mở rộng quy mô', desc: 'Trở thành đối tác chính thức của Siemens và ABB tại Việt Nam.' },
    { year: '2018', title: 'Vươn tầm quốc tế', desc: 'Thực hiện các dự án cho các tập đoàn FDI lớn như Samsung, LG.' },
    { year: '2024', title: 'Tiên phong 4.0', desc: 'Dẫn đầu trong giải pháp Smart Factory và điện tự động hóa.' },
  ];

  const capacities = [
    { title: 'Thi công cơ điện M&E', icon: Settings2 },
    { title: 'Trạm biến áp trung thế', icon: Zap },
    { title: 'Hệ thống Smart Factory', icon: Lightbulb },
    { title: 'Bảo trì công nghiệp 24/7', icon: HardHat },
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white"
    >
      {/* Hero Header - Enterprise Style */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600" 
            alt="Industry" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/80 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div variants={fadeInLeft} className="max-w-4xl">
            <span className="text-[#f04e23] font-black uppercase tracking-[0.4em] text-[11px] mb-6 block">Kế thừa & Phát triển</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
              Kiến Tạo Nền Tảng <br />
              <span className="text-[#f04e23]">Năng Lượng Bền Vững</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Fixera - Đối tác kỹ thuật tin cậy của các tập đoàn đa quốc gia, dẫn đầu trong giải pháp hạ tầng điện công nghiệp thông minh và hiện đại.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="relative z-20 -mt-24 mb-12">
        <div className="container-custom">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-900/10 p-10 md:p-16 border border-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f04e23]/5 rounded-full blur-3xl" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { label: 'Dự án trọng điểm', value: 500, suffix: '+' },
                { label: 'Đối tác FDI', value: 350, suffix: '+' },
                { label: 'Năm hoạt động', value: 15, suffix: '+' },
                { label: 'Chuyên gia kỹ thuật', value: 200, suffix: '+' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:border-r last:border-r-0 border-slate-100 flex flex-col justify-center">
                  <Counter end={stat.value} suffix={stat.suffix} className="text-4xl md:text-5xl font-black text-[#0a1128] mb-3 block tracking-tighter" />
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Vision/Mission */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center mb-32">
            <motion.div variants={fadeInLeft}>
              <SectionTitle
                label="Câu chuyện thương hiệu"
                title="Hơn Một Thập Kỷ Khẳng Định Vị Thế"
                align="left"
              />
              <p className="text-slate-500 text-lg leading-loose mb-8 font-medium">
                Fixera không chỉ là một nhà thầu cơ điện, chúng tôi là đội ngũ chuyên gia mang đến giải pháp tối ưu cho hạ tầng sản xuất của doanh nghiệp. 
              </p>
              <p className="text-slate-500 leading-relaxed mb-12 text-base">
                Với xuất phát điểm từ một xưởng gia công nhỏ, qua hơn 15 năm, Fixera đã vươn mình trở thành một trong những tổng thầu M&E uy tín nhất tại Việt Nam, chuyên trị các dự án đòi hỏi kỹ thuật cao từ các nhà đầu tư quốc tế.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {['Thiết kế tối ưu', 'Thi công an toàn', 'Bảo trì trọn đời', 'Giải pháp thông minh'].map(item => (
                  <div key={item} className="flex items-center gap-3 font-black text-[#0a1128] text-sm uppercase tracking-wider">
                    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-[#f04e23]">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" alt="Worksite" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-[#f04e23] rounded-[3rem] flex items-center justify-center p-8 text-white text-center shadow-2xl rotate-6 z-20">
                <div>
                  <div className="text-5xl font-black mb-2 tracking-tighter">Top 10</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] leading-tight">Thương hiệu cơ điện tiêu biểu 2023</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-16 rounded-[4rem] bg-slate-50 hover:bg-[#0a1128] transition-all duration-700 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#f04e23]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Target size={56} className="text-[#f04e23] mb-10 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-3xl font-black mb-6 group-hover:text-white transition-colors tracking-tight">Tầm Nhìn 2030</h3>
              <p className="text-slate-500 text-lg leading-loose group-hover:text-slate-400 transition-colors font-medium">Trở thành tập đoàn kỹ thuật điện hàng đầu khu vực, tiên phong trong việc ứng dụng công nghệ 4.0 và năng lượng sạch vào vận hành công nghiệp.</p>
            </div>
            <div className="p-16 rounded-[4rem] bg-slate-50 hover:bg-[#0a1128] transition-all duration-700 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#f04e23]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Eye size={56} className="text-[#f04e23] mb-10 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-3xl font-black mb-6 group-hover:text-white transition-colors tracking-tight">Sứ Mệnh Chiến Lược</h3>
              <p className="text-slate-500 text-lg leading-loose group-hover:text-slate-400 transition-colors font-medium">Cung cấp giải pháp an toàn, bền bỉ và thông minh, giúp doanh nghiệp tối ưu hiệu suất và kiến tạo giá trị bền vững cho cộng đồng.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-py bg-slate-50/50">
        <div className="container-custom text-center">
          <SectionTitle label="Giá trị cốt lõi" title="Văn Hóa Làm Việc Tại Fixera" />
          <div className="grid md:grid-cols-3 gap-10 mt-20">
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-16 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-50 hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-[#0a1128] mx-auto mb-10 group-hover:bg-[#f04e23] group-hover:text-white transition-all duration-500 shadow-sm">
                  <v.icon size={36} />
                </div>
                <h4 className="text-2xl font-black mb-6 text-[#0a1128] tracking-tight">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium text-base">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Certificates */}
      <section className="section-py bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div variants={fadeInLeft}>
              <SectionTitle label="Năng lực cốt lõi" title="Đội Ngũ & Giải Pháp" align="left" />
              <div className="space-y-6 mt-12">
                {capacities.map((item, i) => (
                  <div key={i} className="flex items-center gap-8 p-8 rounded-[2rem] bg-slate-50 hover:shadow-2xl hover:bg-white transition-all duration-500 border border-transparent hover:border-red-50 group">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#0a1128] shadow-sm group-hover:bg-[#f04e23] group-hover:text-white transition-all duration-500">
                      <item.icon size={32} />
                    </div>
                    <span className="text-xl font-black text-[#0a1128] tracking-tight">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInRight}>
              <div className="p-16 bg-[#0a1128] rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#f04e23]/10 rounded-full blur-3xl" />
                <FileCheck size={56} className="text-[#f04e23] mb-10 relative z-10" />
                <h3 className="text-3xl font-black mb-10 relative z-10 tracking-tight">Tiêu Chuẩn & Chứng Chỉ</h3>
                <ul className="space-y-6 mb-12 relative z-10">
                  {['Chứng chỉ ISO 9001:2015', 'Chứng chỉ năng lực thi công hạng 1', 'Giám sát chuẩn IEC & TCVN', 'Đối tác chiến lược Siemens/ABB'].map(cert => (
                    <li key={cert} className="flex items-center gap-4 text-slate-400 font-bold text-sm uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-[#f04e23]" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-py bg-slate-50/50 relative overflow-hidden">
        <div className="container-custom">
          <SectionTitle label="Lịch sử" title="Hành Trình Khẳng Định" />
          <div className="mt-24 space-y-24 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />
            
            {milestones.map((m, i) => (
              <div key={i} className={`flex flex-col md:flex-row gap-12 items-center relative ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`md:w-1/2 ${i % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                  <div className="text-[#f04e23] text-6xl md:text-7xl font-black mb-4 tracking-tighter opacity-20">{m.year}</div>
                  <h4 className="text-2xl font-black text-[#0a1128] mb-4 tracking-tight">{m.title}</h4>
                  <p className="text-slate-500 text-lg leading-loose font-medium">{m.desc}</p>
                </div>
                <div className="w-6 h-6 rounded-full bg-white border-4 border-[#f04e23] relative z-10 shadow-xl hidden md:block" />
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Team */}
      <section className="section-py bg-[#0a1128] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" alt="Team" className="w-full h-full object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              Gia Nhập Đội Ngũ <br />
              <span className="text-[#f04e23]">Kỹ Sư Fixera</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed font-medium">
              Chúng tôi luôn tìm kiếm những cộng sự tài năng, khao khát chinh phục những công trình kỹ thuật đỉnh cao.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/lien-he" className="btn-primary py-5 px-12">Hợp tác ngay</Link>
              <Link to="/du-an" className="inline-flex items-center gap-3 font-black text-xs uppercase tracking-[0.3em] hover:text-[#f04e23] transition-all">
                Dự án nổi bật
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
