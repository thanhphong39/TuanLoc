import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Package, FileText, MessageSquare,
  LogOut, ExternalLink, Zap
} from "lucide-react";

const navItems = [
  { to: "/", label: "Tổng quan", icon: LayoutDashboard, end: true },
  { to: "/products", label: "Sản phẩm", icon: Package },
  { to: "/posts", label: "Bài viết", icon: FileText },
  { to: "/contacts", label: "Liên hệ", icon: MessageSquare },
];

const PAGE_TITLES = {
  "/": "Tổng quan",
  "/products": "Quản lý sản phẩm",
  "/posts": "Quản lý bài viết",
  "/contacts": "Quản lý liên hệ",
};

export default function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  const pageTitle = PAGE_TITLES[location.pathname] ?? "Admin";

  return (
    <div className="layout">
      {/* ── SIDEBAR ── */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <Zap size={20} color="#fff" />
          </div>
          <div className="sidebar-logo-text">
            <h1>Tuấn Lộc</h1>
            <span>Admin Panel</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-section">
            <div className="sidebar-section-label">Menu chính</div>
          </div>
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
            >
              <Icon size={17} className="nav-icon" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noreferrer"
            className="topbar-site-btn"
            style={{ marginBottom: 10, display: "flex" }}
          >
            <ExternalLink size={13} /> Xem website
          </a>
          <button className="logout-btn" onClick={logout}>
            <LogOut size={16} /> Đăng xuất
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="main">
        <div className="topbar">
          <div className="topbar-left">
            <span className="topbar-title">{pageTitle}</span>
          </div>
          <div className="topbar-right">
            <div className="topbar-user">
              <div className="topbar-avatar">A</div>
              <span>Admin</span>
            </div>
          </div>
        </div>

        <div className="content">{children}</div>
      </div>
    </div>
  );
}
