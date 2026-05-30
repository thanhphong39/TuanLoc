import { useState } from "react";
import { login } from "../lib/api";
import { Zap, LogIn, Package, FileText, MessageSquare } from "lucide-react";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await login(form.username, form.password);
      if (!res.token) throw new Error();
      localStorage.setItem("token", res.token);
      onLogin();
    } catch {
      setError("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* LEFT — branding */}
      <div className="login-left">
        <div className="login-brand">
          <div className="login-brand-icon">
            <Zap size={28} color="#fff" />
          </div>
          <h1>Tuấn Lộc Admin</h1>
          <p>Hệ thống quản trị nội dung website<br />Tuấn Lộc Điện Công Nghiệp</p>

          <div className="login-features">
            <div className="login-feature">
              <Package size={16} style={{ color: "#f87171", flexShrink: 0 }} />
              <span>Quản lý sản phẩm & hình ảnh</span>
            </div>
            <div className="login-feature">
              <FileText size={16} style={{ color: "#f87171", flexShrink: 0 }} />
              <span>Đăng & chỉnh sửa bài viết tin tức</span>
            </div>
            <div className="login-feature">
              <MessageSquare size={16} style={{ color: "#f87171", flexShrink: 0 }} />
              <span>Xem yêu cầu liên hệ từ khách hàng</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — form */}
      <div className="login-right">
        <div className="login-box">
          <div className="login-box-header">
            <h2>Đăng nhập</h2>
            <p>Nhập thông tin tài khoản admin để tiếp tục</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={form.username}
                onChange={(e) => setForm((p) => ({ ...p, username: e.target.value }))}
                placeholder="tuanlocco.hcm@gmail.com"
                required
                autoFocus
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                placeholder="••••••••"
                required
              />
            </div>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? (
                "Đang đăng nhập..."
              ) : (
                <><LogIn size={16} /> Đăng nhập</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
