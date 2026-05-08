import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const products = [
  {
    name: 'Tủ điện MCC (Motor Control Center)',
    category: 'Tủ điện',
    slug: 'tu-dien-mcc-motor-control-center',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=600',
    brand: 'TuanLoc Electric',
  },
  {
    name: 'Tủ điện PLC Siemens S7-1500',
    category: 'Hệ thống điều khiển',
    slug: 'tu-dien-plc-siemens-s7-1500',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    brand: 'Siemens / TuanLoc',
  },
  {
    name: 'Biến tần Siemens SINAMICS G120',
    category: 'Thiết bị đóng cắt',
    slug: 'bien-tan-siemens-sinamics-g120',
    image: 'https://images.unsplash.com/photo-159742324403d-d19504ba2b47?auto=format&fit=crop&q=80&w=600',
    brand: 'Siemens',
  },
  {
    name: 'Máy biến áp dầu 1000kVA',
    category: 'Máy biến áp',
    slug: 'may-bien-ap-dau-1000kva',
    image: 'https://images.unsplash.com/photo-1610411800053-90d54030612c?auto=format&fit=crop&q=80&w=600',
    brand: 'ABB / Siemens',
  },
];

const ProductsSection = () => {
  return (
    <section className="section-py bg-[#f8f8f8]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
          <SectionTitle
            label="Sản phẩm nổi bật"
            title="Thiết Bị Điện Công Nghiệp"
            align="left"
            className="mb-0"
          />
          <Link to="/san-pham" className="btn-outline mb-4">
            Xem tất cả sản phẩm
            <ArrowRight size={18} />
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.slug}
              variants={fadeInUp}
              className="bg-white rounded-3xl overflow-hidden group border border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#111] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {product.category}
                  </span>
                </div>
                {/* Overlay link */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link to={`/san-pham/${product.slug}`} className="btn-white py-2 px-6 text-sm">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2 text-[#c1121f]">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <h3 className="text-gray-900 font-bold mb-2 line-clamp-2 hover:text-[#c1121f] transition-colors">
                  <Link to={`/san-pham/${product.slug}`}>{product.name}</Link>
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.brand}</span>
                  <Link to={`/san-pham/${product.slug}`} className="text-[#c1121f] hover:translate-x-1 transition-transform">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
