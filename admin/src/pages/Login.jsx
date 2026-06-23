import { useState, useRef } from "react";
import { login } from "../lib/api";
import {
  LogIn, Package, FileText, MessageSquare,
  Eye, EyeOff, User, Lock, CheckCircle, AlertCircle,
  Shield, BarChart3, Loader2
} from "lucide-react";

/* ── Toast notification ── */
function Toast({ toasts }) {
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          {t.type === "success" ? (
            <CheckCircle size={16} />
          ) : (
            <AlertCircle size={16} />
          )}
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Field error ── */
function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p className="field-error">
      <AlertCircle size={12} />
      {msg}
    </p>
  );
}

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [touched, setTouched] = useState({});
  const toastId = useRef(0);

  /* ── Push toast ── */
  const pushToast = (message, type = "error") => {
    const id = ++toastId.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  };

  /* ── Validate single field ── */
  const validateField = (name, value) => {
    if (name === "username") {
      if (!value.trim()) return "Tên đăng nhập không được để trống";
      if (value.trim().length < 3) return "Tên đăng nhập ít nhất 3 ký tự";
    }
    if (name === "password") {
      if (!value) return "Mật khẩu không được để trống";
      if (value.length < 6) return "Mật khẩu ít nhất 6 ký tự";
    }
    return "";
  };

  /* ── Validate all ── */
  const validateAll = () => {
    const errs = {};
    const fields = ["username", "password"];
    fields.forEach((f) => {
      const msg = validateField(f, form[f]);
      if (msg) errs[f] = msg;
    });
    return errs;
  };

  /* ── Re-validate on change if field already touched ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (touched[name]) {
      const msg = validateField(name, value);
      setErrors((p) => ({ ...p, [name]: msg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    const msg = validateField(name, value);
    setErrors((p) => ({ ...p, [name]: msg }));
  };

  /* ── Submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ username: true, password: true });
    const errs = validateAll();
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      pushToast("Vui lòng kiểm tra lại thông tin đăng nhập", "error");
      return;
    }

    setLoading(true);
    try {
      const res = await login(form.username.trim(), form.password);
      if (!res.token) throw new Error("no_token");
      localStorage.setItem("token", res.token);
      pushToast("Đăng nhập thành công! Đang chuyển hướng...", "success");
      setTimeout(() => onLogin(), 800);
    } catch (err) {
      const status = err?.status;
      const msg =
        status === 401 || status === 403
          ? "Tên đăng nhập hoặc mật khẩu không chính xác"
          : status === 429
          ? "Quá nhiều lần thử. Vui lòng đợi vài phút"
          : err?.message && !err.message.startsWith("HTTP")
          ? err.message
          : "Không thể kết nối đến máy chủ. Thử lại sau";
      pushToast(msg, "error");
      setErrors({ password: "Thông tin đăng nhập không đúng" });
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: Package,     label: "Quản lý sản phẩm & hình ảnh" },
    { icon: FileText,    label: "Đăng & chỉnh sửa bài viết tin tức" },
    { icon: MessageSquare, label: "Xem yêu cầu liên hệ từ khách hàng" },
    { icon: BarChart3,   label: "Thống kê & báo cáo hệ thống" },
  ];

  return (
    <>
      <Toast toasts={toasts} />

      <div className="login-page">
        {/* ── LEFT branding ── */}
        <div className="login-left">
          <div className="login-left-inner">
            {/* Logo */}
            <div className="login-logo">
              <img src="/Logo.png" alt="Tuấn Lộc" className="login-logo-img" />
              <div>
                <h1 className="login-logo-title">Tuấn Lộc Admin</h1>
                <p className="login-logo-sub">Điện Công Nghiệp</p>
              </div>
            </div>

            {/* Headline */}
            <div className="login-headline">
              <h2>Quản trị hệ thống<br />chuyên nghiệp</h2>
              <p>Nền tảng quản lý nội dung toàn diện dành riêng cho quản trị viên Tuấn Lộc.</p>
            </div>

            {/* Features */}
            <ul className="login-features">
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="login-feature">
                  <span className="login-feature-icon">
                    <Icon size={14} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            {/* Badge */}
            <div className="login-badge">
              <Shield size={13} />
              Bảo mật SSL · Mã hóa đầu cuối
            </div>
          </div>

          {/* Decorative circles */}
          <div className="login-deco login-deco-1" />
          <div className="login-deco login-deco-2" />
          <div className="login-deco login-deco-3" />
        </div>

        {/* ── RIGHT form ── */}
        <div className="login-right">
          <div className="login-card">
            {/* Mobile-only brand bar */}
            <div className="login-mobile-brand">
              <img src="/Logo.png" alt="Tuấn Lộc" className="login-mobile-brand-img" />
              <span>Tuấn Lộc Admin</span>
            </div>

            {/* Header */}
            <div className="login-card-header">
              <div className="login-card-icon">
                <LogIn size={20} color="#b71508" />
              </div>
              <h2>Đăng nhập</h2>
              <p>Nhập thông tin xác thực để truy cập hệ thống quản trị</p>
            </div>

            {/* Form */}
            <form className="login-form" onSubmit={handleSubmit} noValidate>
              {/* Username */}
              <div className={`lf-group ${errors.username && touched.username ? "has-error" : ""} ${!errors.username && touched.username && form.username ? "has-success" : ""}`}>
                <label htmlFor="lf-username">Tên đăng nhập</label>
                <div className="lf-input-wrap">
                  <span className="lf-icon lf-icon-left"><User size={15} /></span>
                  <input
                    id="lf-username"
                    name="username"
                    type="text"
                    value={form.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Nhập tên đăng nhập"
                    autoFocus
                    autoComplete="username"
                    disabled={loading}
                  />
                  {!errors.username && touched.username && form.username && (
                    <span className="lf-icon lf-icon-right lf-valid">
                      <CheckCircle size={15} />
                    </span>
                  )}
                  {errors.username && touched.username && (
                    <span className="lf-icon lf-icon-right lf-invalid">
                      <AlertCircle size={15} />
                    </span>
                  )}
                </div>
                <FieldError msg={touched.username ? errors.username : ""} />
              </div>

              {/* Password */}
              <div className={`lf-group ${errors.password && touched.password ? "has-error" : ""} ${!errors.password && touched.password && form.password ? "has-success" : ""}`}>
                <label htmlFor="lf-password">Mật khẩu</label>
                <div className="lf-input-wrap">
                  <span className="lf-icon lf-icon-left"><Lock size={15} /></span>
                  <input
                    id="lf-password"
                    name="password"
                    type={showPw ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Nhập mật khẩu"
                    autoComplete="current-password"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="lf-pw-toggle"
                    onClick={() => setShowPw((v) => !v)}
                    tabIndex={-1}
                    aria-label={showPw ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  >
                    {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                <FieldError msg={touched.password ? errors.password : ""} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="lf-submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="spin" />
                    Đang xác thực...
                  </>
                ) : (
                  <>
                    <LogIn size={16} />
                    Đăng nhập hệ thống
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="login-card-footer">
              Chỉ dành cho quản trị viên được ủy quyền
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
