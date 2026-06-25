import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, PhoneCall, Zap, Cpu, Radio, Shield, Activity, Cable, Box, Gauge, Award, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { getProducts, type ApiProduct } from "../../lib/api";

const BANNERS = ["/Banner.jpg", "/banner2.jpg", "/banner3.jpg"];

const CATEGORIES = [
  { name: "Máy cắt hạ thế", icon: Zap, color: "from-red-500/20 to-orange-500/20 text-red-600", border: "border-red-200/50", desc: "CB, MCCB, ACB, RCBO, RCCB" },
  { name: "Biến tần", icon: Activity, color: "from-blue-500/20 to-indigo-500/20 text-blue-600", border: "border-blue-200/50", desc: "Altivar ATV32, ATV61, ATV312" },
  { name: "PLC & Tự động hóa", icon: Cpu, color: "from-purple-500/20 to-fuchsia-500/20 text-purple-600", border: "border-purple-200/50", desc: "Mitsubishi Q, Siemens S7" },
  { name: "Contactor & Relay", icon: Shield, color: "from-orange-500/20 to-amber-500/20 text-orange-600", border: "border-orange-200/50", desc: "LC1D, LC1F, TeSys, Relay TH" },
  { name: "Khởi động mềm", icon: Gauge, color: "from-teal-500/20 to-emerald-500/20 text-teal-600", border: "border-teal-200/50", desc: "Altistart ATS22, ATS48" },
  { name: "Encoder & Cảm biến", icon: Radio, color: "from-green-500/20 to-lime-500/20 text-green-600", border: "border-green-200/50", desc: "Autonics, LS Mecapion" },
  { name: "Nguồn xung", icon: Box, color: "from-yellow-500/20 to-amber-500/20 text-yellow-600", border: "border-yellow-200/50", desc: "Connectwell 1/2/3 pha" },
  { name: "Cầu đấu dây", icon: Cable, color: "from-indigo-500/20 to-violet-500/20 text-indigo-600", border: "border-indigo-200/50", desc: "Terminal blocks, Nối đất" },
  { name: "Giám sát điện", icon: Activity, color: "from-pink-500/20 to-rose-500/20 text-pink-600", border: "border-pink-200/50", desc: "Power Monitoring & Metering" },
];

const BRANDS = [
  { name: "Schneider Electric", logo: "Schneider Electric" },
  { name: "Mitsubishi", logo: "Mitsubishi" },
  { name: "Siemens", logo: "Siemens" },
  { name: "Autonics", logo: "Autonics" },
  { name: "Connectwell", logo: "Connectwell" },
  { name: "LS Mecapion", logo: "LS Mecapion" },
  // Duplicate for seamless marquee
  { name: "Schneider Electric", logo: "Schneider Electric" },
  { name: "Mitsubishi", logo: "Mitsubishi" },
  { name: "Siemens", logo: "Siemens" },
  { name: "Autonics", logo: "Autonics" },
  { name: "Connectwell", logo: "Connectwell" },
  { name: "LS Mecapion", logo: "LS Mecapion" },
];

export function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [featuredProducts, setFeaturedProducts] = useState<ApiProduct[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});

  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);
  const currentIndex = ((page % BANNERS.length) + BANNERS.length) % BANNERS.length;

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [page]);

  useEffect(() => {
    getProducts({ limit: "44" }).then((res) => {
      if (!res?.products) return;
      setFeaturedProducts(res.products.slice(0, 6));
      const counts: Record<string, number> = {};
      res.products.forEach((p) => { counts[p.category] = (counts[p.category] || 0) + 1; });
      setCategoryCounts(counts);
    }).catch(() => {});
  }, []);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "10%" : "-10%", opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 0.6 },
    exit: (d: number) => ({ zIndex: 0, x: d < 0 ? "10%" : "-10%", opacity: 0 }),
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="flex flex-col w-full">
      {/* ── BANNER ── */}
      <section className="relative w-full min-h-[600px] md:h-[750px] flex items-center bg-gray-700 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={BANNERS[currentIndex]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.8 } }}
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
          
          {/* Pagination dots */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${currentIndex === i ? "bg-red-500 w-10 shadow-[0_0_15px_rgba(239,68,68,0.7)]" : "bg-white/30 hover:bg-white/70 w-2"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col justify-center h-full">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="flex flex-col items-start max-w-3xl"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl mb-6">
              <Award className="text-yellow-400 w-5 h-5" />
              <span className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">Phân phối chính hãng</span>
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-4xl md:text-6xl lg:text-8xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight text-white">
              Giải pháp <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 filter drop-shadow-lg">Toàn Diện.</span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl leading-relaxed font-light">
              Cung cấp thiết bị điện công nghiệp, tự động hóa chất lượng cao từ các thương hiệu hàng đầu thế giới. Cam kết chính hãng, bảo hành trọn đời.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/products" className="group relative w-full sm:w-auto flex justify-center py-4 px-8 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-sm uppercase tracking-wider overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">Khám phá sản phẩm <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              </Link>
              <a href="tel:0967789159" className="w-full sm:w-auto flex justify-center items-center gap-2 py-4 px-8 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-1">
                <PhoneCall size={18} /> Liên hệ tư vấn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── DANH MỤC SẢN PHẨM (BENTO GRID) ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 w-full overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-1 bg-red-500 rounded-full" />
                <div className="text-sm font-bold text-red-600 uppercase tracking-widest">Khám phá</div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">Danh mục sản phẩm</h2>
            </div>
            <Link to="/products" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 font-bold text-sm uppercase tracking-wider hover:border-red-500 hover:text-red-600 transition-all shadow-sm hover:shadow-md">
              Xem tất cả <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-red-50 flex items-center justify-center transition-colors"><ArrowRight size={16} /></div>
            </Link>
          </motion.div>

          <div className="grid grid-rows-2 grid-flow-col auto-cols-[calc(50%-0.5rem)] gap-4 overflow-x-auto snap-x snap-mandatory pb-6 md:grid-rows-none md:auto-cols-auto md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row md:overflow-visible md:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              const count = categoryCounts[cat.name] || 0;
              return (
                <motion.div variants={fadeUpVariant} key={cat.name} className={`snap-center ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat.name)}`}
                    className="group relative flex flex-col h-full bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 z-10"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br ${cat.color} rounded-full blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2 -z-10`} />
                    
                    <div className="flex justify-between items-start mb-4 md:mb-8">
                      <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7 drop-shadow-md" />
                      </div>
                      {count > 0 && (
                        <div className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] md:text-xs font-bold text-gray-600 shadow-sm">
                          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-500" />
                          <span className="hidden sm:inline">{count} SP</span>
                          <span className="sm:hidden">{count}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="font-extrabold text-gray-900 text-base md:text-xl mb-1 md:mb-2 group-hover:text-red-600 transition-colors leading-tight">{cat.name}</h3>
                      <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-2">{cat.desc}</p>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ChevronRight size={16} className="text-gray-900 md:w-5 md:h-5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ── SẢN PHẨM NỔI BẬT ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white w-full overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-1 bg-red-500 rounded-full" />
                <div className="text-sm font-bold text-red-600 uppercase tracking-widest">Tiêu biểu</div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">Sản phẩm nổi bật</h2>
            </div>
            <Link to="/products" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 font-bold text-sm uppercase tracking-wider hover:border-red-500 hover:text-red-600 transition-all shadow-sm hover:shadow-md">
              Xem tất cả <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-red-50 flex items-center justify-center transition-colors"><ArrowRight size={16} /></div>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {featuredProducts.map((product) => (
              <motion.div variants={fadeUpVariant} key={product._id}>
                <Link
                  to={`/products/${product._id}`}
                  className="group block h-full bg-white rounded-[1.25rem] md:rounded-[2rem] p-2 md:p-3 border border-gray-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="relative h-40 md:h-72 w-full rounded-2xl md:rounded-3xl bg-gray-50 flex items-center justify-center overflow-hidden mb-3 md:mb-5">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent z-0" />
                    <img
                      src={product.images?.[0] || "/placeholder.jpg"}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 md:p-8 relative z-10 transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.badge && (
                      <div className={`absolute top-2 left-2 md:top-4 md:left-4 z-20 text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-1 md:px-3 md:py-1.5 rounded-full text-white shadow-md backdrop-blur-md ${product.badge === "HÀNG SẴN KHO" ? "bg-red-500/90 border border-red-400" : "bg-blue-600/90 border border-blue-500"}`}>
                        {product.badge}
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-md text-gray-900 font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1 md:gap-2 text-xs md:text-base">
                        Chi tiết <ArrowRight size={14} className="md:w-4 md:h-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-2 pb-2 md:px-5 md:pb-5 flex flex-col flex-1">
                    <div className="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 md:mb-2 flex items-center gap-1 md:gap-2">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-gray-300" />
                      <span className="truncate">{product.category}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-lg mb-1 md:mb-2 line-clamp-2 flex-1 group-hover:text-red-600 transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── THƯƠNG HIỆU ĐỐI TÁC (MARQUEE) ── */}
      <section className="py-12 md:py-16 bg-gray-50 border-t border-b border-gray-100 w-full overflow-hidden flex flex-col items-center">
        <div className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 md:mb-10 text-center">Đối tác phân phối chính hãng</div>
        <div className="relative w-full max-w-[100vw] overflow-hidden flex bg-gray-50">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          <motion.div 
            className="flex items-center gap-10 md:gap-24 px-4 md:px-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {BRANDS.map((brand, idx) => (
              <div key={idx} className="flex items-center justify-center min-w-[150px] opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <span className="font-extrabold text-2xl text-gray-800 tracking-tighter">{brand.logo}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TẠI SAO CHỌN CHÚNG TÔI ── */}
      <section className="bg-[#080e1a] relative py-20 md:py-32 text-white w-full overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/3 w-[500px] h-[500px] bg-red-600/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-[120px]" />
        </div>
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Section header */}
          <motion.div variants={fadeUpVariant} className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-5">
              <Award size={13} /> Tại sao chọn Tuấn Lộc
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Đối tác tin cậy trong<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-amber-400">
                thiết bị điện công nghiệp
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Hơn 10 năm kinh nghiệm phân phối thiết bị điện chính hãng, phục vụ hàng trăm doanh nghiệp trên toàn quốc.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={fadeUpVariant} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-16">
            {[
              { num: "10+", label: "Năm kinh nghiệm", sub: "Trong ngành điện công nghiệp", grad: "from-red-500 to-orange-500", glow: "rgba(239,68,68,0.15)" },
              { num: "500+", label: "Khách hàng", sub: "Doanh nghiệp tin dùng", grad: "from-blue-500 to-indigo-500", glow: "rgba(99,102,241,0.15)" },
              { num: "100%", label: "Chính hãng", sub: "Cam kết xuất xứ rõ ràng", grad: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.15)" },
              { num: "24/7", label: "Hỗ trợ kỹ thuật", sub: "Tư vấn & xử lý sự cố", grad: "from-amber-400 to-yellow-500", glow: "rgba(245,158,11,0.15)" },
            ].map((s, i) => (
              <div
                key={i}
                className="relative group rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-5 md:p-7 text-center overflow-hidden hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: `0 0 40px ${s.glow}` }}
              >
                <div className={`absolute inset-x-0 -top-10 h-20 bg-gradient-to-br ${s.grad} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                <div className={`text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-br ${s.grad}`}>
                  {s.num}
                </div>
                <div className="text-sm font-bold text-white/80 uppercase tracking-wider">{s.label}</div>
                <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 w-full flex justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-red-100 to-orange-50 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-70" />
        </div>
        
        <motion.div 
          className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-xs uppercase tracking-widest mb-6 border border-red-100 shadow-sm">
              <Zap size={14} /> Sẵn sàng phục vụ
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Sẵn sàng cho <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">dự án của bạn?</span>
            </h2>
            <p className="text-gray-600 text-base md:text-xl mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Đội ngũ kỹ sư chuyên nghiệp của chúng tôi luôn sẵn sàng hỗ trợ tư vấn thiết kế, lựa chọn thiết bị và cung cấp giải pháp tối ưu nhất với chi phí hợp lý.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="tel:0967789159" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-wider hover:from-red-700 hover:to-red-600 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-1">
                <PhoneCall size={18} className="group-hover:animate-bounce" /> Nhận báo giá ngay
              </a>
              <Link to="/contact" className="group flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-900 font-bold py-4 px-8 rounded-full text-sm uppercase tracking-wider hover:border-gray-300 hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-sm">
                Gửi yêu cầu tư vấn <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="w-full max-w-md relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-[2.5rem] transform rotate-3 scale-105 blur-lg opacity-20" />
            <div className="relative bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/50 flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 relative shadow-inner">
                <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-20" />
                <PhoneCall size={32} className="text-red-600 md:w-10 md:h-10" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">Hotline Kỹ Thuật</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm md:text-base">Trực tuyến 24/7</p>
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 mb-8 tracking-tight drop-shadow-sm">
                0967 789 159
              </div>
              <div className="w-full bg-gray-50/80 p-4 rounded-2xl flex items-center justify-center gap-3 border border-gray-100 shadow-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full relative shadow-[0_0_10px_rgba(34,197,94,0.6)]">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-50" />
                </div>
                <span className="font-bold text-gray-700 text-sm">Đang có chuyên viên trực</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
