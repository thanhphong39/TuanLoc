import { useState, useEffect } from "react";
import { getContacts, deleteContact } from "../lib/api";
import { MessageSquare, Trash2, CheckCircle, AlertCircle, ChevronLeft, ChevronRight, User, Mail, Phone, Calendar } from "lucide-react";

export default function Contacts() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const totalPages = Math.ceil(total / 20) || 1;

  const load = () =>
    getContacts(page).then((r) => { setItems(r.contacts); setTotal(r.total); });

  useEffect(() => { load(); }, [page]);

  const showAlert = (msg, type = "success") => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 3500);
  };

  const handleDelete = async (id, name) => {
    if (!confirm(`Xóa liên hệ từ "${name}"?`)) return;
    await deleteContact(id);
    load();
    showAlert("Đã xóa liên hệ.");
  };

  const fmtDate = (d) => {
    const dt = new Date(d);
    return dt.toLocaleDateString("vi-VN") + " " + dt.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div>
      <div className="page-header">
        <div className="page-header-left">
          <h2>Liên hệ</h2>
          <p>{total} yêu cầu tư vấn từ khách hàng</p>
        </div>
      </div>

      {alert && (
        <div className={`alert alert-${alert.type}`}>
          {alert.type === "success" ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
          {alert.msg}
        </div>
      )}

      {/* Cards layout */}
      {items.length === 0 ? (
        <div className="card">
          <div className="empty">
            <div className="empty-icon"><MessageSquare size={40} /></div>
            Chưa có liên hệ nào
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {items.map((c) => (
            <div
              key={c._id}
              className="card"
              style={{ padding: "18px 20px", cursor: "pointer", transition: "box-shadow .15s" }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = "var(--shadow-md)"}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = "var(--shadow)"}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                {/* Avatar */}
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "var(--primary-lt)", color: "var(--primary)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 16, flexShrink: 0,
                }}>
                  {c.fullName?.[0]?.toUpperCase() || "?"}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{c.fullName}</div>
                      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 12, color: "var(--muted)", display: "flex", alignItems: "center", gap: 5 }}>
                          <Mail size={12} /> {c.email}
                        </span>
                        <span style={{ fontSize: 12, color: "var(--muted)", display: "flex", alignItems: "center", gap: 5 }}>
                          <Phone size={12} /> {c.phone}
                        </span>
                        <span style={{ fontSize: 12, color: "var(--muted)", display: "flex", alignItems: "center", gap: 5 }}>
                          <Calendar size={12} /> {fmtDate(c.createdAt)}
                        </span>
                      </div>
                    </div>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={(e) => { e.stopPropagation(); handleDelete(c._id, c.fullName); }}
                      style={{ flexShrink: 0 }}
                    >
                      <Trash2 size={13} /> Xóa
                    </button>
                  </div>

                  {/* Project Description */}
                  {c.projectDescription && (
                    <div style={{ marginTop: 10 }}>
                      <div
                        style={{
                          fontSize: 13, color: "#374151",
                          background: "#f8fafc", borderRadius: 6,
                          padding: "10px 12px",
                          borderLeft: "3px solid var(--primary)",
                          ...(expanded === c._id
                            ? {}
                            : {
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                              }),
                        }}
                      >
                        {c.projectDescription}
                      </div>
                      {c.projectDescription.length > 120 && (
                        <button
                          onClick={() => setExpanded(expanded === c._id ? null : c._id)}
                          style={{
                            background: "none", border: "none", cursor: "pointer",
                            fontSize: 12, color: "var(--primary)", marginTop: 4,
                            fontWeight: 600,
                          }}
                        >
                          {expanded === c._id ? "Thu gọn ▲" : "Xem thêm ▼"}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination" style={{ marginTop: 20 }}>
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
  );
}
