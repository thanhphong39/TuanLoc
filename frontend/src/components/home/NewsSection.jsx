import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const posts = [
  {
    id: 1,
    title: 'Giải pháp tiết kiệm năng lượng cho nhà máy công nghiệp năm 2024',
    excerpt: 'Tìm hiểu các công nghệ mới nhất giúp giảm thiểu chi phí điện năng vận hành cho doanh nghiệp...',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    date: '15/03/2024',
    author: 'Admin',
    slug: 'tiet-kiem-nang-luong-nha-may-2024'
  },
  {
    id: 2,
    title: 'Tiêu chuẩn quốc tế IEC trong thiết kế và lắp đặt tủ điện MCC',
    excerpt: 'Tại sao việc tuân thủ tiêu chuẩn IEC lại quan trọng đối với an toàn hệ thống điện công nghiệp...',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800',
    date: '12/03/2024',
    author: 'Kỹ sư Tuấn',
    slug: 'tieu-chuan-iec-tu-dien-mcc'
  },
  {
    id: 3,
    title: 'Fixera hoàn thành dự án trạm biến áp 2500kVA tại Bình Dương',
    excerpt: 'Dự án trọng điểm khẳng định năng lực thi công và cam kết tiến độ vượt trội của Fixera...',
    image: 'https://images.unsplash.com/photo-1610411800053-90d54030612c?auto=format&fit=crop&q=80&w=800',
    date: '10/03/2024',
    author: 'Admin',
    slug: 'du-an-tram-bien-ap-binh-duong'
  }
];

const NewsSection = () => {
  return (
    <section className="section-py bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <SectionTitle
            label="Tin tức & Sự kiện"
            title="Cập Nhật Mới Nhất Từ Fixera"
            align="left"
            className="mb-0"
          />
          <Link to="/blog" className="btn-outline mb-4 group">
            Xem tất cả bài viết
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              variants={fadeInUp}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-[#f04e23] text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-lg">
                    Tin tức
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-6 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#f04e23]" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-[#f04e23]" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#0a1128] mb-4 line-clamp-2 hover:text-[#f04e23] transition-colors leading-tight">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                
                <p className="text-gray-500 mb-8 line-clamp-2 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0a1128] hover:text-[#f04e23] transition-colors group/link">
                  Đọc thêm
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover/link:bg-[#f04e23] group-hover/link:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
