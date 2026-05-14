import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { getPosts, formatDate, type ApiPost } from "../../lib/api";

export function News() {
  const [news, setNews] = useState<ApiPost[]>([]);

  useEffect(() => {
    getPosts({ limit: "10" }).then((res) => setNews(res.posts)).catch(() => {});
  }, []);

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative w-full h-[350px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1735494033199-cb0b52275d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3ODY2OTk5MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white">
          <div className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-6 flex gap-2">
            <Link to="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-white">Tin tức</span>
          </div>

          <h1 className="text-5xl font-bold mb-4">Tin Tức & Sự Kiện</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Cập nhật những thông tin mới nhất về dự án hạ tầng điện, công nghệ thi công và các tiêu chuẩn kỹ thuật hàng đầu từ Tuấn Lộc.
          </p>
        </div>
      </section>

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex gap-4 overflow-x-auto">
          <button className="bg-[#b71508] text-white font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full shrink-0">Tất cả</button>
          <button className="bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-gray-50 shrink-0">Dự án mới</button>
          <button className="bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-gray-50 shrink-0">Công nghệ</button>
          <button className="bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-gray-50 shrink-0">ISO</button>
          <button className="bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-gray-50 shrink-0">Nội bộ</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 w-full">
        {/* Featured News — static */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-12 group cursor-pointer flex flex-col md:flex-row hover:shadow-lg transition-shadow">
          <div className="md:w-1/2 relative overflow-hidden h-[400px]">
            <img src="https://images.unsplash.com/photo-1776251896448-a5eb8ae25e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJzdGF0aW9uJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzc4NjcwMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Featured" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute top-6 left-6 bg-[#b71508] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
              NỔI BẬT
            </div>
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-4">
               <span className="text-[#b71508] text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-red-50 rounded-sm">DỰ ÁN MỚI</span>
               <span className="text-gray-500 text-sm">15 Tháng 10, 2024</span>
             </div>
             <h2 className="text-3xl font-bold text-[#111827] mb-6 leading-tight group-hover:text-[#b71508] transition-colors">
               Hoàn tất giai đoạn 1 dự án đường dây 500kV mạch 3 khu vực miền Trung
             </h2>
             <p className="text-gray-600 mb-8 leading-relaxed">
               Tuấn Lộc đã hoàn thành xuất sắc các hạng mục thi công lắp đặt trạm biến áp và kéo dây cho phân đoạn trọng điểm, đảm bảo đúng tiến độ cam kết với EVN và các tiêu chuẩn an toàn kỹ thuật khắt khe nhất.
             </p>
             <div className="text-[#b71508] font-bold text-sm uppercase tracking-wider flex items-center gap-2">
               XEM CHI TIẾT <ArrowRight size={16} />
             </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {news.map((item) => (
            <div key={item._id} className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#111827] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                  {item.badge}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-gray-500 text-xs mb-3">{formatDate(item.date)}</div>
                <h3 className="text-xl font-bold text-[#111827] mb-4 group-hover:text-[#b71508] transition-colors line-clamp-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                  {item.content}
                </p>
                <div className="text-[#b71508] font-bold text-xs uppercase tracking-wider flex items-center gap-1 mt-auto">
                  Đọc thêm <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-8">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
              &lt;
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-[#b71508] text-white rounded font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-[#111827] font-medium hover:bg-gray-50">2</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-[#111827] font-medium hover:bg-gray-50">3</button>
            <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-[#111827] font-medium hover:bg-gray-50">12</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-[#111827] font-medium hover:bg-gray-50">
              &gt;
            </button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-[#3b4b8a] text-white py-20 px-8 w-full">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-4">Đăng ký nhận tin tức kỹ thuật</h3>
            <p className="text-blue-200">
              Nhận thông tin cập nhật hàng tuần về các dự án tiêu biểu, giải pháp kỹ thuật và xu hướng năng lượng mới nhất.
            </p>
          </div>
          <div className="flex-1 w-full flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Địa chỉ email của bạn"
              className="w-full bg-[#2a366b] border border-[#4d5e9f] rounded p-4 text-white placeholder-blue-300 outline-none focus:border-white"
            />
            <button className="bg-[#b71508] text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors whitespace-nowrap">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
