import { useState, useEffect } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct, getProduct } from "../lib/api";

const EMPTY = { name: "", category: "", badge: "", description: "", features: "", supportPhone: "" };

export default function Products() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(null); // null | "create" | "edit"
  const [form, setForm] = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const totalPages = Math.ceil(total / 10) || 1;

  const load = () =>
    getProducts(page).then((r) => { setItems(r.products); setTotal(r.total); });

  useEffect(() => { load(); }, [page]);

  const showAlert = (msg, type = "success") => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3000);
  };

  const openCreate = () => { setForm(EMPTY); setImages([]); setEditId(null); setModal("create"); };

  const openEdit = async (id) => {
    const p = await getProduct(id);
    setForm({
      name: p.name, category: p.category, badge: p.badge,
      description: p.description, features: p.features.join("\n"),
      supportPhone: p.supportPhone,
    });
    setImages([]);
    setEditId(id);
    setModal("edit");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("category", form.category);
      fd.append("badge", form.badge);
      fd.append("description", form.description);
      fd.append("supportPhone", form.supportPhone);
      fd.append("features", JSON.stringify(form.features.split("\n").filter(Boolean)));
      images.forEach((f) => fd.append("images", f));

      if (modal === "edit") await updateProduct(editId, fd);
      else await createProduct(fd);

      setModal(null);
      load();
      showAlert(modal === "edit" ? "Đã cập nhật sản phẩm" : "Đã tạo sản phẩm");
    } catch {
      showAlert("Có lỗi xảy ra", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Xóa sản phẩm này?")) return;
    await deleteProduct(id);
    load();
    showAlert("Đã xóa sản phẩm");
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 className="page-heading" style={{ marginBottom: 0 }}>Sản phẩm</h2>
        <button className="btn btn-primary" onClick={openCreate}>+ Thêm sản phẩm</button>
      </div>

      {alert && <div className={`alert alert-${alert.type}`}>{alert.msg}</div>}

      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Ảnh</th><th>Tên sản phẩm</th><th>Danh mục</th><th>Badge</th><th>Hotline</th><th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr><td colSpan={6} className="empty">Chưa có sản phẩm nào</td></tr>
              )}
              {items.map((p) => (
                <tr key={p._id}>
                  <td>
                    {p.images[0]
                      ? <img src={p.images[0]} className="td-img" alt={p.name} />
                      : <div className="td-img" style={{ background: "#f1f5f9" }} />}
                  </td>
                  <td><strong>{p.name}</strong></td>
                  <td>{p.category}</td>
                  <td>{p.badge && <span className="badge">{p.badge}</span>}</td>
                  <td>{p.supportPhone}</td>
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
              <span className="modal-title">{modal === "edit" ? "Sửa sản phẩm" : "Thêm sản phẩm"}</span>
              <button className="modal-close" onClick={() => setModal(null)}>×</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Tên sản phẩm *</label>
                  <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label>Danh mục *</label>
                  <input value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))} required placeholder="VD: DÂY VÀ CÁP ĐIỆN" />
                </div>
                <div className="form-group">
                  <label>Badge</label>
                  <input value={form.badge} onChange={e => setForm(p => ({ ...p, badge: e.target.value }))} placeholder="VD: XUẤT KHẨU" />
                </div>
                <div className="form-group">
                  <label>Hotline hỗ trợ</label>
                  <input value={form.supportPhone} onChange={e => setForm(p => ({ ...p, supportPhone: e.target.value }))} placeholder="1900.555.888" />
                </div>
                <div className="form-group full">
                  <label>Mô tả *</label>
                  <textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} required />
                </div>
                <div className="form-group full">
                  <label>Tính năng (mỗi dòng 1 tính năng)</label>
                  <textarea value={form.features} onChange={e => setForm(p => ({ ...p, features: e.target.value }))} rows={4} placeholder={"Lõi đồng 99.9%\nCách điện XLPE 90°C\nGiáp thép dải kép (SWA)"} />
                  <span className="hint">Mỗi dòng là một tính năng hiển thị trên website</span>
                </div>
                <div className="form-group full">
                  <label>Ảnh sản phẩm {modal === "edit" && "(để trống = giữ ảnh cũ)"}</label>
                  <input type="file" accept="image/*" multiple onChange={e => setImages(Array.from(e.target.files))} />
                  <span className="hint">Chọn nhiều ảnh cùng lúc — upload lên Cloudinary</span>
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
