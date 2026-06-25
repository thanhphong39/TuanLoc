import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Tag, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { getPosts, formatDate, type ApiPost } from "../../lib/api";

const BASE = (import.meta.env.VITE_API_URL || "https://tuanloc-backend.vercel.app").replace(/\/+$/, "");

export function NewsDetails() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<ApiPost | null>(null);
  const [related, setRelated] = useState<ApiPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setNotFound(false);

    fetch(`${BASE}/api/posts/${id}`, { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error("not found");
        return r.json();
      })
      .then((data: ApiPost) => {
        setPost(data);
        // Fetch related posts
        return getPosts({ limit: "4" });
      })
      .then((res) => {
        setRelated(res.posts.filter((p) => p._id !== id).slice(0, 3));
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#f8fafc]">
        <div className="flex flex-col items-center gap-4 text-gray-400">
          <div className="w-12 h-12 border-4 border-[#b71508] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-medium">Đang tải bài viết...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#f8fafc] gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Không tìm thấy bài viết</h2>
        <p className="text-gray-500">Bài viết này không tồn tại hoặc đã bị xóa.</p>
        <Link to="/news" className="flex items-center gap-2 text-[#b71508] font-bold hover:underline">
          <ArrowLeft size={16} /> Quay lại trang tin tức
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-6 md:px-8 pb-10 text-white">
          {post.badge && (
            <div className="inline-block bg-[#b71508] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-4">
              {post.badge}
            </div>
          )}
          <h1 className="text-2xl md:text-4xl font-bold leading-tight drop-shadow-lg">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 md:px-8 py-10">
        {/* Breadcrumb & Meta */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-6">
            <Link to="/" className="hover:text-[#b71508] transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#b71508] transition-colors">Tin tức</Link>
            <span>/</span>
            <span className="text-gray-600 font-medium line-clamp-1">{post.title}</span>
          </div>

          <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#b71508]" />
              {formatDate(post.date)}
            </span>
            {post.badge && (
              <span className="flex items-center gap-1.5">
                <Tag size={14} className="text-[#b71508]" />
                {post.badge}
              </span>
            )}
          </div>
        </motion.div>

        {/* Article Body */}
        <motion.article
          initial="hidden" animate="visible" variants={fadeUp}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10 mb-10"
        >
          <div className="prose prose-gray max-w-none">
            {post.content.split("\n").map((para, i) =>
              para.trim() ? (
                <p key={i} className="text-gray-700 leading-relaxed mb-4 text-base md:text-lg">
                  {para}
                </p>
              ) : null
            )}
          </div>
        </motion.article>

        {/* Back & CTA */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mb-14"
        >
          <Link
            to="/news"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft size={16} /> Quay lại tin tức
          </Link>
          <a
            href="tel:0967789159"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#b71508] text-white font-bold text-sm hover:bg-red-800 transition-colors"
          >
            <PhoneCall size={16} /> Liên hệ tư vấn: 0967 789 159
          </a>
        </motion.div>

        {/* Related Posts */}
        {related.length > 0 && (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-xl font-bold text-[#111827] mb-6 border-l-4 border-[#b71508] pl-4">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item._id}
                  to={`/news/${item._id}`}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-gray-400 text-xs mb-2">{formatDate(item.date)}</div>
                    <h3 className="font-bold text-sm text-[#111827] line-clamp-2 group-hover:text-[#b71508] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
