import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/", label: "Tổng quan", icon: "📊", end: true },
  { to: "/products", label: "Sản phẩm", icon: "📦" },
  { to: "/posts", label: "Bài viết", icon: "📝" },
  { to: "/contacts", label: "Liên hệ", icon: "📬" },
];

export default function Layout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1>Tuấn Lộc</h1>
          <span>Admin Dashboard</span>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={logout}>
            <span>🚪</span> Đăng xuất
          </button>
        </div>
      </aside>

      <div className="main">
        <div className="topbar">
          <span className="topbar-title">Quản trị nội dung</span>
          <span className="topbar-user">👤 Admin</span>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
