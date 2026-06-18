import { useState, useEffect } from "react";
import { getProjects, createProject, updateProject, deleteProject, getProject } from "../lib/api";
import { Plus, Pencil, Trash2, FolderOpen, CheckCircle, AlertCircle, ChevronLeft, ChevronRight, X } from "lucide-react";

const CATEGORIES = ["Lưới điện", "Hạ tầng dân dụng", "Năng lượng tái tạo", "Tự động hóa", "Bảo trì", "Khác"];

const EMPTY = {
  title: "", label: "", subtitle: "", description: "",
  location: "", status: "", category: "", client: "", duration: "",
  large: false, outcomes: "",
};


export default function Projects() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [heroFile, setHeroFile] = useState(null);
  const [heroPreview, setHeroPreview] = useState(null);
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const totalPages = Math.ceil(total / 10) || 1;

  const load = () =>
    getProjects(page).then((r) => { setItems(r.projects); setTotal(r.total); });

  useEffect(() => { load(); }, [page]);

  const showAlert = (msg, type = "success") => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3500);
  };

  const openCreate = () => {
    setForm(EMPTY);
    setHeroFile(null); setHeroPreview(null);
    setGalleryFiles([]); setGalleryPreviews([]);
    setEditId(null); setModal("form");
  };

  const openEdit = async (id) => {
    const p = await getProject(id);
    setForm({
      title: p.title || "",
      label: p.label || "",
      subtitle: p.subtitle || "",
      description: p.description || "",
      location: p.location || "",
      status: p.status || "",
      category: p.category || "",
      client: p.client || "",
      duration: p.duration || "",
      large: p.large || false,
      outcomes: (p.outcomes || []).join("\n"),
    });
    setHeroFile(null); setHeroPreview(p.image || null);
    setGalleryFiles([]); setGalleryPreviews(p.galleryImages || []);
    setEditId(id); setModal("form");
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files || []);
    setGalleryFiles(files);
    setGalleryPreviews(files.map((f) => URL.createObjectURL(f)));
  };

  const removeGalleryPreview = (i) => {
    setGalleryPreviews((prev) => prev.filter((_, idx) => idx !== i));
    setGalleryFiles((prev) => prev.filter((_, idx) => idx !== i));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("label", form.label);
      fd.append("subtitle", form.subtitle);
      fd.append("description", form.description);
      fd.append("location", form.location);
      fd.append("status", form.status);
      fd.append("category", form.category);
      fd.append("client", form.client);
      fd.append("duration", form.duration);
      fd.append("large", form.large);
      fd.append("outcomes", form.outcomes);
      if (heroFile) fd.append("image", heroFile);
      galleryFiles.forEach((f) => fd.append("galleryImages", f));

      if (modal === "form" && editId) await updateProject(editId, fd);
      else await createProject(fd);

      setModal(null);
      load();
      showAlert(editId ? "Đã cập nhật dự án!" : "Đã thêm dự án mới!");
    } catch {
      showAlert("Có lỗi xảy ra. Vui lòng thử lại.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Xóa dự án "${title}"?`)) return;
    await deleteProject(id);
    load();
    showAlert("Đã xóa dự án.");
  };

  const f = (key) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [key]: val }));
  };

  const isEdit = !!editId;

  return (
    <div>
      <div className="page-header">
        <div className="page-header-left">
          <h2>Dự án</h2>
          <p>{total} dự án đã đăng</p>
        </div>
        <button className="btn btn-primary" onClick={openCreate}>
          <Plus size={16} /> Thêm dự án
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
                <th>Nhãn</th>
                <th>Danh mục</th>
                <th>Vị trí</th>
                <th>Trạng thái</th>
                <th style={{ width: 110 }}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr>
                  <td colSpan={7}>
                    <div className="empty">
                      <div className="empty-icon"><FolderOpen size={40} /></div>
                      Chưa có dự án nào
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
                    <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2, maxWidth: 240, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {p.title}
                    </div>
                    {p.subtitle && (
                      <div style={{ fontSize: 11, color: "var(--muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 240 }}>
                        {p.subtitle}
                      </div>
                    )}
                  </td>
                  <td>
                    {p.label
                      ? <span className="badge badge-blue">{p.label}</span>
                      : <span style={{ color: "#cbd5e1", fontSize: 12 }}>—</span>}
                  </td>
                  <td style={{ fontSize: 12 }}>{p.category || "—"}</td>
                  <td style={{ fontSize: 12, color: "var(--muted)" }}>{p.location || "—"}</td>
                  <td style={{ fontSize: 12 }}>
                    {p.status
                      ? <span className="badge badge-green">{p.status}</span>
                      : <span style={{ color: "#cbd5e1", fontSize: 12 }}>—</span>}
                  </td>
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
          <div className="modal" style={{ maxWidth: 700, maxHeight: "90vh", overflowY: "auto" }}>
            <div className="modal-header">
              <div>
                <div className="modal-title">{isEdit ? "Chỉnh sửa dự án" : "Thêm dự án mới"}</div>
                <div className="modal-title-sub">
                  {isEdit ? "Cập nhật thông tin dự án" : "Điền thông tin để thêm dự án lên website"}
                </div>
              </div>
              <button className="modal-close" onClick={() => setModal(null)}>×</button>
            </div>
            <div className="modal-divider" />

            <form onSubmit={handleSubmit}>
              {/* ── Thông tin cơ bản ── */}
              <div style={{ marginBottom: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)" }}>
                Thông tin cơ bản
              </div>
              <div className="form-grid" style={{ marginBottom: 20 }}>
                <div className="form-group full">
                  <label>Tiêu đề *</label>
                  <input value={form.title} onChange={f("title")} required placeholder="VD: Mở rộng lưới điện quốc gia" />
                </div>
                <div className="form-group full">
                  <label>Phụ đề (subtitle)</label>
                  <input value={form.subtitle} onChange={f("subtitle")} placeholder="VD: Tích hợp đường dây 500kV trải dài 120km..." />
                </div>
                <div className="form-group">
                  <label>Nhãn (Label)</label>
                  <input value={form.label} onChange={f("label")} placeholder="VD: TIỆN ÍCH QUY MÔ LỚN" />
                </div>
                <div className="form-group">
                  <label>Danh mục</label>
                  <select value={form.category} onChange={f("category")}>
                    <option value="">— Chọn danh mục —</option>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Vị trí</label>
                  <input value={form.location} onChange={f("location")} placeholder="VD: Tỉnh Bình Thuận" />
                </div>
                <div className="form-group">
                  <label>Trạng thái</label>
                  <input value={form.status} onChange={f("status")} placeholder="VD: Đang hoạt động" />
                </div>
                <div className="form-group">
                  <label>Chủ đầu tư (Client)</label>
                  <input value={form.client} onChange={f("client")} placeholder="VD: Tập đoàn Điện lực Việt Nam (EVN)" />
                </div>
                <div className="form-group">
                  <label>Thời gian thực hiện</label>
                  <input value={form.duration} onChange={f("duration")} placeholder="VD: Tháng 3/2022 – Tháng 12/2023" />
                </div>
                <div className="form-group full">
                  <label>Mô tả / Tổng quan dự án</label>
                  <textarea value={form.description} onChange={f("description")} rows={5} placeholder="Mô tả chi tiết về dự án..." />
                </div>
                <div className="form-group full" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <input type="checkbox" id="large" checked={form.large} onChange={f("large")} style={{ width: "auto", margin: 0 }} />
                  <label htmlFor="large" style={{ marginBottom: 0, textTransform: "none", fontWeight: 400, cursor: "pointer" }}>
                    Hiển thị ô lớn (chiếm 2 cột trên grid trang dự án)
                  </label>
                </div>
              </div>

              {/* ── Kết quả đạt được ── */}
              <div style={{ marginBottom: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)" }}>
                Kết quả đạt được
              </div>
              <div className="form-grid" style={{ marginBottom: 20 }}>
                <div className="form-group full">
                  <label>Outcomes <span style={{ fontWeight: 400, textTransform: "none" }}>(mỗi dòng = 1 kết quả)</span></label>
                  <textarea
                    value={form.outcomes}
                    onChange={f("outcomes")}
                    rows={4}
                    placeholder={"Tải điện ổn định 99.97% uptime\nGiảm 18% tổn thất điện năng\nCấp điện cho 1.2 triệu hộ dân"}
                  />
                </div>
              </div>

              {/* ── Hình ảnh ── */}
              <div style={{ marginBottom: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)" }}>
                Hình ảnh
              </div>
              <div className="form-grid" style={{ marginBottom: 16 }}>
                <div className="form-group full">
                  <label>Ảnh bìa (Hero) {isEdit && <span style={{ fontWeight: 400, textTransform: "none" }}>(để trống = giữ ảnh cũ)</span>}</label>
                  <div className="file-input-wrapper">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0] || null;
                        setHeroFile(file);
                        setHeroPreview(file ? URL.createObjectURL(file) : null);
                      }}
                    />
                  </div>
                  {heroPreview && (
                    <img src={heroPreview} alt="hero preview" style={{ marginTop: 8, height: 120, borderRadius: 8, objectFit: "cover", border: "1px solid var(--border)" }} />
                  )}
                </div>

                <div className="form-group full">
                  <label>Ảnh gallery (nhiều ảnh) {isEdit && <span style={{ fontWeight: 400, textTransform: "none" }}>(chọn mới = thay toàn bộ gallery)</span>}</label>
                  <div className="file-input-wrapper">
                    <input type="file" accept="image/*" multiple onChange={handleGalleryChange} />
                  </div>
                  {galleryPreviews.length > 0 && (
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                      {galleryPreviews.map((src, i) => (
                        <div key={i} style={{ position: "relative" }}>
                          <img src={src} alt={`gallery ${i}`} style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 6, border: "1px solid var(--border)" }} />
                          <button
                            type="button"
                            onClick={() => removeGalleryPreview(i)}
                            style={{ position: "absolute", top: -6, right: -6, background: "#ef4444", border: "none", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff", padding: 0 }}
                          >
                            <X size={10} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setModal(null)}>Hủy</button>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Đang lưu..." : isEdit ? "Cập nhật" : "Thêm dự án"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
