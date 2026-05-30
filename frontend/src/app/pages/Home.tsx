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

        <div className="relative z-20 max-w-7xl mx-auto px-8 w-full flex flex-col items-start text-white">
          <div className="bg-[#b71508] px-4 py-1.5 rounded-sm mb-6 inline-block text-xs font-bold uppercase tracking-widest">
            Phân phối chính hãng
          </div>
          <h1 className="text-6xl font-bold mb-4 leading-tight tracking-tight max-w-3xl">
            Thiết bị điện<br />
            <span className="text-gray-300">công nghiệp chính hãng.</span>
          </h1>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Cung cấp thiết bị điện công nghiệp từ các thương hiệu hàng đầu: Schneider, Mitsubishi, Siemens, Autonics, Connectwell và nhiều hơn nữa.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/products" className="bg-[#b71508] hover:bg-red-800 text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider transition-colors shadow-lg">
              XEM SẢN PHẨM
            </Link>
            <a href="tel:0985352345" className="border border-white/40 hover:bg-white/10 text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider transition-colors">
              LIÊN HỆ TƯ VẤN
            </a>
          </div>
        </div>
      </section>

      {/* ── DANH MỤC SẢN PHẨM ── */}
      <section className="py-20 px-8 bg-white w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-3">Danh mục</div>
              <h2 className="text-4xl font-bold text-[#111827]">Sản phẩm theo danh mục</h2>
            </div>
            <Link to="/products" className="text-[#b71508] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:underline">
              XEM TẤT CẢ <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const count = categoryCounts[cat.name] || 0;
              return (
                <Link
                  key={cat.name}
                  to={`/products?category=${encodeURIComponent(cat.name)}`}
                  className={`group p-6 rounded-xl border-2 ${cat.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col gap-3`}
                >
                  <div className="flex items-start justify-between">
                    <Icon size={32} />
                    {count > 0 && (
                      <span className="text-xs font-bold bg-white/80 px-2 py-0.5 rounded-full">{count} SP</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111827] text-base mb-1">{cat.name}</h3>
                    <p className="text-xs text-gray-500">{cat.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold opacity-70 group-hover:opacity-100">
                    Xem sản phẩm <ChevronRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SẢN PHẨM NỔI BẬT ── */}
      <section className="py-20 px-8 bg-[#f8fafc] w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-3">Nổi bật</div>
              <h2 className="text-4xl font-bold text-[#111827]">Sản phẩm tiêu biểu</h2>
            </div>
            <Link to="/products" className="text-[#b71508] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:underline">
              XEM TẤT CẢ <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.badge && (
                    <div className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm text-white ${product.badge === "HÀNG SẴN KHO" ? "bg-[#b71508]" : "bg-[#3b4b8a]"}`}>
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[10px] font-bold text-[#3b4b8a] uppercase tracking-widest mb-2">{product.category}</div>
                  <h3 className="font-bold text-[#111827] text-sm mb-3 line-clamp-2 flex-1 group-hover:text-[#b71508] transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#b71508]">
                    Xem chi tiết <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── THƯƠNG HIỆU ĐỐI TÁC ── */}
      <section className="py-16 px-8 bg-white border-t border-b border-gray-100 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-3">Đối tác</div>
            <h2 className="text-3xl font-bold text-[#111827]">Thương hiệu phân phối chính hãng</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {BRANDS.map((brand) => (
              <Link
                key={brand.name}
                to={`/products?category=${encodeURIComponent(brand.name)}`}
                className={`${brand.bg} rounded-xl p-6 flex items-center justify-center text-center hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer`}
              >
                <span className={`font-bold text-sm ${brand.color}`}>{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── THỐNG KÊ ── */}
      <section className="bg-[#1f2937] py-16 text-white w-full">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-700">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl font-bold mb-2">44+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">SẢN PHẨM</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl font-bold mb-2">6</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">THƯƠNG HIỆU</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl font-bold mb-2">9</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">DANH MỤC</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl font-bold mb-2">24/7</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">HỖ TRỢ KỸ THUẬT</div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#fee2e2] py-20 px-8 w-full flex justify-center">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 bg-white/50 backdrop-blur rounded-2xl p-12 border border-red-100">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-[#111827] mb-4">Cần báo giá hoặc tư vấn kỹ thuật?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Đội ngũ kỹ thuật của chúng tôi sẵn sàng tư vấn lựa chọn thiết bị phù hợp cho dự án của bạn với giá cạnh tranh nhất.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="tel:0985352345" className="bg-[#b71508] text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors">
                GỌI NGAY
              </a>
              <Link to="/contact" className="bg-white border border-gray-300 text-[#111827] font-bold py-4 px-8 rounded text-sm uppercase tracking-wider hover:bg-gray-50 transition-colors text-center">
                GỬI YÊU CẦU
              </Link>
            </div>
          </div>

          <a href="tel:0985352345" className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-red-100 text-[#b71508] p-3 rounded-full"><PhoneCall size={24} /></div>
              <div>
                <div className="text-sm font-bold text-gray-500 uppercase">Hotline kỹ thuật</div>
                <div className="text-2xl font-bold text-[#111827]">098-535-2345</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">Phục vụ 24/7 cho các yêu cầu hỗ trợ kỹ thuật và tư vấn sản phẩm.</p>
          </a>
        </div>
      </section>
    </div>
  );
}
