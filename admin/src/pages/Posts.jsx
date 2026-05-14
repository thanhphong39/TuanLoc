import { useState, useEffect } from "react";
import { getPosts, createPost, updatePost, deletePost, getPost } from "../lib/api";

const EMPTY = { title: "", content: "", badge: "", date: "" };

export default function Posts() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const totalPages = Math.ceil(total / 10) || 1;

  const load = () =>
    getPosts(page).then((r) => { setItems(r.posts); setTotal(r.total); });

  useEffect(() => { load(); }, [page]);

  const showAlert = (msg, type = "success") => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const openCreate = () => { setForm(EMPTY); setImage(null); setEditId(null); setModal("create"); };

  const openEdit = async (id) => {
    const p = await getPost(id);
    setForm({
      title: p.title,
      content: p.content,
      badge: p.badge,
      date: p.date ? p.date.slice(0, 10) : "",
    });
    setImage(null);
    setEditId(id);
    setModal("edit");
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
      showAlert(modal === "edit" ? "Đã cập nhật bài viết" : "Đã tạo bài viết");
    } catch {
      showAlert("Có lỗi xảy ra", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Xóa bài viết này?")) return;
    await deletePost(id);
    load();
    showAlert("Đã xóa bài viết");
  };

  const fmtDate = (d) => d ? new Date(d).toLocaleDateString("vi-VN") : "—";

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 className="page-heading" style={{ marginBottom: 0 }}>Bài viết</h2>
        <button className="btn btn-primary" onClick={openCreate}>+ Thêm bài viết</button>
      </div>

      {alert && <div className={`alert alert-${alert.type}`}>{alert.msg}</div>}

      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Ảnh</th><th>Tiêu đề</th><th>Badge</th><th>Ngày đăng</th><th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr><td colSpan={5} className="empty">Chưa có bài viết nào</td></tr>
              )}
              {items.map((p) => (
                <tr key={p._id}>
                  <td>
                    {p.image
                      ? <img src={p.image} className="td-img" alt={p.title} />
                      : <div className="td-img" style={{ background: "#f1f5f9" }} />}
                  </td>
                  <td style={{ maxWidth: 280 }}><strong>{p.title}</strong></td>
                  <td>{p.badge && <span className="badge badge-blue">{p.badge}</span>}</td>
                  <td>{fmtDate(p.date)}</td>
                  <td style={{ display: "flex", gap: 8 }}>
                    <button className="btn btn-edit btn-sm" onClick={() => openEdit(p._id)}>Sửa</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button className="page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>‹</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button key={i} className={`page-btn ${page === i + 1 ? "active" : ""}`} onClick={() => setPage(i + 1)}>{i + 1}</button>
            ))}
            <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>›</button>
          </div>
        )}
      </div>

      {modal && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="modal">
            <div className="modal-header">
              <span className="modal-title">{modal === "edit" ? "Sửa bài viết" : "Thêm bài viết"}</span>
              <button className="modal-close" onClick={() => setModal(null)}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group full">
                  <label>Tiêu đề *</label>
                  <input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label>Badge</label>
                  <input value={form.badge} onChange={e => setForm(p => ({ ...p, badge: e.target.value }))} placeholder="VD: TIN TỨC" />
                </div>
                <div className="form-group">
                  <label>Ngày đăng</label>
                  <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} />
                </div>
                <div className="form-group full">
                  <label>Nội dung *</label>
                  <textarea value={form.content} onChange={e => setForm(p => ({ ...p, content: e.target.value }))} required rows={6} />
                </div>
                <div className="form-group full">
                  <label>Ảnh bìa {modal === "edit" && "(để trống = giữ ảnh cũ)"}</label>
                  <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0] || null)} />
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setModal(null)}>Hủy</button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Đang lưu..." : "Lưu"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
