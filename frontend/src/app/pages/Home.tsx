import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, PhoneCall, Zap, Cpu, Radio, Shield, Activity, Cable, Box, Gauge } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { getProducts, type ApiProduct } from "../../lib/api";

const BANNERS = ["/Banner.jpg", "/banner2.jpg", "/banner3.jpg"];

const CATEGORIES = [
  { name: "Máy cắt hạ thế", icon: Zap, color: "bg-red-50 text-[#b71508] border-red-100", desc: "CB, MCCB, ACB, RCBO, RCCB" },
  { name: "Biến tần", icon: Activity, color: "bg-blue-50 text-[#3b4b8a] border-blue-100", desc: "Altivar ATV32, ATV61, ATV312" },
  { name: "PLC & Tự động hóa", icon: Cpu, color: "bg-purple-50 text-purple-700 border-purple-100", desc: "Mitsubishi Q, Siemens S7" },
  { name: "Contactor & Relay", icon: Shield, color: "bg-orange-50 text-orange-700 border-orange-100", desc: "LC1D, LC1F, TeSys, Relay TH" },
  { name: "Khởi động mềm", icon: Gauge, color: "bg-teal-50 text-teal-700 border-teal-100", desc: "Altistart ATS22, ATS48" },
  { name: "Encoder & Cảm biến", icon: Radio, color: "bg-green-50 text-green-700 border-green-100", desc: "Autonics, LS Mecapion" },
  { name: "Nguồn xung", icon: Box, color: "bg-yellow-50 text-yellow-700 border-yellow-100", desc: "Connectwell 1/2/3 pha" },
  { name: "Cầu đấu dây", icon: Cable, color: "bg-indigo-50 text-indigo-700 border-indigo-100", desc: "Terminal blocks, Nối đất" },
  { name: "Giám sát điện", icon: Activity, color: "bg-pink-50 text-pink-700 border-pink-100", desc: "Power Monitoring & Metering" },
];

const BRANDS = [
  { name: "Schneider Electric", color: "text-[#3dcd58]", bg: "bg-[#f0fdf4]" },
  { name: "Mitsubishi", color: "text-red-600", bg: "bg-red-50" },
  { name: "Siemens", color: "text-[#009999]", bg: "bg-teal-50" },
  { name: "Autonics", color: "text-[#1d4ed8]", bg: "bg-blue-50" },
  { name: "Connectwell", color: "text-orange-600", bg: "bg-orange-50" },
  { name: "LS Mecapion", color: "text-purple-600", bg: "bg-purple-50" },
];

export function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [featuredProducts, setFeaturedProducts] = useState<ApiProduct[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});

  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);
  const currentIndex = ((page % BANNERS.length) + BANNERS.length) % BANNERS.length;

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
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
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (d: number) => ({ zIndex: 0, x: d < 0 ? "100%" : "-100%", opacity: 0 }),
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="flex flex-col w-full">
      {/* ── BANNER ── */}
      <section className="relative w-full h-[600px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={BANNERS[currentIndex]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {BANNERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-[#b71508] w-8" : "bg-white/50 hover:bg-white w-2"}`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col items-start text-white">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeUpVariant} className="bg-[#b71508]/90 backdrop-blur-sm px-4 py-1.5 rounded-sm mb-6 inline-block text-xs font-bold uppercase tracking-widest shadow-lg">
              Phân phối chính hãng
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight max-w-4xl drop-shadow-xl">
              Thiết bị điện<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300 drop-shadow-none">công nghiệp chính hãng.</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Cung cấp thiết bị điện công nghiệp từ các thương hiệu hàng đầu: Schneider, Mitsubishi, Siemens, Autonics, Connectwell và nhiều hơn nữa.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 flex-wrap">
              <Link to="/products" className="bg-[#b71508] hover:bg-red-700 text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-red-900/50 hover:-translate-y-1">
                XEM SẢN PHẨM
              </Link>
              <a href="https://zalo.me/0985352345" target="_blank" rel="noopener noreferrer" className="backdrop-blur-md bg-white/10 border border-white/40 hover:bg-white/20 text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider transition-all hover:-translate-y-1 shadow-lg">
                LIÊN HỆ TƯ VẤN
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── DANH MỤC SẢN PHẨM ── */}
      <section className="py-24 px-4 md:px-8 bg-white w-full overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-3">Danh mục</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">Sản phẩm theo danh mục</h2>
            </div>
            <Link to="/products" className="text-[#b71508] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all hover:text-red-800">
              XEM TẤT CẢ <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const count = categoryCounts[cat.name] || 0;
              return (
                <motion.div variants={fadeUpVariant} key={cat.name}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat.name)}`}
                    className={`group p-8 rounded-2xl border ${cat.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col gap-4 bg-opacity-40 backdrop-blur-sm bg-white/50 h-full`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon size={32} />
                      </div>
                      {count > 0 && (
                        <span className="text-xs font-bold bg-white px-3 py-1 rounded-full shadow-sm">{count} SP</span>
                      )}
                    </div>
                    <div className="flex-1 mt-2">
                      <h3 className="font-extrabold text-[#111827] text-xl mb-2">{cat.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{cat.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity mt-4">
                      Xem sản phẩm <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ── SẢN PHẨM NỔI BẬT ── */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 w-full overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-3">Nổi bật</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">Sản phẩm tiêu biểu</h2>
            </div>
            <Link to="/products" className="text-[#b71508] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all hover:text-red-800">
              XEM TẤT CẢ <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div variants={fadeUpVariant} key={product._id}>
                <Link
                  to={`/products/${product._id}`}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="relative h-56 bg-[#f8fafc] flex items-center justify-center overflow-hidden">
                    <img
                      src={product.images?.[0] || "/placeholder.jpg"}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.badge && (
                      <div className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded text-white shadow-md ${product.badge === "HÀNG SẴN KHO" ? "bg-[#b71508]" : "bg-[#3b4b8a]"}`}>
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-[10px] font-bold text-[#3b4b8a] uppercase tracking-widest mb-2">{product.category}</div>
                    <h3 className="font-bold text-[#111827] text-lg mb-4 line-clamp-2 flex-1 group-hover:text-[#b71508] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm font-bold text-[#b71508]">
                      Xem chi tiết <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── THƯƠNG HIỆU ĐỐI TÁC ── */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-b border-gray-100 w-full overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="text-center mb-12">
            <div className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-3">Đối tác</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">Thương hiệu phân phối chính hãng</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {BRANDS.map((brand) => (
              <motion.div variants={fadeUpVariant} key={brand.name}>
                <Link
                  to={`/products?category=${encodeURIComponent(brand.name)}`}
                  className={`${brand.bg} rounded-2xl p-6 flex items-center justify-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full border border-black/5`}
                >
                  <span className={`font-extrabold text-sm md:text-base ${brand.color}`}>{brand.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── THỐNG KÊ ── */}
      <section className="bg-[#111827] relative py-20 text-white w-full overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <motion.div 
          className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x-0 md:divide-x divide-gray-700/50 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-white">44+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">SẢN PHẨM</div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center justify-center text-center px-4 border-l md:border-l-0 border-gray-700/50 pl-4 md:pl-0">
            <div className="text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-white">6</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">THƯƠNG HIỆU</div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center justify-center text-center px-4 pt-8 md:pt-0 border-t md:border-t-0 border-gray-700/50 mt-8 md:mt-0">
            <div className="text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-white">9</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">DANH MỤC</div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center justify-center text-center px-4 pt-8 md:pt-0 border-t border-l md:border-t-0 md:border-l-0 border-gray-700/50 mt-8 md:mt-0 pl-4 md:pl-0">
            <div className="text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-white">24/7</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">HỖ TRỢ KỸ THUẬT</div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 px-4 md:px-8 w-full flex justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fee2e2] to-white pointer-events-none" />
        <motion.div 
          className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 bg-white/70 backdrop-blur-xl rounded-3xl p-8 md:p-14 border border-white shadow-2xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6 tracking-tight">Cần báo giá hoặc tư vấn kỹ thuật?</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Đội ngũ kỹ thuật của chúng tôi sẵn sàng tư vấn lựa chọn thiết bị phù hợp cho dự án của bạn với giá cạnh tranh nhất.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a href="https://zalo.me/0985352345" target="_blank" rel="noopener noreferrer" className="bg-[#b71508] text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-all shadow-lg hover:shadow-red-900/50 hover:-translate-y-1">
                GỌI NGAY
              </a>
              <Link to="/contact" className="bg-white border border-gray-300 text-[#111827] font-bold py-4 px-8 rounded text-sm uppercase tracking-wider hover:bg-gray-50 transition-all text-center hover:-translate-y-1 shadow-sm">
                GỬI YÊU CẦU
              </Link>
            </div>
          </div>

          <a href="https://zalo.me/0985352345" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-50 group">
            <div className="flex items-center gap-5 mb-5">
              <div className="bg-red-50 text-[#b71508] p-4 rounded-full group-hover:bg-[#b71508] group-hover:text-white transition-colors">
                <PhoneCall size={28} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Hotline kỹ thuật</div>
                <div className="text-2xl font-extrabold text-[#111827]">098-535-2345</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">Phục vụ 24/7 cho các yêu cầu hỗ trợ kỹ thuật và tư vấn sản phẩm, thiết kế mạch.</p>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
