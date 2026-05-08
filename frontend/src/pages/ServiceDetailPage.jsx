import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, ArrowLeft, PhoneCall, Mail, 
  ChevronRight, Zap, Settings, ShieldCheck, 
  Activity, Wrench, Box, Cpu
} from 'lucide-react';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';
import { serviceService } from '../services';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await serviceService.getById(slug);
        setService(res.data.data);
      } catch (err) {
        console.error('Fetch service error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [slug]);

  const sidebarContacts = [
    { icon: PhoneCall, label: 'Hotline 24/7', value: '0313 728 397' },
    { icon: Mail, label: 'Email báo giá', value: 'info@fixera.vn' },
  ];

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-white">
      <div className="w-12 h-12 border-4 border-slate-100 border-t-[#f04e23] rounded-full animate-spin" />
      <p className="text-slate-400 font-bold tracking-widest uppercase text-xs animate-pulse">Đang tải thông tin...</p>
    </div>
  );

  if (!service) return (
    <div className="section-py container-custom text-center pt-48">
      <h1 className="text-2xl font-black mb-8 text-[#0a1128]">Không tìm thấy dịch vụ</h1>
      <Link to="/dich-vu" className="btn-outline">Quay lại danh sách</Link>
    </div>
  );

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white"
    >
      {/* Header Banner */}
      <section className="bg-[#0a1128] py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={service.thumbnail} alt="Service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128] via-[#0a1128]/80 to-transparent" />
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f04e23]/10 skew-x-12 translate-x-1/2" />
        
        <div className="container-custom relative z-10">
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <Link to="/dich-vu" className="inline-flex items-center gap-2 text-white/50 hover:text-[#f04e23] transition-colors font-bold text-xs uppercase tracking-widest mb-10 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Tất cả dịch vụ
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
              {service.name}
            </h1>
            <div className="h-1 w-20 bg-[#f04e23] rounded-full mb-8" />
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-24">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-slate max-w-none mb-24">
              <div 
                className="text-slate-600 text-lg leading-loose space-y-8" 
                dangerouslySetInnerHTML={{ __html: service.description }} 
              />
            </div>

            {/* Features */}
            <div className="mb-24">
              <h3 className="text-3xl font-black text-[#0a1128] mb-12 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#f04e23]">
                  <ShieldCheck size={24} />
                </div>
                Ưu điểm dịch vụ
              </h3>
              <div className="grid sm:grid-cols-2 gap-8">
                {service.features?.map((f, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="flex gap-5 p-8 rounded-[2rem] border border-slate-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#0a1128]/5 flex items-center justify-center text-[#0a1128] flex-shrink-0 group-hover:bg-[#f04e23] group-hover:text-white transition-all duration-500">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="font-bold text-[#0a1128] text-lg leading-snug pt-1">{f}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Workflow */}
            <div className="mb-24">
              <h3 className="text-3xl font-black text-[#0a1128] mb-12">Quy trình chuyên nghiệp</h3>
              <div className="relative space-y-12">
                {/* Connector Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-100" />
                
                {service.workflow?.map((step, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="flex items-start gap-8 relative z-10 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-[#0a1128] font-black text-xl flex-shrink-0 group-hover:border-[#f04e23] group-hover:text-[#f04e23] transition-all duration-500 shadow-sm">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xl font-black text-[#0a1128] mb-3 group-hover:text-[#f04e23] transition-colors">{step.title}</h4>
                      <p className="text-slate-500 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-10">
              {/* Other Services */}
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h4 className="text-xl font-black text-[#0a1128] mb-8 border-b border-slate-50 pb-6">Dịch vụ liên quan</h4>
                <div className="space-y-4">
                  {['Thi công hệ thống điện', 'Gia công tủ điện', 'Trạm biến áp', 'Hệ thống M&E', 'Smart Factory'].map(item => (
                    <Link 
                      key={item} 
                      to="#" 
                      className="flex items-center justify-between p-5 rounded-2xl hover:bg-slate-50 hover:text-[#f04e23] transition-all group font-bold text-slate-600 text-sm border border-transparent hover:border-slate-100"
                    >
                      {item}
                      <ChevronRight size={16} className="text-slate-300 group-hover:text-[#f04e23] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-[#0a1128] p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl shadow-navy-900/40">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#f04e23] rounded-full blur-3xl opacity-20" />
                <h4 className="text-2xl font-black mb-8 relative z-10">Liên hệ tư vấn</h4>
                <div className="space-y-8 mb-10 relative z-10">
                  {sidebarContacts.map((c, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#f04e23]">
                        <c.icon size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mb-1">{c.label}</div>
                        <div className="font-bold text-lg">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/lien-he" className="btn-primary w-full justify-center rounded-2xl py-5 shadow-none relative z-10">
                  Yêu cầu báo giá ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default ServiceDetailPage;
