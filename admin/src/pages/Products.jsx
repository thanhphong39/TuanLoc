import { useState, useEffect } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct, getProduct } from "../lib/api";
import { Plus, Pencil, Trash2, Package, CheckCircle, AlertCircle, ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = [
  "Máy cắt hạ thế",
  "Biến tần",
  "PLC & Tự động hóa",
  "Contactor & Relay",
  "Khởi động mềm",
  "Encoder & Cảm biến",
  "Nguồn xung",
  "Cầu đấu dây",
  "Giám sát điện",
];

const EMPTY = { name: "", category: "", badge: "", description: "", features: "", supportPhone: "" };

export default function Products() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const totalPages = Math.ceil(total / 10) || 1;

  const load = () =>
    getProducts(page).then((r) => { setItems(r.products); setTotal(r.total); });

  useEffect(() => { load(); }, [page]);

  const showAlert = (msg, type = "success") => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3500);
  };

  const openCreate = () => {
    setForm(EMPTY); setImages([]); setPreviews([]);
    setEditId(null); setModal("create");
  };

  const openEdit = async (id) => {
    const p = await getProduct(id);
    setForm({
      name: p.name, category: p.category, badge: p.badge || "",
      description: p.description, features: p.features.join("\n"),
      supportPhone: p.supportPhone || "",
    });
    setImages([]); setPreviews(p.images || []);
    setEditId(id); setModal("edit");
  };

  const handleImages = (files) => {
    setImages(Array.from(files));
    setPreviews(Array.from(files).map((f) => URL.createObjectURL(f)));
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
      showAlert(modal === "edit" ? "Đã cập nhật sản phẩm thành công!" : "Đã thêm sản phẩm mới!");
    } catch {
      showAlert("Có lỗi xảy ra. Vui lòng thử lại.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Xóa sản phẩm "${name}"?`)) return;
    await deleteProduct(id);
    load();
    showAlert("Đã xóa sản phẩm.");
  };

  const f = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div className="page-header-left">
          <h2>Sản phẩm</h2>
          <p>{total} sản phẩm trong hệ thống</p>
        </div>
        <button className="btn btn-primary" onClick={openCreate}>
          <Plus size={16} /> Thêm sản phẩm
        </button>
      </div>

      {alert && (
        <div className={`alert alert-${alert.type}`}>
          {alert.type === "success"
            ? <CheckCircle size={15} />
            : <AlertCircle size={15} />}
          {alert.msg}
        </div>
      )}

      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ width: 64 }}>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Danh mục</th>
                <th>Badge</th>
                <th>Hotline</th>
                <th style={{ width: 110 }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={6}>
                    <div className="empty">
                      <div className="empty-icon"><Package size={40} /></div>
                      Chưa có sản phẩm nào
                    </div>
                  </td>
                </tr>
              )}
              {items.map((p) => (
                <tr key={p._id}>
                  <td>
                    {p.images?.[0]
                      ? <img src={p.images[0]} className="td-img" alt={p.name} />
                      : <div className="td-img-placeholder" />}
                  </td>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{p.name}</div>
                    {p.description && (
                      <div style={{ fontSize: 11, color: "var(--muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 280 }}>
                        {p.description.slice(0, 80)}…
                      </div>
                    )}
                  </td>
                  <td><span className="cat-badge">{p.category}</span></td>
                  <td>
                    {p.badge
                      ? <span className={`badge ${p.badge === "HÀNG SẴN KHO" ? "badge-red" : "badge-blue"}`}>{p.badge}</span>
                      : <span style={{ color: "#cbd5e1", fontSize: 12 }}>—</span>}
                  </td>
                  <td style={{ fontSize: 12, color: "var(--muted)" }}>{p.supportPhone || "—"}</td>
                  <td>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button className="btn btn-edit btn-sm btn-icon" onClick={() => openEdit(p._id)} title="Sửa">
                        <Pencil size={14} />
                      </button>
                      <button className="btn btn-danger btn-sm btn-icon" onClick={() => handleDelete(p._id, p.name)} title="Xóa">
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

      {/* Modal */}
      {modal && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="modal">
            <div className="modal-header">
              <div>
                <div className="modal-title">
                  {modal === "edit" ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm mới"}
                </div>
                <div className="modal-title-sub">
                  {modal === "edit" ? "Cập nhật thông tin sản phẩm" : "Điền thông tin để đăng sản phẩm lên website"}
                </div>
              </div>
              <button className="modal-close" onClick={() => setModal(null)}>×</button>
            </div>
            <div className="modal-divider" />
            <form onSubmit={handleSubmit}>
              <div className="form-grid" style={{ marginBottom: 16 }}>
                {/* Name */}
                <div className="form-group full">
                  <label>Tên sản phẩm *</label>
                  <input
                    value={form.name}
                    onChange={f("name")}
                    required
                    placeholder="VD: Biến Tần Altivar ATV32"
                  />
                </div>

                {/* Category */}
                <div className="form-group">
                  <label>Danh mục *</label>
                  <select value={form.category} onChange={f("category")} required>
                    <option value="">— Chọn danh mục —</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Badge */}
                <div className="form-group">
                  <label>Badge</label>
                  <select value={form.badge} onChange={f("badge")}>
                    <option value="">— Không có badge —</option>
                    <option value="HÀNG SẴN KHO">HÀNG SẴN KHO</option>
                    <option value="MỚI">MỚI</option>
                    <option value="BÁN CHẠY">BÁN CHẠY</option>
                  </select>
                </div>

                {/* Support Phone */}
                <div className="form-group">
                  <label>Hotline hỗ trợ</label>
                  <input
                    value={form.supportPhone}
                    onChange={f("supportPhone")}
                    placeholder="0985352345"
                  />
                </div>

                {/* Description */}
                <div className="form-group full">
                  <label>Mô tả sản phẩm *</label>
                  <textarea
                    value={form.description}
                    onChange={f("description")}
                    required
                    rows={3}
                    placeholder="Mô tả ngắn gọn về sản phẩm, công dụng và ứng dụng..."
                  />
                </div>

                {/* Features */}
                <div className="form-group full">
                  <label>Thông số / Tính năng</label>
                  <textarea
                    value={form.features}
                    onChange={f("features")}
                    rows={5}
                    placeholder={"Công suất: 0.18kW đến 15kW\nĐiện áp vào: 200–500V AC\nTần số ra: 0.1–599Hz\nGiao tiếp Modbus RTU"}
                  />
                  <span className="hint">Mỗi dòng là một thông số / tính năng hiển thị trên website</span>
                </div>

                {/* Images */}
                <div className="form-group full">
                  <label>Ảnh sản phẩm {modal === "edit" && <span style={{ fontWeight: 400, textTransform: "none" }}>(để trống = giữ ảnh cũ)</span>}</label>
                  <div className="file-input-wrapper">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleImages(e.target.files)}
                    />
                  </div>
                  <span className="hint">Chọn nhiều ảnh — tự động upload lên Cloudinary</span>
                  {previews.length > 0 && (
                    <div className="img-preview-grid">
                      {previews.map((src, i) => (
                        <img key={i} src={src} className="img-preview" alt={`preview-${i}`} />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setModal(null)}>
                  Hủy
                </button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Đang lưu..." : modal === "edit" ? "Cập nhật" : "Thêm sản phẩm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
