import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, getPosts, getContacts } from "../lib/api";
import { Package, FileText, MessageSquare, Plus, ArrowRight, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({ products: 0, posts: 0, contacts: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      getProducts(1).then((r) => r.total ?? 0).catch(() => 0),
      getPosts(1).then((r) => r.total ?? 0).catch(() => 0),
      getContacts(1).then((r) => r.total ?? 0).catch(() => 0),
    ]).then(([products, posts, contacts]) => {
      setStats({ products, posts, contacts });
      setLoading(false);
    });
  }, []);

  const statCards = [
    {
      label: "Tổng sản phẩm",
      value: stats.products,
      icon: Package,
      iconClass: "red",
      link: "/products",
      desc: "Sản phẩm đang hiển thị",
    },
    {
      label: "Bài viết",
      value: stats.posts,
      icon: FileText,
      iconClass: "blue",
      link: "/posts",
      desc: "Tin tức & sự kiện",
    },
    {
      label: "Liên hệ",
      value: stats.contacts,
      icon: MessageSquare,
      iconClass: "green",
      link: "/contacts",
      desc: "Yêu cầu từ khách hàng",
    },
  ];

  return (
    <div>
      {/* Welcome */}
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>
          Chào mừng trở lại 👋
        </h2>
        <p style={{ fontSize: 13, color: "var(--muted)" }}>
          Tổng quan hệ thống quản trị Tuấn Lộc Điện Công Nghiệp
        </p>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {statCards.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="stat-card"
              onClick={() => navigate(s.link)}
              style={{ cursor: "pointer" }}
            >
              <div className={`stat-icon ${s.iconClass}`}>
                <Icon size={22} />
              </div>
              <div className="stat-body" style={{ flex: 1 }}>
                <div className="stat-label">{s.label}</div>
                <div className="stat-value">
                  {loading ? (
                    <span style={{ fontSize: 16, color: "var(--muted)" }}>…</span>
                  ) : s.value}
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{s.desc}</div>
              </div>
              <ArrowRight size={16} style={{ color: "var(--muted)", flexShrink: 0 }} />
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="card" style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <TrendingUp size={16} style={{ color: "var(--primary)" }} />
          <span className="card-title">Thao tác nhanh</span>
        </div>
        <div className="quick-grid">
          <div className="quick-card" onClick={() => navigate("/products")}>
            <div className="quick-card-icon" style={{ background: "var(--primary-lt)" }}>
              <Plus size={18} style={{ color: "var(--primary)" }} />
            </div>
            <div className="quick-card-title">Thêm sản phẩm</div>
            <div className="quick-card-desc">Đăng sản phẩm mới lên website</div>
          </div>
          <div className="quick-card" onClick={() => navigate("/posts")}>
            <div className="quick-card-icon" style={{ background: "#dbeafe" }}>
              <Plus size={18} style={{ color: "#2563eb" }} />
            </div>
            <div className="quick-card-title">Viết bài mới</div>
            <div className="quick-card-desc">Đăng tin tức hoặc sự kiện</div>
          </div>
          <div className="quick-card" onClick={() => navigate("/contacts")}>
            <div className="quick-card-icon" style={{ background: "#dcfce7" }}>
              <MessageSquare size={18} style={{ color: "#16a34a" }} />
            </div>
            <div className="quick-card-title">Xem liên hệ</div>
            <div className="quick-card-desc">Kiểm tra yêu cầu từ khách</div>
          </div>
        </div>
      </div>

      {/* Guide */}
      <div className="card">
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <FileText size={16} style={{ color: "var(--accent)" }} />
          <span className="card-title">Hướng dẫn sử dụng</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { icon: Package, color: "var(--primary)", text: "Sản phẩm — Thêm/sửa/xóa sản phẩm, upload ảnh lên Cloudinary, đặt badge và danh mục" },
            { icon: FileText, color: "#2563eb", text: "Bài viết — Quản lý tin tức, sự kiện, cập nhật thông tin công ty" },
            { icon: MessageSquare, color: "#16a34a", text: "Liên hệ — Xem thông tin và yêu cầu tư vấn từ khách hàng gửi qua form trên website" },
          ].map(({ icon: Icon, color, text }) => (
            <div key={text} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: color + "18",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={14} style={{ color }} />
              </div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, paddingTop: 4 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
