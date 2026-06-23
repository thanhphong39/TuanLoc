import { useState, useEffect, useCallback } from "react";
import { Plus, Pencil, Trash2, X, Loader2, LogOut, Newspaper } from "lucide-react";

const BASE = (import.meta.env.VITE_API_URL || "https://tuanloc-backend.vercel.app").replace(/\/+$/, "");

interface Post {
  _id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  badge: string;
}

const BADGES = ["CÔNG NGHỆ", "DỰ ÁN MỚI", "ISO", "NỘI BỘ"];

const defaultForm = { title: "", content: "", image: "", badge: "CÔNG NGHỆ", date: "" };

export function AdminNews() {
  const [token, setToken] = useState(() => localStorage.getItem("admin_token") || "");
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState(defaultForm);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fetchPosts = useCallback(async () => {
    setPostsLoading(true);
    try {
      const res = await fetch(`${BASE}/api/posts?limit=50`, { cache: "no-store" });
      const data = await res.json();
      setPosts(data.posts || []);
    } catch {
      /* ignore */
    } finally {
      setPostsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) fetchPosts();
  }, [token, fetchPosts]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      const res = await fetch(`${BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: loginForm.username, password: loginForm.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Sai thông tin đăng nhập");
      localStorage.setItem("admin_token", data.token);
      setToken(data.token);
    } catch (err: unknown) {
      setLoginError(err instanceof Error ? err.message : "Đã có lỗi xảy ra");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken("");
  };

  const openCreate = () => {
    setEditId(null);
    setForm(defaultForm);
    setImageFile(null);
    setShowForm(true);
  };

  const openEdit = (post: Post) => {
    setEditId(post._id);
    setForm({ title: post.title, content: post.content, image: post.image, badge: post.badge, date: post.date?.split("T")[0] || "" });
    setImageFile(null);
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("content", form.content);
      fd.append("badge", form.badge);
      if (form.date) fd.append("date", form.date);
      if (imageFile) fd.append("image", imageFile);
      else if (form.image) fd.append("image", form.image);

      const url = editId ? `${BASE}/api/posts/${editId}` : `${BASE}/api/posts`;
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.message || "Lỗi lưu bài viết");
      }
      await fetchPosts();
      setShowForm(false);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Lỗi");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Xác nhận xóa bài viết này?")) return;
    setDeleteId(id);
    try {
      await fetch(`${BASE}/api/posts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchPosts();
    } catch {
      alert("Xóa thất bại");
    } finally {
      setDeleteId(null);
    }
  };

  // ─── Login Screen ───
  if (!token) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center relative overflow-hidden font-sans px-4 sm:px-0">
        {/* Background decoration */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] sm:w-[40%] h-[40%] bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] sm:w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 sm:p-8 w-full max-w-[420px] relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#b71508] to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-red-500/30">
              <Newspaper className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 text-center">Quản Trị Hệ Thống</h1>
            <p className="text-xs sm:text-sm text-gray-500 text-center">Đăng nhập để quản lý nội dung website</p>
          </div>

          <form 
            onSubmit={(e) => {
              if (!loginForm.username.trim() || !loginForm.password.trim()) {
                e.preventDefault();
                setLoginError("Vui lòng điền đầy đủ tên đăng nhập và mật khẩu.");
                return;
              }
              if (loginForm.password.length < 6) {
                e.preventDefault();
                setLoginError("Mật khẩu phải có ít nhất 6 ký tự.");
                return;
              }
              handleLogin(e);
            }} 
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Tên đăng nhập</label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => {
                  setLoginForm((f) => ({ ...f, username: e.target.value }));
                  if (loginError) setLoginError("");
                }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm outline-none focus:border-[#b71508] focus:ring-4 focus:ring-red-50 transition-all bg-gray-50/50 hover:bg-white"
                placeholder="Nhập tên đăng nhập"
              />
            </div>
            <div>
              <label className="block text-[10px] sm:text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Mật khẩu</label>
              <input
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => {
                  setLoginForm((f) => ({ ...f, password: e.target.value }));
                  if (loginError) setLoginError("");
                }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 sm:py-3.5 text-sm outline-none focus:border-[#b71508] focus:ring-4 focus:ring-red-50 transition-all bg-gray-50/50 hover:bg-white"
                placeholder="••••••••"
              />
            </div>
            {loginError && (
              <div className="bg-red-50 text-red-600 text-xs sm:text-sm px-4 py-3 rounded-xl border border-red-100 flex items-start gap-2 animate-[pulse_0.5s_ease-in-out]">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-1.5" />
                <span className="leading-snug">{loginError}</span>
              </div>
            )}
            <button
              type="submit"
              disabled={loginLoading}
              className="mt-2 bg-gradient-to-r from-[#b71508] to-red-600 text-white font-bold py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-red-500/30 transition-all disabled:opacity-70 disabled:hover:shadow-none flex items-center justify-center gap-2"
            >
              {loginLoading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" /> : "Đăng nhập hệ thống"}
            </button>
          </form>

          <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-[10px] sm:text-xs text-gray-400">© 2024 Tuấn Lộc. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }

  // ─── Admin Panel ───
  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#b71508] rounded-xl flex items-center justify-center">
            <Newspaper className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold text-gray-900">Quản lý Tin Tức</h1>
            <p className="text-xs text-gray-400">Tuấn Lộc Admin</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={openCreate}
            className="flex items-center gap-2 bg-[#b71508] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg hover:bg-red-800 transition-colors"
          >
            <Plus size={15} /> Thêm bài viết
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-500 hover:text-red-600 font-medium text-sm transition-colors px-3 py-2 rounded-lg hover:bg-red-50"
          >
            <LogOut size={15} /> Đăng xuất
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {postsLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-[#b71508] animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-800">{posts.length} bài viết</h2>
            </div>
            {posts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <Newspaper className="w-12 h-12 mb-3 opacity-30" />
                <p>Chưa có bài viết nào. Hãy tạo bài viết đầu tiên!</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {posts.map((post) => (
                  <div key={post._id} className="flex gap-4 items-start px-6 py-4 hover:bg-gray-50/50 transition-colors">
                    <img
                      src={post.image || "/placeholder.jpg"}
                      alt={post.title}
                      className="w-20 h-14 object-cover rounded-lg flex-shrink-0 bg-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {post.badge && (
                          <span className="text-[10px] font-bold bg-[#b71508]/10 text-[#b71508] px-2 py-0.5 rounded uppercase tracking-wide">
                            {post.badge}
                          </span>
                        )}
                        <span className="text-xs text-gray-400">{post.date ? new Date(post.date).toLocaleDateString("vi-VN") : ""}</span>
                      </div>
                      <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{post.title}</h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{post.content}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => openEdit(post)}
                        className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        title="Chỉnh sửa"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(post._id)}
                        disabled={deleteId === post._id}
                        className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-40"
                        title="Xóa"
                      >
                        {deleteId === post._id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">{editId ? "Chỉnh sửa bài viết" : "Thêm bài viết mới"}</h2>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave} className="px-6 py-5 flex flex-col gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tiêu đề *</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b71508] focus:ring-2 focus:ring-red-50"
                  placeholder="Nhập tiêu đề bài viết..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Nội dung *</label>
                <textarea
                  required
                  rows={6}
                  value={form.content}
                  onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b71508] focus:ring-2 focus:ring-red-50 resize-none"
                  placeholder="Nhập nội dung bài viết..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Danh mục</label>
                  <select
                    value={form.badge}
                    onChange={(e) => setForm((f) => ({ ...f, badge: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b71508] focus:ring-2 focus:ring-red-50 appearance-none bg-white"
                  >
                    {BADGES.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Ngày đăng</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b71508] focus:ring-2 focus:ring-red-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Ảnh đại diện</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#b71508] file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:bg-[#b71508]/10 file:text-[#b71508] file:font-bold file:text-xs file:uppercase"
                />
                {(imageFile || form.image) && !imageFile && (
                  <div className="mt-3">
                    <img src={form.image} alt="preview" className="h-24 w-full object-cover rounded-lg" />
                  </div>
                )}
                {imageFile && (
                  <div className="mt-3">
                    <img src={URL.createObjectURL(imageFile)} alt="preview" className="h-24 w-full object-cover rounded-lg" />
                  </div>
                )}
                <div className="mt-2">
                  <label className="block text-xs text-gray-400 mb-1">Hoặc nhập URL ảnh:</label>
                  <input
                    type="url"
                    value={form.image}
                    onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#b71508] focus:ring-2 focus:ring-red-50"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-3 rounded-lg border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 rounded-lg bg-[#b71508] text-white font-bold text-sm uppercase tracking-wider hover:bg-red-800 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  {editId ? "Lưu thay đổi" : "Đăng bài viết"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
