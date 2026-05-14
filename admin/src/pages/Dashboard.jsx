import { useState, useEffect } from "react";
import { getProducts, getPosts, getContacts } from "../lib/api";

export default function Dashboard() {
  const [stats, setStats] = useState({ products: 0, posts: 0, contacts: 0 });

  useEffect(() => {
    Promise.all([
      getProducts(1).then((r) => r.total ?? 0).catch(() => 0),
      getPosts(1).then((r) => r.total ?? 0).catch(() => 0),
      getContacts(1).then((r) => r.total ?? 0).catch(() => 0),
    ]).then(([products, posts, contacts]) => setStats({ products, posts, contacts }));
  }, []);

  return (
    <div>
      <h2 className="page-heading">Tổng quan</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">📦 Sản phẩm</div>
          <div className="stat-value">{stats.products}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">📝 Bài viết</div>
          <div className="stat-value">{stats.posts}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">📬 Liên hệ</div>
          <div className="stat-value">{stats.contacts}</div>
        </div>
      </div>

      <div className="card">
        <div className="card-title" style={{ marginBottom: 12 }}>Hướng dẫn nhanh</div>
        <ul style={{ fontSize: 14, color: "#64748b", lineHeight: 2, paddingLeft: 20 }}>
          <li>Vào <strong>Sản phẩm</strong> để thêm / sửa / xóa sản phẩm với upload ảnh lên Cloudinary</li>
          <li>Vào <strong>Bài viết</strong> để quản lý tin tức & sự kiện</li>
          <li>Vào <strong>Liên hệ</strong> để xem và xóa các yêu cầu từ khách hàng</li>
        </ul>
      </div>
    </div>
  );
}
