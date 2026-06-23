import { useState, useEffect } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router";
import { getPosts, formatDate, type ApiPost } from "../../lib/api";

const BADGE_FILTERS = [
  { label: "Tất cả", value: "" },
  { label: "Dự án mới", value: "DỰ ÁN MỚI" },
  { label: "Công nghệ", value: "CÔNG NGHỆ" },
  { label: "ISO", value: "ISO" },
  { label: "Nội bộ", value: "NỘI BỘ" },
];

const LIMIT = 9;

export function News() {
  const [news, setNews] = useState<ApiPost[]>([]);
  const [total, setTotal] = useState(0);
  const [activeBadge, setActiveBadge] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    setLoading(true);
    const params: Record<string, string> = { limit: String(LIMIT), page: String(page) };
    if (activeBadge) params.badge = activeBadge;
    getPosts(params)
      .then((res) => {
        setNews(res.posts);
        setTotal(res.total || 0);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [activeBadge, page]);

  const handleBadgeClick = (badge: string) => {
    setActiveBadge(badge);
    setPage(1);
  };

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

          <h1 className="text-5xl font-bold mb-4">Tin Tức &amp; Sự Kiện</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Cập nhật những thông tin mới nhất về dự án hạ tầng điện, công nghệ thi công và các tiêu chuẩn kỹ thuật hàng đầu từ Tuấn Lộc.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex gap-3 overflow-x-auto">
          {BADGE_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => handleBadgeClick(f.value)}
              className={`shrink-0 font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full transition-colors ${
                activeBadge === f.value
                  ? "bg-[#b71508] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 w-full min-h-[400px]">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-[#b71508] animate-spin" />
          </div>
        ) : news.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 mb-12">
            {news.map((item) => (
              <Link
                key={item._id}
                to={`/news/${item._id}`}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative h-32 md:h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {item.badge && (
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm text-[#111827] text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 md:px-3 md:py-1 rounded-sm shadow-sm">
                      {item.badge}
                    </div>
                  )}
                </div>
                <div className="p-3 md:p-6 flex flex-col flex-1">
                  <div className="text-gray-500 text-[10px] md:text-xs mb-1 md:mb-3">{formatDate(item.date)}</div>
                  <h3 className="text-xs md:text-lg font-bold text-[#111827] mb-2 md:mb-3 group-hover:text-[#b71508] transition-colors line-clamp-2 md:line-clamp-3 flex-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[10px] md:text-sm mb-2 md:mb-5 line-clamp-2 hidden md:block">
                    {item.content}
                  </p>
                  <div className="text-[#b71508] font-bold text-[10px] md:text-xs uppercase tracking-wider flex items-center gap-1 mt-auto">
                    Đọc thêm <ArrowRight size={12} className="md:w-3.5 md:h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 2v6h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Chưa có bài viết nào</h3>
            <p className="text-gray-500 max-w-md">Hiện tại chưa có bài viết hoặc sự kiện nào trong danh mục này. Vui lòng quay lại sau.</p>
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-8">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
              <button
                key={pg}
                onClick={() => setPage(pg)}
                className={`w-10 h-10 flex items-center justify-center rounded font-bold ${
                  pg === page ? "bg-[#b71508] text-white" : "border border-gray-200 text-[#111827] hover:bg-gray-50"
                }`}
              >
                {pg}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &gt;
            </button>
          </div>
        )}
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
