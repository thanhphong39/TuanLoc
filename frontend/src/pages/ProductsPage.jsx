import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowRight, Grid, List, Zap, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';
import { productService, categoryService } from '../services';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  
  const currentCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [prodRes, catRes] = await Promise.all([
          productService.getAll({ 
            category: currentCategory !== 'all' ? currentCategory : '',
            search: searchTerm
          }),
          categoryService.getAll({ type: 'product' })
        ]);
        setProducts(prodRes.data.data);
        setCategories(catRes.data.data);
      } catch (error) {
        console.error('Fetch products error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentCategory, searchTerm]);

  const handleCategoryChange = (slug) => {
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      searchParams.set('search', searchTerm);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white min-h-screen"
    >
      {/* Hero Banner - Professional Industrial Style */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-transparent to-[#0a1128]/90" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-[#f04e23] mb-6 font-black uppercase tracking-[0.3em] text-[10px]">
              <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
              <ChevronRight size={12} />
              <span className="text-white/60">Sản phẩm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
              SẢN PHẨM <br />
              <span className="text-[#f04e23]">CÔNG NGHỆ CAO</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              Giải pháp thiết bị điện công nghiệp & tự động hóa đạt chuẩn quốc tế cho mọi quy mô nhà máy.
            </p>
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      <section className="pb-32 -mt-12 relative z-20">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
            
            {/* Sidebar Filter - Sticky & Clean */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-32 space-y-8 bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50">
                <div>
                  <h3 className="text-sm font-black text-[#0a1128] uppercase tracking-widest mb-6 flex items-center gap-3">
                    <SlidersHorizontal size={18} className="text-[#f04e23]" />
                    Bộ lọc tìm kiếm
                  </h3>
                  <form onSubmit={handleSearch} className="relative mb-8">
                    <input 
                      type="text" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Tìm mã sản phẩm..." 
                      className="form-input pl-12 text-sm"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </form>
                </div>

                <div>
                  <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-1">Danh mục sản phẩm</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all font-bold text-sm ${
                        currentCategory === 'all' 
                          ? 'bg-[#0a1128] text-white shadow-xl shadow-navy-900/20' 
                          : 'bg-white text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      Tất cả sản phẩm
                      <ChevronRight size={14} className={currentCategory === 'all' ? 'text-[#f04e23]' : 'text-slate-300'} />
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat._id}
                        onClick={() => handleCategoryChange(cat.slug)}
                        className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all font-bold text-sm ${
                          currentCategory === cat.slug 
                            ? 'bg-[#0a1128] text-white shadow-xl shadow-navy-900/20' 
                            : 'bg-white text-slate-500 hover:bg-slate-50'
                        }`}
                      >
                        {cat.name}
                        <ChevronRight size={14} className={currentCategory === cat.slug ? 'text-[#f04e23]' : 'text-slate-300'} />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-50">
                  <div className="p-8 bg-[#0a1128] rounded-[2rem] text-white relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#f04e23] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <Zap size={28} className="text-[#f04e23] mb-4 relative z-10" />
                    <h5 className="text-lg font-black mb-2 relative z-10">Tư vấn báo giá</h5>
                    <p className="text-[10px] text-white/40 mb-6 uppercase tracking-widest font-bold leading-relaxed relative z-10">Kỹ thuật viên hỗ trợ 24/7</p>
                    <a href="tel:0313728397" className="inline-block text-[#f04e23] font-black text-xl hover:text-white transition-colors relative z-10 tracking-tight">0313 728 397</a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid - 4 Columns Desktop */}
            <main className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                <div className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  Kết quả tìm kiếm: <span className="text-[#0a1128]">{products.length} sản phẩm</span>
                </div>
                <div className="h-px flex-1 bg-slate-100 mx-8 hidden sm:block" />
              </div>

              {loading ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <div key={n} className="bg-slate-50 rounded-[2rem] aspect-[4/5] animate-pulse" />
                  ))}
                </div>
              ) : products.length > 0 ? (
                <motion.div 
                  className="grid sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-10"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {products.map((product) => (
                    <motion.div 
                      key={product._id}
                      variants={fadeInUp}
                      className="group bg-white rounded-[2rem] border border-slate-100 hover:border-[#f04e23]/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700 overflow-hidden flex flex-col h-full"
                    >
                      {/* Image container with fixed aspect ratio */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                        <img 
                          src={product.thumbnail || 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=600'} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-[9px] font-black text-[#0a1128] uppercase tracking-[0.15em] rounded-lg shadow-sm border border-slate-100">
                            {product.categoryName}
                          </span>
                        </div>
                      </div>
                      
                      {/* Product Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="text-[9px] font-black text-[#f04e23] uppercase tracking-[0.3em] mb-2">{product.brand}</div>
                        <h3 className="text-base font-black text-[#0a1128] mb-3 group-hover:text-[#f04e23] transition-colors line-clamp-2 leading-tight tracking-tight min-h-[2.5rem]">
                          <Link to={`/san-pham/${product.slug}`}>{product.name}</Link>
                        </h3>
                        <p className="text-slate-400 text-xs font-medium line-clamp-2 mb-6 leading-relaxed">
                          {product.shortDescription}
                        </p>
                        
                        <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between">
                          <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{product.origin || 'Genuine'}</span>
                          <Link 
                            to={`/san-pham/${product.slug}`} 
                            className="flex items-center gap-2 text-[10px] font-black text-[#0a1128] uppercase tracking-widest group/btn"
                          >
                            Chi tiết
                            <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover/btn:bg-[#f04e23] group-hover/btn:text-white transition-all duration-300">
                              <ArrowRight size={14} />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-40 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200/50">
                    <Search size={32} className="text-slate-200" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0a1128] mb-2 tracking-tight">Không tìm thấy sản phẩm</h3>
                  <p className="text-slate-400 font-medium">Vui lòng thử lại với từ khóa hoặc danh mục khác.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProductsPage;
