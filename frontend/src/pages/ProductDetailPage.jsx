import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, FileText, Share2, 
  ChevronRight, Phone, MessageSquare, ShieldCheck, 
  Settings, Zap, Info, Package, ArrowRight
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';
import { productService } from '../services';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const res = await productService.getOne(slug);
        const productData = res.data.data;
        setProduct(productData);

        // Fetch related products based on category
        const relatedRes = await productService.getAll({ 
          category: productData.categoryName,
          limit: 4 
        });
        setRelatedProducts(relatedRes.data.data.filter(p => p._id !== productData._id));
      } catch (error) {
        console.error('Fetch product detail error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 border-4 border-slate-100 border-t-[#f04e23] rounded-full animate-spin" />
          <p className="text-slate-400 font-black uppercase tracking-[0.2em] text-xs">Đang tải cấu hình...</p>
        </div>
      </div>
    );
  }

  if (!product) return null;

  const gallery = product.galleryImages?.length > 0 ? product.galleryImages : [product.thumbnail];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white pt-32 pb-20"
    >
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-12">
          <Link to="/" className="hover:text-[#f04e23] transition-colors">Trang chủ</Link>
          <ChevronRight size={12} />
          <Link to="/san-pham" className="hover:text-[#f04e23] transition-colors">Sản phẩm</Link>
          <ChevronRight size={12} />
          <span className="text-[#0a1128]">{product.categoryName}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left: Product Gallery */}
          <div className="space-y-6">
            <div className="rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="aspect-square"
              >
                {gallery.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={16}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbs-swiper"
            >
              {gallery.map((img, i) => (
                <SwiperSlide key={i} className="cursor-pointer rounded-2xl overflow-hidden border-2 border-transparent transition-all">
                  <div className="aspect-square">
                    <img src={img} alt={`thumb ${i}`} className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-red-50 text-[#f04e23] text-[10px] font-black uppercase tracking-[0.2em] rounded-lg">
                  {product.categoryName}
                </span>
                <span className="text-slate-300 font-bold text-xs">ID: FIX-{product._id.slice(-6).toUpperCase()}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-[#0a1128] mb-6 tracking-tighter leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-8 mb-8 pb-8 border-b border-slate-100">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Thương hiệu</div>
                  <div className="text-lg font-black text-[#f04e23]">{product.brand}</div>
                </div>
                <div className="w-px h-10 bg-slate-100" />
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Xuất xứ</div>
                  <div className="text-lg font-black text-[#0a1128]">{product.origin || 'Chính hãng'}</div>
                </div>
              </div>

              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium italic">
                "{product.shortDescription}"
              </p>

              <div className="grid grid-cols-2 gap-4 mb-12">
                {[
                  { icon: ShieldCheck, text: 'Bảo hành 12-24 tháng' },
                  { icon: Settings, text: 'Hỗ trợ lắp đặt tận nơi' },
                  { icon: Zap, text: 'Chuẩn công nghiệp IEC' },
                  { icon: Package, text: 'Sẵn kho số lượng lớn' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 transition-all">
                    <item.icon size={18} className="text-[#f04e23]" />
                    <span className="text-xs font-bold text-[#0a1128] uppercase tracking-wider">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0313728397" 
                  className="flex-1 btn-primary py-5 px-8 justify-center gap-3 text-lg shadow-xl shadow-red-500/20"
                >
                  <Phone size={20} />
                  Nhận báo giá ngay
                </a>
                <button className="flex-1 flex items-center justify-center gap-3 py-5 px-8 bg-[#0a1128] text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all">
                  <MessageSquare size={20} />
                  Tư vấn kỹ thuật
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Details Tabs */}
        <div className="mt-32">
          <div className="flex items-center gap-8 mb-12 border-b border-slate-100">
            {[
              { id: 'description', label: 'Mô tả chi tiết', icon: Info },
              { id: 'specifications', label: 'Thông số kỹ thuật', icon: Settings },
              { id: 'catalog', label: 'Catalog & Tài liệu', icon: FileText }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 pb-6 text-sm font-black uppercase tracking-[0.2em] transition-all relative ${
                  activeTab === tab.id ? 'text-[#f04e23]' : 'text-slate-400 hover:text-[#0a1128]'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-1 bg-[#f04e23] rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'description' && (
                <motion.div
                  key="desc"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="prose prose-slate max-w-none"
                >
                  <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                    <div className="text-slate-600 text-lg leading-loose font-medium whitespace-pre-line">
                      {product.description || 'Nội dung đang được cập nhật...'}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'specifications' && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-100/50">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#0a1128] text-white">
                          <th className="px-10 py-6 text-left text-[11px] font-black uppercase tracking-[0.3em]">Đặc tính kỹ thuật</th>
                          <th className="px-10 py-6 text-left text-[11px] font-black uppercase tracking-[0.3em]">Giá trị / Thông số</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {product.specifications?.map((spec, i) => (
                          <tr key={i} className="hover:bg-slate-50 transition-colors">
                            <td className="px-10 py-5 text-sm font-black text-[#0a1128] bg-slate-50/30 w-1/3">{spec.key}</td>
                            <td className="px-10 py-5 text-sm font-medium text-slate-500">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeTab === 'catalog' && (
                <motion.div
                  key="catalog"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center py-24 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200"
                >
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#f04e23] shadow-lg mb-6">
                    <FileText size={32} />
                  </div>
                  <h4 className="text-xl font-black text-[#0a1128] mb-4">Tài liệu kỹ thuật (PDF)</h4>
                  <p className="text-slate-400 font-medium mb-10">Tải xuống Catalogue chi tiết và hướng dẫn lắp đặt.</p>
                  <button className="btn-primary px-10 py-4">Tải ngay Catalogue</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-40">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#0a1128] tracking-tighter">Sản phẩm liên quan</h2>
              <Link to="/san-pham" className="flex items-center gap-2 text-xs font-black text-[#f04e23] uppercase tracking-[0.2em] group">
                Xem tất cả
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <Link 
                  key={p._id} 
                  to={`/san-pham/${p.slug}`}
                  className="group bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-700 overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                    <img src={p.thumbnail} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <div className="p-8">
                    <div className="text-[9px] font-black text-[#f04e23] uppercase tracking-[0.3em] mb-2">{p.brand}</div>
                    <h3 className="text-base font-black text-[#0a1128] group-hover:text-[#f04e23] transition-colors line-clamp-2 leading-tight tracking-tight min-h-[2.5rem]">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
