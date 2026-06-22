import { useState, useEffect } from "react";
import { getPosts, createPost, updatePost, deletePost, getPost } from "../lib/api";
import { Plus, Pencil, Trash2, FileText, CheckCircle, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";

const EMPTY = { title: "", content: "", badge: "", date: "" };

export default function Posts() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const totalPages = Math.ceil(total / 10) || 1;

  const load = () =>
    getPosts(page).then((r) => { setItems(r.posts); setTotal(r.total); });

  useEffect(() => { load(); }, [page]);

  const showAlert = (msg, type = "success") => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3500);
  };

  const openCreate = () => {
    setForm(EMPTY); setImage(null); setPreview(null);
    setEditId(null); setModal("create");
  };

  const openEdit = async (id) => {
    const p = await getPost(id);
    setForm({
      title: p.title, content: p.content,
      badge: p.badge || "", date: p.date ? p.date.slice(0, 10) : "",
    });
    setImage(null); setPreview(p.image || null);
    setEditId(id); setModal("edit");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("content", form.content);
      fd.append("badge", form.badge);
      if (form.date) fd.append("date", form.date);
      if (image) fd.append("image", image);

      if (modal === "edit") await updatePost(editId, fd);
      else await createPost(fd);

      setModal(null);
      load();
      showAlert(modal === "edit" ? "Đã cập nhật bài viết!" : "Đã đăng bài viết mới!");
    } catch {
      showAlert("Có lỗi xảy ra. Vui lòng thử lại.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Xóa bài viết "${title}"?`)) return;
    try {
      await deletePost(id);
      load();
      showAlert("Đã xóa bài viết.");
    } catch {
      showAlert("Xóa thất bại. Vui lòng thử lại.", "error");
    }
  };

  const fmtDate = (d) => d ? new Date(d).toLocaleDateString("vi-VN") : "—";
  const f = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div>
      <div className="page-header">
        <div className="page-header-left">
          <h2>Bài viết</h2>
          <p>{total} bài viết đã đăng</p>
        </div>
        <button className="btn btn-primary" onClick={openCreate}>
          <Plus size={16} /> Thêm bài viết
        </button>
      </div>

      {alert && (
        <div className={`alert alert-${alert.type}`}>
          {alert.type === "success" ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
          {alert.msg}
        </div>
      )}

      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ width: 64 }}>Ảnh</th>
                <th>Tiêu đề</th>
                <th>Badge</th>
                <th>Ngày đăng</th>
                <th style={{ width: 110 }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={5}>
                    <div className="empty">
                      <div className="empty-icon"><FileText size={40} /></div>
                      Chưa có bài viết nào
                    </div>
                  </td>
                </tr>
              )}
              {items.map((p) => (
                <tr key={p._id}>
                  <td>
                    {p.image
                      ? <img src={p.image} className="td-img" alt={p.title} />
                      : <div className="td-img-placeholder" />}
                  </td>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2, maxWidth: 320, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {p.title}
                    </div>
                    {p.content && (
                      <div style={{ fontSize: 11, color: "var(--muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 320 }}>
                        {p.content.slice(0, 90)}…
                      </div>
                    )}
                  </td>
                  <td>
                    {p.badge
                      ? <span className="badge badge-blue">{p.badge}</span>
                      : <span style={{ color: "#cbd5e1", fontSize: 12 }}>—</span>}
                  </td>
                  <td style={{ fontSize: 12, color: "var(--muted)", whiteSpace: "nowrap" }}>{fmtDate(p.date)}</td>
                  <td>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button className="btn btn-edit btn-sm btn-icon" onClick={() => openEdit(p._id)} title="Sửa">
                        <Pencil size={14} />
                      </button>
                      <button className="btn btn-danger btn-sm btn-icon" onClick={() => handleDelete(p._id, p.title)} title="Xóa">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button className="page-btn" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              <ChevronLeft size={15} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} className={`page-btn ${page === i + 1 ? "active" : ""}`} onClick={() => setPage(i + 1)}>
                {i + 1}
              </button>
            ))}
            <button className="page-btn" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
              <ChevronRight size={15} />
            </button>
          </div>
        )}
      </div>

      {modal && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="modal">
            <div className="modal-header">
              <div>
                <div className="modal-title">
                  {modal === "edit" ? "Chỉnh sửa bài viết" : "Thêm bài viết mới"}
                </div>
                <div className="modal-title-sub">
                  {modal === "edit" ? "Cập nhật nội dung bài viết" : "Điền thông tin để đăng bài lên website"}
                </div>
              </div>
              <button className="modal-close" onClick={() => setModal(null)}>×</button>
            </div>
            <div className="modal-divider" />
            <form onSubmit={handleSubmit}>
              <div className="form-grid" style={{ marginBottom: 16 }}>
                <div className="form-group full">
                  <label>Tiêu đề *</label>
                  <input
                    value={form.title}
                    onChange={f("title")}
                    required
                    placeholder="VD: Tuấn Lộc ra mắt dòng sản phẩm mới..."
                  />
                </div>

                <div className="form-group">
                  <label>Badge / Nhãn</label>
                  <input
                    value={form.badge}
                    onChange={f("badge")}
                    placeholder="VD: TIN TỨC, SỰ KIỆN, KHUYẾN MÃI"
                  />
                </div>

                <div className="form-group">
                  <label>Ngày đăng</label>
                  <input
                    type="date"
                    value={form.date}
                    onChange={f("date")}
                  />
                </div>

                <div className="form-group full">
                  <label>Nội dung *</label>
                  <textarea
                    value={form.content}
                    onChange={f("content")}
                    required
                    rows={6}
                    placeholder="Nội dung bài viết..."
                  />
                </div>

                <div className="form-group full">
                  <label>Ảnh bìa {modal === "edit" && <span style={{ fontWeight: 400, textTransform: "none" }}>(để trống = giữ ảnh cũ)</span>}</label>
                  <div className="file-input-wrapper">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0] || null;
                        setImage(file);
                        setPreview(file ? URL.createObjectURL(file) : null);
                      }}
                    />
                  </div>
                  {preview && (
                    <img src={preview} alt="preview" style={{ marginTop: 8, height: 120, borderRadius: 8, objectFit: "cover", border: "1px solid var(--border)" }} />
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setModal(null)}>Hủy</button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Đang lưu..." : modal === "edit" ? "Cập nhật" : "Đăng bài"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
