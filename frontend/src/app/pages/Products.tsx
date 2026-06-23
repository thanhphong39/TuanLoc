import { useState, useEffect, useCallback } from "react";
import { Settings, Search, X, PhoneCall } from "lucide-react";
import { Link, useSearchParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { getProducts, type ApiProduct } from "../../lib/api";

const CATEGORIES = [
  "Máy cắt hạ thế",
  "Biến tần",
  "PLC & Tự động hóa",
  "Contactor & Relay",
  "Khởi động mềm",
  "Encoder & Cảm biến",
  "Nguồn xung",
  "Cầu đấu dây",
  "Giám sát điện",
];

const LIMIT = 20;

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get("category") ?? "";

  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(total / LIMIT);

  const fetchProducts = useCallback((cat: string, pg: number) => {
    setLoading(true);
    const params: Record<string, string> = { page: String(pg), limit: String(LIMIT) };
    if (cat) params.category = cat;
    getProducts(params)
      .then((res) => {
        if (!res?.products) return;
        setProducts(res.products);
        setTotal(res.total || 0);
      })
      .catch((err) => console.error("Lỗi fetch products:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setSelectedCategory(urlCategory);
    setPage(1);
    fetchProducts(urlCategory, 1);
  }, [urlCategory, fetchProducts]);

  const handleCategoryClick = (cat: string) => {
    const next = selectedCategory === cat ? "" : cat;
    setSelectedCategory(next);
    setPage(1);
    if (next) setSearchParams({ category: next });
    else setSearchParams({});
    fetchProducts(next, 1);
  };

  const handlePageChange = (pg: number) => {
    setPage(pg);
    fetchProducts(selectedCategory, pg);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const displayed = search
    ? products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))
    : products;

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const slideLeftVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* Hero */}
      <motion.div 
        initial="hidden" animate="visible" variants={fadeUpVariant}
        className="bg-[#f0f4f8] py-14 px-8 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-3">Sản phẩm</div>
          <h1 className="text-4xl font-bold text-[#111827] mb-3">
            Thiết bị <span className="text-[#b71508]">điện công nghiệp</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-base">
            Phân phối chính hãng Schneider Electric, Mitsubishi, Siemens, Autonics, Connectwell, LS Mecapion và nhiều thương hiệu uy tín khác.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col lg:flex-row gap-6 md:gap-10 w-full">
        {/* Sidebar */}
        <motion.div 
          initial="hidden" animate="visible" variants={slideLeftVariant}
          className="w-full lg:w-60 shrink-0 flex flex-col gap-8"
        >
          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm sản phẩm..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#b71508] bg-white"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-4">Danh mục</h3>
            
            <div className="flex lg:flex-col gap-2 lg:gap-1 overflow-x-auto pb-2 lg:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <button
                onClick={() => handleCategoryClick("")}
                className={`shrink-0 text-left px-4 py-2 lg:px-3 lg:py-2.5 rounded-full lg:rounded-lg text-sm font-medium transition-all duration-300 snap-start ${
                  !selectedCategory ? "bg-[#b71508] text-white shadow-md" : "bg-white lg:bg-transparent text-gray-600 hover:bg-gray-100 border border-gray-200 lg:border-transparent"
                }`}
              >
                Tất cả
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`shrink-0 text-left px-4 py-2 lg:px-3 lg:py-2.5 rounded-full lg:rounded-lg text-sm font-medium transition-all duration-300 snap-start ${
                    selectedCategory === cat ? "bg-[#b71508] text-white shadow-md" : "bg-white lg:bg-transparent text-gray-600 hover:bg-gray-100 border border-gray-200 lg:border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-[#111827] text-white p-5 rounded-xl">
            <h3 className="text-base font-bold mb-3">Cần tư vấn?</h3>
            <p className="text-sm text-gray-400 mb-4">Đội ngũ kỹ sư sẵn sàng hỗ trợ lựa chọn thiết bị phù hợp.</p>
            <a href="tel:09671789159" className="bg-[#b71508] text-white font-bold py-2.5 px-4 rounded w-full text-xs uppercase tracking-wider hover:bg-red-800 transition-colors block text-center">
              Nhận Báo Giá
            </a>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-600 font-medium">
                {search ? `${displayed.length} kết quả` : `${total} sản phẩm`}
                {selectedCategory && <span className="ml-2 bg-[#b71508]/10 text-[#b71508] px-2 py-0.5 rounded text-xs font-bold">{selectedCategory}</span>}
              </p>
              {selectedCategory && (
                <button onClick={() => handleCategoryClick("")} className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1">
                  <X size={12} /> Bỏ lọc
                </button>
              )}
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-5">
                    <div className="h-3 bg-gray-200 rounded w-1/3 mb-3" />
                    <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              key={selectedCategory + page + search}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-10"
            >
              {displayed.map((product) => (
                <motion.div variants={fadeUpVariant} key={product._id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col group">
                  <Link to={`/products/${product._id}`} className="relative h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.images?.[0] || "/placeholder.jpg"}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.badge && (
                      <div className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm text-white z-10 ${
                        product.badge === "HÀNG SẴN KHO" ? "bg-[#b71508]" : "bg-[#3b4b8a]"
                      }`}>
                        {product.badge}
                      </div>
                    )}
                  </Link>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-[10px] font-bold text-[#3b4b8a] uppercase tracking-widest mb-2">{product.category}</div>
                    <Link
                      to={`/products/${product._id}`}
                      className="text-base font-bold text-[#111827] mb-4 hover:text-[#b71508] transition-colors line-clamp-2 min-h-[48px] flex-1"
                    >
                      {product.name}
                    </Link>

                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="text-xs text-gray-500 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#b71508] mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/products/${product._id}`} className="flex-1 py-2 px-1 md:py-2.5 md:px-3 rounded text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors bg-[#b71508] text-white hover:bg-red-800 text-center">
                        Chi tiết
                      </Link>
                      <a href="tel:09671789159" className="py-2 px-2 md:py-2.5 md:px-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors bg-white text-[#b71508] border border-[#b71508] hover:bg-red-50">
                        <PhoneCall size={14} className="md:w-4 md:h-4" /> Báo Giá
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Pagination */}
          {!search && totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                <button
                  key={pg}
                  onClick={() => handlePageChange(pg)}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg font-bold text-sm ${
                    pg === page ? "bg-[#b71508] text-white" : "border border-gray-200 text-[#111827] hover:bg-gray-50"
                  }`}
                >
                  {pg}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
        className="bg-[#2d3748] text-white py-16 px-8 relative overflow-hidden mt-8"
      >
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 flex items-center justify-center">
          <Settings size={300} className="animate-[spin_20s_linear_infinite]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-4 max-w-2xl text-white">Cần tư vấn chọn thiết bị phù hợp?</h2>
          <p className="text-gray-400 text-base max-w-2xl mb-6">
            Đội ngũ kỹ thuật của chúng tôi sẵn sàng hỗ trợ bạn chọn thiết bị đúng thông số kỹ thuật cho từng ứng dụng.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:09671789159" className="bg-[#b71508] text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors flex items-center gap-2">
              <PhoneCall size={18} />
              Liên hệ mua hàng
            </a>
            <a href="tel:09671789159" className="bg-transparent border border-gray-500 text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
              Hotline: 0967-178-9159
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
